// pages/services.js

import { useState } from 'react';

export default function Services() {
    const [detailsVisibility, setDetailsVisibility] = useState({
        GoldDetail: false,
        DiamondDetail: false,
        PricelessDetail: false,
        InterstellarDetail: false,
    });

    const toggleDetail = (detailId) => {
        setDetailsVisibility(prevState => ({
            ...prevState,
            [detailId]: !prevState[detailId],
        }));
    };

    const submitForm = () => {
        // Handle form submission logic here
        // For demonstration, you can console.log the form data
        const formData = {
            email: document.getElementById('email').value,
            message: document.getElementById('message').value,
        };
        console.log(formData);
    };

    return (
        <div>
            <nav>
                <a href="home.html"><img src="icon.jpg" alt="Home" className="home-icon" /></a>
                <div className="mobile-menu-icon" onClick={toggleMobileMenu}>☰</div>
                <ul className="mobile-menu-links" id="mobileMenu">
                    <li><a href="home.html">Home</a></li>
                    <li><a href="services.html">Services</a></li>
                    <li><a href="ourteam.html">Our Team</a></li>
                    <li><a href="contact.html">Contact Us</a></li>
                </ul>
            </nav>

            <section id="services">
                <h2>Services</h2>
                <p>Getting Mastery Camos can get very frustrating overtime, With our service you can skip the tedious process and let our dedicated Team to get your Mastery Camos within a week!</p>
                <article onClick={() => toggleDetail('GoldDetail')}>
                    <h3 style={{ color: '#ffffff' }}>Gilded Camo Unlock Price</h3>
                    <img src="gilded camo.png" alt="Gold Camo" />
                    <div id="GoldDetail" className={detailsVisibility.GoldDetail ? '' : 'hidden'}>
                        <p>Let our experts unlock the Gilded camo for any weapon of your choice.</p>
                        <p1>Rp.50,000 X 1 Weapon of Choice</p1>
                    </div>
                </article>

                {/* Repeat the same structure for other services */}
            </section>

            <section id="contact">
                <h2>Contact Us</h2>
                <form onSubmit={submitForm}>
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
