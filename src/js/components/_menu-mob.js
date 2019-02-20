import {OPEN, ACTIVE, BODY, OVERFLOW_HIDDEN} from './../constants';

const burger = $('.js-toggle');
const menuMob = $('.js-mob-menu');
const icon = $('.js-toggle-icon');
const hide = () => {
  icon.removeClass(OPEN);
  menuMob.removeClass(OPEN);
  BODY.removeClass(OVERFLOW_HIDDEN);
};

burger.on('click', function(e) {
  e.preventDefault();
  if (menuMob.hasClass(OPEN)) {
    hide();
  } else {
	  icon.addClass(OPEN);
	  menuMob.addClass(OPEN);
	  BODY.addClass(OVERFLOW_HIDDEN);
  }
});


BODY.on('click', e => {
  if ($(e.target).closest(menuMob).length || $(e.target).closest(burger).length) return;
  hide();
});
