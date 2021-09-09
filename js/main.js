$(function() {
    $('.nav_toggle').on('click', function () {
        $('.nav_toggle, .click-nav').toggleClass('show');
      });
      if (window.matchMedia('(min-width: 769px)').matches) {
        /* ウィンドウサイズ668以下の処理を記述 */
        var TopHeight = $('.top').outerHeight(true);
        $(window).scroll(function () {
          if ($(this).scrollTop() > TopHeight) {
            $('.nav-list').addClass('open');
            $('.nav_toggle').fadeIn(800);
          } else {
            $('.nav-list').removeClass('open');
            $('.nav_toggle').fadeOut(600);
          }
      });
      } 
});