import { ACTIVE } from '../_constants';

(() => {

  const $accordion = $('.js-accordion');
  const $titles = $('.js-accordion-title');
  const $blocks = $('.js-accordion-block');

  const closeAll = () => {
    $blocks.stop(true,true,true).slideUp('400');
    $titles.stop(true,true,true).removeClass(ACTIVE);
  };

  $accordion.each(function() {
		
    const $this = $(this);
    const $title = $this.find('.js-accordion-title');
    const $block = $this.find('.js-accordion-block');

    $title.click(e => {
      e.preventDefault();

      if ($title.hasClass(ACTIVE)) {
        closeAll();
      } else {
        closeAll();
        $block.stop(true,true,true).slideDown('400');
        $title.stop(true,true,true).addClass(ACTIVE);
      }
    });

  });

})();
