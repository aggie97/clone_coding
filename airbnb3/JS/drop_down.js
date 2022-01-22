'use strict';

// Variable Declaration

const accountBtn = document.querySelector('.account-btn');
const accountBox = document.querySelector('.account-box');

// Add EventListner & Define Function

accountBtn.addEventListener('click', () => accountBox.classList.toggle('hide'));