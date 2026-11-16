
(()=>{'use strict';
const menu=document.querySelector('.menu-btn'),links=document.querySelector('.nav-links');
menu?.addEventListener('click',()=>{const open=links.classList.toggle('open');menu.setAttribute('aria-expanded',String(open));menu.textContent=open?'✕':'☰'});
links?.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{links.classList.remove('open');menu?.setAttribute('aria-expanded','false');if(menu)menu.textContent='☰'}));
const observer='IntersectionObserver' in window?new IntersectionObserver((entries,o)=>{entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');o.unobserve(e.target)}})},{threshold:.08}):null;
document.querySelectorAll('.reveal').forEach(el=>observer?observer.observe(el):el.classList.add('in'));
const filters=document.querySelectorAll('[data-filter]'),cards=document.querySelectorAll('[data-categories]');
filters.forEach(btn=>btn.addEventListener('click',()=>{const filter=btn.dataset.filter;filters.forEach(b=>{b.classList.toggle('active',b===btn);b.setAttribute('aria-pressed',String(b===btn))});cards.forEach(c=>{c.hidden=filter!=='all'&&!c.dataset.categories.split(' ').includes(filter)})}));
document.querySelectorAll('img[data-fallback]').forEach(img=>{img.addEventListener('error',()=>{img.style.display='none';img.parentElement?.classList.add('image-unavailable')},{once:true})});
document.querySelectorAll('[data-year]').forEach(e=>e.textContent=String(new Date().getFullYear()));
})();
