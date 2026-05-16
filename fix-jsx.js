const fs = require('fs');
let code = fs.readFileSync('/Users/koushik/sriyogala.com/serene-wellness/src/app/page.tsx', 'utf8');

// Simple regex to fix unclosed img tags
code = code.replace(/<img([^>]*[^\/])>/g, '<img$1 />');

// Remove <script> or <style> just in case, but they shouldn't be in <main>
fs.writeFileSync('/Users/koushik/sriyogala.com/serene-wellness/src/app/page.tsx', code);
