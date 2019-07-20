(function($){
   	
    // Preloader 	 
   	$(window).load(function() { 
       	$('#status').fadeOut();
        $('#preloader').delay(350).fadeOut('slow'); 
        $('body').delay(350).css({'overflow':'visible'});
        $('#countdown').addClass('animated bounceInDown');  
    }); 

	$(document).ready(function() {

        // Animation scroll
		$('a[href*=#]').bind('click', function(e) {
			var anchor = $(this);

			$('html, body').stop().animate({
				scrollTop: $(anchor.attr('href')).offset().top
			}, 500);
			e.preventDefault();
		});

        // Background slideshow
        $.backstretch([
            /*'image/SAITEMPLE.jpg',*/
            'assets/images/sai-5.jpg'/*, 
            'assets/images/sai-6.jpg',
            'assets/images/sai-4.jpg',
            'assets/images/sai-7.jpg'*/
        ], {duration: 3000, fade: 750});

        // Countdown
		$('#countdown').countdown('2019/01/01', function(event) {	// your date here 
        	$(this).html(event.strftime(''
            	+ '<div><div>%D</div><i>Days</i></div>' 
            	+ '<div><div>%H</div><i>Hours</i></div>'
            	+ '<div><div>%M</div><i>Minutes</i></div>'
            	+ '<div><div>%S</div><i>Seconds</i></div>'
        	));
    	});

        // Google Map 
        map = new GMaps({
            el: '#map',
            scrollwheel: false,
            lat: -12.044333,
            lng: -77.028333
        });

        map.addMarker({
            lat: -12.044333,
            lng: -77.028333,
            title: 'Pertness',
            infoWindow: {
                content: '<p><strong>Pertness</strong><br/> We are here</p>'
            }
        });

	});

})(jQuery);
