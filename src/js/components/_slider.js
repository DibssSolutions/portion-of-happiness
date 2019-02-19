import slick from 'slick-carousel';
import { mediaWidth } from '../utils';
import { WIN } from '../constants';

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

let timeout; //= undefined;

WIN.resize(() => {
  clearTimeout(timeout);
  timeout = setTimeout(detectWindowWidth, 100);
});

