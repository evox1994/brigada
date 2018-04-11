$(document).ready(function(){

    $(window).scroll(function(){
        var st = $(this).scrollTop();
        
        if ( $(window).width() > 1279 ) {
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
        } else {
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
        }
    });

    $('.fancybox').fancybox();

});