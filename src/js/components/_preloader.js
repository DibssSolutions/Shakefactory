import { DOC, BODY } from '../_constants';
import COUNTER from './helpers/_counter';
import SCROLL_WIDTH from './helpers/_scrollWidth';

(() => {
  let $preloader = $('.js-preloader');
  let $proggresBlock = $preloader.find('[data-counter-item]');
  let hideDuration = 300;
  let bodyHeader = $('body, .js-header');

  bodyHeader.css({
    paddingRight: SCROLL_WIDTH(),
    overflow: 'hidden'
  });
  $preloader.css('paddingRight', SCROLL_WIDTH());

  DOC.ready(function() {
    COUNTER({ 
      block: $proggresBlock,
      ease: Expo.easeInOut,
      duration: 4,
      onComplete: () => {
        $preloader.fadeOut(hideDuration);
        setTimeout(function() {
          $preloader.remove();
          bodyHeader.css({
            paddingRight: 0,
            overflow: 'visible'
          });
        }, hideDuration+1);
      }
    });
  });

})();
