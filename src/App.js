import React, { Component } from 'react';
import $ from 'jquery';
// import './components';
import { handlecarosel } from './function';
// const handlecarosel = require('./function');
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


class App extends Component {
    constructor() {
        super();
        this.state = {
            isWomenFragrance: false
        };
        this._handleClick = this._handleClick.bind(this);
        this._handledropDownList = this._handledropDownList.bind(this);
    }

    componentDidMount() {
        this._handleClick();
        this._handledropDownList();
        // handlecarosel();
    }

    componentDidUpdate() {
        handlecarosel();
    }

    _handleClick() {
        $(document).ready(() => {
            $('#dior-accordian a').click(function () {
                const link = $(this);
                const closest_ul = link.closest('ul');
                const parallel_active_links = closest_ul.find('.active');
                const closest_li = link.closest('li');
                const link_status = closest_li.hasClass('active');
                let count = 0;

                closest_ul.find('ul').slideUp(() => {
                    if (++count == closest_ul.find('ul').length) { parallel_active_links.removeClass('active'); }
                });

                if (!link_status) {
                    closest_li.children('ul').slideDown();
                    closest_li.addClass('active');
                }
            });
        });
    }

    _handledropDownList() {
        // $(document).ready(function() {
        $(document).ready(() => {
            let $thisProductSelection;
            $('.productSelection').click(function () {
                $('.productSelection').find('.active').removeClass('active');
                $thisProductSelection = $(this);
                $(this).addClass('active');
                if (!$(this).find('ul').is(':visible')) {
                    $(this).find('ul').fadeToggle();
                } else {
                    $(this).find('ul').fadeToggle();
                    $(this).removeClass('active');
                }
            });

            $('.productSelection>ul>li').click(function () {
                $thisProductSelection.removeClass('active');
                $thisProductSelection.find('.heading').html($(this).html());
                $thisProductSelection.find('ul').scrollTop(0);
            });
        });
    }


    onClickSlick = () => {
        handlecarosel();
    }


    render() {
        const settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 3
        };
        return (
            <div>
                <div className="dior-container">
                    {/* Dior Header */}
                    <section className="dior-top-header">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12">
                                    <a href="/"><img src={require('./images/dior-logo.png')} className="dior-logo" /></a>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* end: Dior Header */}
                    {/* Dior Content */}
                    <section className="dior-body">
                        <div className="container">
                            <div className="row">
                                {/* Category Menu */}
                                <div className="col-md-3 col-left p-l-0">


                                    {/* Carousel */}

                                    <div id="dior-carousel" className="dior-carousel dior-carousel-mobile carousel slide" data-ride="carousel">
                                        {/* Indicators */}
                                        <ol className="carousel-indicators">
                                            <li data-target="#dior-carousel" data-slide-to={0} className="active" />
                                            <li data-target="#dior-carousel" data-slide-to={1} />
                                            <li data-target="#dior-carousel" data-slide-to={2} />
                                        </ol>
                                        {/* Wrapper for slides */}
                                        <div className="carousel-inner">
                                            <div className="item active">
                                                <a href="/"><img src={require('./images/cover.png')} alt="Dior" /></a>
                                            </div>
                                            <div className="item">
                                                <img src={require('./images/cover.png')} alt="Dior" />
                                            </div>
                                            <div className="item">
                                                <img src={require('./images/cover.png')} alt="Dior" />
                                            </div>
                                        </div>
                                        {/* Left and right controls */}
                                        <a className="left carousel-control" href="#dior-carousel" data-slide="prev">
                                            <span className="glyphicon glyphicon-chevron-left"><img src={require('./images/carousel-arrow-left.png')} /></span>
                                        </a>
                                        <a className="right carousel-control" href="#dior-carousel" data-slide="next">
                                            <span className="glyphicon glyphicon-chevron-left"><img src={require('./images/carousel-arrow-right.png')} /></span>
                                        </a>
                                    </div>


