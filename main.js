// toggle function 

const toggleBtn = document.querySelector('.toggle-btn');
const mobMenu = document.querySelector('.mob-menu');

toggleBtn.addEventListener('click', function () {
    mobMenu.classList.toggle('active');
});


// swiper js 
const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
    speed: 1500,
  });