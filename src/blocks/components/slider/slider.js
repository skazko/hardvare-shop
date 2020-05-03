import Splide from '@splidejs/splide';

document.addEventListener('DOMContentLoaded', function () {
  const s = document.getElementById('header-slider');

  if (!s) {
    return;
  }

  new Splide('#header-slider', {
    height: 110,
    type: 'loop',
    pagination: false,
    breakpoints: {
      640: {
        height: 0,
      },
    },
  }).mount();
});
