const number = $('.js-choose');

number.each(function() {
  const max_number = +$(this).attr('data-max-number');
  const input = $(this).find('input');
  const plus = $(this).find('.js-choose-plus');
  const minus = $(this).find('.js-choose-minus');
  const tr = $(this).closest('.js-tr-parent');
  let totalPriceEl;
  let basePriceEl;
  let totalPrice;
  let basePrice;

  if (tr[0]) {
    totalPriceEl = tr.find('.js-tr-total');
    basePriceEl = tr.find('.js-tr-price');
    basePrice = parseFloat(basePriceEl.text(), 2);
  }

  plus.on('click', function() {
    let val = +input.val();
    if (val >= max_number) {
      return false;
    } else {
      val += 1;
      input.val(val);
    }
    totalPriceEl ? totalPriceEl.val((val * basePrice).toFixed(2)) : null;
  });

  minus.on('click', function() {
    let val = +input.val();
    if (val > 1) {
      val -= 1;
      input.val(val);
    } else {
      return false;
    }
    totalPriceEl ? totalPriceEl.val((val * basePrice).toFixed(2)) : null;
  });
});
