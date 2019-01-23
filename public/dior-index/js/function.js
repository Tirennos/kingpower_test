import $ from "jquery";

$(document).ready(function() {
    $("#nam").click(function() {
        $('.index-slick-carousel').slick({
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 3,
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        arrows: false,
                        centerMode: false,
                        slidesToShow: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        arrows: false,
                        centerMode: false,
                        slidesToShow: 2
                    }
                }
            ]
        })
    });

	$("#dior-accordian a").click(function() {
		var link = $(this);
		var closest_ul = link.closest("ul");
		var parallel_active_links = closest_ul.find(".active")
		var closest_li = link.closest("li");
		var link_status = closest_li.hasClass("active");
		var count = 0;

		closest_ul.find("ul").slideUp(function() {
			if (++count == closest_ul.find("ul").length)
				parallel_active_links.removeClass("active");
		});

		if (!link_status) {
			closest_li.children("ul").slideDown();
			closest_li.addClass("active");
		}
	})
})

/*! CORE-TEMPLATE 30-11-2018 */

// Navigation Script
// Note: You can Change "el" and any BTQ project You are working on.
// If you are workin with multiple slick items it should be structured sequncially on the code

$(document).ready(function(){

	// SPP Quantity Counter
	$('.quantityPlus').click(function() {
		if ($(this).prev().val() < 50) {
			$(this).prev().val(+$(this).prev().val() + 1);
		}
	});
	$('.quantityMinus').click(function() {
		if ($(this).next().val() > 1) {
			if ($(this).next().val() > 1) $(this).next().val(+$(this).next().val() - 1);
		}
	});

	// SPP Image Zoom
	$(".zoom").anythingZoomer();

	// SPP Carousel
	$('.itemSlider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		fade: true,
		asNavFor: '.itemThumbnail'
	});
	$('.itemThumbnail').slick({
		vertical: true,
		slidesToShow: 5,
		slidesToScroll: 1,
		asNavFor: '.itemSlider',
		dots: false,
		arrows: true,
		focusOnSelect: true,
		infinite: true,
		responsive: [
			{
				breakpoint: 992,
						settings: {
							slidesToShow: 3,
							slidesToScroll: 1
						}
				}
		]
	});
})


/* Select to Pick Color in SSP page */
$('.select--white').on('click','.placeholder',function(){
	var parent = $(this).closest('.select--white');
	if ( ! parent.hasClass('is-open')){
		parent.addClass('is-open');
		$('.select--white.is-open').not(parent).removeClass('is-open');
	}else{
		parent.removeClass('is-open');
	}
}).on('click','ul>li',function(){
	var parent = $(this).closest('.select--white');
	parent.removeClass('is-open').find('.placeholder').text( $(this).text() );
	parent.find('input[type=hidden]').attr('value', $(this).attr('data-value') );
	var colorID = $(this).attr('data-colorid');
	$('.blockColorPick>ul>li').removeClass('active');
	$('#'+colorID).addClass('active');
});

$('.blockColorPick>ul>li').on('click',function(){
	var parent = $('.placeholder').closest('.select--white');
	parent.removeClass('is-open').find('.placeholder').text( $(this).attr('data-text') );
	parent.find('input[type=hidden]').attr('value', $(this).attr('data-value') );
	$('.blockColorPick>ul>li').removeClass('active');
	$(this).addClass('active');
});


/* Slick Carousel */

	/* Index */
	$('.index-slick-carousel').slick({
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 3,
		responsive: [
			{
			  breakpoint: 768,
			  settings: {
				arrows: false,
				centerMode: false,
				slidesToShow: 2
			  }
			},
			{
				breakpoint: 480,
				settings: {
				  arrows: false,
				  centerMode: false,
				  slidesToShow: 2
				}
			  }
		  ]
	});

	/* SSP Page */
	$('.slick-carousel').slick({
		infinite: true,
		slidesToShow: 4,
		slidesToScroll: 4,
		responsive: [
			{
			  breakpoint: 768,
			  settings: {
				arrows: false,
				centerMode: true,
				centerPadding: '40px',
				slidesToShow: 2
			  }
			}
		  ]
	});


/*! Product Select Option  */
$(function(){
	var $thisProductSelection;
	$('.productSelection').click(function(){
		$('.productSelection').find('.active').removeClass('active');
		$thisProductSelection = $(this);
		$(this).addClass('active');
		if( !$(this).find('ul').is(':visible') ){
			$(this).find('ul').fadeToggle();
		}else{
			$(this).find('ul').fadeToggle();
			$(this).removeClass('active');
		}
	});

	$('.productSelection>ul>li').click(function(){
		$thisProductSelection.removeClass('active');
		$thisProductSelection.find('.heading').html($(this).html());
		$thisProductSelection.find('ul').scrollTop(0);
	});
});
