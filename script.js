const revealEls=document.querySelectorAll('.reveal');
const io=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')}),{threshold:.12});
revealEls.forEach(el=>io.observe(el));

document.addEventListener('mousemove',e=>{
  const g=document.querySelector('.cursor-glow');
  g.style.left=e.clientX+'px'; g.style.top=e.clientY+'px';
});

const buttons=document.querySelectorAll('.filters button');
const works=document.querySelectorAll('.work');
buttons.forEach(btn=>btn.addEventListener('click',()=>{
  buttons.forEach(b=>b.classList.remove('active')); btn.classList.add('active');
  const f=btn.dataset.filter;
  works.forEach(w=>w.style.display=(f==='all'||w.dataset.category===f)?'block':'none');
}));

const modal=document.getElementById('modal'), modalArt=document.getElementById('modalArt'), title=document.getElementById('modalTitle');
works.forEach(w=>w.addEventListener('click',()=>{
  const art=w.querySelector('.art');
  modalArt.className='modal-art '+[...art.classList].filter(x=>x.startsWith('art')).join(' ');
  title.textContent=w.dataset.title;
  modal.classList.add('show');
}));
document.getElementById('close').onclick=()=>modal.classList.remove('show');
modal.addEventListener('click',e=>{if(e.target===modal)modal.classList.remove('show')});
