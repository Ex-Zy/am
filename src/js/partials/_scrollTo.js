import $ from 'jquery';

const htmlBody  = $('html, body');
const duration  = 1200;
const hash = window.location.hash;

$('.js-nav-link, .js-btn-scroll').on('click', (e) => {
  const anchor = $(e.currentTarget).attr('href').slice(1);
  const section = $('[data-section="'+ anchor +'"]');

  scrollToSection(section, true);
});



if(hash !== '') {
  let section = $('[data-section="'+ hash.slice(1) +'"]');

  console.log(section, hash);
  scrollToSection(section, true);
}


function scrollToSection(section, animate) {
  const top = $(section).offset().top;

  if(animate !== true) htmlBody.scrollTop(top);

  htmlBody.animate({ scrollTop: top }, duration);

}

