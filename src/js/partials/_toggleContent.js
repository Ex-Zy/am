const btnMore = $('.js-btn-more');
const content = $('.services-cont__body');
const duration = 800;

btnMore.on('click', clickHandlerBtnMore);

function clickHandlerBtnMore(e) {
  let text = $(this).text().trim();
  let dataText = $(this).data('text').trim();

  $(this).text(dataText);
  $(this).data('text', text);

  content.slideToggle(duration);
  e.preventDefault();
}
