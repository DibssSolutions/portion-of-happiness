import {OPEN, ACTIVE, BODY, OVERFLOW_HIDDEN} from './../constants';

const burger = $('.js-toggle');
const menuMob = $('.js-mob-menu');
const icon = $('.js-toggle-icon');

burger.on('click', function(e) {
  e.preventDefault();
  icon.addClass(OPEN);
  menuMob.addClass(OPEN);
  BODY.addClass(OVERFLOW_HIDDEN);
  e.stopPropagation();
});

menuMob.on('click', function(e) {
  e.stopPropagation();
});

BODY.on('click', () => {
  icon.removeClass(OPEN);
  menuMob.removeClass(OPEN);
  BODY.removeClass(OVERFLOW_HIDDEN);
});

// const menuItem = menuMob.find('.mob-menu__item');
// menuItem.each((i, item) => {
//   item = $(item);
//   item.on('click', function() {
// 	  if (item.hasClass(OPEN)) {
// 		  item.removeClass(OPEN);
// 	  } else {
// 		  menuItem.removeClass(OPEN);
// 		  item.addClass(OPEN);
// 	  }
//   });
// });
