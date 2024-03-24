// pages/contact.js

import { useState } from 'react';

export default function Contact() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    }

    const showPopup = () => {
        alert("We will come back to you within 24 Hours. Thank You!");
    }

    return (
        <div>
            <nav>
                <a href="home.html"><img src="icon.jpg" alt="Home" className="home-icon" /></a>
                <div className="mobile-menu-icon" onClick={toggleMobileMenu}>☰</div>
                <ul className="mobile-menu-links" id="mobileMenu" style={{ display: isMobileMenuOpen ? 'block' : 'none' }}>
                    <li><a href="home.html">Home</a></li>
                    <li><a href="services.html">Services</a></li>
                    <li><a href="ourteam.html">Our Team</a></li>
                    <li><a href="contact.html">Contact Us</a></li>
                </ul>
            </nav>

            <section id="contact">
                <h2>Contact Us</h2>
                <form onSubmit={showPopup}>
                    <label htmlFor="email" style={{ color: '#ffffff' }}>Your Email:</label><br />
                    <input type="email" id="email" name="email" required /><br />
                    <label htmlFor="message" style={{ color: '#ffffff' }}>Message:</label><br />
                    <textarea id="message" name="message" required></textarea><br />
                    <input type="submit" value="Submit" />
                </form>
            </section>

            <footer>
                <p>&copy; Abesaurus 2024</p>
                <p>We are not sponsored with Call of Duty by any means, with that said all due copyright is owned by Activision.</p>
            </footer>
        </div>
    );
}
