const fs = require('fs');
const html = fs.readFileSync('/Users/koushik/sriyogala.com/stitch_serene_wellness_collective/yoga_coaching_home/code.html', 'utf8');

let bodyContent = html.match(/<main>([\s\S]*?)<\/main>/)[0];
let footerContent = html.match(/<footer[\s\S]*?<\/footer>/)[0];
let conciergeContent = html.match(/<!-- SideNavBar[\s\S]*?<\/div>\n<\/div>/)[0];

let jsx = bodyContent + '\n' + footerContent + '\n' + conciergeContent;

jsx = jsx.replace(/class=/g, 'className=');
jsx = jsx.replace(/data-alt=/g, 'alt=');
jsx = jsx.replace(/<!--[\s\S]*?-->/g, '');

const finalJsx = `export default function Home() {
  return (
    <>
      ${jsx}
    </>
  );
}
`;

fs.writeFileSync('/Users/koushik/sriyogala.com/serene-wellness/src/app/page.tsx', finalJsx);
