import { ANIMATE } from '../../_constants';
import OnScreen from '../_on-screen';
import STAGGER from '../helpers/_stagger';
(() => {
  let parent = '[data-anim-from="left"]';
  new OnScreen({ selector: parent })
    .onStart($section => {
      if (!$section.hasClass(ANIMATE)) {
        STAGGER({
          elements: $section,
          duration: 1.2
        });
      };
      $section.addClass(ANIMATE);
    } );
})();
