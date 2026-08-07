import fs from "node:fs";
import path from "node:path";

const repoRoot = process.cwd();
const sourceRoot = path.join(repoRoot, "content", "lessons");
const lessonsRoot = path.join(repoRoot, "lessons");
const diagnosticsRoot = path.join(repoRoot, "generated");
const diagnosticsPath = path.join(diagnosticsRoot, "site-diagnostics.json");
const indexPath = path.join(repoRoot, "index.html");

function parseArgs() {
  const args = process.argv.slice(2);
  return {
    indexOnly: args.includes("--index-only"),
  };
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

function writeText(filePath, content) {
  fs.writeFileSync(filePath, content, "utf8");
}

function writeJson(filePath, value) {
  writeText(filePath, JSON.stringify(value, null, 2));
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function stripHtml(value) {
  return String(value || "")
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function cleanupMarkdownText(value) {
  return String(value || "")
    .replace(/^\s*>+\s*/gm, "")
    .replace(/`([^`]+)`/g, "$1")
    .replace(/\*\*([^*]+)\*\*/g, "$1")
    .replace(/__([^_]+)__/g, "$1")
    .replace(/\*([^*]+)\*/g, "$1")
    .replace(/_([^_]+)_/g, "$1")
    .replace(/^#+\s*/gm, "")
    .replace(/\s+/g, " ")
    .trim();
}

function slugify(value) {
  return String(value)
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .replace(/-{2,}/g, "-");
}

function extractLessonNumber(name) {
  const match = String(name).match(/lesson\s+(\d+)/i);
  return match ? Number(match[1]) : Number.MAX_SAFE_INTEGER;
}

function extractMarkdownHeadings(markdownText) {
  const headings = [];
  for (const line of String(markdownText).split(/\r?\n/)) {
    const match = line.match(/^(#{1,6})\s+(.+)$/);
    if (!match) {
      continue;
    }

    headings.push({
      level: match[1].length,
      text: match[2].trim(),
    });
  }
  return headings;
}

function extractFirstParagraph(markdownText) {
  const blocks = String(markdownText)
    .split(/\r?\n\r?\n/)
    .map((block) => block.trim())
    .filter(Boolean);

  for (const block of blocks) {
    if (block.startsWith("#") || block.startsWith("![") || block.startsWith("~~~") || block.startsWith("```")) {
      continue;
    }

    if (/^[-*]\s+/.test(block)) {
      continue;
    }

    return cleanupMarkdownText(block);
  }

  return "";
}

function extractObjectives(markdownText) {
  const lines = String(markdownText).split(/\r?\n/);
  const objectives = [];
  let collecting = false;

  for (const line of lines) {
    if (/learning objectives/i.test(line)) {
      collecting = true;
      continue;
    }

    if (collecting) {
      const bullet = line.match(/^\s*[-*]\s+(.+)$/);
      if (bullet) {
        objectives.push(cleanupMarkdownText(bullet[1]));
        continue;
      }

      if (!line.trim()) {
        if (objectives.length > 0) {
          break;
        }
        continue;
      }

      if (objectives.length > 0) {
        break;
      }
    }
  }

  return objectives;
}

function extractDuration(rawText) {
  const match = String(rawText).match(/(^|\n)(\d{1,2}:\d{2})(\n|$)/);
  return match ? match[2] : "";
}

function extractHtmlTitle(htmlText) {
  const titleMatch = htmlText.match(/<title[^>]*>([\s\S]*?)<\/title>/i);
  if (titleMatch) {
    return stripHtml(titleMatch[1]);
  }

  const h1Match = htmlText.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i);
  if (h1Match) {
    return stripHtml(h1Match[1]);
  }

  return "";
}

