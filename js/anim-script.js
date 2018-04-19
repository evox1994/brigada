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

        if ( st > pos ) {
            anim_add();
        } else {
            anim_remove();
        }
    });

});