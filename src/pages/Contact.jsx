import React from 'react';

const Contact = () => {

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);

        // Get all checked addons
        const addons = formData.getAll('addons').join(', ') || 'None';

        const dataObj = {
            name: formData.get('name') || '',
            phone: formData.get('phone') || '',
            checkin: formData.get('checkin') || '',
            checkin_time: formData.get('checkin_time') || '',
            checkout: formData.get('checkout') || '',
            checkout_time: formData.get('checkout_time') || '',
            guests: formData.get('guests') || '',
            rooms: formData.get('rooms') || '',
            amenities: formData.get('amenities') || '',
            addons: addons,
            message: formData.get('message') || ''
        };

        try {
            // Send data to PHP backend
            await fetch('https://victoriousinnovatechsolutions.com/shagunshrihomestay/submit.php', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(dataObj)
            });
        } catch (error) {
            console.error('Error saving to server', error);
        }

        const messageBody = `
Booking Enquiry

Name: ${dataObj.name}
Phone: ${dataObj.phone}
Check-In: ${dataObj.checkin} at ${dataObj.checkin_time}
Check-Out: ${dataObj.checkout} at ${dataObj.checkout_time}
Guests: ${dataObj.guests}
Rooms: ${dataObj.rooms}
Room Preference: ${dataObj.amenities}
Add-ons: ${dataObj.addons}
Message: ${dataObj.message}
    `.trim();

        const mailtoLink = `mailto:tsb.73540@gmail.com?subject=New Booking Enquiry&body=${encodeURIComponent(messageBody)}`;
        const whatsappLink = `https://wa.me/919425904786?text=${encodeURIComponent(messageBody)}`;

        // Trigger email client
        window.location.href = mailtoLink;

        // Open WhatsApp in a new tab after a brief delay
        setTimeout(() => {
            window.open(whatsappLink, '_blank');
        }, 500);
    };

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

            {/* Breadcrumb Section Start */}
            <div className="gt-breadcrumb-wrapper bg-cover" style={{ backgroundImage: "url('assets/img/breadcrumb.jpg')" }}>
                <div className="breadcrumb-shape">
                    <img src="assets/img/bottom-shape2.png" alt="img" />
                </div>
                <div className="container">
                    <div className="gt-page-heading">
                        <div className="gt-breadcrumb-sub-title">
                            <h1 className=" text-white wow fadeInUp" data-wow-delay=".3s">Contact Us</h1>
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
                                Contact Us
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* GT Contacts Section Start */}
            <section className="gt-contacts-section section-padding fix">
                <div className="container">
                    <div className="gt-contact-wrapper">
                        <div className="row g-4">
                            <div className="col-lg-4">
                                <div className="gt-contact-left-items">
                                    <div className="gt-section-title">
                                        <h6 className="wow fadeInUp">
                                            <img src="assets/img/arrow-left.svg" alt="img" />
                                            CONTACT US
                                        </h6>
                                        <h2 className="wow fadeInUp" data-wow-delay=".2s">
                                            Ready to Contact Us
                                        </h2>
                                    </div>
                                    <ul className="gt-contact-list">
                                        <li>
                                            <div className="icon">
                                                <i className="fa-solid fa-location-dot"></i>
                                            </div>
                                            <div className="content">
                                                <p>Location</p>
                                                <h4>
                                                    60/A, Bank Colony, Subhash Nagar, Ujjain
                                                </h4>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="icon">
                                                <i className="fa-solid fa-envelope"></i>
                                            </div>
                                            <div className="content">
                                                <p>Email Address</p>
                                                <h4><a href="mailto:supportinfo@gmail.com">supportinfo@gmail.com</a></h4>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="icon">
                                                <i className="fa-solid fa-phone"></i>
                                            </div>
                                            <div className="content">
                                                <p>Phone No</p>
                                                <h4><a href="tel:+919425904786">(094) 542 - 4780</a></h4>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-8">
                                <div className="gt-contact-right-items">
                                    <h2>
                                        Booking Enquiry
                                    </h2>
                                    <p>Please fill out your details and we will get back to you to confirm your stay.</p>
                                    <form onSubmit={handleSubmit} id="contact-form" className="contact-form-box">
                                        <div className="row g-4 align-items-center">
                                            <div className="col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".3s">
                                                <h4>Your Name</h4>
                                                <div className="form-clt">
                                                    <input type="text" name="name" id="name" placeholder="Full Name" required />
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".5s">
                                                <h4>Your Phone</h4>
                                                <div className="form-clt">
                                                    <input type="number" name="phone" id="phone" placeholder="Phone Number" required />
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".3s">
                                                <h4>Check-In Date</h4>
                                                <div className="form-clt">
                                                    <input type="date" name="checkin" id="checkin" required />
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".5s">
                                                <h4>Check-In Time</h4>
                                                <div className="form-clt">
                                                    <select name="checkin_time" id="checkin_time" className="w-100 bg-white" style={{ height: '56px', padding: '0 20px', border: '1px solid var(--border)', borderRadius: '0' }} required>
                                                        <option value="">Select Time...</option>
                                                        <option value="10:00 AM">10:00 AM</option>
                                                        <option value="11:00 AM">11:00 AM</option>
                                                        <option value="12:00 PM">12:00 PM (Standard)</option>
                                                        <option value="01:00 PM">01:00 PM</option>
                                                        <option value="02:00 PM">02:00 PM</option>
                                                        <option value="03:00 PM">03:00 PM</option>
                                                        <option value="04:00 PM">04:00 PM</option>
                                                        <option value="05:00 PM">05:00 PM</option>
                                                        <option value="06:00 PM">06:00 PM</option>
                                                        <option value="Late Night">Late Night</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".3s">
                                                <h4>Check-Out Date</h4>
                                                <div className="form-clt">
                                                    <input type="date" name="checkout" id="checkout" required />
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".5s">
                                                <h4>Check-Out Time</h4>
                                                <div className="form-clt">
                                                    <select name="checkout_time" id="checkout_time" className="w-100 bg-white" style={{ height: '56px', padding: '0 20px', border: '1px solid var(--border)', borderRadius: '0' }} required>
                                                        <option value="">Select Time...</option>
                                                        <option value="08:00 AM">08:00 AM</option>
                                                        <option value="09:00 AM">09:00 AM</option>
                                                        <option value="10:00 AM">10:00 AM</option>
                                                        <option value="11:00 AM">11:00 AM (Standard)</option>
                                                        <option value="12:00 PM">12:00 PM</option>
                                                        <option value="01:00 PM">01:00 PM</option>
                                                        <option value="02:00 PM">02:00 PM</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".3s">
                                                <h4>Number of Guests</h4>
                                                <div className="form-clt">
                                                    <input type="number" name="guests" id="guests" placeholder="E.g. 2" min="1" required />
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".4s">
                                                <h4>Number of Rooms</h4>
                                                <div className="form-clt">
                                                    <input type="number" name="rooms" id="rooms" placeholder="E.g. 1" min="1" required />
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-md-12 wow fadeInUp" data-wow-delay=".5s">
                                                <h4>Room Preferences</h4>
                                                <div className="form-clt">
                                                    <select name="amenities" className="w-100 bg-white" style={{ height: '56px', padding: '0 20px', border: '1px solid var(--border)', borderRadius: '0' }} required>
                                                        <option value="">Select Option...</option>
                                                        <option value="AC Room">AC Room</option>
                                                        <option value="Non-AC Room">Non-AC Room</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col-lg-12 wow fadeInUp" data-wow-delay=".4s">
                                                <h4>Add-on Facilities (Optional)</h4>
                                                <div className="d-flex flex-wrap gap-4 mt-2 mb-4">
                                                    <label className="d-flex align-items-center gap-2 m-0"><input type="checkbox" name="addons" value="Parking" style={{ width: '20px', height: '20px' }} /> Parking</label>
                                                    <label className="d-flex align-items-center gap-2 m-0"><input type="checkbox" name="addons" value="Meals" style={{ width: '20px', height: '20px' }} /> Meals (Breakfast/Dinner)</label>
                                                    <label className="d-flex align-items-center gap-2 m-0"><input type="checkbox" name="addons" value="Extra Bed" style={{ width: '20px', height: '20px' }} /> Extra Bed</label>
                                                    <label className="d-flex align-items-center gap-2 m-0"><input type="checkbox" name="addons" value="Sightseeing" style={{ width: '20px', height: '20px' }} /> Local Sightseeing</label>
                                                </div>
                                            </div>
                                            <div className="col-lg-12 wow fadeInUp" data-wow-delay=".5s">
                                                <h4>Your Message (Optional)</h4>
                                                <div className="form-clt">
                                                    <textarea name="message" id="message" placeholder="Any special requests?"></textarea>
                                                </div>
                                            </div>
                                            <div className="col-lg-12 wow fadeInUp" data-wow-delay=".5s">
                                                <button type="submit" className="gt-theme-btn border-0 w-100">SEND BOOKING ENQUIRY</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Map Section Start */}
            <div className="googpemap-2">
                <iframe src="https://maps.google.com/maps?q=Do%20Talab,%20Subhash%20Nagar,%20Ujjain&t=&z=15&ie=UTF8&iwloc=&output=embed" style={{ border: "0" }} allowFullScreen="" loading="lazy"></iframe>
            </div>

            {/* GT Instagram Section Start */}


            {/* GT Footer Section Start */}
            <footer className="gt-footer-section bg-cover" style={{ backgroundImage: "url('assets/img/home-1/footer/footer-img.jpg')" }}>
                <div className="container">
                    <div className="gt-footer-widget-wrapper">
                        <div className="row">
                            <div className="col-xl-4 col-lg-6 col-md-12 wow fadeInUp" data-wow-delay=".3s">
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
                                        <li>
                                            <a href="/#/contact">
                                                Contact Us
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

            {/*<< Ajax Mail Js >>*/}

            {/*<< Main.js >>*/}


        </>
    );
};

export default Contact;
