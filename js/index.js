$(document).ready(function() {
    var showcase = $('#showcase');
    showcase.owlCarousel({
        loop: true,
        margin: 0,
        autoplay: true,
        autoplayTimeout: 4000,
        autoplayHoverPause: false,
        nav: false,
        items: 1,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn'
    });

    $(".owl-item .welcome_info").on('mouseenter', function() {
        showcase.trigger('stop.owl.autoplay')
    });
    $(".owl-item .welcome_info").on('mouseleave', function() {
        showcase.trigger('play.owl.autoplay')
    });

    var test = $(".testimony-carousel");
    test.owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        autoplay: true,
        autoplayTimeout: 4000,
        items: 1,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn'
    });

    //services over-lay animation
    $('#services .thumbnail .overlay-info').addClass('animated slideInUp');
    $('#services .thumbnail .poster .overlay-info .dark_product_overlay').hide();

    $('#services .thumbnail').on({
        'mouseenter': function() {
            var dark_overlay = $(this).children('div.poster').children('div.overlay-info').find('.dark_product_overlay');
            dark_overlay.addClass('animated fadeInUp')
            dark_overlay.show();
        },
        'mouseleave': function() {
            var dark_overlay = $(this).children('div.poster').children('div.overlay-info').find('.dark_product_overlay');
            dark_overlay.hide();
        }

    })

    //products hover and over-lay property
    $('#products .jumbotron .product-overlay').hide();
    $('#products .jumbotron').on({
        'mouseenter': function() {
            var color = $(this).find('i').css('color');
            $(this).css('border-color', color);
            $(this).find('div.product-info').addClass('product-info-moveup');
            $(this).find('div.product-overlay').css('background', color).addClass('animated fadeInLeft').show();
        },
        'mouseleave': function() {
            $(this).css('border-color', '#E4DEDE');
            $(this).find('div.product-overlay').hide();
            $(this).find('div.product-info').removeClass('product-info-moveup');
        }
    })


    function whyAdeptalColumnTextAlignment() {
        if($(window).width() < 769) {
            $('.adeptal-column .content p').addClass('text-center');
        }else{
            $('.adeptal-column .content p').removeClass('text-center');
        }
    }

    //this function runs when the document is read or loaded
    whyAdeptalColumnTextAlignment();
    //this runs when the screen is resized 
    $(window).bind('resize',  whyAdeptalColumnTextAlignment);

    




})