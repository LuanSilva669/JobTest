const menuToggle = document.querySelector('.menu-toggle');
const mobileMenu = document.querySelector('.mobile-menu');
const closeMenuButton = document.querySelector('.close-menu');

menuToggle.addEventListener('click', function() {
  mobileMenu.classList.toggle('active');
});
closeMenuButton.addEventListener('click', function() {
  mobileMenu.classList.remove('active');
});

const carrossel = document.querySelector('.carrossel');
const prevBtn = document.querySelector('.carrossel-prev');
const nextBtn = document.querySelector('.carrossel-next');

let currentIndex = 0;
let slideWidth = carrossel.clientWidth;

prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex === 0) ? carrossel.childElementCount - 1 : currentIndex - 1;
  updateCarrossel();
});

nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex === carrossel.childElementCount - 1) ? 0 : currentIndex + 1;
  updateCarrossel();
});

function updateCarrossel() {
  const offset = -currentIndex * slideWidth;
  carrossel.style.transform = `translateX(${offset}px)`;
}



window.addEventListener('resize', () => {
  slideWidth = carrossel.clientWidth;
  updateCarrossel();
});

startCarrossel();
