import $ from 'jquery';

const WIN = $(window);
const HEADER = $('.js-header');
const isScrolling = () => $(window).scrollTop() > 40 ? true : false;
let scrollFlag = true;

const addAnimationFromHeader = () => {
  scrollFlag = false;
  HEADER.addClass('is-animate');
};

const removeAnimationFromHeader = () => {
  scrollFlag = true;
  HEADER.removeClass('is-animate');
};

WIN.on('load', () => {
  if(isScrolling()) { 
    HEADER.addClass('is-animate');
  }
});

WIN.on('scroll', () => {
  if(isScrolling() && scrollFlag) {
    addAnimationFromHeader();
  }
  if(!isScrolling() && !scrollFlag) {
    removeAnimationFromHeader();
  }
  // checkSection();
});


// let checkSection = () => {
//   $('[data-section]').each(function() {
//     let topSection = $(this).offset().top - 100;
//     let bottomSection = topSection + $(this).height();
//     let scrollTop = WIN.scrollTop();
//     let id = $(this).data('section');
//     let links = $('.nav__link');
//     let currentLink = links.filter('[href="#' + id +'"]');

//     if(topSection < scrollTop && bottomSection > scrollTop) {
	  
// 	  links.removeClass('is-active');
// 	  currentLink.addClass('is-active');
// 	  window.location.hash = id;
//     }
//   });
// };

// showSection(window.location.hash, false);
