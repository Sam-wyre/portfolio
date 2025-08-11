
// mobile menu
const toggle = document.querySelector('.menu-toggle');
if (toggle){
  toggle.addEventListener('click', ()=>{
    const m = document.querySelector('.mobile-nav');
    m.style.display = (m.style.display==='block') ? 'none' : 'block';
  });
}
// reveal on scroll
const io = new IntersectionObserver((entries)=>{
  entries.forEach(e=>{ if(e.isIntersecting) e.target.classList.add('in-view') })
},{threshold:0.12});
document.querySelectorAll('.fade-in').forEach(el=>io.observe(el));

// mark active link based on pathname
const path = location.pathname.split('/').filter(Boolean).pop() || 'index.html';
document.querySelectorAll('a[data-link]').forEach(a=>{
  const target = a.getAttribute('href').split('/').pop() || 'index.html';
  if(target === path) a.classList.add('active');
});
