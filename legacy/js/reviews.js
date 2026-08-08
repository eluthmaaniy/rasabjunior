// Init featured reviews Swiper
    const featured = new Swiper('.featured-swiper', {
      slidesPerView: 1,
      spaceBetween: 16,
      loop: true,
      autoplay: {
        delay: 3500,
        disableOnInteraction: false
      },
      breakpoints: {
        768: { slidesPerView: 1.2 }
      }
    });