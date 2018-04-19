$(document).ready(function(){

    $(window).scroll(function(){
        var st = $(this).scrollTop();
        
        if ( $(window).width() > 768 ) {
            if ( st > 90 ) {
                $('.header-nav').css({
                    'top': 0,
                    'position': 'fixed'
                });
            } else {
                $('.header-nav').css({
                    'top': 90,
                    'position': 'absolute'
                });
            }
        }/* else {
            if ( $(window).width() > 768 ) {
                if ( st > 152 ) {
                    $('.header-nav').css({
                        'top': 0,
                        'position': 'fixed'
                    });
                } else {
                    $('.header-nav').css({
                        'top': 152,
                        'position': 'absolute'
                    });
                }
            }
        }*/
    });

    $('.mobile-btn').click(function(){
        if ( $(this).hasClass("active") ) {
            $('.mobile-menu').animate({height: 0},300);
            setTimeout(function(){
                $('.mobile-menu').removeClass("active");
                $('.mobile-btn').removeClass("active");
                $('.mobile-background').removeClass("active");
            }, 300);
        } else {
            $(this).addClass("active");
            $('.mobile-background').addClass("active");
            $('.mobile-menu').addClass("active");
            $('.mobile-menu').animate({height: 220},300);
        }
    });

    $('.mobile-background').click(function(){
        $('.mobile-menu').animate({height: 0},300);
        setTimeout(function(){
            $('.mobile-menu').removeClass("active");
            $('.mobile-btn').removeClass("active");
            $('.mobile-background').removeClass("active");
        }, 300);
    });

    $('.fancybox').fancybox();

    $('.phone-input').mask("+7 (999) 999 99 99");

});