$(document).ready(function() {
    $('.owner-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        dots: false,
        intinite: true,
        prevArrow: '<button type="button" class="slick-prev"></button>',
        nextArrow: '<button type="button" class="slick-next"></button>'
    });
    $('.owner__notes .slick-prev').on('click',function() {
        console.log(123);
        $('.owner-slider').slick('slickPrev');
    });
    $('.owner__notes .slick-next').on('click',function() {
        $('.owner-slider').slick('slickNext');
    });
    $('.about-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        dots: false,
        intinite: true,
        prevArrow: '<button type="button" class="slick-prev"></button>',
        nextArrow: '<button type="button" class="slick-next"></button>'
    });

    $('.sound ').on('click', function(){
        if ($(this).hasClass('sound-on')) {
            $(this).removeClass('sound-on').addClass('sound-off');
        } else {
            $(this).removeClass('sound-off').addClass('sound-on');
        }
    });

    $('.header__menuopen').on('click', function(){
        $('.m-menu').addClass('active');
        $('html,body').css('overflow','hidden');
    });
    $('.main-banner__menuopen').on('click', function(){
        $('.m-menu').addClass('active');
        $('html,body').css('overflow','hidden');
    });
    $('.m-menu__menuclose').on('click', function(){
        $('.m-menu').removeClass('active');
        $('html,body').css('overflow','auto');
    });

    $('.m-form__list').on('click', function(){
        if($(this).hasClass('active')) {
            $(this).removeClass('active');
            $('.m-form__droplist').slideUp();
        } else {
            $(this).addClass('active');
            $('.m-form__droplist').slideDown();
        }
    });
    $('.m-form__droplist .item').on('click', function(){
        let curVal = $(this).html();
        $('.m-form__list .value').html(curVal);
        $('.m-form__list input').val(curVal);
        $('.m-form__list').removeClass('active');
        $('.m-form__droplist').slideUp();

    });

    $('.materials__top, .portfolio-item__top').on('click', function(){
        if($(this).hasClass('active')) {
            $(this).removeClass('active').next().slideUp();
        } else {
            $(this).addClass('active').next().slideDown();
            // $('.awards-slider').slick('reinit');

            $('.awards-slider').slick({
                slidesToShow: 4,
                slidesToScroll: 1,
                dots: false,
                intinite: false,
                prevArrow: '<button type="button" class="slick-prev"></button>',
                nextArrow: '<button type="button" class="slick-next"></button>',
                responsive: [
                    {
                        breakpoint: 1201,
                        settings: {
                            slidesToShow: 3
                        }
                    },
                    {
                        breakpoint: 885,
                        settings: {
                            slidesToShow: 2
                        }
                    },
                    {
                        breakpoint: 601,
                        settings: {
                            slidesToShow: 1
                        }
                    }
                ]       
            });
        }
    });

    $('.blog-item__top').on('click', function(){
        if($(this).hasClass('active')) {
            $(this).removeClass('active').next().find('p').not(':first').slideUp();
        } else {
            $(this).addClass('active').next().find('p').slideDown();

        }
    });

    $('.popup').magnificPopup({
        type: 'inline',
        preloader: false,
        removalDelay: 160,
        closeOnBgClick: true,
        enableEscapeKey: true,
        fixedContentPos: true,
        showCloseBtn: false
    });
    $(document).on('click', '.popup-close', function (e) {
        e.preventDefault();
        $.magnificPopup.close();
    });

    $('.popup-gallery').each(function() {
        $(this).magnificPopup({
            delegate: 'a',
            type: 'image',
            tLoading: 'Loading image #%curr%...',
            mainClass: 'mfp-img-mobile',
            fixedContentPos: true,
            showCloseBtn: false,
            gallery: {
                enabled: true,
                navigateByImgClick: true,
                preload: [0, 1] 
            }
        });
    });

    $('.popup-youtube').magnificPopup({
		disableOn: 700,
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,
		fixedContentPos: false
	});

    $(".polzunok").slider({
		animate: "slow",
        range: true,
        min: 9,
        max: 21,	
        values: [11,18],
        create: function(event, ui) {
            $('.polzunok .ui-slider-handle').eq(0).html('<span>11:00</span>');
            $('.polzunok .ui-slider-handle').eq(1).html('<span>18:00</span>');
        },
		slide : function(event, ui) {	
            $("#result-polzunok").text( "от " + ui.values[ 0 ] + " до " + ui.values[ 1 ] );	            
            $('.polzunok .ui-slider-handle').eq(0).html('<span>'+ui.values[ 0 ]+':00</span>');
            $('.polzunok .ui-slider-handle').eq(1).html('<span>'+ui.values[ 1 ]+':00</span>');
		}
	});
	$( "#result-polzunok" ).text("от " + $("#polzunok").slider("values", 0) + " до " + $("#polzunok").slider("values", 1));
    
});
$(document).mouseup(function (e) {
    
});