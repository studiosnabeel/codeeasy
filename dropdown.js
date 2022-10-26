const burgerMenu = document.querySelector('#burgerMenu');
const crossClose = document.querySelector('#crossClose');
const menuBar = document.querySelector('#drop-contain');
const menuLinks = document.querySelectorAll('.dropdown-li');

burgerMenu.addEventListener('click', () => {
  menuBar.classList.toggle('open-bar');
});

crossClose.addEventListener('click', () => {
  menuBar.classList.toggle('open-bar');
});

menuLinks.forEach((item) => {
  item.addEventListener('click', () => {
    menuBar.classList.toggle('open-bar');
  });
});
