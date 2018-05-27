import { WIN, ACTIVE, widthMD, HTMLBODY } from '../_constants';
import { SCROLL_TO } from '../_utils';
import OnScreen from './_on-screen';
import slick from 'slick-carousel';

(() => {

  const $slider = $('.js-slider');


  // //classes
  const FIXED = 'is-fixed';
  const BOTTOM = 'is-bottom';
  const TOP = 'is-top';

  //SLIDER
  const setFixedDirection = ($fixed, direction) => {
    switch (direction) {
      case 'up':
        $fixed
          .removeClass(BOTTOM)
          .addClass(TOP);
        break;
      case 'down':
        $fixed
          .removeClass(TOP)
          .addClass(BOTTOM);
        break;
    }
  };

  new OnScreen({ 
    selector: '.js-slider',
    threshold: {
      start: 0,
      end: 100
    }
  })
    .onStart(($section, direction) => {
      const $fixed = $section.find('.js-slider-box');
      $fixed.addClass(FIXED);
    })
    .onEnd(($section, direction) => {
      const $fixed = $section.find('.js-slider-box');
      if ($fixed.hasClass(FIXED)) setFixedDirection($fixed, direction);
      $fixed.removeClass(FIXED);
    });

  $slider.each(function() {
    const $this = $(this);
    const $fixed = $this.find('.js-slider-box');
    const $links = $this.find('.js-slider-link');
    const $slides = $this.find('.js-slider-slide');
    const direction = WIN.scrollTop() > $this.offset().top ? 'down' : 'up';
    
    $links.click(function(e) {
      e.preventDefault();
      const target = $(this).attr('href');
      const $currentSlide = $slides.filter(`[data-slide="${target}"]`);
      const position = $currentSlide.offset().top + $currentSlide.outerHeight()/2 - WIN.outerHeight()/2;
      SCROLL_TO(position);
    });
    setFixedDirection($fixed, direction);
  });

  //SLIDES
  const setActiveLink = $section => {
    const target = $section.data('slide');
    const $links = $section
      .closest('.js-slider')
      .find('.js-slider-link');
    $links
      .removeClass(ACTIVE)
      .filter(`[href="${target}"]`)
      .addClass(ACTIVE);
  };
  
  const clearAll = elements => TweenMax.set(elements, { clearProps: 'all' });

  const showSlide = $section => {
    const $line = $section.find('[data-slide*="line"]');
    const $title = $section.find('[data-slide*="title"]');
    const $content = $section.find('[data-slide*="content"]');
    const $imgLeft = $section.find('[data-slide*="img-left"]');

    return new TimelineMax({ paused: true })
      .addLabel('start', '+=0.2')
      .from($line, 1, { 
        x: '-100%',
        opacity: 0,
        ease: Power2.easeOut
      }, 'start')
      .from($title, 1, {
        y: '100px',
        opacity: 0,
        ease: Power2.easeOut
      }, 'start')
      .from($imgLeft, 1, {
        y: '100px',
        opacity: 0,
        ease: Back.easeOut.config(1.7)
      }, 'start')
      .from($content, 1, {
        y: '50px',
        opacity: 0,
        ease: Power2.easeOut
      }, 'start+=0.6')
      .eventCallback('onComplete', () => clearAll([$line, $title, $content, $imgLeft]), null);
  };

  const animationStack = {};
  $slider.each(function() {
    $slider
      .find('.js-slider-slide').each(function() {
        const $this = $(this);
        animationStack[$this.data('slide')] = showSlide($this);
      });
  });

  new OnScreen({ 
    selector: '.js-slider-slide'
  })
    .onStart($section => {
      setActiveLink($section);
      animationStack[$section.data('slide')].play();
    })
    .onEnd($section => {
      animationStack[$section.data('slide')].reverse();
    });

})();
