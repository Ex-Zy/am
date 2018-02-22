import $ from 'jquery';

const BODY = $('body');
const POPUP = $('.js-popup');
const POPUP_OPEN = $('.js-open-popup');
const POPUP_CLOSE = $('.js-close');
const ACTIVE = 'is-active';
const HIDDEN = 'is-hidden';


//popup
POPUP_OPEN.click(function(e) {
  e.preventDefault();

  let link = $(this).data('link');
  let popupElement = POPUP.filter('[data-popup="' + link + '"]');

  popupElement.addClass(ACTIVE);
  BODY.addClass(HIDDEN);

});
POPUP_CLOSE.click(function() {
  $(this).parents(POPUP).removeClass(ACTIVE);
  BODY.removeClass(HIDDEN);
  return false;
});
