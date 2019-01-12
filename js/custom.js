;(function($){
    "use strict"
//    var nav_offset_top = $('.header_area').height()+50; 
    /*-------------------------------------------------------------------------------
	  Navbar 
	-------------------------------------------------------------------------------*/

	//* Navbar Fixed  
    function navbarFixed(){
        if ( $('.header_area').length ){ 
            $(window).scroll(function() {
                var scroll = $(window).scrollTop();   
                if (scroll >= 30 ) {
                    $(".header_area").addClass("navbar_fixed");
                } else {
                    $(".header_area").removeClass("navbar_fixed");
                }
            });
        };
    };
    navbarFixed();
    
    function sermonsSlider(){
        if ( $('.sermons_slider').length ){
            $('.sermons_slider').owlCarousel({
                loop:true,
                margin: 30,
                items: 2,
                nav:false,
                autoplay: true,
                dots: true,
                smartSpeed: 1500,
                responsiveClass: true,
                responsive: {
                    0: {
                        items: 1,
                    }
                }
            })
        }
    }
    sermonsSlider()
    
    //------- Mailchimp js --------//  

    function mailChimp(){
        $('#mc_embed_signup').find('form').ajaxChimp();
    }
    mailChimp();
    
   /*---------gallery isotope js-----------*/
    function galleryMasonry(){
        if ( $('#gallery').length ){
            $('#gallery').imagesLoaded( function() {
              // images have loaded
                // Activate isotope in container
                $("#gallery").isotope({
                    itemSelector: ".gallery_item",
                    layoutMode: 'masonry',
                    animationOptions: {
                        duration: 750,
                        easing: 'linear'
                    }
                });
            })
        }
    }
    galleryMasonry();
	
	/*----------------------------------------------------*/
    /*  Simple LightBox js
    /*----------------------------------------------------*/
    $('.imageGallery1 .light').simpleLightbox();
    
     /* ===== Parallax Effect===== */
	
    function parallaxEffect() {
        $('.bg-parallax').parallax();
    }
    parallaxEffect();
    
    $('select').niceSelect();
        
    /*----------------------------------------------------*/
    /*  Google map js
    /*----------------------------------------------------*/
    
    if ( $('#mapBox').length ){
        var $lat = $('#mapBox').data('lat');
        var $lon = $('#mapBox').data('lon');
        var $zoom = $('#mapBox').data('zoom');
        //var $marker = $('#mapBox').data('marker');
        var $info = $('#mapBox').data('info');
        var $markerLat = $('#mapBox').data('mlat');
        var $markerLon = $('#mapBox').data('mlon');
        
        var map = new GMaps({
        el: '#mapBox',
        lat: $lat,
        lng: $lon,
        scrollwheel: false,
        scaleControl: true,
        streetViewControl: false,
        panControl: true,
        disableDoubleClickZoom: true,
        mapTypeControl: false,
        zoom: $zoom,
            styles: [
                {
                  "elementType": "geometry",
                  "stylers": [
                    {
                      "color": "#ebe3cd"
                    }
                  ]
                },
                {
                  "elementType": "labels.text.fill",
                  "stylers": [
                    {
                      "color": "#523735"
                    }
                  ]
                },
                {
                  "elementType": "labels.text.stroke",
                  "stylers": [
                    {
                      "color": "#f5f1e6"
                    }
                  ]
                },
                {
                  "featureType": "administrative",
                  "elementType": "geometry.stroke",
                  "stylers": [
                    {
                      "color": "#c9b2a6"
                    }
                  ]
                },
                {
                  "featureType": "administrative.land_parcel",
                  "elementType": "geometry.stroke",
                  "stylers": [
                    {
                      "color": "#dcd2be"
                    }
                  ]
                },
                {
                  "featureType": "administrative.land_parcel",
                  "elementType": "labels.text.fill",
                  "stylers": [
                    {
                      "color": "#ae9e90"
                    }
                  ]
                },
                {
                  "featureType": "landscape.natural",
                  "elementType": "geometry",
                  "stylers": [
                    {
                      "color": "#dfd2ae"
                    }
                  ]
                },
                {
                  "featureType": "poi",
                  "elementType": "geometry",
                  "stylers": [
                    {
                      "color": "#dfd2ae"
                    }
                  ]
                },
                {
                  "featureType": "poi",
                  "elementType": "labels.text.fill",
                  "stylers": [
                    {
                      "color": "#93817c"
                    }
                  ]
                },
                {
                  "featureType": "poi.park",
                  "elementType": "geometry.fill",
                  "stylers": [
                    {
                      "color": "#a5b076"
                    }
                  ]
                },
                {
                  "featureType": "poi.park",
                  "elementType": "labels.text.fill",
                  "stylers": [
                    {
                      "color": "#447530"
                    }
                  ]
                },
                {
                  "featureType": "road",
                  "elementType": "geometry",
                  "stylers": [
                    {
                      "color": "#f5f1e6"
                    }
                  ]
                },
                {
                  "featureType": "road.arterial",
                  "elementType": "geometry",
                  "stylers": [
                    {
                      "color": "#fdfcf8"
                    }
                  ]
                },
                {
                  "featureType": "road.highway",
                  "elementType": "geometry",
                  "stylers": [
                    {
                      "color": "#f8c967"
                    }
                  ]
                },
                {
                  "featureType": "road.highway",
                  "elementType": "geometry.stroke",
                  "stylers": [
                    {
                      "color": "#e9bc62"
                    }
                  ]
                },
                {
                  "featureType": "road.highway.controlled_access",
                  "elementType": "geometry",
                  "stylers": [
                    {
                      "color": "#e98d58"
                    }
                  ]
                },
                {
                  "featureType": "road.highway.controlled_access",
                  "elementType": "geometry.stroke",
                  "stylers": [
                    {
                      "color": "#db8555"
                    }
                  ]
                },
                {
                  "featureType": "road.local",
                  "elementType": "labels.text.fill",
                  "stylers": [
                    {
                      "color": "#806b63"
                    }
                  ]
                },
                {
                  "featureType": "transit.line",
                  "elementType": "geometry",
                  "stylers": [
                    {
                      "color": "#dfd2ae"
                    }
                  ]
                },
                {
                  "featureType": "transit.line",
                  "elementType": "labels.text.fill",
                  "stylers": [
                    {
                      "color": "#8f7d77"
                    }
                  ]
                },
                {
                  "featureType": "transit.line",
                  "elementType": "labels.text.stroke",
                  "stylers": [
                    {
                      "color": "#ebe3cd"
                    }
                  ]
                },
                {
                  "featureType": "transit.station",
                  "elementType": "geometry",
                  "stylers": [
                    {
                      "color": "#dfd2ae"
                    }
                  ]
                },
                {
                  "featureType": "water",
                  "elementType": "geometry.fill",
                  "stylers": [
                    {
                      "color": "#b9d3c2"
                    }
                  ]
                },
                {
                  "featureType": "water",
                  "elementType": "labels.text.fill",
                  "stylers": [
                    {
                      "color": "#92998d"
                    }
                  ]
                }
              ]
        });

        map.addMarker({
            lat: $markerLat,
            lng: $markerLon,
            title: 'Shirdi Sai Mandir, 8370 Old Montgomery Road, Columbia, MD-21045',
        });
    }

})(jQuery)