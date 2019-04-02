import { WIN, ACTIVE, HTMLBODY } from './../constants';

const scrollTop = $('.js-scroll-top');
WIN.scroll( () => {
  if (WIN.scrollTop() > 300) {
    scrollTop.addClass(ACTIVE);
  } else {
    scrollTop.removeClass(ACTIVE);
  }
});

scrollTop.on('click', (e) => {
  e.preventDefault();
  HTMLBODY.animate({scrollTop:0}, '300');
});
