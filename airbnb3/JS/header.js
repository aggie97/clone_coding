'use strict';

const header = document.querySelector('header');

let scrollYPosition = 0;

let ticking = false;

function changHeaderColor(scroll_pos){
  if(scroll_pos > 49){
    header.style.backgroundColor = 'white';
  }
}

window.addEventListener('scroll', function(e){
  scrollYPosition = window.scrollY;

  if(!ticking){
    window.requestAnimationFrame(function(){
      changHeaderColor(scrollYPosition);
      ticking = false;
    });
    ticking = true;
  }
})