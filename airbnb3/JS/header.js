'use strict';

const header = document.querySelector('.header');
const logoBox = document.querySelector('.svg-container');
const hostBox = document.querySelector('.be-host');
const earthIcon = document.querySelector('.language-btn');
const mainNav = document.querySelector('.main_nav');

const blackArray = [hostBox, earthIcon];

window.addEventListener('scroll', function(){
  let y = window.scrollY;
  if(y > 49){
    header.style.backgroundColor = 'white';
    earthIcon.classList.add('toWhite');
    blackArray.forEach(element => element.style.color = 'black');
    logoBox.style.color = 'rgb(255, 56, 92)';
      mainNav.id = 'hide';
    // mainNav.classList.add('toMinimal');
  }else{
    header.style.backgroundColor = 'black';
    earthIcon.classList.remove('toWhite');
    blackArray.forEach(element => element.style.color = 'white');
    logoBox.style.color = 'white';
    mainNav.id = '';
    // mainNav.classList.remove('toMinimal');
  }  
});

function makeMiniNav(){
  const miniNav = document.createElement('div');
  miniNav.classList.add('mini-nav-styling');
  

}