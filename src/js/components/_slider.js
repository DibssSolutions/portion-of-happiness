import slick from 'slick-carousel';
import { mediaWidth } from '../utils';
import { WIN } from '../constants';

const heroSlider = $('.js-hero-slider');
const arrowParent = $('.js-arrow-parent');
// arrowParent.each(function() {
//   const this_ = $(this);
//   let arrPrev = this_.find($('.js-hero-prev'));
//   let arrNext = this_.find($('.js-hero-next'));
// });
let heroPrev = $('.js-hero-prev', arrowParent);
let heroNext = $('.js-hero-next', arrowParent);
heroSlider.slick({
  dots: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  prevArrow: heroPrev,
  nextArrow: heroNext,
  fade: true,
  cssEase: 'linear',
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
const menuSliderNav = $('.js-menu-slider-nav');
let menuPrev = $('.js-menu-prev', menuParent);
let menuNext = $('.js-menu-next', menuParent);
menuSlider.slick({
  dots: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  prevArrow: menuPrev,
  nextArrow: menuNext,
  asNavFor: menuSliderNav,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        customPaging: (slider, pageIndex) => {
          return $('<button class="hero__dot"></button>');
		  }
      }}]
});
menuSliderNav.slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: menuSlider,
  arrows: false,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        vertical: true
      }}]
});
const menuIcon = $('.js-menu-list-icon');
menuIcon.on('click', function(e) {
  e.preventDefault();
  const id = $(this).parents('.slick-slide').index();
  menuSlider.slick('slickGoTo', id);
});



const stockSlider = $('.js-stock-slider');
const options = {
  slidesToShow: 3,
  slidesToScroll: 1,
  infinite: true,
  dots: true,
  arrows: false,
  customPaging: (slider, pageIndex) => {
    return $('<button class="hero__dot"></button>');
  },
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        infinite: true,
      }
	  },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        infinite: true,
      }
	  }
  ]
};

const detectWindowWidth = () => {
  const initSlider = $('.js-stock-slider.slick-slider');
  if (mediaWidth(1023)) {
    if (initSlider.length) return;
	   stockSlider.slick(options);
  }
  else {
    if (!initSlider.length) return;
    stockSlider.slick('unslick');
  }
}; 
detectWindowWidth();

let timeout;

WIN.resize(() => {
  clearTimeout(timeout);
  timeout = setTimeout(detectWindowWidth, 100);
});



// DISH SLIDER

const dishSliders = $('.js-dishes-slider');

dishSliders.each((i, el) => {
  const dishParent = $(el).parents('.js-dishes-slider-wrap');
  let dishPrev = $('.js-menu-prev', dishParent);
  let dishNext = $('.js-menu-next', dishParent);
  $(el).slick({
    dots: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: dishPrev,
    nextArrow: dishNext
  });
});
