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
                                    <a href="/#/">
                                        <img src="assets/img/logo/black-logo.png" alt="logo-img" />
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
                                            <a target="_blank" href="/#/">60/A, Bank Colony, Subhash Nagar, Ujjain</a>
                                        </div>
                                    </li>

                                    <li className="d-flex align-items-center">
                                        <div className="offcanvas__contact-icon mr-15">
                                            <i className="fal fa-clock"></i>
                                        </div>
                                        <div className="offcanvas__contact-text">
                                            <a target="_blank" href="/#/">Check-in: 12 PM | Check-out: 11 AM</a>
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
                                <a href="/#/contact" className="gt-theme-btn">BOOK NOW</a>
                                <div className="social-icon d-flex align-items-center">
                                    <a href="https://www.instagram.com/shagunshri.homestay/" target="_blank" rel="noopener noreferrer" className="d-flex align-items-center" style={{ gap: '8px', textDecoration: 'none' }}>
                                        <i className="fa-brands fa-instagram"></i>
                                        <span style={{ fontSize: '15px', fontWeight: '500' }}>Instagram</span>
                                    </a>
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
                                <a href="https://www.instagram.com/shagunshri.homestay/" target="_blank" rel="noopener noreferrer" className="d-flex align-items-center" style={{ gap: '8px', textDecoration: 'none' }}>
                                    <i className="fa-brands fa-instagram"></i>
                                    <span style={{ fontSize: '14px', fontWeight: '500' }}>Instagram</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="header-sticky" className="header-1">
                    <div className="container-fluid">
                        <div className="mega-menu-wrapper">
                            <div className="header-main">
                                <div className="logo d-xl-none">
                                    <a href="/#/" className="header-logo">
                                        <img src="assets/img/logo/white-logo.png" alt="logo-img" />
                                    </a>
                                    <a href="/#/" className="header-logo-2">
                                        <img src="assets/img/logo/black-logo.png" alt="logo-img" />
                                    </a>
                                </div>
                                <div className="header-left">
                                    <div className="mean__menu-wrapper">
                                        <div className="main-menu">
                                            <nav id="mobile-menu">
                                                <ul>
                                                    <li>
                                                        <a href="/#/">Home</a>
                                                    </li>
                                                    <li>
                                                        <a href="/#/about">About Us</a>
                                                    </li>
                                                    <li>
                                                        <a href="/#/contact">Contact Us</a>
                                                    </li>
                                                </ul>
                                            </nav>
                                        </div>
                                    </div>
                                    <div className="logo d-none d-xl-block">
                                        <a href="/#/" className="header-logo">
                                            <img src="assets/img/logo/white-logo.png" alt="logo-img" />
                                        </a>
                                        <a href="/#/" className="header-logo-2">
                                            <img src="assets/img/logo/black-logo.png" alt="logo-img" />
                                        </a>
                                    </div>
                                </div>
                                <div className="header-right d-flex justify-content-end align-items-center">
                                    <div className="hero-button">
                                        <a href="/#/contact" className="gt-theme-btn">BOOK NOW</a>
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
            <div className="gt-breadcrumb-wrapper bg-cover" style={{ backgroundImage: "url('assets/img/breadcrumb.jpg')" }}>
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
                                <a href="/#/">
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
                                                    <a href="/#/about" className="gt-theme-btn">DISCOVER MORE</a>
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



            {/* GT Homestay Feature Section Start */}
            {/* <section className="gt-homestay-feature-section-2 section-padding fix pt-0">
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
            </section> */}

            {/* GT Testimonial Section Start */}
            <section className="gt-testimonial-section section-padding fix section-bg-3">
                <div className="gt-shape">
                    <img src="assets/img/home-1/testimonial/Vector-01.png" alt="img" />
                </div>
                <div className="container">
                    <div className="gt-testimonial-wrapper">
                        <div className="row g-4">
                            <div className="col-lg-6">
                                <div className="gt-testimonial-left-content">
                                    <div className="gt-section-title mb-0">
                                        <h6 className="wow fadeInUp">
                                            <img src="assets/img/arrow-left.svg" alt="img" />
                                            TESTIMONIAL
                                        </h6>
                                        <h2 className="wow fadeInUp" data-wow-delay=".2s">
                                            What Our Guests Sayz
                                        </h2>
                                    </div>
                                    <p className="gt-testimonial-text wow fadeInUp" data-wow-delay=".4s">
                                        We pride ourselves on delivering unforgettable experiences — but don’t just take our word for it. Our guests return time and again for the impeccable service, exquisite surroundings, and the feeling of true indulgence.
                                    </p>
                                    <div className="gt-client-info wow fadeInUp" data-wow-delay=".6s">
                                        <div className="gt-client-image">
                                            {/* <img src="assets/img/home-1/testimonial/client-info.png" alt="img" /> */}
                                        </div>
                                        <h3>More then <span>25K</span> clients Reviews</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="swiper gt-testimonial-slider">
                                    <div className="swiper-wrapper">
                                        <div className="swiper-slide">
                                            <div className="gt-testimonial-box">
                                                <div className="quote-icon">
                                                    <img src="assets/img/home-1/testimonial/quote-01.png" alt="img" />
                                                </div>
                                                <div className="star">
                                                    <i className="fa-solid fa-star"></i>
                                                    <i className="fa-solid fa-star"></i>
                                                    <i className="fa-solid fa-star"></i>
                                                    <i className="fa-solid fa-star"></i>
                                                    <i className="fa-solid fa-star color-2"></i>
                                                </div>
                                                <p className="gt-testi-text">
                                                    From the moment we arrived, every detail was flawless. The staff anticipated our every need, and the suite was pure perfection. We’ll be back soon!"
                                                </p>
                                                <div className="gt-client-info">
                                                    <div className="gt-client-image">
                                                        <i className="fa-solid fa-user-circle" style={{ fontSize: '56px', color: '#B99D75' }}></i>
                                                    </div>
                                                    <div className="gt-client-content">
                                                        <h4>Rahul Deshmukh</h4>
                                                        <p>Family Guest</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="swiper-slide">
                                            <div className="gt-testimonial-box">
                                                <div className="quote-icon">
                                                    <img src="assets/img/home-1/testimonial/quote-01.png" alt="img" />
                                                </div>
                                                <div className="star">
                                                    <i className="fa-solid fa-star"></i>
                                                    <i className="fa-solid fa-star"></i>
                                                    <i className="fa-solid fa-star"></i>
                                                    <i className="fa-solid fa-star"></i>
                                                    <i className="fa-solid fa-star color-2"></i>
                                                </div>
                                                <p className="gt-testi-text">
                                                    From the moment we arrived, every detail was flawless. The staff anticipated our every need, and the suite was pure perfection. We’ll be back soon!"
                                                </p>
                                                <div className="gt-client-info">
                                                    <div className="gt-client-image">
                                                        <i className="fa-solid fa-user-circle" style={{ fontSize: '56px', color: '#B99D75' }}></i>
                                                    </div>
                                                    <div className="gt-client-content">
                                                        <h4>Priya Kulkarni</h4>
                                                        <p>Solo Traveler</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="swiper-slide">
                                            <div className="gt-testimonial-box">
                                                <div className="quote-icon">
                                                    <img src="assets/img/home-1/testimonial/quote-01.png" alt="img" />
                                                </div>
                                                <div className="star">
                                                    <i className="fa-solid fa-star"></i>
                                                    <i className="fa-solid fa-star"></i>
                                                    <i className="fa-solid fa-star"></i>
                                                    <i className="fa-solid fa-star"></i>
                                                    <i className="fa-solid fa-star color-2"></i>
                                                </div>
                                                <p className="gt-testi-text">
                                                    From the moment we arrived, every detail was flawless. The staff anticipated our every need, and the suite was pure perfection. We’ll be back soon!"
                                                </p>
                                                <div className="gt-client-info">
                                                    <div className="gt-client-image">
                                                        <i className="fa-solid fa-user-circle" style={{ fontSize: '56px', color: '#B99D75' }}></i>
                                                    </div>
                                                    <div className="gt-client-content">
                                                        <h4>Amit Sharma</h4>
                                                        <p>Business Traveler</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="array-button-2 justify-content-center">
                                    <button className="array-prev"><i className="fa-solid fa-chevron-left"></i></button>
                                    <div className="swiper-dot1">
                                        <div className="dot"></div>
                                    </div>
                                    <button className="array-next"><i className="fa-solid fa-chevron-right"></i></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* GT Instagram Section Start */}


            {/* GT Footer Section Start */}
            <footer className="gt-footer-section fix bg-cover" style={{ backgroundImage: "url('assets/img/home-1/footer/footer-img.jpg')" }}>
                <div className="container">
                    <div className="gt-footer-widget-wrapper">
                        <div className="row">
                            <div className="col-xl-4 col-lg-6 col-md-12 wow fadeInUp" data-wow-delay=".2s">
                                <div className="gt-footer-widget-items">
                                    <div className="gt-widget-head">
                                        <a href="/#/" className="gt-footer-logo">
                                            <img src="assets/img/logo/white-logo.png" alt="img" />
                                        </a>
                                    </div>
                                    <div className="gt-footer-content">
                                        <p className="text-white">
                                            At Shagunshri, we believe luxury is not just a destination—it’s a feeling, an experience, and a way of life
                                        </p>
                                        <div className="gt-social-icon d-flex align-items-center mt-3">
                                            <a href="https://www.instagram.com/shagunshri.homestay/" target="_blank" rel="noopener noreferrer" className="d-flex align-items-center text-white" style={{ gap: '10px' }}>
                                                <i className="fa-brands fa-instagram" style={{ fontSize: '24px' }}></i>
                                                <span style={{ fontSize: '16px', fontWeight: '500', letterSpacing: '1px' }}>Instagram</span>
                                            </a>
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
                                            <a href="/#/">
                                                Home
                                            </a>
                                        </li>
                                        <li>
                                            <a href="/#/about">
                                                About
                                            </a>
                                        </li>
                                        <li>
                                            <a href="/#/contact">
                                                Contact Us
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
                        <div className="footer-wrapper d-flex align-items-center justify-content-center text-center">
                            <p className="mb-0" style={{ fontSize: '15px' }}>
                                Copyright © 2026 Shagun Shri Homestay | Developed by <a href="https://victoriousinnovatechsolutions.com/" target="_blank" rel="noopener noreferrer">Victorious Innovatech Solutions</a>
                            </p>
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
