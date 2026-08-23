const revealEls = document.querySelectorAll('.reveal');

const io = new IntersectionObserver(
  entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
      }
    });
  },
  { threshold: 0.12 }
);

revealEls.forEach(el => io.observe(el));


// Cursor Glow
document.addEventListener('mousemove', e => {
  const g = document.querySelector('.cursor-glow');

  if (g) {
    g.style.left = e.clientX + 'px';
    g.style.top = e.clientY + 'px';
  }
});


// Filters
const buttons = document.querySelectorAll('.filters button');
const works = document.querySelectorAll('.work');

buttons.forEach(btn => {
  btn.addEventListener('click', () => {

    buttons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const f = btn.dataset.filter;

    works.forEach(w => {
      if (f === 'all' || w.dataset.category === f) {
        w.style.display = '';
      } else {
        w.style.display = 'none';
      }
    });

  });
});


// Modal
const modal = document.getElementById('modal');
const modalArt = document.getElementById('modalArt');
const title = document.getElementById('modalTitle');
const closeBtn = document.getElementById('close');

works.forEach(w => {

  w.addEventListener('click', () => {

    const art = w.querySelector('.art');
    const image = art.querySelector('img');

    modalArt.innerHTML = '';

    if (image) {

      const newImage = document.createElement('img');

      newImage.src = image.src;
      newImage.alt = image.alt;

      modalArt.appendChild(newImage);

    } else {

      const clone = art.cloneNode(true);

      modalArt.appendChild(clone);

    }

    title.textContent = w.dataset.title;

    modal.classList.add('show');

  });

});


// Close Modal
if (closeBtn) {
  closeBtn.onclick = () => {
    modal.classList.remove('show');
  };
}


// Close by clicking outside
modal.addEventListener('click', e => {

  if (e.target === modal) {
    modal.classList.remove('show');
  }

});
