$(function() {

    $('.nav_toggle').on('click', function () {
        $('.nav_toggle, .click-nav').toggleClass('show');
        $('body').toggleClass('fixed');

      });


      if (window.matchMedia('(min-width: 769px)').matches) {
        /* ウィンドウサイズ768以下の処理を記述 */
        $(window).scroll(function () {
          var TopHeight = $('.top').outerHeight(true);
          if ($(this).scrollTop() > TopHeight - 95) {
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
        if(scrolltop > changeOffset -  3* wh / 5  ){
        $(this).addClass('change');
        }
      });
    });

    // nav-list特定の位置までスクロール
    $('.nav-service').click(function() {
      $("html,body").animate({scrollTop:$(".service").offset().top});
    });
    
    $('.nav-works').click(function() {
      $("html,body").animate({scrollTop:$(".works").offset().top});
    });
    
    $('.nav-about').click(function() {
      $("html,body").animate({scrollTop:$(".about").offset().top});
    });
    
    $('.nav-contact').click(function() {
      $("html,body").animate({scrollTop:$(".contact").offset().top});
    });

    // click-list特定の位置までスクロール
    $('.click-service').click(function() {
      $("html,body").animate({scrollTop:$(".service").offset().top});
      $('.nav_toggle, .click-nav').removeClass("show");
      $('body').removeClass('fixed');
    });
    
    $('.click-works').click(function() {
      $("html,body").animate({scrollTop:$(".works").offset().top});
      $('.nav_toggle, .click-nav').removeClass("show");
      $('body').removeClass('fixed');
    });
    
    $('.click-about').click(function() {
      $("html,body").animate({scrollTop:$(".about").offset().top});
      $('.nav_toggle, .click-nav').removeClass("show");
      $('body').removeClass('fixed');
    });
    
    $('.click-contact').click(function() {
      $("html,body").animate({scrollTop:$(".contact").offset().top});
      $('.nav_toggle, .click-nav').removeClass("show");
      $('body').removeClass('fixed');
    });
    
    
});