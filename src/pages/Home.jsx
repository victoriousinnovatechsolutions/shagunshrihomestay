import React from 'react';

const Home = () => {
    return (
        <>
            <div className="fix-area">
                <div className="offcanvas__info">
                    <div className="offcanvas__wrapper">
                        <div className="offcanvas__content">
                            <div className="offcanvas__top mb-5 d-flex justify-content-between align-items-center">
                                <div className="offcanvas__logo">
                                    <a href="/#/">
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
                                    <a href="/#/" className="header-logo">
                                        <img src="assets/img/logo/white-logo.svg" alt="logo-img" />
                                    </a>
                                    <a href="/#/" className="header-logo-2">
                                        <img src="assets/img/logo/black-logo.svg" alt="logo-img" />
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
                                            <img src="assets/img/logo/white-logo.svg" alt="logo-img" />
                                        </a>
                                        <a href="/#/" className="header-logo-2">
                                            <img src="assets/img/logo/black-logo.svg" alt="logo-img" />
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

            {/* GT Hero Section Start */}
            <section className="gt-hero-section gt-hero-1 fix bg-cover" style={{ backgroundImage: "url('assets/img/home-1/hero/hero-bg.jpg')" }}>
                <div className="container-fluid">
                    <div className="row g-4">
                        <div className="col-xl-7">
                            <div className="gt-hero-content">
                                <span className="wow fadeInUp"><img src="assets/img/arrow-right.svg" alt="img" /> WELCOME TO OUR HOMESTAY</span>
                                <h1 className="wow fadeInUp" data-wow-delay=".2s">
                                    Your Comfortable Stay in Ujjain
                                </h1>
                                <p className="wow fadeInUp" data-wow-delay=".4s">
                                    Relax in clean, comfortable AC & Non-AC rooms near the heart of Ujjain. Experience warm hospitality and a peaceful environment for you and your family.
                                </p>
                                <div className="gt-hero-button wow fadeInUp" data-wow-delay=".6s">
                                    <a href="/#/" className="gt-theme-btn">DISCOVER ROOM</a>
                                    <a href="/#/contact" className="gt-theme-btn style-2">Book Now</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-5">
                            <div className="gt-hero-image">
                                <img src="assets/img/home-1/hero/hero-01.png" alt="img" />
                                <div className="gt-arrow-shape">
                                    <img src="assets/img/home-1/hero/arrow-shape.png" alt="img" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* GT Service Section Start */}
            <section className="gt-service-section fix section-padding fix section-padding">
                <div className="container">
                    <div className="gt-section-title text-center">
                        <h6 className="justify-content-center wow fadeInUp">
                            <img src="assets/img/arrow-left.svg" alt="img" />
                            FACILITIES
                            <img src="assets/img/arrow-right-2.svg" alt="img" />
                        </h6>
                        <h2 className="wow fadeInUp" data-wow-delay=".2s">
                            Hotl’s Facilities
                        </h2>
                    </div>
                    <div className="row">
                        <div className="col-xxl-2 col-xl-3 col-lg-3 col-md-4 col-sm-6 wow fadeInUp">
                            <div className="service-box-items">
                                <div className="icon">
                                    <i className="flaticon-key-card"></i>
                                </div>
                                <h4>Smart Key</h4>
                            </div>
                        </div>
                        <div className="col-xxl-2 col-xl-3 col-lg-3 col-md-4 col-sm-6 wow fadeInUp" data-wow-delay=".2s">
                            <div className="service-box-items">
                                <div className="icon">
                                    <i className="flaticon-free-parking"></i>
                                </div>
                                <h4>Free Car Parking</h4>
                            </div>
                        </div>
                        <div className="col-xxl-2 col-xl-3 col-lg-3 col-md-4 col-sm-6 wow fadeInUp" data-wow-delay=".4s">
                            <div className="service-box-items">
                                <div className="icon">
                                    <i className="flaticon-wifi-router"></i>
                                </div>
                                <h4>Fast Wifi Interner</h4>
                            </div>
                        </div>
                        <div className="col-xxl-2 col-xl-3 col-lg-3 col-md-4 col-sm-6 wow fadeInUp" data-wow-delay=".6s">
                            <div className="service-box-items">
                                <div className="icon">
                                    <i className="flaticon-homestay-service"></i>
                                </div>
                                <h4>Room Service</h4>
                            </div>
                        </div>
                        <div className="col-xxl-2 col-xl-3 col-lg-3 col-md-4 col-sm-6 wow fadeInUp" data-wow-delay=".8s">
                            <div className="service-box-items">
                                <div className="icon">
                                    <i className="flaticon-fast-food"></i>
                                </div>
                                <h4>Food & Drink</h4>
                            </div>
                        </div>
                        <div className="col-xxl-2 col-xl-3 col-lg-3 col-md-4 col-sm-6 wow fadeInUp" data-wow-delay="1s">
                            <div className="service-box-items">
                                <div className="icon">
                                    <i className="flaticon-swimming"></i>
                                </div>
                                <h4>Swimming - Pool</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* GT About Section Start */}
            <section className="gt-about-section fix section-padding pt-0">
                <div className="gt-right-shape">
                    <img src="assets/img/home-1/about/right-shape.png" alt="img" />
                </div>
                <div className="container">
                    <div className="gt-about-wrapper">
                        <div className="row g-4">
                            <div className="col-lg-6">
                                <div className="gt-about-image-items">
                                    <div className="gt-about-image wow fadeInUp" data-wow-delay=".2s">
                                        <img src="assets/img/home-1/about/about-01.jpg" alt="img" className="wow fadeInUp" data-wow-delay=".2s" />
                                        <div className="gt-about-image-2 wow fadeInUp" data-wow-delay=".4s">
                                            <img src="assets/img/home-1/about/about-02.jpg" alt="img" />
                                        </div>
                                    </div>
                                    <div className="gt-award-box wow fadeInUp" data-wow-delay=".6s">
                                        <div className="gt-icon">
                                            <img src="assets/img/home-1/about/award.svg" alt="img" />
                                        </div>
                                        <h4>AWARD WINING HOMESTAY</h4>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="gt-about-content">
                                    <div className="gt-section-title mb-0">
                                        <h6 className="wow fadeInUp">
                                            <img src="assets/img/arrow-left.svg" alt="img" />
                                            ABOUT US
                                        </h6>
                                        <h2 className="wow fadeInUp" data-wow-delay=".2s">
                                            More Than a Stay – A Legacy of Comfortable"t
                                        </h2>
                                    </div>
                                    <p className="gt-about-text wow fadeInUp" data-wow-delay=".4s">
                                        At our homestay, luxury is more than just a word — it's a tradition. From exquisite design to personalized service, every detail is thoughtfully curated to create unforgettable experiences. Whether you're here for relaxation or celebration, we offer more than a stay — we offer a legacy of comfort, elegance, and world-class hospitality.
                                    </p>
                                    <ul className="gt-icon-list wow fadeInUp" data-wow-delay=".6s">
                                        <li>
                                            <img src="assets/img/home-1/about/icon-1.png" alt="img" />
                                            <span>The Greatest <br /> Lighting</span>
                                        </li>
                                        <li>
                                            <img src="assets/img/home-1/about/icon-2.png" alt="img" />
                                            <span>Pick up & <br /> Drop</span>
                                        </li>
                                    </ul>
                                    <ul className="gt-list wow fadeInUp" data-wow-delay=".8s">
                                        <li>
                                            <i className="flaticon-arrow-right"></i>
                                            Morning Meals for Everyone
                                        </li>
                                        <li>
                                            <i className="flaticon-arrow-right"></i>
                                            The Best Parking Space
                                        </li>
                                    </ul>
                                    <div className="gt-about-button wow fadeInUp" data-wow-delay="1s">
                                        <a href="/#/about" className="gt-theme-btn">ABOUT US</a>
                                        <div className="gt-call-icon">
                                            <div className="gt-call">
                                                <i className="flaticon-phone"></i>
                                            </div>
                                            <div className="gt-content">
                                                <span>Booking Now</span>
                                                <a href="tel:+919425904786">9425904786</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



            {/* GT Booking Reserve Section Start */}
            <section className="gt-booking-reserve-section fix section-padding pb-0">
                <div className="gt-car-shape float-bob-x">
                    <img src="assets/img/home-1/car-shape.png" alt="img" />
                </div>
                <div className="container">
                    <div className="gt-booking-reserve-wrapper">
                        <div className="gt-section-title text-center">
                            <h6 className="justify-content-center wow fadeInUp">
                                <img src="assets/img/arrow-left.svg" alt="img" />
                                GETTING A SEAT
                                <img src="assets/img/arrow-right-2.svg" alt="img" />
                            </h6>
                            <h2 className="text-white wow fadeInUp" data-wow-delay=".2s">
                                Locate and Reserve Your Stay
                            </h2>
                        </div>
                        <div className="text-center wow fadeInUp" data-wow-delay=".4s" style={{ marginTop: '40px' }}>
                            <a href="/#/contact" className="gt-theme-btn" style={{ padding: '15px 40px', fontSize: '18px' }}>GO TO BOOKING FORM</a>
                        </div>
                    </div>
                </div>
                <div className="gt-booking-reserve-video parallaxie bg-cover" style={{ backgroundImage: "url('assets/img/home-1/booking-video-bg.jpg')" }}>
                    <div className="gt-video-items">
                        <a href="https://www.youtube.com/watch?v=Cn4G2lZ_g2I" className="video-btn video-popup">
                            <i className="fa-solid fa-play"></i>
                        </a>
                    </div>
                </div>
            </section>

            {/* GT Special Offer Section Start */}


            {/* GT Counter Section Start */}
            <div className="gt-counter-section fix">
                <div className="container">
                    <div className="gt-counter-wrapper">
                        <div className="gt-counter">
                            <h2>
                                <span className="gt-count">799</span>
                            </h2>
                            <p>Active</p>
                        </div>
                        <div className="gt-counter">
                            <h2>
                                <span className="gt-count">35</span>+
                            </h2>
                            <p>People</p>
                        </div>
                        <div className="gt-counter">
                            <h2>
                                <span className="gt-count">21</span>+
                            </h2>
                            <p>Years </p>
                        </div>
                        <div className="gt-counter border-none">
                            <h2>
                                <span className="gt-count">12</span>
                            </h2>
                            <p>Award Winner</p>
                        </div>
                    </div>
                </div>
            </div>

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
                                            <img src="assets/img/home-1/testimonial/client-info.png" alt="img" />
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
                                                        <img src="assets/img/home-1/testimonial/client-info-right-img.png" alt="img" />
                                                    </div>
                                                    <div className="gt-client-content">
                                                        <h4>Marvin McKinney</h4>
                                                        <p>Product Manager</p>
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
                                                        <img src="assets/img/home-1/testimonial/client-info-right-img.png" alt="img" />
                                                    </div>
                                                    <div className="gt-client-content">
                                                        <h4>Marvin McKinney</h4>
                                                        <p>Product Manager</p>
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
                                                        <img src="assets/img/home-1/testimonial/client-info-right-img.png" alt="img" />
                                                    </div>
                                                    <div className="gt-client-content">
                                                        <h4>Marvin McKinney</h4>
                                                        <p>Product Manager</p>
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
                                Copyright © 2026 Shree samarth homeo | Developed by <a href="https://victoriousinnovatechsolutions.com/" target="_blank" rel="noopener noreferrer">Victorious Innovatech Solutions</a>
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

export default Home;
