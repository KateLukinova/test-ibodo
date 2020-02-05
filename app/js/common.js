$(function() {

	$(document).ready(function() {
		$('.owl-carousel').owlCarousel({
            loop:true,
            items:1
        });
        /* Hamburger menu animation */
        $('.open-button').click(function(){
            $(this).toggleClass('open');
        });

        /* Menu fade/in out on mobile */
        $(".open-button").click(function(e){
            e.preventDefault();
            $(".mobile-menu").toggleClass('open');
        });

        $('.popup-open').click(function() {
            $('.popup-fade').fadeIn();
            return false;
        });

        $('.popup-close').click(function() {
            $(this).parents('.popup-fade').fadeOut();
            return false;
        });

        $(document).keydown(function(e) {
            if (e.keyCode === 27) {
                e.stopPropagation();
                $('.popup-fade').fadeOut();
            }
        });

        $('.popup-fade').click(function(e) {
            if ($(e.target).closest('.popup').length == 0) {
                $(this).fadeOut();
            }
        });
    });

});
