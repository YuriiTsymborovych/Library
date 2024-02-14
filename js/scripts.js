const swiper = new Swiper(".slider", {
    centeredSlides: true,
    slidesPerView: "auto",
    loop: true,
    speed: 400,
    spaceBetween: 25,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
});

const swiperFeature = new Swiper(".featureslider", {
    cssMode: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      pagination: {
        el: ".swiper-pagination",
      },
      mousewheel: true,
      keyboard: true,
});
