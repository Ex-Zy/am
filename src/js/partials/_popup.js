import $ from 'jquery';

const POPUP = $('.js-popup');
const POPUP_OPEN = $('.js-open-popup');
const POPUP_CLOSE = $('.js-close');
const ACTIVE = 'is-active';


//popup
POPUP_OPEN.click(function(e) {
  e.preventDefault();

  let link = $(this).data('link');
  let popupElement = POPUP.filter('[data-popup="' + link + '"]');

  popupElement.addClass(ACTIVE);

  console.log(link, popupElement);
});
POPUP_CLOSE.click(function() {
  $(this).parents(POPUP).removeClass(ACTIVE);
  return false;
});