                                    <h3 className="category-title-bold">DIOR</h3>
                                    <div id="dior-accordian">
                                        <ul>
                                            <li >
                                                <h3><a href="#"><img src={require('./images/arrow-close.png')} />Women's Fragrance</a></h3>
                                                <ul className="submenu" >
                                                    <li><a href="#">J'ADORE</a></li>
                                                    <li><a href="#">MISS DIOR</a></li>
                                                    <li><a href="#">LES ESCALES DE DIOR</a></li>
                                                    <li><a href="#">POISON</a></li>
                                                    <li><a href="#">DIOR ADDICT</a></li>
                                                    <li><a href="#">DUNE</a></li>
                                                    <li><a href="#">DOLCE VITA</a></li>
                                                    <li><a href="#">LES CRÉATIONS DE MONSIEUR DIOR</a></li>
                                                    <li><a href="#">VIEW ALL</a></li>
                                                </ul>
                                            </li>
                                            <li>
                                                <h3><a href="#"><img src={require('./images/arrow-close.png')} />Men's Fragrance</a></h3>
                                                <ul className="submenu">
                                                    <li><a href="#">SAUVAGE</a></li>
                                                    <li><a href="#">DIOR HOMME</a></li>
                                                    <li><a href="#">FAHRENHEIT</a></li>
                                                    <li><a href="#">EAU SAUVAGE</a></li>
                                                    <li><a href="#">HIGHER</a></li>
                                                    <li><a href="#">DUNE POUR HOMME</a></li>
                                                    <li><a href="#">JULES</a></li>
                                                    <li><a href="#">VIEW ALL</a></li>
                                                </ul>
                                            </li>
                                            <li className>
                                                <h3><a href="#"><img src={require('./images/arrow-close.png')} />Makeup</a></h3>
                                                <ul className="submenu">
                                                    <li className="had-submenu">
                                                        <a href="#" className="had-submenu-title"><img src={require('./images/arrow-close.png')} />Face</a>
                                                        <ul>
                                                            <li><a href="#">Face Primers</a></li>
                                                            <li><a href="#">Foundation</a></li>
                                                            <li><a href="#">BB Cremes</a></li>
                                                            <li><a href="#">Concealers</a></li>
                                                            <li><a href="#">Powders</a></li>
                                                            <li><a href="#">Healthy Glow Makeup</a></li>
                                                            <li className="had-submenu">
                                                                <a href="#" className="had-submenu-title"><img src={require('./images/arrow-close.png')} />Level 3</a>
                                                                <ul>
                                                                    <li><a href="#">Level 4</a></li>
                                                                    <li><a href="#">Level 4</a></li>
                                                                </ul>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li className="had-submenu">
                                                        <a href="#" className="had-submenu-title"><img src={require('./images/arrow-close.png')} />EYES</a>
                                                        <ul>
                                                            <li><a href="#">Eyes Primers</a></li>
                                                            <li><a href="#">Mascaras</a></li>
                                                            <li><a href="#">Eyeshadows</a></li>
                                                            <li><a href="#">Liners</a></li>
                                                            <li><a href="#">Eyebrows</a></li>
                                                        </ul>
                                                    </li>
                                                    <li className="had-submenu">
                                                        <a href="#" className="had-submenu-title"><img src={require('./images/arrow-close.png')} />LIPS</a>
                                                        <ul>
                                                            <li><a href="#">Lips Primers</a></li>
                                                            <li><a href="#">Lipsticks</a></li>
                                                            <li><a href="#">Gloss</a></li>
                                                            <li><a href="#">Lipliners</a></li>
                                                        </ul>
                                                    </li>
                                                    <li className="had-submenu">
                                                        <a href="#" className="had-submenu-title"><img src={require('./images/arrow-close.png')} />NAILS</a>
                                                        <ul>
                                                            <li><a href="#">Nail Lacquers</a></li>
                                                            <li><a href="#">Manicure</a></li>
                                                        </ul>
                                                    </li>
                                                    <li><a href="#">VIEW ALL</a></li>
                                                </ul>
                                            </li>
                                            <li>
                                                <h3><a href="#"><img src={require('./images/arrow-close.png')} />Skincare</a></h3>
                                                <ul className="submenu">
                                                    <li><a href="#">THE SKINCARE MASTERPIECE</a></li>
                                                    <li><a href="#">EXCEPTIONAL REGENERATING &amp; PERFECTING SKINCARE</a></li>
                                                    <li><a href="#">EXCEPTIONAL BRIGHTENING &amp; REGENERATING SKINCARE</a></li>
                                                    <li><a href="#">FUNDAMENTAL DETOXIFYING &amp; ENERGIZING SKINCARE</a></li>
                                                    <li><a href="#">GLOBAL AGE-DEFYING &amp; PERFECTION SKINCARE</a></li>
                                                    <li><a href="#">EXPERT WRINKLE CORRECTION SKINCARE</a></li>
                                                    <li><a href="#">BRIGHTENING SKINCARE</a></li>
                                                    <li><a href="#">PRO-YOUTH HYDRATION SKINCARE</a></li>
                                                    <li><a href="#">CLEANSERS</a></li>
                                                    <li><a href="#">SUN PROTECTION AND SELF-TANNERS</a></li>
                                                    <li><a href="#">MEN DERMO-COSMETIC SKINCARE</a></li>
                                                    <li><a href="#">VIEW ALL</a></li>
                                                </ul>
                                            </li>
                                            <li>
                                                <h3><a href="#"><img src={require('./images/arrow-close.png')} />Dior Expertise</a></h3>
                                                <ul className="submenu">
                                                    <li><a href="#">FRAGRANCE EXPERTISE</a></li>
                                                    <li><a href="#">MAKEUP EXPERTISE</a></li>
                                                    <li><a href="#">SKINCARE EXPERTISE</a></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                {/* end: Category Menu */}
                                {/* Content */}
                                <div className="col-md-9 col-right p-r-0">
                                    <div id="dior-carousel" className="dior-carousel carousel slide" data-ride="carousel">
                                        {/* Indicators */}
                                        <ol className="carousel-indicators">
                                            <li data-target="#dior-carousel" data-slide-to={0} className="active" />
                                            <li data-target="#dior-carousel" data-slide-to={1} />
                                            <li data-target="#dior-carousel" data-slide-to={2} />
                                        </ol>
                                        {/* Wrapper for slides */}
                                        <div className="carousel-inner">
                                            <div className="item active">
                                                <img src={require('./images/cover.png')} alt="Dior" />
                                                <div className="carousel-caption">
                                                    <p>When Christian Dior created his fashion house in 1947, he imagined a new femininity, a total femininity that would lack nothing. Today, from dresses to accessories, fragrances to lipstick, up to the most expert skincare, the Dior House enhances the beauty of women, bringing radiance and modernity.</p>
                                                </div>
                                            </div>
                                            <div className="item">
                                                <img src={require('./images/cover.png')} alt="Dior" />
                                                <div className="carousel-caption">
                                                    <p>When Christian Dior created his fashion house in 1947, he imagined a new femininity, a total femininity that would lack nothing. Today, from dresses to accessories, fragrances to lipstick, up to the most expert skincare, the Dior House enhances the beauty of women, bringing radiance and modernity.</p>
                                                </div>
                                            </div>
                                            <div className="item">
                                                <img src={require('./images/cover.png')} alt="Dior" />
                                                <div className="carousel-caption">
                                                    <p>When Christian Dior created his fashion house in 1947, he imagined a new femininity, a total femininity that would lack nothing. Today, from dresses to accessories, fragrances to lipstick, up to the most expert skincare, the Dior House enhances the beauty of women, bringing radiance and modernity.</p>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Left and right controls */}
                                        <a className="left carousel-control" href="#dior-carousel" data-slide="prev">
                                            <span className="glyphicon glyphicon-chevron-left"><img src={require('./images/carousel-arrow-left.png')} /></span>
                                        </a>
                                        <a className="right carousel-control" href="#dior-carousel" data-slide="next">
                                            <span className="glyphicon glyphicon-chevron-right"><img src={require('./images/carousel-arrow-right.png')} /></span>
                                        </a>
                                    </div>
                                    <div className="dior-nav">
                                        <ul>
                                            <li className="intro-text">CHANGE UNIVERSE: </li>
                                            <li className="intro-text"><a href="/">WOMEN'S FRAGRANCE</a></li>
                                            <li className="intro-text"><a href="/">MEN'S FRAGRANCE</a></li>
                                            <li className="intro-text"><a href="/">MAKEUP</a></li>
                                            <li className="intro-text"><a href="/">SKINCARE</a></li>
                                        </ul>
                                    </div>
                                    <div className="dior-promo">
                                        <div className="row">
                                            <div className="col-md-12">
                                                <a href="/">
                                                    <img src={require('./images/promo-j-adore.png')} />
                                                    {/* <img src="./images/promo-j-adore.png" /> */}
                                                    <h3 className="category-title">DISCOVER THE NEW J'ADORE UNIVERSE</h3>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="seperator" />
                                    <div className="dior-products">
                                        <div className="row">
                                            <div className="col-md-12">
                                                <h3 className="category-tile">NEW ARRIVAL</h3>
                                            </div>
                                        </div>

                                        <Slider {...settings}>
                                            <div>
                                                    <div className="product-card product-slide">
                                                        <a>
                                                            <img src={require("./images/product-1.png")} className="img-responsive" />
                                                        </a>
                                                        <div className="product-description">
                                                            <span className="tags tag-dutyfree">Duty Free</span>
                                                            <p className="product-name">JOY BY DIOR</p>
                                                            <p className="product-detail">EAU DE PARFUM</p>
                                                            <div className="product-select" />
                                                            <p className="product-price full-price">9,999.00 THB</p>
                                                            <p className="product-price sale-price">9,999.00 THB</p>
                                                            <div className="product-tags">
                                                                <span className="tags tag-best-seller">Best Seller</span>
                                                                <span className="tags tag-hot-item">Hot Item</span>
                                                            </div>
                                                            <div className="product-button">
                                                                <a className="btn btn-view-more" tabIndex={0}>VIEW MORE</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                            </div>
                                            <div>
                                                <div className="item" >
                                                    <div className="product-card product-slide">
                                                        <a href="/" tabIndex={0}>
                                                            <img src={require("./images/product-2.png")} className="img-responsive" />
                                                        </a>
                                                        <div className="product-description">
                                                            <span className="tags tag-dutyfree">Duty Free</span>
                                                            <p className="product-name">JOY BY DIOR</p>
                                                            <p className="product-detail">EAU DE PARFUM</p>
                                                            <div className="product-select">
                                                                <div className="productSelection" id="selectBox_product">
                                                                    <div className="heading">30ML</div>
                                                                    <ul>
                                                                        <li data-value="value 1">50ML</li>
                                                                        <li data-value="value 2">100ML</li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                            <p className="product-price full-price" />
                                                            <p className="product-price normal-price">9,999.00 THB</p>
                                                            <div className="product-tags">
                                                                <span className="tags tag-best-seller">Best Seller</span>
                                                                <span className="tags tag-hot-item">Hot Item</span>
                                                            </div>
                                                            <div className="product-button">
                                                                <a className="btn btn-view-more" tabIndex={0}>VIEW MORE</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div>
                                                <div className="item" style={{width: '100%', display: 'inline-block'}}>
                                                    <div className="product-card product-slide">
                                                        <a href="/" tabIndex={0}>
                                                            <img src={require("./images/product-3.png")} className="img-responsive" />
                                                        </a>
                                                        <div className="product-description">
                                                            <span className="tags tag-dutyfree">Duty Free</span>
                                                            <p className="product-name">JOY BY DIOR</p>
                                                            <p className="product-detail">EAU DE PARFUM</p>
                                                            <div className="product-select">
                                                                <div className="productSelection" id="selectBox_product">
                                                                    <div className="heading"><span className="square"><img src={require("./images/color_chip/color01.jpg")} /></span> 635 COPPER LAVA</div>
                                                                    <ul>
                                                                        <li data-value="value 2"><span className="square"><img src={require("./images/color_chip/color02.jpg")} /></span> <span className="color-text">162 MISS SATIN</span></li>
                                                                        <li data-value="value 3"><span className="square"><img src={require("./images/color_chip/color03.jpg")} /></span> <span className="color-text">784 RED LAVA</span></li>
                                                                        <li data-value="value 4"><span className="square"><img src={require("./images/color_chip/color04.jpg")} /></span> <span className="color-text">162 MISS SATIN</span></li>
                                                                        <li data-value="value 5"><span className="square"><img src={require("./images/color_chip/color05.jpg")} /></span> <span className="color-text">784 RED LAVA</span></li>
                                                                        <li data-value="value 6"><span className="square"><img src={require("./images/color_chip/color06.jpg")} /></span> <span className="color-text">162 MISS SATIN</span></li>
                                                                        <li data-value="value 7"><span className="square"><img src={require("./images/color_chip/color07.jpg")} /></span> <span className="color-text">784 RED LAVA</span></li>
                                                                        <li data-value="value 8"><span className="square"><img src={require("./images/color_chip/color08.jpg")} /></span> <span className="color-text">162 MISS SATIN<span /></span></li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                            <p className="product-price full-price" />
                                                            <p className="product-price normal-price">9,999.00 THB</p>
                                                            <div className="product-tags">
                                                                <span className="tags tag-best-seller">Best Seller</span>
                                                                <span className="tags tag-hot-item">Hot Item</span>
                                                            </div>
                                                            <div className="product-button">
                                                                <a className="btn btn-view-more" tabIndex={0}>VIEW MORE</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div>
                                                <div className="slick-slide slick-current slick-active" data-slick-index={3} aria-hidden="false" style={{width: '261px'}}><div><div className="item" style={{width: '100%', display: 'inline-block'}}>
                                                    <div className="product-card product-slide">
                                                        <a href="/" tabIndex={0}>
                                                            <img src={require("./images/product-6.png")} className="img-responsive" />
                                                        </a>
                                                        <div className="product-description">
                                                            <span className="tags tag-dutyfree">Duty Free</span>
                                                            <p className="product-name">JOY BY DIOR</p>
                                                            <p className="product-detail">EAU DE PARFUM</p>
                                                            <div className="product-select">
                                                                <div className="productSelection" id="selectBox_product">
                                                                    <div className="heading">30ML</div>
                                                                    <ul>
                                                                        <li data-value="value 1">50ML</li>
                                                                        <li data-value="value 2">100ML</li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                            <p className="product-price full-price" />
                                                            <p className="product-price normal-price">9,999.00 THB</p>
                                                            <div className="product-tags">
                                                                <span className="tags tag-best-seller">Best Seller</span>
                                                                <span className="tags tag-hot-item">Hot Item</span>
                                                            </div>
                                                            <div className="product-button">
                                                                <a className="btn btn-view-more" tabIndex={0}>VIEW MORE</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div></div></div>
                                            </div>
                                            <div>
                                                <div className="slick-slide slick-current slick-active" data-slick-index={3} aria-hidden="false" style={{width: '261px'}}><div><div className="item" style={{width: '100%', display: 'inline-block'}}>
                                                    <div className="product-card product-slide">
                                                        <a href="/" tabIndex={0}>
                                                            <img src={require("./images/product-6.png")} className="img-responsive" />
                                                        </a>
                                                        <div className="product-description">
                                                            <span className="tags tag-dutyfree">Duty Free</span>
                                                            <p className="product-name">JOY BY DIOR</p>
                                                            <p className="product-detail">EAU DE PARFUM</p>
                                                            <div className="product-select">
                                                                <div className="productSelection" id="selectBox_product">
                                                                    <div className="heading">30ML</div>
                                                                    <ul>
                                                                        <li data-value="value 1">50ML</li>
                                                                        <li data-value="value 2">100ML</li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                            <p className="product-price full-price" />
                                                            <p className="product-price normal-price">9,999.00 THB</p>
                                                            <div className="product-tags">
                                                                <span className="tags tag-best-seller">Best Seller</span>
                                                                <span className="tags tag-hot-item">Hot Item</span>
                                                            </div>
                                                            <div className="product-button">
                                                                <a className="btn btn-view-more" tabIndex={0}>VIEW MORE</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div></div></div>
                                            </div>
                                        </Slider>
                                    </div>
                                    <div className="seperator" />
                                    <div className="dior-products">
                                        <div className="row">
                                            <div className="col-md-12">
                                                <h3 className="category-tile">BEST SELLER</h3>
                                            </div>
                                        </div>

                                        <Slider {...settings}>
                                            <div>
                                                <div className="product-card product-slide">
                                                    <a href="/" tabIndex={-1}>
                                                        <img src={require('./images/product-6.png')} className="img-responsive" />
                                                    </a>
                                                    <div className="product-description">
                                                        <span className="tags tag-dutyfree">Duty Free</span>
                                                        <p className="product-name">JOY BY DIOR</p>
                                                        <p className="product-detail">EAU DE PARFUM</p>
                                                        <div className="product-select">
                                                            <div className="productSelection" id>
                                                                <div className="heading">30ML</div>
                                                                <ul>
                                                                    <li data-value="value 1">50ML</li>
                                                                    <li data-value="value 2">100ML</li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <p className="product-price full-price" />
                                                        <p className="product-price normal-price">9,999.00 THB</p>
                                                        <div className="product-tags">
                                                            <span className="tags tag-best-seller">Best Seller</span>
                                                            <span className="tags tag-hot-item">Hot Item</span>
                                                        </div>
                                                        <div className="product-button">
                                                            <a className="btn btn-view-more" tabIndex={-1}>VIEW MORE</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div>
                                                <div className="product-card product-slide">
                                                    <a href="/" tabIndex={-1}>
                                                        <img src={require('./images/product-6.png')} className="img-responsive" />
                                                    </a>
                                                    <div className="product-description">
                                                        <span className="tags tag-dutyfree">Duty Free</span>
                                                        <p className="product-name">JOY BY DIOR</p>
                                                        <p className="product-detail">EAU DE PARFUM</p>
                                                        <div className="product-select">
                                                            <div className="productSelection" id>
                                                                <div className="heading">30ML</div>
                                                                <ul>
                                                                    <li data-value="value 1">50ML</li>
                                                                    <li data-value="value 2">100ML</li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <p className="product-price full-price" />
                                                        <p className="product-price normal-price">9,999.00 THB</p>
                                                        <div className="product-tags">
                                                            <span className="tags tag-best-seller">Best Seller</span>
                                                            <span className="tags tag-hot-item">Hot Item</span>
                                                        </div>
                                                        <div className="product-button">
                                                            <a className="btn btn-view-more" tabIndex={-1}>VIEW MORE</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div>
                                                <div className="product-card product-slide">
                                                    <a href="/" tabIndex={-1}>
                                                        <img src={require('./images/product-6.png')} className="img-responsive" />
                                                    </a>
                                                    <div className="product-description">
                                                        <span className="tags tag-dutyfree">Duty Free</span>
                                                        <p className="product-name">JOY BY DIOR</p>
                                                        <p className="product-detail">EAU DE PARFUM</p>
                                                        <div className="product-select">
                                                            <div className="productSelection" id>
                                                                <div className="heading">30ML</div>
                                                                <ul>
                                                                    <li data-value="value 1">50ML</li>
                                                                    <li data-value="value 2">100ML</li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <p className="product-price full-price" />
                                                        <p className="product-price normal-price">9,999.00 THB</p>
                                                        <div className="product-tags">
                                                            <span className="tags tag-best-seller">Best Seller</span>
                                                            <span className="tags tag-hot-item">Hot Item</span>
                                                        </div>
                                                        <div className="product-button">
                                                            <a className="btn btn-view-more" tabIndex={-1}>VIEW MORE</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div>
                                                <div className="product-card product-slide">
                                                    <a href="/" tabIndex={0}>
                                                        <img src={require('./images/product-4.png')} className="img-responsive" />
                                                    </a>
                                                    <div className="product-description">
                                                        <span className="tags tag-dutyfree">Duty Free</span>
                                                        <p className="product-name">JOY BY DIOR</p>
                                                        <p className="product-detail">EAU DE PARFUM</p>
                                                        <div className="product-select">
                                                            <div className="productSelection" id="selectBox_product">
                                                                <div className="heading">30ML</div>
                                                                <ul>
                                                                    <li data-value="value 1">50ML</li>
                                                                    <li data-value="value 2">100ML</li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <p className="product-price full-price" />
                                                        <p className="product-price normal-price">9,999.00 THB</p>
                                                        <div className="product-tags">
                                                            <span className="tags tag-best-seller">Best Seller</span>
                                                            <span className="tags tag-hot-item">Hot Item</span>
                                                        </div>
                                                        <div className="product-button">
                                                            <a className="btn btn-view-more" tabIndex={0}>VIEW MORE</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div>
                                                <div className="product-card product-slide">
                                                    <a href="/" tabIndex={0}>
                                                        <img src={require('./images/product-5.png')} className="img-responsive" />
                                                    </a>
                                                    <div className="product-description">
                                                        <span className="tags tag-dutyfree">Duty Free</span>
                                                        <p className="product-name">JOY BY DIOR</p>
                                                        <p className="product-detail">EAU DE PARFUM</p>
                                                        <div className="product-select">
                                                            <div className="productSelection" id="selectBox_product">
                                                                <div className="heading">30ML</div>
                                                                <ul>
                                                                    <li data-value="value 1">50ML</li>
                                                                    <li data-value="value 2">100ML</li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <p className="product-price full-price" />
                                                        <p className="product-price normal-price">9,999.00 THB</p>
                                                        <div className="product-tags">
                                                            <span className="tags tag-best-seller">Best Seller</span>
                                                            <span className="tags tag-hot-item">Hot Item</span>
                                                        </div>
                                                        <div className="product-button">
                                                            <a className="btn btn-view-more" tabIndex={0}>VIEW MORE</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </Slider>
                                    </div>


                                    <div className="seperator" />
                                    <div className="dior-banner">
                                        <h3 className="category-title">DISCOVER THE UNIQUE SAVOIR-FAIRE OF DIOR</h3>
                                        <ul className="banner-list">
                                            <li>
                                                <a href="expertise-perfume.html">
                                                    <img src={require('./images/discover-fragrance.png')} className="banner-desktop" />
                                                    <img src={require('./images/discover-fragrance-mo.png')}className="banner-mobile" />
                                                </a>
                                            </li>
                                            <li>
                                                <a href="expertise-makeup.html">
                                                    <img src={require('./images/discover-makeup.png')} className="banner-desktop" />
                                                    <img src={require('./images/discover-makeup-mo.png')} className="banner-mobile" />
                                                </a>
                                            </li>
                                            <li>
                                                <a href="expertise-skincare.html">
                                                    <img src={require('./images/discover-skincare.png')} className="banner-desktop" />
                                                    <img src={require('./images/discover-skincare-mo.png')} className="banner-mobile" />
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                {/* end: Content */}
                            </div>
                        </div>
                    </section>
                    {/* end: Dior Content */}
                </div>
                {/* jQuery (necessary for Bootstrap's JavaScript plugins) */}
                {/* Include all compiled plugins (below), or include individual files as needed */}
            </div>

        );
    }
}

export default App;
