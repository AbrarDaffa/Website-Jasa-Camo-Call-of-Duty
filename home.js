// pages/index.js

import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
    let index = 0;
    const slides = document.querySelectorAll('.slide');
    const descriptions = document.querySelectorAll('.slide-description');

    const toggleMobileMenu = () => {
        const menu = document.getElementById("mobileMenu");
        menu.style.display = (menu.style.display === "block") ? "none" : "block";
    }

    const nextSlide = () => {
        slides[index].classList.remove('active');
        descriptions[index].style.display = 'none';
        index = (index + 1) % slides.length;
        slides[index].classList.add('active');
        descriptions[index].style.display = 'block';
    }

    const prevSlide = () => {
        slides[index].classList.remove('active');
        descriptions[index].style.display = 'none';
        index = (index - 1 + slides.length) % slides.length;
        slides[index].classList.add('active');
        descriptions[index].style.display = 'block';
    }

    return (
        <div>
            <Head>
                <title>CoD Camo Mastery Services</title>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Head>
            <nav>
                <a href="home.html"><img src="icon.jpg" alt="Home" className={styles.homeIcon} /></a>
                <div className={styles.mobileMenuIcon} onClick={toggleMobileMenu}>☰</div>
                <ul className={styles.mobileMenuLinks} id="mobileMenu">
                    <li><a href="home.html">Home</a></li>
                    <li><a href="services.html">Services</a></li>
                    <li><a href="ourteam.html">Our Team</a></li>
                    <li><a href="contact.html">Contact Us</a></li>
                </ul>
            </nav>

            <section id="slideshow" className={styles.slideContainer}>
                <button className={`${styles.slideButton} ${styles.prev}`} onClick={prevSlide}>Previous</button>
                <button className={`${styles.slideButton} ${styles.next}`} onClick={nextSlide}>Next</button>

                <h1>Get your desired Mastery Camo with us! </h1>
                <h2>Types of Mastery Camos in Call of Duty MW3</h2>
                <div className={`${styles.slide} active`}>
                    <img src="gilded camo.png" alt="Gilded Camo - This camo shines brightly, reflecting your mastery." />
                    <div className={styles.slideDescription}>Gilded Camo - This camo shines brightly, reflecting your mastery.</div>
                </div>
                <div className={styles.slide}>
                    <img src="forged camo.png" alt="Forged Camo - Crafted with precision, this camo signifies strength and resilience." />
                    <div className={styles.slideDescription}>Forged Camo - Crafted with precision, this camo signifies strength and resilience.</div>
                </div>
                <div className={styles.slide}>
                    <img src="priceless camo.png" alt="Priceless Camo - A rare and valuable camo, showcasing your unique achievements." />
                    <div className={styles.slideDescription}>Priceless Camo - A rare and valuable camo, showcasing your unique achievements.</div>
                </div>
                <div className={styles.slide}>
                    <img src="interstellar.jpg" alt="Interstellar Camo - Explore the universe with this mesmerizing camo." />
                    <div className={styles.slideDescription}>Interstellar Camo - Explore the universe with this mesmerizing camo.</div>
                </div>
                <h3> The procedures of pre-ordering these Camos will be counted for one weapon each, with that said prices will vary from the amount of weapons that wanted to be grinded by our dear Customers.</h3>
            </section>

            <section id="contact">
                <h2>Contact Us</h2>
                <form onSubmit="showPopup(); return false;">
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
