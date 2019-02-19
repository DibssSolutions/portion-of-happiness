import slick from 'slick-carousel';

const heroSlider = $('.js-hero-slider');
const heroParent = heroSlider.parents('.js-hero-slider-wrap');
let heroPrev = $('.js-hero-prev', heroParent);
let heroNext = $('.js-hero-next', heroParent);
heroSlider.slick({
  dots: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  prevArrow: heroPrev,
  nextArrow: heroNext,
  customPaging: (slider, pageIndex) => {
    return $('<button class="hero__dot"></button>');
  },
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        veriableWidth: true,
		  arrows: false
      }
	  }]
});

const menuSlider = $('.js-menu-slider');
const menuParent = menuSlider.parents('.js-menu-slider-wrap');
let menuPrev = $('.js-menu-prev', menuParent);
let menuNext = $('.js-menu-next', menuParent);
menuSlider.slick({
  dots: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  prevArrow: menuPrev,
  nextArrow: menuNext
});
