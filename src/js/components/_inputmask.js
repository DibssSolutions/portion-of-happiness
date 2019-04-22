import { BODY } from '../constants'; 
import Inputmask from 'inputmask';

BODY.on('focus', '[data-inputmask]', function() {
  Inputmask({placeholder: ''}).mask(this);
});
