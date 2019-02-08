import {ACTIVE} from '../constants';

var formSM = $('.js-form-sm');
var btnClose = $('.js-btn-close');

function help() {
  formSM.addClass(ACTIVE);
}

btnClose.on('click', function(e) {
  e.preventDefault();
  formSM.removeClass(ACTIVE);
});

setTimeout(help, 5000);
