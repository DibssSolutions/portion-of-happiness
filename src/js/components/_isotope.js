import Isotope from 'isotope-layout';
import 'isotope-packery';


const masonry = '.js-gallery';
if (document.querySelectorAll(masonry)) {

  document.querySelectorAll(masonry).forEach( el => {
	  new Isotope(el, {
		  itemSelector: '.js-gallery-item',
		  layoutMode: 'packery',
    	  percentPosition: true,
		  horizontalOrder: true,
		  masonry: {
        	columnWidth: '.grid-sizer'
		  }
      //   masonry: {
      // 	// use element for option
      // 	columnWidth: '.grid-sizer'
      //   }
	  });
  });
};

