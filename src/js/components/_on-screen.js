import { WIN } from '../_constants';

export default class OnScreen {

  constructor(props) {

    const start = props.threshold && props.threshold.start;
    const end = props.threshold && props.threshold.end;

    this._sections = $(props.selector);
    this._onStart = [];
    this._onEnd = [];
    this._threshold = {
      start: 100/start || 2,
      end: 100/end || 2
    };

    this._detectOnScroll();

  }

  _detectOnScroll() {

    const that = this;
    this._sections.each(function() {
      const $this = $(this);
      let enable = false;
      let scrollStart = WIN.scrollTop();
      WIN.on('scroll', () => {
        const sectionTop = $this.offset().top;
        const sectionBottom = sectionTop + $this.outerHeight();

        const winTop = WIN.scrollTop();
        const winHeight = WIN.outerHeight();

        const winStart = winTop + (winHeight/that._threshold.start);
        const winEnd = winTop + (winHeight/that._threshold.end);

        const direction = (winTop < scrollStart) ? 'up' : 'down';
        scrollStart = winTop;

        if (winStart >= sectionTop && winEnd <= sectionBottom) {
          !enable && that._onStart.length && that._onStart.forEach(fn => fn($this, direction));
          enable = true;
        } else {
          enable && that._onEnd.length && that._onEnd.forEach(fn => fn($this, direction));
          enable = false;
        }
      });
    });

  }

  onStart(fn) {
    this._onStart.push(fn);
    return this;
  }
  onEnd(fn) {
    this._onEnd.push(fn);
    return this;
  }

};
