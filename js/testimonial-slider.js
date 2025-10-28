document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.swiper.testimonial-swiper').forEach((el) => {
    new Swiper(el, {
      loop: true,
      autoplay: {
        delay: 2000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,   
      },
      slidesPerView: 1,            
      spaceBetween: 16,            
      breakpoints: {
        768:  { slidesPerView: 2, spaceBetween: 24 }, 
        1024: { slidesPerView: 3, spaceBetween: 32 }, 
      },
    });
  });
});
