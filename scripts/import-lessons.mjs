import fs from "node:fs";
import path from "node:path";

const repoRoot = process.cwd();
const DEFAULT_SOURCE = String.raw`P:\Production\Computational\RBG_pyRevit\pyRevit Course`;
const DEST_ROOT = path.join(repoRoot, "content", "courses");
const LEGACY_DEST_ROOT = path.join(repoRoot, "content", "lessons");
const GENERATED_ROOT = path.join(repoRoot, "generated");
const DIAGNOSTICS_PATH = path.join(GENERATED_ROOT, "import-diagnostics.json");

function parseArgs() {
  const args = process.argv.slice(2);
  const values = { source: DEFAULT_SOURCE };

  for (const arg of args) {
    if (arg.startsWith("--source=")) {
      values.source = arg.slice("--source=".length);
    }
  }

  return values;
}

function ensureDir(dirPath) {
  fs.mkdirSync(dirPath, { recursive: true });
}

function clearDir(dirPath) {
  if (!fs.existsSync(dirPath)) {
    return;
  }

  fs.rmSync(dirPath, { recursive: true, force: true });
}

function writeJson(filePath, value) {
  fs.writeFileSync(filePath, JSON.stringify(value, null, 2), "utf8");
}

function slugify(value) {
  return String(value)
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .replace(/-{2,}/g, "-");
}

function isLessonName(name) {
  return /lesson[\s_-]*(\d+)/i.test(String(name));
}

function extractLessonNumber(name) {
  const match = String(name).match(/lesson[\s_-]*(\d+)/i);
  return match ? Number(match[1]) : Number.MAX_SAFE_INTEGER;
}

function isLessonFile(name) {
  return isLessonName(name) && /\.(md|markdown|html?)$/i.test(String(name));
}

