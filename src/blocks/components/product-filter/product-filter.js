import noUiSlider from 'nouislider';
import $ from 'jquery';

document.addEventListener('DOMContentLoaded', function () {
  const ranges = document.querySelectorAll('.range');

  if (!ranges) {
    return;
  }

  ranges.forEach((range) => {
    const slider = range.querySelector('.nouislider');
    if (!slider) {
      return;
    }
    noUiSlider.create(slider, {
      start: [54, 500],
      connect: true,
      range: {
        min: 16,
        max: 500,
      },
    });
    const minValue = range.querySelector('.range__length-min');
    const maxValue = range.querySelector('.range__length-max');
    if (!minValue | !maxValue) {
      return;
    }
    slider.noUiSlider.on('update', function (values, handle) {
      var value = values[handle];
      if (handle) {
        maxValue.value = Math.round(value);
      } else {
        minValue.value = Math.round(value);
      }
    });
    minValue.addEventListener('change', function () {
      slider.noUiSlider.set([this.value, null]);
    });
    maxValue.addEventListener('change', function () {
      slider.noUiSlider.set([null, this.value]);
    });
  });
});

$(document).ready(function ($) {
  $('.product-filter__title').each(function () {
    $(this).on('click', function (e) {
      e.preventDefault();
      $(this).siblings('.product-filter__content').slideToggle();
    });
  });
});
