
(()=>{"use strict";
const ROOT=document.documentElement.dataset.root||"";
const REPO="https://github.com/Dawson-Gulasa/.Projects";
const RAW="https://raw.githubusercontent.com/Dawson-Gulasa/.Projects/main/";
const projects=window.ENGINEERING_PROJECTS||[];
const insights={
"optimus-prime-fpga":"The prime engine, DDR2 memory, SD verification and VGA interface operate across multiple clock domains. Synchronizers, asynchronous FIFOs and hardware testing were essential to integration. The final timing report identifies an unresolved timing-closure limitation.",
"scc-processor":"The custom ISA depends on coordinated register, ALU, branch, flag, memory and stack behavior. Dedicated signed MUL/DIV controllers sequence multicycle execution, temporarily stall fetch and write results to Rd and R12.",
"micromouse-robot":"The current schematic shows six IR sensing channels, an I²C BNO080 IMU, battery-fed 3.3 V and 5 V buck regulators, an STM32F405 and a DRV8833 motor driver. Safe startup states for the motor interface are a key design review item.",
"audio-tracking-car":"The project connects analog microphone amplification and C6/C8 filtering to comparator levels and Raspberry Pi motor commands. Hardware testing included sound-directed scanning, motor calibration and power supply experiments.",
"reaction-time-button":"FSR and IR inputs feed a MicroPython state machine that handles random cue timing, false starts, OLED output and optional ThingSpeak logging. Physical integration included a custom PCB and enclosure.",
"seven-segment-clock":"Four latched display digits, keypad scanning and clock modes are orchestrated through Raspberry Pi GPIO. The original two-hour timing tests quantified drift from software-generated clock ticks.",
"robotics-research":"The laboratory workflow links YOLO/depth perception, PCA-based object orientation, robotic arm control, scanning instruments and automatically generated inspection reports."
};

const safe=s=>String(s??"").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
const asset=path=>RAW+path.split("/").map(encodeURIComponent).join("/");
const repoLink=path=>REPO+"/tree/main/"+path.split("/").map(encodeURIComponent).join("/");
const docLink=path=>REPO+"/blob/main/"+path.split("/").map(encodeURIComponent).join("/");
const localLink=p=>ROOT+"projects/"+p.slug+".html";
const tagList=p=>p.tags.slice(0,4).map(t=>'<span class="tag">'+safe(t)+'</span>').join("");
const picture=p=>p.image?'<img loading="lazy" data-fallback src="'+asset(p.image)+'" alt="'+safe(p.title)+' project photograph or technical image">':'<div class="placeholder-art" role="img" aria-label="Abstract schematic illustration"><span>◈</span><i></i><i></i><i></i></div>';
const card=p=>'<article class="project-card reveal" data-categories="'+safe(p.filter)+'"><a href="'+localLink(p)+'" aria-label="Explore '+safe(p.title)+'"><div class="card-image">'+picture(p)+'<span class="image-tag">'+safe(p.category)+'</span></div></a><div class="card-info"><h3><a href="'+localLink(p)+'">'+safe(p.title)+'</a></h3><p>'+safe(p.summary)+'</p><div class="tag-list">'+tagList(p)+'</div><a class="card-link" href="'+localLink(p)+'">Explore project <span aria-hidden="true">↗</span></a></div></article>';
const reveal=()=>{
document.querySelectorAll(".reveal:not(.in)").forEach(el=>{if("IntersectionObserver" in window){const o=new IntersectionObserver(entries=>{entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add("in");o.unobserve(e.target)}})},{threshold:.04});o.observe(el)}else el.classList.add("in")});
};
function initLists(){
const featured=document.querySelector("#featured-projects"),all=document.querySelector("#project-list");
if(featured){featured.innerHTML=projects.filter(p=>p.featured).sort((a,b)=>a.order-b.order).slice(0,7).map(card).join("");reveal()}
if(all){all.innerHTML=projects.slice().sort((a,b)=>a.order-b.order).map(card).join("");reveal();const filters=document.querySelectorAll("[data-filter]");
filters.forEach(btn=>btn.addEventListener("click",()=>{const type=btn.dataset.filter;filters.forEach(b=>{b.classList.toggle("active",b===btn);b.setAttribute("aria-pressed",String(b===btn))});all.querySelectorAll(".project-card").forEach(c=>{c.hidden=type!=="all"&&!c.dataset.categories.split(" ").includes(type)})}))}
}
function renderProject(){
const holder=document.querySelector("#project-detail");if(!holder)return;
const slug=document.body.dataset.project;const p=projects.find(x=>x.slug===slug);
if(!p){holder.innerHTML='<div class="wrap section"><h1>Project not found</h1><a href="../projects.html">Return to projects</a></div>';return}
document.title=p.title+" | Dawson Gulasa";
document.querySelector('meta[name="description"]')?.setAttribute("content",p.summary);
const hero=document.querySelector("#detail-hero");
hero.innerHTML='<div class="wrap"><div class="breadcrumb"><a href="../index.html">Home</a> / <a href="../projects.html">Projects</a> / '+safe(p.title)+'</div><span class="eyebrow" style="margin-top:24px">'+safe(p.category)+' · '+safe(p.period)+'</span><h1>'+safe(p.title)+'</h1><p>'+safe(p.subtitle)+'</p><div class="pill-row">'+p.tags.map(t=>'<span class="tag">'+safe(t)+'</span>').join("")+'</div></div>';
const detailNote=insights[p.slug]?'<section class="detail-section"><span class="eyebrow">Engineering detail</span><h2>Inside the design</h2><p>'+safe(insights[p.slug])+'</p></section>':'';
const gallery=p.gallery.length?'<section class="detail-section"><span class="eyebrow">Project media</span><h2>Design and demonstration</h2><div class="gallery-grid">'+p.gallery.map(([url,label])=>'<figure><a href="'+asset(url)+'" target="_blank" rel="noopener noreferrer"><img loading="lazy" src="'+asset(url)+'" alt="'+safe(label)+'"></a><figcaption>'+safe(label)+'</figcaption></figure>').join("")+'</div></section>':"";
const highlights=p.results.map(([metric,desc])=>'<div class="bullet-metric"><strong>'+safe(metric)+'</strong><span>'+safe(desc)+'</span></div>').join("");
const sidebar='<aside class="detail-side"><div class="info-panel"><h3>Project at a glance</h3><div class="fact"><b>Focus:</b> '+safe(p.category)+'</div><div class="fact"><b>Period:</b> '+safe(p.period)+'</div><div class="fact"><b>Technology:</b> '+safe(p.tags.join(", "))+'</div></div><div class="info-panel"><h3>Project resources</h3><a class="side-link" href="'+repoLink(p.github)+'" target="_blank" rel="noopener noreferrer">Source code on GitHub ↗</a>'+(p.report?'<a class="side-link" href="'+docLink(p.report)+'" target="_blank" rel="noopener noreferrer">Technical report ↗</a>':'')+p.extra.map(([label,url])=>'<a class="side-link" href="'+url+'" target="_blank" rel="noopener noreferrer">'+safe(label)+' ↗</a>').join("")+'<a class="side-link" href="../projects.html">All projects →</a></div></aside>';
const figure=p.image?'<img class="lead-visual" src="'+asset(p.image)+'" alt="'+safe(p.title)+' representative project image">':'';
holder.innerHTML='<div class="wrap section"><div class="project-detail-grid"><div>'+figure+'<section class="detail-section"><span class="eyebrow">Project overview</span><h2>The engineering problem</h2><p>'+safe(p.overview)+'</p><h3>Primary challenge</h3><p>'+safe(p.challenge)+'</p></section><section class="detail-section"><span class="eyebrow">Design and development</span><h2>How it was built</h2><ul>'+p.approach.map(s=>'<li>'+safe(s)+'</li>').join("")+'</ul></section><section class="detail-section"><span class="eyebrow">Results and validation</span><h2>What the project demonstrated</h2><div class="bullet-metrics">'+highlights+'</div><p>'+safe(p.outcome)+'</p></section>'+detailNote+gallery+'<section class="detail-section"><span class="eyebrow">Contributions and attribution</span><h2>Project context</h2><p>'+safe(p.credits)+'</p></section><a class="button outline" href="../projects.html">← Back to all projects</a></div>'+sidebar+'</div></div>';
}
initLists();renderProject();
})();
