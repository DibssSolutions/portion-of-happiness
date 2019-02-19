import { ACTIVE } from './../constants';


const menuTrigger = $('.js-menu-list-item');
const menuTarget = $('.js-menu-list-target');
menuTrigger.each(function() {
  let this_ = $(this);
  let target = this_.find(menuTarget);
  this_.on('click', (e) => {
    e.preventDefault();
    if (this_.hasClass(ACTIVE)) {
      this_.removeClass(ACTIVE);
	  menuTarget.removeClass(ACTIVE);
    } else {
      menuTrigger.removeClass(ACTIVE);
      menuTarget.removeClass(ACTIVE);
      this_.addClass(ACTIVE);
      target.addClass(ACTIVE);
    }
  });
});