function sanitizeFolderPart(value) {
  return String(value)
    .replace(/[_-]+/g, " ")
    .replace(/[<>:"/\\|?*]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function deriveFolderNameFromLessonFile(fileName) {
  const base = fileName.replace(/\.[^.]+$/, "");
  const match = base.match(/^lesson[\s_-]*(\d+)(?:[\s_-]*(.*))?$/i);
  if (!match) {
    return sanitizeFolderPart(base) || base;
  }

  const lessonNumber = String(Number(match[1])).padStart(2, "0");
  const tail = sanitizeFolderPart(match[2] || "");
  return tail ? `Lesson ${lessonNumber} ${tail}` : `Lesson ${lessonNumber}`;
}

function ensureUniqueDirName(baseName, existingNames) {
  if (!existingNames.has(baseName)) {
    existingNames.add(baseName);
    return baseName;
  }

  let counter = 2;
  while (existingNames.has(`${baseName} ${counter}`)) {
    counter += 1;
  }

  const unique = `${baseName} ${counter}`;
  existingNames.add(unique);
  return unique;
}

function writeCourseMetaFile(courseDir, metadata) {
  writeJson(path.join(courseDir, "course.json"), metadata);
}

function copyDir(sourceDir, destDir) {
  ensureDir(destDir);
  const entries = fs.readdirSync(sourceDir, { withFileTypes: true });

  for (const entry of entries) {
    const sourcePath = path.join(sourceDir, entry.name);
    const destPath = path.join(destDir, entry.name);

    if (entry.isDirectory()) {
      copyDir(sourcePath, destPath);
      continue;
    }

    fs.copyFileSync(sourcePath, destPath);
  }
}

function importLessonsFromCourse(sourceCourseDir, destLessonsRoot) {
  ensureDir(destLessonsRoot);

  const entries = fs.readdirSync(sourceCourseDir, { withFileTypes: true });
  const lessonDirs = entries
    .filter((entry) => entry.isDirectory() && isLessonName(entry.name))
    .sort((a, b) => extractLessonNumber(a.name) - extractLessonNumber(b.name));

  const lessonFiles = entries
    .filter((entry) => entry.isFile() && isLessonFile(entry.name))
    .sort((a, b) => extractLessonNumber(a.name) - extractLessonNumber(b.name) || a.name.localeCompare(b.name));

  const copied = [];
  const usedDestNames = new Set();

  for (const lesson of lessonDirs) {
    const sourcePath = path.join(sourceCourseDir, lesson.name);
    const destPath = path.join(destLessonsRoot, lesson.name);
    copyDir(sourcePath, destPath);
    usedDestNames.add(lesson.name);

    const fileCount = fs.readdirSync(sourcePath, { withFileTypes: true }).length;
    copied.push({
      lesson: lesson.name,
      importMode: "directory",
      source: sourcePath,
      destination: destPath,
      topLevelEntries: fileCount,
    });
  }

  for (const lessonFile of lessonFiles) {
    const folderBase = deriveFolderNameFromLessonFile(lessonFile.name);
    const folderName = ensureUniqueDirName(folderBase, usedDestNames);
    const sourcePath = path.join(sourceCourseDir, lessonFile.name);
    const destPath = path.join(destLessonsRoot, folderName);
    ensureDir(destPath);
    fs.copyFileSync(sourcePath, path.join(destPath, lessonFile.name));

    copied.push({
      lesson: folderName,
      importMode: "flat-file",
      source: sourcePath,
      destination: destPath,
      topLevelEntries: 1,
      primaryFile: lessonFile.name,
    });
  }

  return {
    copied,
    importedDirectories: lessonDirs.length,
    importedFlatFiles: lessonFiles.length,
  };
}

function main() {
  const { source } = parseArgs();

  if (!fs.existsSync(source)) {
    throw new Error(`Lesson source folder not found: ${source}`);
  }

  ensureDir(GENERATED_ROOT);
  // Clean legacy single-course import path so there is only one source-of-truth tree.
  clearDir(LEGACY_DEST_ROOT);
  clearDir(DEST_ROOT);
  ensureDir(DEST_ROOT);

  const courseEntries = fs
    .readdirSync(source, { withFileTypes: true })
    .filter((entry) => entry.isDirectory() && !entry.name.startsWith("."))
    .sort((a, b) => a.name.localeCompare(b.name));

  const courses = [];
  const usedCourseSlugs = new Set();

  for (const courseEntry of courseEntries) {
    const sourceCoursePath = path.join(source, courseEntry.name);
    let courseSlug = slugify(courseEntry.name) || "course";
    if (usedCourseSlugs.has(courseSlug)) {
      let suffix = 2;
      while (usedCourseSlugs.has(`${courseSlug}-${suffix}`)) {
        suffix += 1;
      }
      courseSlug = `${courseSlug}-${suffix}`;
    }
    usedCourseSlugs.add(courseSlug);

    const courseDestRoot = path.join(DEST_ROOT, courseSlug);
    const courseLessonsDest = path.join(courseDestRoot, "lessons");
    const imported = importLessonsFromCourse(sourceCoursePath, courseLessonsDest);

    writeCourseMetaFile(courseDestRoot, {
      name: courseEntry.name,
      slug: courseSlug,
      sourcePath: sourceCoursePath,
      importedAt: new Date().toISOString(),
    });

    courses.push({
      name: courseEntry.name,
      slug: courseSlug,
      source: sourceCoursePath,
      destination: courseLessonsDest,
      lessonCount: imported.copied.length,
      importedDirectories: imported.importedDirectories,
      importedFlatFiles: imported.importedFlatFiles,
      lessons: imported.copied,
    });
  }

  const lessonCount = courses.reduce((sum, course) => sum + course.lessonCount, 0);
  const importedDirectories = courses.reduce((sum, course) => sum + course.importedDirectories, 0);
  const importedFlatFiles = courses.reduce((sum, course) => sum + course.importedFlatFiles, 0);

  const diagnostics = {
    generatedAt: new Date().toISOString(),
    source,
    destination: DEST_ROOT,
    courseCount: courses.length,
    lessonCount,
    importedDirectories,
    importedFlatFiles,
    courses,
  };

  writeJson(DIAGNOSTICS_PATH, diagnostics);
  process.stdout.write(
    `Imported ${lessonCount} lessons from ${courses.length} courses into content/courses (${importedDirectories} directories, ${importedFlatFiles} flat files).\n`
  );
}

main();