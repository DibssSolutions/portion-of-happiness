import slick from 'slick-carousel';

const heroSlider = $('.js-hero-slider');
const heroParent = heroSlider.parents('.js-hero-slider-wrap');
let heroPrev = $('.js-hero-prev', heroParent);
let heroNext = $('.js-hero-next', heroParent);
console.log(heroNext);
heroSlider.slick({
  dots: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  prevArrow: heroPrev,
  nextArrow: heroNext,
  customPaging: (slider, pageIndex) => {
    return $('<button class="hero__dot"></button>');
  }
});
