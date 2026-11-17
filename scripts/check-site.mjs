
import { readFileSync, existsSync, readdirSync } from 'node:fs';
import { dirname, join, normalize, resolve } from 'node:path';

const root=resolve(process.cwd());
let failures=[];
const walk=(dir)=>readdirSync(dir,{withFileTypes:true}).flatMap(d=>{
  if(d.name.startsWith('.git'))return [];
  const p=join(dir,d.name);
  return d.isDirectory()?walk(p):[p];
});
const files=walk(root);
const html=files.filter(p=>p.endsWith('.html'));
const scripts=files.filter(p=>p.endsWith('.js'));
const expectedProjectPages=['optimus-prime-fpga','scc-processor','micromouse-robot','audio-tracking-car','reaction-time-button','seven-segment-clock','robotics-research','diagonal-sum-analyzer','geography-quiz','snake-game'];
for(const slug of expectedProjectPages){
 if(!existsSync(join(root,'projects',slug+'.html')))failures.push('Missing detail page: '+slug);
}
for(const asset of ['assets/headshot.jpg','assets/resume.pdf']){
 if(!existsSync(join(root,asset)))failures.push('Required personal asset missing: '+asset+' (upload to website review branch)');
}
for(const p of html){
 const source=readFileSync(p,'utf8');
 if(!/<meta name="viewport"/.test(source))failures.push('Missing viewport: '+p);
 if(!/<main\b/.test(source))failures.push('Missing main: '+p);
 for(const m of source.matchAll(/\b(?:href|src)="([^"]+)"/g)){
  const href=m[1];
  if(/^(?:https?:|mailto:|tel:|data:|javascript:|#)/.test(href))continue;
  const local=href.split('?')[0].split('#')[0];
  if(!local)continue;
  const file=local.startsWith('/')?join(root,local.slice(1)):normalize(join(dirname(p),local));
  if(!existsSync(file))failures.push('Missing link from '+p+': '+href);
 }
}
const dataFile=readFileSync(join(root,'assets/js/projects-data.js'),'utf8');
const knownSlugs=[...dataFile.matchAll(/slug:"([^"]+)"/g)].map(x=>x[1]);
if(new Set(knownSlugs).size!==expectedProjectPages.length)failures.push('Project data must have '+expectedProjectPages.length+' distinct slugs');
for(const slug of expectedProjectPages)if(!knownSlugs.includes(slug))failures.push('Missing project content: '+slug);
console.log('HTML pages:',html.length,'JavaScript files:',scripts.length,'Project cases:',knownSlugs.length);
if(failures.length){console.error(failures.join('\n'));process.exit(1)}
console.log('PASS: Local HTML links, personal assets and project entries verified.');
