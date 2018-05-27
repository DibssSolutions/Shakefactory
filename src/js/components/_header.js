import { WIN, ACTIVE } from '../_constants';
import { SCROLL_TO } from '../_utils';

(() => {

  const $header = $('.js-header');
  const $links = $('.js-nav-link');
  const $sections = $('.js-section');
  const $last = $sections.last();
  const lastTarget = $last.data('section');
  const $lastLink = $links.filter(`[href="${lastTarget}"]`);

  const setActiveLink = $link => {
    $links.removeClass(ACTIVE);
    $link.addClass(ACTIVE);
  };

  const detectActiveSection = () => {
    const scrollTop = WIN.scrollTop();
    const scrollBottom = scrollTop + WIN.outerHeight();

    $header.attr('data-fixed', scrollTop > 0);

    $sections.each(function() {

  	  const $this = $(this);
  	  const target = $this.data('section');
  	  const top = $this.offset().top;
  	  const bottom = $this.outerHeight() + top;
  	  const $link = $links.filter(`[href="${target}"]`);

  	  if (scrollTop >= top && scrollTop < bottom && !$link.hasClass(ACTIVE)) setActiveLink($link);
  	  if (scrollBottom === $last.offset().top + $last.outerHeight()) setActiveLink($lastLink);

    });
  };


  detectActiveSection();
  WIN.on('scroll', detectActiveSection);

})();
