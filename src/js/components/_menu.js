import {OPEN} from '../constants';

const menu = $('.js-toggle');

menu.on('click', function() {
  const header = $('.js-header');
  const icon = $('.js-toggle-icon');
  icon.toggleClass(OPEN);
  header.addClass(OPEN);
});

