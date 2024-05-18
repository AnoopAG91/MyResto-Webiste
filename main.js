// toggle function 

const toggleBtn = document.querySelector('.toggle-btn');
const mobMenu = document.querySelector('.mob-menu');

toggleBtn.addEventListener('click', function () {
    mobMenu.classList.toggle('active');
});


// scrolled header 
window.addEventListener('scroll', function() {
  const header = document.querySelector('.header-container');
  if (window.scrollY > 100) {
      header.classList.add('scrolled-header');
  } else {
      header.classList.remove('scrolled-header');
  }
});

// swiper js 
const swiper1 = new Swiper('#swiper1', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  slidesPerView: 5,
  spaceBetween: 10,

  breakpoints: {
      // when window width is >= 768px
      1200: {
          slidesPerView: 5,
          spaceBetween: 10
      },
      768: {
          slidesPerView: 4,
          spaceBetween: 10
      },
      100: {
          slidesPerView: 3,
          spaceBetween: 10
      }
  },


  // If we need pagination
  pagination: {
      el: '.swiper-pagination',
      clickable: true
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
  speed:1000
});



// testimonial swiper js 
const swiper2 = new Swiper('#swiper2', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    slidesPerView: 1,
  
   
  
    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true
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
    speed:1000
  });
  