function renderInlineMarkdown(text) {
  return escapeHtml(text)
    .replace(/!\[([^\]]*)\]\(([^)]+)\)/g, (_match, alt, src) => `<img src="${escapeHtml(src)}" alt="${escapeHtml(alt)}" />`)
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, (_match, label, href) => `<a href="${escapeHtml(href)}">${escapeHtml(label)}</a>`)
    .replace(/`([^`]+)`/g, (_match, code) => `<code>${escapeHtml(code)}</code>`)
    .replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>")
    .replace(/__([^_]+)__/g, "<strong>$1</strong>")
    .replace(/\*([^*]+)\*/g, "<em>$1</em>")
    .replace(/_([^_]+)_/g, "<em>$1</em>");
}

function markdownToHtml(markdownText) {
  const lines = String(markdownText).replace(/\r\n/g, "\n").split("\n");
  const html = [];
  let paragraph = [];
  let listItems = [];
  let inCode = false;
  let codeFence = "";
  let codeLines = [];

  function flushParagraph() {
    if (!paragraph.length) {
      return;
    }

    html.push(`<p>${renderInlineMarkdown(paragraph.join(" ").trim())}</p>`);
    paragraph = [];
  }

  function flushList() {
    if (!listItems.length) {
      return;
    }

    html.push(`<ul>${listItems.map((item) => `<li>${renderInlineMarkdown(item)}</li>`).join("")}</ul>`);
    listItems = [];
  }

  function flushCode() {
    if (!inCode) {
      return;
    }

    const className = codeFence ? ` class="language-${escapeHtml(codeFence)}"` : "";
    html.push(`<pre><code${className}>${escapeHtml(codeLines.join("\n"))}</code></pre>`);
    inCode = false;
    codeFence = "";
    codeLines = [];
  }

  for (const line of lines) {
    const fenceMatch = line.match(/^(```|~~~)\s*([^\s]+)?\s*$/);
    if (fenceMatch) {
      flushParagraph();
      flushList();

      if (inCode) {
        flushCode();
      } else {
        inCode = true;
        codeFence = fenceMatch[2] || "";
      }
      continue;
    }

    if (inCode) {
      codeLines.push(line);
      continue;
    }

    const headingMatch = line.match(/^(#{1,6})\s+(.+)$/);
    if (headingMatch) {
      flushParagraph();
      flushList();
      const level = headingMatch[1].length;
      html.push(`<h${level}>${renderInlineMarkdown(headingMatch[2].trim())}</h${level}>`);
      continue;
    }

    const listMatch = line.match(/^\s*[-*]\s+(.+)$/);
    if (listMatch) {
      flushParagraph();
      listItems.push(listMatch[1].trim());
      continue;
    }

    if (!line.trim()) {
      flushParagraph();
      flushList();
      continue;
    }

    paragraph.push(line.trim());
  }

  flushParagraph();
  flushList();
  flushCode();
  return html.join("\n");
}

function normalizeImportedHtml(htmlText) {
  const bodyMatch = String(htmlText).match(/<body[^>]*>([\s\S]*?)<\/body>/i);
  const raw = bodyMatch ? bodyMatch[1] : htmlText;
  return raw
    .replace(/<script[\s\S]*?<\/script>/gi, "")
    .replace(/<style[\s\S]*?<\/style>/gi, "")
    .trim();
}

function addHeadingIds(htmlText) {
  const headings = [];
  const seen = new Map();
  const html = String(htmlText).replace(/<h([1-6])([^>]*)>([\s\S]*?)<\/h\1>/gi, (match, level, attrs, inner) => {
    const plain = stripHtml(inner);
    if (!plain) {
      return match;
    }

    const baseSlug = slugify(plain) || `section-${headings.length + 1}`;
    const count = (seen.get(baseSlug) || 0) + 1;
    seen.set(baseSlug, count);
    const id = count === 1 ? baseSlug : `${baseSlug}-${count}`;
    headings.push({ level: Number(level), text: plain, id });
    return `<h${level}${attrs} id="${id}">${inner}</h${level}>`;
  });

  return { html, headings };
}

function findPrimaryFile(files) {
  const markdown = files
    .filter((name) => name.toLowerCase().endsWith(".md"))
    .sort((a, b) => {
      const aPreferred = a.startsWith("!Lesson_") ? -1 : 0;
      const bPreferred = b.startsWith("!Lesson_") ? -1 : 0;
      return aPreferred - bPreferred || a.localeCompare(b);
    });

  if (markdown[0]) {
    return markdown[0];
  }

  const html = files
    .filter((name) => name.toLowerCase().endsWith(".html"))
    .sort((a, b) => a.localeCompare(b));

  return html[0] || "";
}

