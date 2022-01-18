'use strict';

const header = document.querySelector('.header');
const logoBox = document.querySelector('.svg-container');
const hostBox = document.querySelector('.be-host');
const earthIcon = document.querySelector('.language-btn');

const blackArray = [hostBox, earthIcon];

window.addEventListener('scroll', function(){
  let y = window.scrollY;
  if(y > 49){
    header.style.backgroundColor = 'white';
    blackArray.forEach(element => element.style.color = 'black');
    logoBox.style.color = 'rgb(225, 56, 92)';
  }else{
    header.style.backgroundColor = 'black';
    blackArray.forEach(element => element.style.color = 'white');
    logoBox.style.color = 'white';
  }  
});
