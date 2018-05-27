import { TweenLite } from 'gsap';

export default (prop) => {
  let value = prop.block.data('counter-item');
  let separation = prop.block.data('counter-separation');
  let counterObj = { score: 0 };
  
  // SEPARATOR
  const thousandSeparator = str => {
    let parts = (str + '').split('.');
    let main = parts[0];
    let len = main.length;
    let output = '';
    let i = len - 1;
        
    while(i >= 0) {
      output = main.charAt(i) + output;
      if ((len - i) % 3 === 0 && i > 0) {
        output = ',' + output;
      }
      --i;
    }

    if (parts.length > 1) {
      output += '.' + parts[1];
    }
    return output;
  };
  // HANDLER
  const updateHandler = () => {
    let text;
    (separation) 
      ? text = thousandSeparator(counterObj.score) 
      : text = counterObj.score;
    prop.block.text(text);
  };
  // ANIMATION
  let tween;
  let duration = prop.duration || 3;
  const proggresAnimation = () => {
    tween = TweenLite.to(counterObj, duration, { 
      score: value, 
      roundProps: 'score', 
      onUpdate: updateHandler, 
      ease: prop.ease || Power4.easeOut,
      onComplete: prop.onComplete
    });
  };
  let animationPause = () => { if (prop.pause) tween.pause(); };
  animationPause();
  proggresAnimation();
  let play = () => tween.play();
  return { play };
};
