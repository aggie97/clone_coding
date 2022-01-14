'use strict';

// Variables Declaration

const stayBtn = document.querySelector('#stay');
const expBtn = document.querySelector('#exp');
const stayNav = document.querySelector('.nav_for_stay');
const expNav = document.querySelector('.nav_for_exp');

stayBtn.addEventListener('input', function(e){
  expNav.id = 'hide';
  stayNav.id = '';
})

expBtn.addEventListener('input', function(e){
  stayNav.id = 'hide';
  expNav.id = '';
})