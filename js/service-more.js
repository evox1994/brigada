$(document).ready(function(){
	$('.b-2-slider').slick({
        infinite: true,
        slidesToShow: 3,
        responsive: [
            {
            	breakpoint: 768,
            	settings: {
                	slidesToShow: 1
                }
            },
            {
            	breakpoint: 1279,
            	settings: {
            		slidesToShow: 2
            	}
            }
        ]
    });
});