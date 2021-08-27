'use strict';
/*
//79. Project 2, Modal Window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModalErr = document.querySelector('.show-modal');

console.log(btnsOpenModalErr);
const btnsShowModal = document.querySelectorAll('.show-modal');

console.log(btnsShowModal);

for (let i = 0; i < btnsShowModal.length; i++) {
  const element = btnsShowModal[i];
  console.log(`loop over NodeList element ${i}`);
  console.log(element);
  console.log(element.textContent);
  element.textContent = `myModal ${i + 1}`;
}




*/
//80. Working With Classes

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsShowModal = document.querySelectorAll('.show-modal');

console.log(btnsShowModal);
console.log(modal);

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

for (let i = 0; i < btnsShowModal.length; i++) {
  const element = btnsShowModal[i];
  // document.querySelector('.hidden').style.display = 'inherit';
  //   element.textContent = `myModal ${i + 1}`;
  console.log(element.textContent);

  element.addEventListener('click', openModal);
}

// btnCloseModal.addEventListener('click', function () {
//   closeModal();
// });

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

// document.addEventListener('keydown', function (event) {
//   console.log(event);
//   if (event.key === 'Escape' && !modal.classList.contains('hidden')) {
//     // write your logic here.
//     closeModal();
//   }
// });

//second approach
document.addEventListener('keydown', e =>
  e.key === 'Escape' && !modal.classList.contains('hidden')
    ? closeModal()
    : console.log(`${e.key} pressed, click Esc to close!`)
);
