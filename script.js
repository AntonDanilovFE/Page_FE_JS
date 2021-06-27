// Enlargement Gallery
$(function () {
  $("a.colorbox").colorbox({ current: "Фото {current} из {total}" });
});

// slider header
let swiper = new Swiper(".mySwiper.swiper-one", {
  direction: "vertical",
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

// LATEST NEWS slider
let swiperTwo = new Swiper(".swiper-container.swiper-two", {
  slidesPerView: 3,
  spaceBetween: 44,
  slidesPerGroup: 1,
  loop: true,
  loopFillGroupWithBlank: true,
  breakpoints: {
    556: {
      slidesPerView: 1,
    },
    767: {
      slidesPerView: 2,
    },
    1400: {
      slidesPerView: 3,
    },
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
    clickable: true,
  },
  removeClippedSubviews: false,
});

// google map
const mapWrapper = document.getElementById("map");
const map = new google.maps.Map(mapWrapper, {
  center: { lat: 40.7143, lng: -74.006 },
  zoom: 8,
});
new google.maps.Marker({
  position: { lat: 40.7143, lng: -74.006 },
  map: map,
  icon: "img/Pin.png",
});
