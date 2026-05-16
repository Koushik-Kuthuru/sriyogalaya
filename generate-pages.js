const fs = require('fs');
const path = require('path');

const baseDir = '/Users/koushik/sriyogala.com/stitch_serene_wellness_collective';
const targetDir = '/Users/koushik/sriyogala.com/serene-wellness/src/app';

const folders = fs.readdirSync(baseDir).filter(f => fs.statSync(path.join(baseDir, f)).isDirectory());

folders.forEach(folder => {
  if (folder === 'yoga_coaching_home' || folder === 'tranquil_premium_wellness') return;
  
  const htmlPath = path.join(baseDir, folder, 'code.html');
  if (!fs.existsSync(htmlPath)) return;
  
  const html = fs.readFileSync(htmlPath, 'utf8');
  const mainMatch = html.match(/<main[\s\S]*?>([\s\S]*?)<\/main>/);
  if (!mainMatch) return;
  
  let content = mainMatch[1];
  
  // Convert to JSX
  content = content.replace(/class=/g, 'className=');
  // Change data-alt to title to avoid duplicate alt attributes
  content = content.replace(/data-alt=/g, 'title=');
  content = content.replace(/<!--[\s\S]*?-->/g, '');
  content = content.replace(/<img([^>]*[^\/])>/g, '<img$1 />');
  content = content.replace(/<input([^>]*[^\/])>/g, '<input$1 />');
  content = content.replace(/<hr([^>]*[^\/])>/g, '<hr$1 />');
  content = content.replace(/<br([^>]*[^\/])>/g, '<br$1 />');
  
  // React JSX specifics
  content = content.replace(/rows="([0-9]+)"/g, 'rows={$1}');
  content = content.replace(/cols="([0-9]+)"/g, 'cols={$1}');
  content = content.replace(/tabindex=/g, 'tabIndex=');
  content = content.replace(/readonly/g, 'readOnly');
  content = content.replace(/autoplay/g, 'autoPlay');
  
  content = content.replace(/style="([^"]*)"/g, (match, p1) => {
    const rules = p1.split(';').filter(Boolean);
    const styleObj = rules.map(rule => {
      const [key, ...valParts] = rule.split(':');
      if (!key) return '';
      const val = valParts.join(':').trim();
      const camelKey = key.trim().replace(/-([a-z])/g, (g) => g[1].toUpperCase());
      // Handle values with single quotes inside (like 'FILL' 1) by wrapping in double quotes
      return `${camelKey}: "${val.replace(/"/g, '\\"')}"`;
    }).filter(Boolean).join(', ');
    return `style={{ ${styleObj} }}`;
  });

  // Create folder
  let routeName = folder.replace(/_/g, '-');
  const routeDir = path.join(targetDir, routeName);
  if (!fs.existsSync(routeDir)) {
    fs.mkdirSync(routeDir, { recursive: true });
  }
  
  // Write page.tsx
  const componentName = folder.split('_').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join('');
  const jsx = `export default function ${componentName}() {
  return (
    <main>
      ${content}
    </main>
  );
}
`;
  
  fs.writeFileSync(path.join(routeDir, 'page.tsx'), jsx);
  console.log(`Generated page for ${folder} at /${routeName}`);
});
