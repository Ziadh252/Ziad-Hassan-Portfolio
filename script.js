const progress=document.querySelector('.progress');
const glow=document.querySelector('.cursor-glow');
const update=()=>{const d=document.documentElement;progress.style.width=(scrollY/(d.scrollHeight-innerHeight)*100)+'%'};
addEventListener('scroll',update,{passive:true});update();
if(matchMedia('(pointer:fine)').matches){addEventListener('pointermove',e=>{glow.style.left=e.clientX+'px';glow.style.top=e.clientY+'px'})}
const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')}),{threshold:.1});
document.querySelectorAll('.reveal').forEach(x=>observer.observe(x));
document.querySelectorAll('.role button').forEach(btn=>btn.addEventListener('click',()=>{const role=btn.closest('.role');document.querySelectorAll('.role.open').forEach(x=>{if(x!==role)x.classList.remove('open')});role.classList.toggle('open')}));
const menu=document.querySelector('.menu');const nav=document.querySelector('.nav nav');menu?.addEventListener('click',()=>{nav.classList.toggle('mobile-open')});
document.querySelectorAll('.nav nav a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('mobile-open')));
document.getElementById('year').textContent=new Date().getFullYear();
