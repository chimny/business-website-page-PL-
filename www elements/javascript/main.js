console.log('działa')


// <i class="fas fa-window-close"></i>

const burger = document.querySelector('.burger');
const icon = document.querySelector('.fa-bars');
const cancel = document.querySelector('.fa-times');
const aside = document.querySelector('aside');

burger.addEventListener('click', () => {
  icon.classList.toggle('show');
  cancel.classList.toggle('show');
  aside.classList.toggle('hiddenMenu');
})