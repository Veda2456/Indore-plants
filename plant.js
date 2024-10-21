let navMenu = document.getElementById('nav-menu');
let navLink = document.querySelectorAll(".nav-link");
let hamburger = document.getElementById("hamburger");

hamburger.addEventListener("click", function() {
    navMenu.classList.toggle("hidden");
    hamburger.classList.toggle("ri-close-large-line");
});

navLink.forEach(link => {
    link.addEventListener("click", function() {
        navMenu.classList.toggle("hidden");
        hamburger.classList.toggle("ri-close-large-line");
    });
});

const swiper = new Swiper('.swiper', {
    speed: 400,
    spaceBetween: 30,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false
    },
  
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    grabCursor: true,
    breakpoints: {
        640: {
            slidesPerView: 1
        },
        768: {
            slidesPerView: 2
        },
        1024: {
            slidesPerView: 3
        },
    }
  });