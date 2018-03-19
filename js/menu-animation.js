'use strict';
var toggleButton = document.querySelector('.menu-icon');
var menuToggle = document.querySelector('.header-slide__menu');
var menuClosedClick = document.querySelector('.header-slide__menu-item');
toggleButton.addEventListener('click', (function(){
  toggleButton.classList.toggle('clicked');
  menuToggle.classList.toggle('block__menu');
}));

menuClosedClick.addEventListener('click', (function(){
  
  menuToggle.classList.toggle('block__menu');
  
}));