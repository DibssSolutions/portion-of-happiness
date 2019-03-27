import Isotope from 'isotope-layout';


const masonry = '.js-gallery';
if (document.querySelector(masonry)) {
  var iso;

  new Isotope(masonry, {
	  itemSelector: '.js-gallery-item',
	  layoutMode: 'fitRows',
	  percentPosition: true
    //   masonry: {
    // 	// use element for option
    // 	columnWidth: '.grid-sizer'
    //   }
  });
};

