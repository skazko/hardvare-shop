import $ from 'jquery';

$(document).ready(function ($) {
  $('.dropdown-button').each(function () {
    $(this).on('click', function (e) {
      e.preventDefault();
      $(this).closest('.dropdown-item').toggleClass('dropdown-opened');
      $(this).siblings('.dropdown-submenu').slideToggle();
      $(this)
        .closest('.dropdown-opened')
        .siblings('.dropdown-opened')
        .each(function () {
          $(this).toggleClass('dropdown-opened');
          $(this).find('.dropdown-submenu').slideToggle();
        });
    });
  });
});

$(document).ready(function ($) {
  $('#menu-button-open').on('click', function (e) {
    e.preventDefault();
    $('#main-menu').addClass('menu-opened');
    $('body').addClass('scroll-blocked');
  });

  $('#menu-button-close').on('click', function (e) {
    e.preventDefault();
    $('#main-menu').removeClass('menu-opened');
    $('body').removeClass('scroll-blocked');
  });
});
