$(document).ready(function(){

    function anim_add() {
        $('.anim-parent').addClass("active");
    }
    function anim_remove() {
        $('.anim-parent').removeClass("active");
    }

    $(window).scroll(function(){
        var st = $(this).scrollTop();
        var pos = $('.anim-parent').offset().top - 200;
        
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
        if ( st > pos ) {
            anim_add();
        } else {
            anim_remove();
        }
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

});