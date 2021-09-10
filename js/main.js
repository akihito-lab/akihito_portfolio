$(function() {

    $('.nav_toggle').on('click', function () {
        $('.nav_toggle, .click-nav').toggleClass('show');
      });


      if (window.matchMedia('(min-width: 769px)').matches) {
        /* ウィンドウサイズ668以下の処理を記述 */
        $(window).scroll(function () {
          var TopHeight = $('.top').outerHeight(true);
          if ($(this).scrollTop() > TopHeight) {
            $('.nav-list').addClass('Telescopic');
            $('.nav_toggle').fadeIn(800);
          } else {
            $('.nav-list').removeClass('Telescopic');
            $('.nav_toggle').fadeOut(600);
          }
      });
      }


      $(window).on('scroll', function (){
      $('.works-list>.item>.text>.title').each(function () {
        var changeOffset = $(this).offset().top;
        var scrolltop = $(window).scrollTop();
        var wh = $(window).height();
        if(scrolltop > changeOffset - wh / 2 ){
        $(this).addClass('change');
        }
      });
    });


    
});