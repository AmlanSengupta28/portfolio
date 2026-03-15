const slides = document.querySelectorAll('.slide');
const counter = document.getElementById('slideCounter');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
let current = 0;

function showSlide(n) {
  slides[current].classList.remove('active');
  slides[current].classList.add('prev');
  setTimeout(() => slides[current].classList.remove('prev'), 400);

  current = n;
  slides[current].classList.add('active');
  counter.textContent = `${current + 1} / ${slides.length}`;
  prevBtn.disabled = current === 0;
  nextBtn.disabled = current === slides.length - 1;
}

function navigate(dir) {
  const next = current + dir;
  if (next >= 0 && next < slides.length) showSlide(next);
}

// Init
slides[0].classList.add('active');
counter.textContent = `1 / ${slides.length}`;
prevBtn.disabled = true;

// Keyboard navigation
document.addEventListener('keydown', e => {
  if (e.key === 'ArrowRight' || e.key === 'ArrowDown') navigate(1);
  if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') navigate(-1);
});

// Touch/swipe
let touchStartX = 0;
document.addEventListener('touchstart', e => { touchStartX = e.touches[0].clientX; });
document.addEventListener('touchend', e => {
  const diff = touchStartX - e.changedTouches[0].clientX;
  if (Math.abs(diff) > 50) navigate(diff > 0 ? 1 : -1);
});
