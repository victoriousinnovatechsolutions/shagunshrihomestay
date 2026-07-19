import React from 'react';

const About = () => {
  return (
    <>
      <div className="fix-area">
            <div className="offcanvas__info">
                <div className="offcanvas__wrapper">
                    <div className="offcanvas__content">
                        <div className="offcanvas__top mb-5 d-flex justify-content-between align-items-center">
                            <div className="offcanvas__logo">
                                <a href="/">
                                    <img src="assets/img/logo/black-logo.svg" alt="logo-img" />
                                </a>
                            </div>
                            <div className="offcanvas__close">
                                <button>
                                <i className="fas fa-times"></i>
                                </button>
                            </div>
                        </div>
                        <p className="text d-none d-xl-block">
                            Nullam dignissim, ante scelerisque the  is euismod fermentum odio sem semper the is erat, a feugiat leo urna eget eros. Duis Aenean a imperdiet risus.
                        </p>
                        <div className="mobile-menu fix mb-3"></div>
                        <div className="offcanvas__contact">
                            <h4>Contact Info</h4>
                            <ul>
                                <li className="d-flex align-items-center">
                                    <div className="offcanvas__contact-icon">
                                        <i className="fal fa-map-marker-alt"></i>
                                    </div>
                                    <div className="offcanvas__contact-text">
                                        <a target="_blank" href="/">60/A, Bank Colony, Subhash Nagar, Ujjain</a>
                                    </div>
                                </li>
                                
                                <li className="d-flex align-items-center">
                                    <div className="offcanvas__contact-icon mr-15">
                                        <i className="fal fa-clock"></i>
                                    </div>
                                    <div className="offcanvas__contact-text">
                                        <a target="_blank" href="/">Check-in: 12 PM | Check-out: 11 AM</a>
                                    </div>
                                </li>
                                <li className="d-flex align-items-center">
                                    <div className="offcanvas__contact-icon mr-15">
                                        <i className="far fa-phone"></i>
                                    </div>
                                    <div className="offcanvas__contact-text">
                                        <a href="tel:+919425904786">9425904786</a>
                                    </div>
                                </li>
                            </ul>
                            <div className="header-button mt-4">
                                
                            </div>
                            <a href="/contact" className="gt-theme-btn">BOOK NOW</a>
                            <div className="social-icon d-flex align-items-center">
    <a href="https://www.instagram.com/shagunshri.homestay/" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-instagram"></i></a>
</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="offcanvas__overlay"></div>

        {/* Header Section Start */}
        <header className="header-section">
            <div className="header-top-section">
                <div className="container-fluid">
                    <div className="header-top-wrapper">
                        <ul> 
                            <li>
                                <i className="fa-solid fa-phone-plus"></i>
                                <a href="tel:+919425904786">9425904786</a>
                            </li>
                            
                            <li>
                               <i className="fa-solid fa-location-dot"></i>
                                60/A, Bank Colony, Subhash Nagar, Ujjain
                            </li>
                        </ul>
                        <div className="gt-social-icon d-flex align-items-center">
    <a href="https://www.instagram.com/shagunshri.homestay/" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-instagram"></i></a>
</div>
                    </div>
                </div>
            </div>
             <div id="header-sticky" className="header-1">
                <div className="container-fluid">
                    <div className="mega-menu-wrapper">
                        <div className="header-main">
                            <div className="logo d-xl-none">
                                <a href="/" className="header-logo">
                                    <img src="assets/img/logo/white-logo.svg" alt="logo-img" />
                                </a>
                                <a href="/" className="header-logo-2">
                                    <img src="assets/img/logo/black-logo.svg" alt="logo-img" />
                                </a>
                            </div>
                            <div className="header-left">
                                <div className="mean__menu-wrapper">
                                <div className="main-menu">
                                     <nav id="mobile-menu">
<ul>
    <li>
        <a href="/">Home</a>
    </li>
    <li>
        <a href="/about">About Us</a>
    </li>
    <li>
        <a href="/contact">Contact Us</a>
    </li>
</ul>
</nav>
                                </div>
                            </div>
                            <div className="logo d-none d-xl-block">
                                <a href="/" className="header-logo">
                                    <img src="assets/img/logo/white-logo.svg" alt="logo-img" />
                                </a>
                                <a href="/" className="header-logo-2">
                                    <img src="assets/img/logo/black-logo.svg" alt="logo-img" />
                                </a>
                            </div>
                            </div>
                            <div className="header-right d-flex justify-content-end align-items-center">
                                <div className="hero-button">
                                    <a href="/contact" className="gt-theme-btn">BOOK NOW</a>
                                </div>
                                <div className="header__hamburger d-xl-none my-auto">
                                    <div className="sidebar__toggle">
                                        <div className="header-bar">
                                            <span></span>
                                            <span></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    
        
        {/* Breadcrumb Section Start */}
        <div className="gt-breadcrumb-wrapper bg-cover" style={{backgroundImage: "url('assets/img/breadcrumb.jpg')"}}>
            <div className="breadcrumb-shape">
                <img src="assets/img/bottom-shape.png" alt="img" />
            </div>
            <div className="container">
                <div className="gt-page-heading">
                    <div className="gt-breadcrumb-sub-title">
                        <h1 className=" text-white wow fadeInUp" data-wow-delay=".3s">About Us</h1>
                    </div>
                    <ul className="gt-breadcrumb-items wow fadeInUp" data-wow-delay=".5s">
                        <li>
                            <a href="/">
                               Home
                            </a>
                        </li>
                        <li>
                            <i className="fa-solid fa-chevron-right"></i>
                        </li>
                        <li>
                            About Us
                        </li>
                    </ul>
                </div>
            </div>
        </div>

         {/* GT About Section Start */}
        <section className="gt-about-section-2 section-padding fix section-bg-3">
            <div className="gt-about-shape">
                <img src="assets/img/home-2/about/shape-01.png" alt="img" />
            </div>
            <div className="container">
                <div className="gt-about-wrapper-2">
                    <div className="row g-4">
                        <div className="col-lg-7">
                            <div className="gt-about-left-content">
                                <div className="gt-section-title">
                                    <h6 className="wow fadeInUp">
                                        <img src="assets/img/arrow-left.svg" alt="img" />
                                        About Us
                                    </h6>
                                    <h2 className="wow fadeInUp" data-wow-delay=".2s">
                                    Welcome to our homestay and homestay, Shagunshri
                                    </h2>
                                </div>
                                <div className="gt-about-box-items">
                                    <div className="row align-items-center">
                                        <div className="col-lg-5 wow fadeInUp" data-wow-delay=".4s">
                                            <div className="gt-about-images">
                                                <img src="assets/img/home-2/about/01.jpg" alt="img" />
                                                <span className="title-box">
                                                    <img src="assets/img/home-2/about/tir-vector.png" alt="img" />
                                                    SINCE 2007
                                                </span>
                                            </div>
                                        </div>
                                        <div className="col-lg-7 wow fadeInUp" data-wow-delay=".6s">
                                            <div className="about-content-icon">
                                                <div className="gt-icon-box">
                                                    <div className="icon">
                                                        <i className="flaticon-target"></i>
                                                    </div>
                                                    <div className="content">
                                                        <h3>Our Mission</h3>
                                                        <p>Discover a sanctuary where sun-kissed shores meet timeless elegance.</p>
                                                    </div>
                                                </div>
                                                <div className="gt-icon-box style-2">
                                                    <div className="icon">
                                                        <i className="flaticon-leadership"></i>
                                                    </div>
                                                    <div className="content">
                                                        <h3>Our Vission</h3>
                                                        <p>Our Beach Haven offers a serene escape infused with luxurious comfort </p>
                                                    </div>
                                                </div>
                                                <a href="/about" className="gt-theme-btn">DISCOVER MORE</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5 wow fadeInUp" data-wow-delay=".5s">
                            <div className="gt-about-right-image">
                                <div className="gt-about-image">
                                    <img src="assets/img/home-2/about/02.jpg" alt="img" />
                                    <div className="gt-counter-box">
                                        <h2><span className="gt-count">79</span>+</h2>
                                        <h4>BIG SUITES</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* GT News Section Start */}
        <div className="marquee-section fix section-padding pt-0">
            <div className="marquee">
                <div className="marquee-group">
                    <div className="text">Health and Fitness</div>
                    <div className="text">
                        <img src="assets/img/home-1/star.png" alt="img" />
                    </div>
                    <div className="text">Modern City Homestay</div>
                    <div className="text">
                        <img src="assets/img/home-1/star.png" alt="img" />
                    </div>
                    <div className="text">Best Comfortable Homestay</div>
                    <div className="text">
                        <img src="assets/img/home-1/star.png" alt="img" />
                    </div>
                    <div className="text">Comfortable Homestay in California</div>
                    <div className="text">
                        <img src="assets/img/home-1/star.png" alt="img" />
                    </div>
                    <div className="text">Health and Fitness</div>
                    <div className="text">
                        <img src="assets/img/home-1/star.png" alt="img" />
                    </div>
                </div>
                <div className="marquee-group">
                    <div className="text">Health and Fitness</div>
                    <div className="text">
                        <img src="assets/img/home-1/star.png" alt="img" />
                    </div>
                    <div className="text">Modern City Homestay</div>
                    <div className="text">
                        <img src="assets/img/home-1/star.png" alt="img" />
                    </div>
                    <div className="text">Best Comfortable Homestay</div>
                    <div className="text">
                        <img src="assets/img/home-1/star.png" alt="img" />
                    </div>
                    <div className="text">Comfortable Homestay in California</div>
                    <div className="text">
                        <img src="assets/img/home-1/star.png" alt="img" />
                    </div>
                    <div className="text">Health and Fitness</div>
                    <div className="text">
                        <img src="assets/img/home-1/star.png" alt="img" />
                    </div>
                </div>
                <div className="marquee-group">
                    <div className="text">Health and Fitness</div>
                    <div className="text">
                        <img src="assets/img/home-1/star.png" alt="img" />
                    </div>
                    <div className="text">Modern City Homestay</div>
                    <div className="text">
                        <img src="assets/img/home-1/star.png" alt="img" />
                    </div>
                    <div className="text">Best Comfortable Homestay</div>
                    <div className="text">
                        <img src="assets/img/home-1/star.png" alt="img" />
                    </div>
                    <div className="text">Comfortable Homestay in California</div>
                    <div className="text">
                        <img src="assets/img/home-1/star.png" alt="img" />
                    </div>
                    <div className="text">Health and Fitness</div>
                    <div className="text">
                        <img src="assets/img/home-1/star.png" alt="img" />
                    </div>
                </div>
            </div>
        </div>

        {/* GT Homestay Facilities Section Start */}
        <section className="gt-homestay-facilities-section-2 section-padding pt-0 fix">
            <div className="gt-homestay-facilities-shape">
                <img src="assets/img/home-2/homestay-facilites/Vector-01.png" alt="img" />
            </div>
            <div className="container">
                <div className="gt-homestay-facilities-wrapper-2">
                    <div className="row g-4">
                        <div className="col-lg-6 wow fadeInUp" data-wow-delay=".3s">
                            <div className="gt-homestay-left-images">
                                  <img src="assets/img/home-2/homestay-facilites/01.jpg" alt="img" />
                                <a href="https://www.youtube.com/watch?v=Cn4G2lZ_g2I" className="video-btn ripple video-popup">
                                    <i className="fa-solid fa-play"></i>
                                </a>
                                <div className="gt-counter">
                                    <h2><span className="gt-count">21</span>+</h2>
                                    <p>
                                        Years Of <br /> Experience
                                    </p>
                                </div>
                                <div className="gt-homestay-img wow fadeInUp" data-wow-delay=".5s">
                                    <img src="assets/img/home-2/homestay-facilites/02.jpg" alt="img" />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="gt-homestay-right-content">
                                <div className="gt-section-title mb-0">
                                    <h6 className="wow fadeInUp">
                                        <img src="assets/img/arrow-left.svg" alt="img" />
                                           Homestay Facilities
                                    </h6>
                                    <h2 className="wow fadeInUp" data-wow-delay=".2s">
                                        The Framework
                                    </h2>
                                </div>
                                <p className="gt-homestay-text wow fadeInUp" data-wow-delay=".4s">
                                    The Framework blends modern luxury with timeless design, offering sophisticated spaces, elegant details, and a serene atmosphere crafted for unforgettable beachfront living and elevated guest experiences.
                                </p>
                                <div className="gt-skill-feature-items">
                                    <div className="gt-skill-feature wow fadeInUp" data-wow-delay=".3s">
                                        <h3 className="gt-box-title">Room Service</h3>
                                        <div className="gt-progress">
                                            <div className="gt-progress-bar" style={{width: "90%", animation: "2.6s ease 0s 1 normal none running animate-positive", opacity: "1"}}>
                                                <div className="gt-progress-value"><span className="counter-number2">90</span>%</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="gt-skill-feature wow fadeInUp" data-wow-delay=".4s">
                                        <h3 className="gt-box-title">Breakfast Included</h3>
                                        <div className="gt-progress">
                                            <div className="gt-progress-bar" style={{width: "55%", animation: "2.6s ease 0s 1 normal none running animate-positive", opacity: "1"}}>
                                                <div className="gt-progress-value"><span className="counter-number2">55</span>%</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="gt-skill-feature wow fadeInUp" data-wow-delay=".4s">
                                        <h3 className="gt-box-title">Laundry & Ironing</h3>
                                        <div className="gt-progress">
                                            <div className="gt-progress-bar" style={{width: "79%", animation: "2.6s ease 0s 1 normal none running animate-positive", opacity: "1"}}>
                                                <div className="gt-progress-value"><span className="counter-number2">79</span>%</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <a href="/about" className="gt-theme-btn wow fadeInUp" data-wow-delay=".6s">VIEW All DETAILS</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* GT Homestay Feature Section Start */}
        <section className="gt-homestay-feature-section-2 section-padding fix pt-0">
            <div className="container">
                <div className="gt-homestay-feature-area">
                    <div className="gt-homestay-feature-items wow fadeInUp" data-wow-delay=".2s">
                        <div className="icon">
                            <i className="flaticon-fitness-center"></i>
                        </div>
                        <div className="content">
                            <h3>Fitness Center</h3>
                            <p>Lorem ipsum dolor</p>
                        </div>
                    </div>
                    <div className="gt-homestay-feature-items wow fadeInUp" data-wow-delay=".4s">
                        <div className="icon">
                            <i className="flaticon-disinfect"></i>
                        </div>
                        <div className="content">
                            <h3>Disinfection</h3>
                            <p>Lorem ipsum dolor</p>
                        </div>
                    </div>
                    <div className="gt-homestay-feature-items wow fadeInUp" data-wow-delay=".6s">
                        <div className="icon">
                            <i className="flaticon-suite"></i>
                        </div>
                        <div className="content">
                            <h3>Rooms and Suites</h3>
                            <p>Lorem ipsum dolor</p>
                        </div>
                    </div>
                    <div className="gt-homestay-feature-items wow fadeInUp" data-wow-delay=".8s">
                        <div className="icon">
                            <i className="flaticon-luggage"></i>
                        </div>
                        <div className="content">
                            <h3>Store Luggage</h3>
                            <p>Lorem ipsum dolor</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* GT Testimonial Section Start */}
        <section className="gt-testimonial-section-2 fix section-padding bg-cover" style={{backgroundImage: "url('assets/img/home-2/testimonial/testimonial-bg.jpg')"}}>
            <div className="container">
                <div className="gt-section-title text-center mb-0">
                    <h6 className="wow fadeInUp justify-content-center">
                        <img src="assets/img/arrow-left.svg" alt="img" />
                        Testimonial
                        <img src="assets/img/arrow-left.svg" alt="img" />
                    </h6>
                    <h2 className="wow fadeInUp" data-wow-delay=".2s">
                       What Our Guests Say
                    </h2>
                </div>
                <div className="testimonial-wrapper-2">
                    <div className="map-bg">
                        <img src="assets/img/home-2/testimonial/map-shape.png" alt="img" />
                        <div className="testimonial-box-area">
                            <div className="testimonial-box-2">
                                <div className="star">
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                </div>
                                <p>
                                    From the moment we arrived, every detail was flawless. The staff anticipated our every need, and the suite was pure perfection. We’ll be back soon!"
                                </p>
                                <div className="client-info">
                                    <h4>Marvin McKinney</h4>
                                    <span>Product Manager</span>
                                </div>
                                <div className="arrow-shape">
                                    <img src="assets/img/home-2/testimonial/arrow-bottom.png" alt="img" />
                                </div>
                            </div>
                            <div className="client-info-image">
                                <img src="assets/img/home-2/testimonial/client-1.png" alt="img" />
                            </div>
                        </div>
                        <div className="testimonial-box-area style-2">
                            <div className="testimonial-box-2">
                                <div className="star">
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                </div>
                                <p>
                                    From the moment we arrived, every detail was flawless. The staff anticipated our every need, and the suite was pure perfection. We’ll be back soon!"
                                </p>
                                <div className="client-info">
                                    <h4>Marvin McKinney</h4>
                                    <span>Product Manager</span>
                                </div>
                                <div className="arrow-shape">
                                    <img src="assets/img/home-2/testimonial/arrow-bottom.png" alt="img" />
                                </div>
                            </div>
                            <div className="client-info-image">
                                <img src="assets/img/home-2/testimonial/client-2.png" alt="img" />
                            </div>
                        </div>
                        <div className="testimonial-box-area style-3">
                            <div className="testimonial-box-2">
                                <div className="star">
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                </div>
                                <p>
                                    From the moment we arrived, every detail was flawless. The staff anticipated our every need, and the suite was pure perfection. We’ll be back soon!"
                                </p>
                                <div className="client-info">
                                    <h4>Marvin McKinney</h4>
                                    <span>Product Manager</span>
                                </div>
                                <div className="arrow-shape">
                                    <img src="assets/img/home-2/testimonial/arrow-bottom.png" alt="img" />
                                </div>
                            </div>
                            <div className="client-info-image">
                                <img src="assets/img/home-2/testimonial/client-3.png" alt="img" />
                            </div>
                        </div>
                        <div className="testimonial-box-area style-4">
                            <div className="testimonial-box-2">
                                <div className="star">
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                </div>
                                <p>
                                    From the moment we arrived, every detail was flawless. The staff anticipated our every need, and the suite was pure perfection. We’ll be back soon!"
                                </p>
                                <div className="client-info">
                                    <h4>Marvin McKinney</h4>
                                    <span>Product Manager</span>
                                </div>
                                <div className="arrow-shape">
                                    <img src="assets/img/home-2/testimonial/arrow-bottom.png" alt="img" />
                                </div>
                            </div>
                            <div className="client-info-image">
                                <img src="assets/img/home-2/testimonial/client-4.png" alt="img" />
                            </div>
                        </div>
                        <div className="testimonial-box-area style-5">
                            <div className="testimonial-box-2">
                                <div className="star">
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                </div>
                                <p>
                                    From the moment we arrived, every detail was flawless. The staff anticipated our every need, and the suite was pure perfection. We’ll be back soon!"
                                </p>
                                <div className="client-info">
                                    <h4>Marvin McKinney</h4>
                                    <span>Product Manager</span>
                                </div>
                                <div className="arrow-shape">
                                    <img src="assets/img/home-2/testimonial/arrow-bottom.png" alt="img" />
                                </div>
                            </div>
                            <div className="client-info-image">
                                <img src="assets/img/home-2/testimonial/client-5.png" alt="img" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* GT News Section Start */}
        <section className="gt-news-section section-padding">
            <div className="gt-right-shape">
                <img src="assets/img/home-1/news/right-shape.png" alt="img" />
            </div>
            <div className="container">
                <div className="gt-section-title-area">
                    <div className="gt-section-title">
                        <h6 className="wow fadeInUp">
                            <img src="assets/img/arrow-left.svg" alt="img" />
                            NEWS & BLOG
                        </h6>
                        <h2 className="wow fadeInUp" data-wow-delay=".2s">
                           Our Latest News Feed
                        </h2>
                    </div>
                    <a href="/" className="gt-theme-btn wow fadeInUp" data-wow-delay=".4s">VIEW DETAILS</a>
                </div>
                <div className="row">
                    <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".3s">
                        <div className="gt-news-box-items">
                            <div className="gt-thumb">
                                <img src="assets/img/home-1/news/news-01.jpg" alt="img" />
                                <img src="assets/img/home-1/news/news-01.jpg" alt="img" />
                            </div>
                            <div className="gt-content">
                                <ul className="gt-list">
                                    <li>
                                        <img src="assets/img/home-1/news/arrow-icon.png" alt="img" />
                                        April 12, 2025
                                    </li>
                                    <li>
                                       Tips & Tricks
                                    </li>
                                </ul>
                                <h3>
                                    <a href="/">Comfortable Travel Trends for the Modern Explorer</a>
                                </h3>
                                <a href="/" className="gt-theme-btn">VIEW MORE</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".5s">
                        <div className="gt-news-box-items">
                            <div className="gt-thumb">
                                <img src="assets/img/home-1/news/news-02.jpg" alt="img" />
                                <img src="assets/img/home-1/news/news-02.jpg" alt="img" />
                            </div>
                            <div className="gt-content">
                                <ul className="gt-list">
                                    <li>
                                        <img src="assets/img/home-1/news/arrow-icon.png" alt="img" />
                                        April 12, 2025
                                    </li>
                                    <li>
                                       Homestay
                                    </li>
                                </ul>
                                <h3>
                                    <a href="/">Welcome to Aro: Where Comfortable Feels Effortless</a>
                                </h3>
                                <a href="/" className="gt-theme-btn">VIEW MORE</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".7s">
                        <div className="gt-news-box-items">
                            <div className="gt-thumb">
                                <img src="assets/img/home-1/news/news-03.jpg" alt="img" />
                                <img src="assets/img/home-1/news/news-03.jpg" alt="img" />
                            </div>
                            <div className="gt-content">
                                <ul className="gt-list">
                                    <li>
                                        <img src="assets/img/home-1/news/arrow-icon.png" alt="img" />
                                        April 12, 2025
                                    </li>
                                    <li>
                                      Tips & Enjoy
                                    </li>
                                </ul>
                                <h3>
                                    <a href="/">Toast to the Good Life Our Sommelier’s Picks"</a>
                                </h3>
                                <a href="/" className="gt-theme-btn">VIEW MORE</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* GT Instagram Section Start */}
        <section className="gt-instagram-section section-padding pb-0 fix section-bg">
            <div className="container">
                <div className="gt-section-title text-center">
                    <h6 className="justify-content-center wow fadeInUp">
                        <img src="assets/img/arrow-left.svg" alt="img" />
                        OUR INSTAGRAM
                        <img src="assets/img/arrow-right-2.svg" alt="img" />
                    </h6>
                    <h2 className="wow fadeInUp" data-wow-delay=".2s">
                        Shagunshri Homestay Theme
                    </h2>
                </div>
            </div>
             <div className="swiper gt-instagram-slider">
                    <div className="swiper-wrapper">
                        <div className="swiper-slide">
                            <div className="gt-instagram-image">
                                <img src="assets/img/home-1/instagram/01.jpg" alt="img" />
                                <a href="/" className="gt-icon">
                                    <i className="fa-brands fa-instagram"></i>
                                </a>
                            </div>
                        </div>
                        <div className="swiper-slide">
                            <div className="gt-instagram-image">
                                <img src="assets/img/home-1/instagram/02.jpg" alt="img" />
                                <a href="/" className="gt-icon">
                                    <i className="fa-brands fa-instagram"></i>
                                </a>
                            </div>
                        </div>
                        <div className="swiper-slide">
                            <div className="gt-instagram-image">
                                <img src="assets/img/home-1/instagram/03.jpg" alt="img" />
                                <a href="/" className="gt-icon">
                                    <i className="fa-brands fa-instagram"></i>
                                </a>
                            </div>
                        </div>
                        <div className="swiper-slide">
                            <div className="gt-instagram-image">
                                <img src="assets/img/home-1/instagram/04.jpg" alt="img" />
                                <a href="/" className="gt-icon">
                                    <i className="fa-brands fa-instagram"></i>
                                </a>
                            </div>
                        </div>
                        <div className="swiper-slide">
                            <div className="gt-instagram-image">
                                <img src="assets/img/home-1/instagram/05.jpg" alt="img" />
                                <a href="/" className="gt-icon">
                                    <i className="fa-brands fa-instagram"></i>
                                </a>
                            </div>
                        </div>
                        <div className="swiper-slide">
                            <div className="gt-instagram-image">
                                <img src="assets/img/home-1/instagram/06.jpg" alt="img" />
                                <a href="/" className="gt-icon">
                                    <i className="fa-brands fa-instagram"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
        </section>

        {/* GT Footer Section Start */}
        <footer className="gt-footer-section fix bg-cover" style={{backgroundImage: "url('assets/img/home-1/footer/footer-img.jpg')"}}>
        <div className="container">
            <div className="gt-footer-widget-wrapper">
                <div className="row">
                    <div className="col-xl-4 col-lg-6 col-md-12 wow fadeInUp" data-wow-delay=".2s">
                        <div className="gt-footer-widget-items">
                            <div className="gt-widget-head">
                                <a href="/" className="gt-footer-logo">
                                    <img src="assets/img/logo/white-logo.svg" alt="img" />
                                </a>
                            </div>
                            <div className="gt-footer-content">
                                <p className="text-white">
                                    At Shagunshri, we believe luxury is not just a destination—it’s a feeling, an experience, and a way of life
                                </p>
                                <div className="gt-social-icon d-flex align-items-center">
    <a href="https://www.instagram.com/shagunshri.homestay/" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-instagram"></i></a>
