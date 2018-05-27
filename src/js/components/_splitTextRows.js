import { DOC } from '../_constants';
import SplitIntoRows from './helpers/_splitIntoRows';

(() => {

  DOC.ready(function() {
    let items = $('[data-anim="stagger-items"]');
		
    for (let i = 0; i < items.length; i++ ) {
      new SplitIntoRows({ container: items[i] });
    };
  });
	
})();
