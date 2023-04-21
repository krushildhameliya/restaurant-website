// The following lines are assigning DOM elements to variables using the 'querySelector' method.
const navCloseEl = document.querySelector('.nav__close');
const navList = document.querySelector('.nav__list');
const navIconEl = document.querySelector('.nav__icon');
const navBgOverlayEl = document.querySelector('.nav__bgOverlay');

// The following function sets the visibility of the body to 'visible' when the DOM content is loaded.
window.addEventListener('DOMContentLoaded', () =>{
document.body.style.visibility = 'visible';
});

// The following function adds 'show' and 'active' classes to 'navList' and 'navBgOverlayEl' respectively to open the navigation menu.
const navOpen = () => {
navList.classList.add('show');
navBgOverlayEl.classList.add('active');
document.body.style= 'visibility: visible; height: 100vh; width:100vw; overflow:hidden;';
}

// The following function removes 'show' and 'active' classes from 'navList' and 'navBgOverlayEl' respectively to close the navigation menu.
const navClose = () => {
navList.classList.remove('show');
navBgOverlayEl.classList.remove('active');
document.body.style= 'visibility: visible; height: initial; width: 100%; overflow-x: hidden;';
}

// The following lines add event listeners to 'navIconEl', 'navCloseEl', and 'navBgOverlayEl' to trigger the respective functions.
navIconEl.addEventListener('click', navOpen);
navCloseEl.addEventListener('click', navClose);
navBgOverlayEl.addEventListener('click', navClose);

// The following lines initialize AOS library and set its options.
AOS.init({
offset: 200, // offset (in px) from the original trigger point
delay: 100, // values from 0 to 3000, with step 50ms
duration: 400, // values from 0 to 3000, with step 50ms
easing: 'ease', // default easing for AOS animations
once: false, // whether animation should happen only once - while scrolling down
mirror: false, // whether elements should animate out while scrolling past them
anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
});

function submitForm(event) {
  event.preventDefault();
  
  // Perform form submission logic here, if needed

  // Display thank you message
  const thankYouMessage = document.createElement('p');
  thankYouMessage.textContent = 'Thank you for your message!';
  thankYouMessage.style.fontSize = '24px';
  thankYouMessage.style.color = '#4CAF50';

  const formWrapper = document.querySelector('.form__wrapper');
  formWrapper.innerHTML = '';
  formWrapper.appendChild(thankYouMessage);
}