const revealItems = document.querySelectorAll('.section>.eyebrow,.section h2,.section h3,.section .two-col>div,.education-card,.tags,.experience,.skill,.interest-grid,.project-heading,.project-card,.vision-card,.contact-links');

const observer = new IntersectionObserver((entries)=>{
  entries.forEach((entry)=>{
    if(entry.isIntersecting){
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    }
  });
},{threshold:0.12, rootMargin:'0px 0px -40px 0px'});

revealItems.forEach((el,i)=>{
  el.style.transitionDelay = `${Math.min((i % 5) * 70, 280)}ms`;
  observer.observe(el);
});

document.querySelectorAll('a[href^="#"]').forEach(a=>a.addEventListener('click',e=>{
  const el=document.querySelector(a.getAttribute('href'));
  if(el){e.preventDefault();el.scrollIntoView({behavior:'smooth',block:'start'});}
}));

const heroCard = document.querySelector('.hero-card');
let ticking = false;

window.addEventListener('scroll',()=>{
  if(!heroCard || ticking) return;
  ticking = true;
  requestAnimationFrame(()=>{
    const y = Math.min(window.scrollY, 700);
    heroCard.style.setProperty('--card-y', `${y * -0.035}px`);
    heroCard.style.setProperty('--card-r', `${y * 0.002}deg`);
    ticking = false;
  });
},{passive:true});

const nav = document.querySelector('.nav');
window.addEventListener('scroll',()=>{
  if(nav) nav.style.boxShadow = window.scrollY > 10 ? '0 8px 30px rgba(0,0,0,.05)' : 'none';
},{passive:true});
