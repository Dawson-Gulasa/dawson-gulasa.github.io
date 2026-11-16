
(()=>{'use strict';
const menu=document.querySelector('.menu-btn'),links=document.querySelector('.nav-links');
menu?.addEventListener('click',()=>{const open=links.classList.toggle('open');menu.setAttribute('aria-expanded',String(open));menu.textContent=open?'✕':'☰'});
links?.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{links.classList.remove('open');menu?.setAttribute('aria-expanded','false');if(menu)menu.textContent='☰'}));
const observer='IntersectionObserver' in window?new IntersectionObserver((entries,o)=>{entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');o.unobserve(e.target)}})},{threshold:.08}):null;
document.querySelectorAll('.reveal').forEach(el=>observer?observer.observe(el):el.classList.add('in'));
// Category filtering is handled by projects.js.
document.querySelectorAll('img[data-fallback]').forEach(img=>{img.addEventListener('error',()=>{img.style.display='none';img.parentElement?.classList.add('image-unavailable')},{once:true})});
document.querySelectorAll('[data-year]').forEach(e=>e.textContent=String(new Date().getFullYear()));
})();
