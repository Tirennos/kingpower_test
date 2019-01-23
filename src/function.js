// import $ from "jquery";
const $ = window.$;
// var Slick = window.Slick;

export function handlecarosel() {
	console.log('sssssssss', $('.index-slick-carouse'));
    $('.slider').not('.slick-initialized').slick({
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
}



