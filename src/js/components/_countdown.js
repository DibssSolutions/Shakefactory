(() => {

  const countDownTimer = ($container, dayEnd) => {

    let counter = setInterval(() => {
      
      const countDownDate = new Date(dayEnd).getTime();
      const now = new Date().getTime();
      const distance = countDownDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      const $days = $container.find('[data-countdown="days"]');
      const $hours = $container.find('[data-countdown="hours"]');
      const $minutes = $container.find('[data-countdown="minutes"]');
      const $seconds = $container.find('[data-countdown="seconds"]');

      $days.text(days);
      $hours.text(hours);
      $minutes.text(minutes);
      $seconds.text(seconds);
      
      if (distance < 0) {
        clearInterval(x);
        $days
          .add($hours)
          .add($minutes)
          .add($seconds)
          .text(0);
      }

    }, 500);

  };


  $('.js-countdown').each(function() {
  
    const $this = $(this);
    const dayEnd = $this.data('countdown-end');

    countDownTimer($this, dayEnd);

  });

})();