function renderMarkdownLesson(sourceText) {
  const lessonTitle = extractMarkdownHeadings(sourceText).find((heading) => heading.level === 1)?.text || "";
  const html = markdownToHtml(sourceText);
  const withIds = addHeadingIds(html);

  return {
    title: lessonTitle,
    articleHtml: withIds.html,
    headings: withIds.headings,
    summary: extractFirstParagraph(sourceText),
    objectives: extractObjectives(sourceText),
    duration: extractDuration(sourceText),
  };
}

function renderHtmlLesson(sourceText) {
  const normalized = normalizeImportedHtml(sourceText);
  const looksLikeDocument = /<[a-z][\s\S]*>/i.test(normalized);

  if (!looksLikeDocument) {
    return renderMarkdownLesson(sourceText);
  }

  const withIds = addHeadingIds(normalized);
  const title = extractHtmlTitle(sourceText);
  const paragraphs = withIds.html.match(/<p[^>]*>([\s\S]*?)<\/p>/i);

  return {
    title,
    articleHtml: withIds.html,
    headings: withIds.headings,
    summary: paragraphs ? stripHtml(paragraphs[1]) : "",
    objectives: [],
    duration: extractDuration(stripHtml(sourceText)),
  };
}

function collectLessons() {
  if (!fs.existsSync(sourceRoot)) {
    throw new Error("No imported lessons found. Run npm run lessons:import first.");
  }

  const lessonDirs = fs
    .readdirSync(sourceRoot, { withFileTypes: true })
    .filter((entry) => entry.isDirectory() && /lesson\s+\d+/i.test(entry.name))
    .sort((a, b) => extractLessonNumber(a.name) - extractLessonNumber(b.name));

  const lessons = [];
  const skipped = [];

  for (const entry of lessonDirs) {
    const dirPath = path.join(sourceRoot, entry.name);
    const files = fs.readdirSync(dirPath, { withFileTypes: true });
    const fileNames = files.filter((file) => file.isFile()).map((file) => file.name);
    const primaryFile = findPrimaryFile(fileNames);

    if (!primaryFile) {
      skipped.push({
        folderName: entry.name,
        reason: "No lesson markdown or html file found.",
      });
      continue;
    }

    const primaryPath = path.join(dirPath, primaryFile);
    const raw = fs.readFileSync(primaryPath, "utf8");
    const sourceType = primaryFile.toLowerCase().endsWith(".md") ? "markdown" : "html";
    const rendered = sourceType === "markdown" ? renderMarkdownLesson(raw) : renderHtmlLesson(raw);
    const lessonNumber = extractLessonNumber(entry.name);
    const fallbackTitle = primaryFile
      .replace(/^!Lesson_/, "")
      .replace(/\.[^.]+$/, "")
      .replace(/[_-]+/g, " ")
      .trim();
    const title = rendered.title || fallbackTitle || entry.name;
    const slug = `lesson-${String(lessonNumber).padStart(2, "0")}-${slugify(title)}`;

    lessons.push({
      folderName: entry.name,
      folderPath: dirPath,
      lessonNumber,
      title,
      slug,
      sourceType,
      primaryFile,
      files: fileNames,
      articleHtml: rendered.articleHtml,
      headings: rendered.headings,
      objectives: rendered.objectives,
      duration: rendered.duration,
      summary: rendered.summary,
    });
  }

  return { lessons, skipped };
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

function renderObjectives(objectives) {
  if (!objectives.length) {
    return "<p class=\"muted\">No explicit learning objectives were detected yet.</p>";
  }

  return `<ul class=\"objective-list\">${objectives.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>`;
}

function renderToc(headings) {
  const filtered = headings.filter((heading) => heading.level <= 3);
  if (!filtered.length) {
    return '<p class="muted">No in-page sections detected.</p>';
  }

  return filtered
    .map((heading) => `<a class="toc-link toc-level-${heading.level}" href="#${heading.id}">${escapeHtml(heading.text)}</a>`)
    .join("");
}

function renderLessonPage(lesson, prevLesson, nextLesson) {
  const summary = lesson.summary || "Lesson content imported from the source course folder.";
  const durationMarkup = lesson.duration
    ? `<span class="meta-pill">${escapeHtml(lesson.duration)}</span>`
    : "";

  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Lesson ${String(lesson.lessonNumber).padStart(2, "0")} | ${escapeHtml(lesson.title)}</title>
    <meta name="description" content="${escapeHtml(summary.slice(0, 160))}" />
    <link rel="stylesheet" href="../../styles.css" />
  </head>
  <body>
    <div class="topbar">
      <span class="topbar-title">SJ Training Course</span>
      <span class="topbar-badge">Business Standard</span>
      <span class="topbar-sub">Generated static lesson page</span>
      <span class="topbar-tag">v0.1</span>
    </div>

    <div class="page lesson-shell">
      <section class="part">
        <span class="part-num">Lesson</span>
        <span class="part-title">Lesson ${String(lesson.lessonNumber).padStart(2, "0")} Summary</span>
        <span class="part-rule"></span>
      </section>

      <div class="priority-card">
        <strong>Source lesson.</strong> Imported from <code>${escapeHtml(lesson.folderName)}</code> using <code>${escapeHtml(lesson.primaryFile)}</code> and published as a static GitHub Pages lesson.
      </div>

      <section class="card site-header lesson-header">
        <div class="card-head">
          <span class="card-title">Lesson Overview</span>
          <span class="card-hint">Business Standard lesson shell</span>
        </div>
        <div class="card-body hero-copy">
          <a class="back-link" href="../../index.html">← Back to course</a>
          <p class="eyebrow">Lesson ${String(lesson.lessonNumber).padStart(2, "0")}</p>
          <h1>${escapeHtml(lesson.title)}</h1>
          <p class="hero-summary">${escapeHtml(summary)}</p>
          <div class="meta-row">
            ${durationMarkup}
            <span class="meta-pill">${escapeHtml(lesson.sourceType)}</span>
            <span class="meta-pill">${escapeHtml(lesson.primaryFile)}</span>
            <span class="meta-pill">${lesson.files.length} assets</span>
          </div>
        </div>
      </section>

      <div class="wiki-article-layout">
        <main class="wiki-article-main">
          <section class="card wiki-section" id="overview">
            <div class="card-head">
              <span class="card-title">Overview</span>
              <span class="card-hint">Imported from ${escapeHtml(lesson.folderName)}</span>
            </div>
            <div class="card-body wiki-body">
              <div class="wiki-meta-grid">
                <p><strong>Lesson folder:</strong> ${escapeHtml(lesson.folderName)}</p>
                <p><strong>Primary source:</strong> ${escapeHtml(lesson.primaryFile)}</p>
                <p><strong>Assets:</strong> ${lesson.files.length}</p>
                <p><strong>Format:</strong> ${escapeHtml(lesson.sourceType)}</p>
              </div>
            </div>
          </section>

          <section class="card wiki-section" id="objectives">
            <div class="card-head">
              <span class="card-title">Learning Objectives</span>
              <span class="card-hint">Detected from lesson source</span>
            </div>
            <div class="card-body wiki-body">
              ${renderObjectives(lesson.objectives)}
            </div>
          </section>

          <section class="card wiki-section" id="content">
            <div class="card-head">
              <span class="card-title">Lesson Content</span>
              <span class="card-hint">Rendered for GitHub Pages</span>
            </div>
            <div class="card-body wiki-body lesson-content">
              ${lesson.articleHtml}
            </div>
          </section>

          <section class="card wiki-section" id="resources">
            <div class="card-head">
              <span class="card-title">Lesson Files</span>
              <span class="card-hint">Copied alongside the generated page</span>
            </div>
            <div class="card-body wiki-body">
              <ul class="file-list">${lesson.files.map((file) => `<li><a href="./${encodeURI(file)}">${escapeHtml(file)}</a></li>`).join("")}</ul>
            </div>
          </section>

          <nav class="lesson-pagination card">
            <div class="card-body lesson-pagination-body">
              ${prevLesson ? `<a class="lesson-nav-card" href="../${prevLesson.slug}/"><span>Previous</span><strong>Lesson ${String(prevLesson.lessonNumber).padStart(2, "0")} · ${escapeHtml(prevLesson.title)}</strong></a>` : '<span class="lesson-nav-card is-empty"><span>Previous</span><strong>Start of course</strong></span>'}
              ${nextLesson ? `<a class="lesson-nav-card" href="../${nextLesson.slug}/"><span>Next</span><strong>Lesson ${String(nextLesson.lessonNumber).padStart(2, "0")} · ${escapeHtml(nextLesson.title)}</strong></a>` : '<span class="lesson-nav-card is-empty"><span>Next</span><strong>End of current course</strong></span>'}
            </div>
          </nav>
        </main>

        <aside class="wiki-rail" aria-label="Lesson navigation">
          <h3>On This Page</h3>
          <nav class="wiki-toc" aria-label="Lesson sections">
            <a class="toc-link toc-level-1" href="#overview">Overview</a>
            <a class="toc-link toc-level-1" href="#objectives">Learning Objectives</a>
            <a class="toc-link toc-level-1" href="#content">Lesson Content</a>
            ${renderToc(lesson.headings)}
            <a class="toc-link toc-level-1" href="#resources">Lesson Files</a>
          </nav>
        </aside>
      </div>
    </div>

    <script>
      (function () {
        const links = Array.from(document.querySelectorAll('.toc-link'));
        const sections = links
          .map((link) => document.querySelector(link.getAttribute('href')))
          .filter(Boolean);

        if (!links.length || !sections.length || !('IntersectionObserver' in window)) {
          return;
        }

        function setActive(id) {
          for (const link of links) {
            link.classList.toggle('is-active', link.getAttribute('href') === '#' + id);
          }
        }

        const observer = new IntersectionObserver(
          (entries) => {
            const visible = entries.filter((entry) => entry.isIntersecting);
            if (!visible.length) {
              return;
            }

            visible.sort((a, b) => b.intersectionRatio - a.intersectionRatio);
            setActive(visible[0].target.id);
          },
          {
            rootMargin: '-15% 0px -60% 0px',
            threshold: [0.1, 0.35, 0.7],
          }
        );

        sections.forEach((section) => observer.observe(section));
        setActive(sections[0].id);
      })();
    </script>
  </body>
</html>`;
}

function renderIndexPage(lessons, skipped) {
  const lessonCards = lessons
    .map((lesson) => {
      const summary = lesson.summary || "Imported lesson content ready for GitHub Pages.";
      const objectiveCount = lesson.objectives.length;
      const durationMarkup = lesson.duration ? `<span>${escapeHtml(lesson.duration)}</span>` : "";
      return `<article class="lesson-card" data-lesson-card>
        <div class="lesson-card-head">
          <p class="eyebrow">Lesson ${String(lesson.lessonNumber).padStart(2, "0")}</p>
          <h2><a href="./lessons/${lesson.slug}/">${escapeHtml(lesson.title)}</a></h2>
        </div>
        <p class="lesson-card-summary">${escapeHtml(summary)}</p>
        <div class="lesson-card-meta">
          ${durationMarkup}
          <span>${escapeHtml(lesson.sourceType)}</span>
          <span>${objectiveCount} objectives</span>
        </div>
        <p class="lesson-card-link"><a href="./lessons/${lesson.slug}/">Open lesson</a></p>
      </article>`;
    })
    .join("");

  const readyCount = lessons.length;
  const pendingCount = skipped.length;

  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>SJ Training Course</title>
    <meta name="description" content="Static training course site generated from lesson folders." />
    <link rel="stylesheet" href="./styles.css" />
  </head>
  <body>
    <div class="topbar">
      <span class="topbar-title">SJ Training Course</span>
      <span class="topbar-badge">Business Standard</span>
      <span class="topbar-sub">Generated from synced lesson folders</span>
      <span class="topbar-tag">v0.1</span>
    </div>

    <div class="page">
      <section class="toc">
        <span class="toc-part">I · Summary</span>
        <div class="toc-links">
          <a href="#summary-section">Course Summary</a>
          <a href="#lessons-section">Lessons</a>
        </div>
      </section>

      <section class="part" id="summary-section">
        <span class="part-num">Part I</span>
        <span class="part-title">Course Summary</span>
        <span class="part-rule"></span>
      </section>

      <div class="priority-card">
        <strong>Priority rule.</strong> Lesson folders on the network drive are the authoring source, but this repo is the publishable GitHub Pages source of truth. Current generated coverage: <strong>${readyCount}</strong> ready lessons, <strong>${pendingCount}</strong> pending lesson folders without content files.
      </div>

      <section class="card site-header landing-hero">
        <div class="card-head">
          <span class="card-title">Training Course Overview</span>
          <span class="card-hint">Search, lesson status, and generated publish surface</span>
        </div>
        <div class="card-body landing-grid">
          <div>
            <p class="eyebrow">Python Training</p>
            <h1>Lesson library built from your course folders</h1>
            <p class="hero-summary">A static course site that mirrors your lesson structure, keeps asset links intact, and can be regenerated whenever new lessons or Markdown files are added.</p>

            <div class="stats">
              <div class="stat"><span>Lessons Ready</span><strong>${readyCount}</strong></div>
              <div class="stat"><span>Pending Folders</span><strong>${pendingCount}</strong></div>
              <div class="stat"><span>Formats</span><strong>MD + HTML</strong></div>
              <div class="stat"><span>Target</span><strong>GitHub Pages</strong></div>
            </div>
          </div>
          <div class="landing-panel">
            <label class="search-wrap">
              <span>Search lessons</span>
              <input id="search-input" type="search" placeholder="Title, summary, format..." />
            </label>
            <div class="landing-notes">
              <p><strong>Source:</strong> Imported from the network-drive lesson folders into this repo.</p>
              <p><strong>Format support:</strong> Markdown first, HTML compatibility included.</p>
            </div>
          </div>
        </div>
      </section>

      <section class="part" id="lessons-section">
        <span class="part-num">Part II</span>
        <span class="part-title">Lessons</span>
        <span class="part-rule"></span>
      </section>

      <section class="lesson-grid" id="lesson-grid">
        ${lessonCards}
      </section>
    </div>

    <script>
      (function () {
        const input = document.getElementById('search-input');
        const cards = Array.from(document.querySelectorAll('[data-lesson-card]'));

        if (!input || !cards.length) {
          return;
        }

        input.addEventListener('input', function () {
          const query = input.value.trim().toLowerCase();

          for (const card of cards) {
            const visible = !query || card.textContent.toLowerCase().includes(query);
            card.style.display = visible ? '' : 'none';
          }
        });
      })();
    </script>
  </body>
</html>`;
}

function main() {
  const { indexOnly } = parseArgs();
  const { lessons, skipped } = collectLessons();

  ensureDir(diagnosticsRoot);
  clearDir(lessonsRoot);
  ensureDir(lessonsRoot);

  if (!indexOnly) {
    for (let index = 0; index < lessons.length; index += 1) {
      const lesson = lessons[index];
      const prevLesson = lessons[index - 1] || null;
      const nextLesson = lessons[index + 1] || null;
      const outDir = path.join(lessonsRoot, lesson.slug);

      copyDir(lesson.folderPath, outDir);
      writeText(path.join(outDir, "index.html"), renderLessonPage(lesson, prevLesson, nextLesson));
    }
  }

  writeText(indexPath, renderIndexPage(lessons, skipped));

  writeJson(diagnosticsPath, {
    generatedAt: new Date().toISOString(),
    lessonCount: lessons.length,
    skippedLessonCount: skipped.length,
    sourceRoot,
    lessonOutputRoot: lessonsRoot,
    indexOnly,
    lessons: lessons.map((lesson) => ({
      lessonNumber: lesson.lessonNumber,
      title: lesson.title,
      slug: lesson.slug,
      sourceType: lesson.sourceType,
      primaryFile: lesson.primaryFile,
      headingCount: lesson.headings.length,
      objectiveCount: lesson.objectives.length,
      duration: lesson.duration,
    })),
    skipped,
  });

  process.stdout.write(`Generated ${lessons.length} lessons and skipped ${skipped.length} incomplete lesson folders.\n`);
}

main();