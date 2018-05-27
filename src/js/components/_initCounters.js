import { ANIMATE } from './../_constants';
import OnScreen from './_on-screen';
import COUNTER from './helpers/_counter.js';

(() => {
  
  // INIT COUNTER ON SCROLL
  const parentCounter = '[data-counter="parent"]';
  new OnScreen({ selector: parentCounter })
    .onStart($section => {
      if (!$section.hasClass(ANIMATE)) {
        let $counterItem = $section.find('[data-counter-item]');
        $counterItem.each(function() { 
          let that = $(this);
          COUNTER({ block: that });
        });
      };
      $section.addClass(ANIMATE);
    });
})();
