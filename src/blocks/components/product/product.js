import Splide from '@splidejs/splide';
import $ from 'jquery';

document.addEventListener('DOMContentLoaded', function () {
  const s1 = document.getElementById('slider-thumbs');
  const s2 = document.getElementById('slider-big');

  if (!s1 | !s2) {
    return;
  }

  const thumbs = new Splide('#slider-thumbs', {
    fixedWidth: 130,
    height: 130,
    gap: 30,
    rewind: true,
    cover: true,
    pagination: false,
    arrows: false,
    focus: 'center',
    isNavigation: true,
    breakpoints: {
      '420': {
        fixedWidth: 100,
        height: 100,
        gap: 10,
      },
      '380': {
        fixedWidth: 80,
        height: 80,
      },
    },
  }).mount();

  const image = new Splide('#slider-big', {
    pagination: false,
    arrowPath:
      'M28.7071 20.7071C29.0976 20.3166 29.0976 19.6834 28.7071 19.2929L22.3431 12.9289C21.9526 12.5384 21.3195 12.5384 20.9289 12.9289C20.5384 13.3195 20.5384 13.9526 20.9289 14.3431L26.5858 20L20.9289 25.6569C20.5384 26.0474 20.5384 26.6805 20.9289 27.0711C21.3195 27.4616 21.9526 27.4616 22.3431 27.0711L28.7071 20.7071ZM12 21H28V19H12V21Z',
    breakpoints: {
      '420': {
        arrows: false,
      },
    },
  });

  image.sync(thumbs).mount();
});

document.addEventListener('DOMContentLoaded', () => {
  $(
    '.product__features-section:not(:first) .product__features-content'
  ).slideUp();
  $('.product__features-section:not(:first)').removeClass(
    'product__features-section_opened'
  );

  $('.product__features-section .product__features-title').on('click', (e) => {
    $(e.target)
      .closest('.product__features-section')
      .toggleClass('product__features-section_opened');
    $(e.target)
      .closest('.product__features-title')
      .next('.product__features-content')
      .slideToggle(200);
  });
});
