'use strict';
var toggleButton = document.querySelector('.menu-icon');
var menuToggle = document.querySelector('.header-slide__menu');
var menuClosedClick = document.querySelector('.header-slide__menu-items');

toggleButton.addEventListener('click', (function(){
  toggleButton.classList.toggle('clicked');
  menuToggle.classList.toggle('block__menu');
}));

menuClosedClick.addEventListener('click', (function(){
  toggleButton.classList.toggle('clicked');
  menuToggle.classList.toggle('block__menu');
}));
