import React from 'react';

const NotFound = () => {
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
                    <img src="assets/img/bottom-shape2.png" alt="img" />
                </div>
                <div className="container">
                    <div className="gt-page-heading">
                        <div className="gt-breadcrumb-sub-title">
                            <h1 className=" text-white wow fadeInUp" data-wow-delay=".3s">404 Error Page</h1>
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
                                404 Error Page
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* GT Error Section Start */}
            <section className="gt-error-section section-padding fix">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-6">
                            <div className="gt-error-items">
                                <div className="gt-error-image wow fadeInUp" data-wow-delay=".3s">
                                    <img src="assets/img/inner/404.png" alt="img" />
                                </div>
                                <h2 className="wow fadeInUp" data-wow-delay=".5s">
                                    Oops! Page Not Found!
                                </h2>
                                <p className="wow fadeInUp" data-wow-delay=".3s">
                                    There is no page that you are looking for. It may have been erased or moved.
                                </p>
                                <a href="/#/" className="gt-theme-btn wow fadeInUp" data-wow-delay=".5s">
                                    BACK TO HOME
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            {/* GT Footer Section Start */}
            <footer className="gt-footer-section bg-cover" style={{ backgroundImage: "url('assets/img/home-1/footer/footer-img.jpg')" }}>
                <div className="container">
                    <div className="gt-footer-widget-wrapper">
                        <div className="row">
                            <div className="col-xl-4 col-lg-6 col-md-12 wow fadeInUp" data-wow-delay=".3s">
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
                            <div className="col-xl-2 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".5s">
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


                                    </ul>
                                </div>
                            </div>

                            <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".9s">
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
                <div className="footer-bottom">
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

export default NotFound;
