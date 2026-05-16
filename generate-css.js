import fs from 'fs';
import path from 'path';

const designPath = '/Users/koushik/sriyogala.com/stitch_serene_wellness_collective/tranquil_premium_wellness/DESIGN.md';
const content = fs.readFileSync(designPath, 'utf8');

const colorsMatch = content.match(/colors:\n([\s\S]*?)typography:/);
const colors = {};
if (colorsMatch) {
  const colorLines = colorsMatch[1].trim().split('\n');
  for (const line of colorLines) {
    const [key, value] = line.split(':').map(s => s.trim().replace(/'/g, ''));
    if (key && value) {
      colors[key] = value;
    }
  }
}

const spacingMatch = content.match(/spacing:\n([\s\S]*?)---/);
const spacing = {};
if (spacingMatch) {
  const spacingLines = spacingMatch[1].trim().split('\n');
  for (const line of spacingLines) {
    const [key, value] = line.split(':').map(s => s.trim().replace(/'/g, ''));
    if (key && value) {
      spacing[key] = value;
    }
  }
}

const css = `
@import "tailwindcss";

@plugin "@tailwindcss/forms";
@plugin "@tailwindcss/container-queries";

@theme {
${Object.entries(colors).map(([key, value]) => `  --color-${key}: ${value};`).join('\n')}

${Object.entries(spacing).map(([key, value]) => `  --spacing-${key}: ${value};`).join('\n')}

  --font-display-lg: "Playfair Display", serif;
  --font-body-md: "Inter", sans-serif;
  --font-body-lg: "Inter", sans-serif;
  --font-display-lg-mobile: "Playfair Display", serif;
  --font-label-caps: "Inter", sans-serif;
  --font-headline-md: "Playfair Display", serif;
  --font-headline-sm: "Playfair Display", serif;

  --text-display-lg: 48px;
  --text-display-lg--line-height: 1.1;
  --text-display-lg--letter-spacing: -0.02em;
  --text-display-lg--font-weight: 600;

  --text-body-md: 16px;
  --text-body-md--line-height: 1.7;
  --text-body-md--letter-spacing: 0.01em;
  --text-body-md--font-weight: 400;

  --text-body-lg: 18px;
  --text-body-lg--line-height: 1.8;
  --text-body-lg--letter-spacing: 0.01em;
  --text-body-lg--font-weight: 400;

  --text-display-lg-mobile: 36px;
  --text-display-lg-mobile--line-height: 1.2;
  --text-display-lg-mobile--font-weight: 600;

  --text-label-caps: 12px;
  --text-label-caps--line-height: 1.5;
  --text-label-caps--letter-spacing: 0.1em;
  --text-label-caps--font-weight: 600;

  --text-headline-md: 32px;
  --text-headline-md--line-height: 1.3;
  --text-headline-md--font-weight: 500;

  --text-headline-sm: 24px;
  --text-headline-sm--line-height: 1.4;
  --text-headline-sm--font-weight: 500;
  
  --radius-DEFAULT: 0.25rem;
  --radius-lg: 0.5rem;
  --radius-xl: 0.75rem;
  --radius-full: 9999px;
}

@layer base {
  body {
    background-color: var(--color-surface);
    color: var(--color-on-surface);
    font-family: var(--font-body-md);
  }
}

.material-symbols-outlined {
  font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
}
.glass-nav {
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
}
.bento-grid {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 24px;
}
`;

fs.writeFileSync('/Users/koushik/sriyogala.com/serene-wellness/src/app/globals.css', css);
console.log('globals.css updated successfully.');
