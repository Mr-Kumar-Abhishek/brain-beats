const fs = require('fs');
const path = require('path');
const sass = require('sass');

const projectRoot = path.resolve(__dirname, '..');
const scssPath = path.join(projectRoot, 'css', 'main.scss');
const sassDir = path.join(projectRoot, '_sass');

const targets = [
  path.join(projectRoot, 'css', 'main.css'),
  path.join(projectRoot, 'blog', 'css', 'main.css')
];

function buildCss() {
  console.log('Transpiling SCSS to CSS...');
  const rawScss = fs.readFileSync(scssPath, 'utf8');
  // Strip Jekyll YAML front matter if present
  const scssContent = rawScss.replace(/^---[\s\S]*?---\r?\n/, '');

  const result = sass.compileString(scssContent, {
    loadPaths: [sassDir, projectRoot],
    style: 'expanded'
  });

  for (const target of targets) {
    const dir = path.dirname(target);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    fs.writeFileSync(target, result.css, 'utf8');
    console.log(`Transpiled SCSS -> ${path.relative(projectRoot, target)} (${result.css.length} bytes)`);
  }
  console.log('SCSS compilation complete.');
}

buildCss();
