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

    $('.fancybox').fancybox();

});