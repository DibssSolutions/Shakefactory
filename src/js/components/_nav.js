import { BODY, OPEN, ACTIVE } from '../_constants';
import { SCROLL_TO } from '../_utils';

(() => {

  const $btn = $('.js-nav-btn');
  const $nav = $('.js-nav');
  const $links = $('.js-nav-link');
  const $sections = $('.js-section');
  const $body = $('body');
  const header = '.js-header';

  

  $btn.click(e => {
    e.preventDefault();
    $nav.toggleClass(OPEN);
    $btn.toggleClass(ACTIVE);
    $body.toggleClass(ACTIVE);
  });

  BODY.click(e => {
    const $target = $(e.target);
    if ($target.closest(header).length) return;
    $nav.removeClass(OPEN);
    $btn.removeClass(ACTIVE);
    $body.removeClass(ACTIVE);
  });



})();


