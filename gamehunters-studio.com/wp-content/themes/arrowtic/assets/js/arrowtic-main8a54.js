(function ($) {
"use strict";

    // window-load
    $(window).on('load', function () {
        $("#loading").fadeOut(500);
    })

    // mobile menu
    $("#mobile-menu").meanmenu({
        meanMenuContainer: ".mobile-menu",
        meanScreenWidth: "991",
        onePage: true
    });

    /* TOP Menu Stick  */
    $(window).on('scroll', function () {
        if ($(this).scrollTop() > 250) {
            $('#sticky-header').addClass("sticky-menu");
        }
        else {
            $('#sticky-header').removeClass("sticky-menu");
        }
    });

    // offcanvas menu
    $(".menu-tigger").on("click", function () {
        $(".offcanvas-menu,.offcanvas-overly").addClass("active");
        return false;
    });
    $(".menu-close,.offcanvas-overly").on("click", function () {
        $(".offcanvas-menu,.offcanvas-overly").removeClass("active");
    });

    // Pricing Table
    $(".pricing-box").hover(function(){
        var cur = $(this);
        $(".pricing-box").removeClass("active");
        cur.addClass("active");
        return true;
    });


    // counterUp

    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });

    // popup
    $('.view').magnificPopup({
        type: 'image',
        gallery: {
            enabled: true
        },
    });

    $('.video-view').magnificPopup({
        type: 'iframe',
    });

    $('#container').imagesLoaded( function() {
    // portfolio - active
        var $grid = $('.portfolio-active').isotope({
            itemSelector: '.grid-item',
            layoutMode: 'fitRows',
            percentPosition: true,
            masonry: {
                // use outer width of grid-sizer for columnWidth
                columnWidth: 1
            }
        })

        // filter items on button click
        $('.portfolio-menu').on('click', 'button', function () {
            var filterValue = $(this).attr('data-filter');
            $grid.isotope({ filter: filterValue });
        });
        //for menu active class
        $('.portfolio-menu button').on('click', function (event) {
            $(this).siblings('.active').removeClass('active');
            $(this).addClass('active');
            event.preventDefault();
        });

        $("#masonry-layout").justifiedGallery({
            rowHeight : 260,
            margins : 15,
        });

        $("#masonry-layout2").justifiedGallery({
            sizeRangeSuffixes : {
                500: '_t',
                2000: '_m'
            },
            rowHeight : 290,

            margins : 15,

            // // or can be 'justify' or 'hide'
            lastRow : 'nojustify', 

            // // if row width / available space > 0.75 it will be always justified 
            // // (i.e. lastRow setting is not considered)
            justifyThreshold: 0.75,

            extension : /\.[^.\\/]+$/,
            refreshTime : 100,
            randomize : false
        });
    });

})(jQuery);