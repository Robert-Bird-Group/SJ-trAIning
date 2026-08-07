import fs from "node:fs";
import path from "node:path";

const repoRoot = process.cwd();
const DEFAULT_SOURCE = String.raw`P:\Production\Computational\RBG_pyRevit\pyRevit Course\Python`;
const DEST_ROOT = path.join(repoRoot, "content", "lessons");
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

function extractLessonNumber(name) {
  const match = String(name).match(/lesson\s+(\d+)/i);
  return match ? Number(match[1]) : Number.MAX_SAFE_INTEGER;
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

function main() {
  const { source } = parseArgs();

  if (!fs.existsSync(source)) {
    throw new Error(`Lesson source folder not found: ${source}`);
  }

  ensureDir(GENERATED_ROOT);
  clearDir(DEST_ROOT);
  ensureDir(DEST_ROOT);

  const lessons = fs
    .readdirSync(source, { withFileTypes: true })
    .filter((entry) => entry.isDirectory() && /lesson\s+\d+/i.test(entry.name))
    .sort((a, b) => extractLessonNumber(a.name) - extractLessonNumber(b.name));

  const copied = [];

  for (const lesson of lessons) {
    const sourcePath = path.join(source, lesson.name);
    const destPath = path.join(DEST_ROOT, lesson.name);
    copyDir(sourcePath, destPath);

    const fileCount = fs.readdirSync(sourcePath, { withFileTypes: true }).length;
    copied.push({
      lesson: lesson.name,
      source: sourcePath,
      destination: destPath,
      topLevelEntries: fileCount,
    });
  }

  const diagnostics = {
    generatedAt: new Date().toISOString(),
    source,
    destination: DEST_ROOT,
    lessonCount: copied.length,
    lessons: copied,
  };

  writeJson(DIAGNOSTICS_PATH, diagnostics);
  process.stdout.write(`Imported ${copied.length} lesson folders into content/lessons.\n`);
}

main();