</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-2 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".4s">
                        <div className="gt-footer-widget-items">
                            <div className="gt-widget-head">
                                <h3>Useful links</h3>
                            </div>
                            <ul className="gt-list-area">
                                <li>
                                    <a href="/">
                                        Home
                                    </a>
                                </li>
                                <li>
                                    <a href="/about">
                                        About
                                    </a>
                                </li>
                                <li>
                                    <a href="/">
                                        Rooms
                                    </a>
                                </li>
                                <li>
                                    <a href="/">
                                        Blog
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".6s">
                        <div className="gt-footer-widget-items">
                            <div className="gt-widget-head">
                                <h3>Working Hours</h3>
                            </div>
                            <ul className="gt-working-hour">
                                <li>
                                    Mon to Fri : <span>08:00 - 11:00</span>
                                </li>
                                <li>
                                    Saturday : <span>08:00 - 11:00</span>
                                </li>
                                <li>
                                    Sunday : <span>Closed</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".8s">
                        <div className="gt-footer-widget-items">
                            <div className="gt-widget-head">
                                <h3>Contact Us</h3>
                            </div>
                            <ul className="gt-contact-list">
                                <li>
                                    <img src="assets/img/home-1/footer/location.svg" alt="img" />
                                    <p>60/A, Bank Colony, Subhash Nagar, Ujjain</p>
                                </li>
                                
                                <li>
                                    <img src="assets/img/home-1/footer/call.svg" alt="img" />
                                    <a href="tel:+919425904786">(094) 542 - 4780</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="footer-bottom wow fadeInUp" data-wow-delay=".3s">
            <div className="container">
                <div className="footer-wrapper d-flex align-items-center justify-content-between">
                    <p>
                        Copyright© <a href="/">GRAMENTHEME</a>
                    </p>
                    <ul>
                        <li>
                            <a href="/contact">
                                Terms & Conditions
                            </a>
                        </li>
                        <li>
                            <a href="/contact">
                                Privacy Policy
                            </a>
                        </li>
                        <li>
                            <a href="/contact">
                                Contact Us
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        </footer>
        
        {/*<< All JS Plugins >>*/}
        
        {/*<< Viewport Js >>*/}
        
        {/*<< Bootstrap Js >>*/}
        
        {/*<< nice-selec Js >>*/}
        
        {/*<< Waypoints Js >>*/}
        
        {/*<< Counterup Js >>*/}
        
        {/*<< Swiper Slider Js >>*/}
        
        {/*<< MeanMenu Js >>*/}
        
        {/*<< Parallaxie Js >>*/}
        
        {/*<< Magnific Popup Js >>*/}
        
        {/*<< Wow Animation Js >>*/}
        
        {/*<< Main.js >>*/}
        
    
    </>
  );
};

export default About;
