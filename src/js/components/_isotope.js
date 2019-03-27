import Isotope from 'isotope-layout';


const masonry = '.js-gallery';
if (document.querySelectorAll(masonry)) {

  document.querySelectorAll(masonry).forEach( el => {
	  new Isotope(el, {
		  itemSelector: '.js-gallery-item',
		  layoutMode: 'fitRows',
		  percentPosition: true
      //   masonry: {
      // 	// use element for option
      // 	columnWidth: '.grid-sizer'
      //   }
	  });
  });
};

