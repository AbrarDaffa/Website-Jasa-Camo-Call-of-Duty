// pages/ourteam.js

import { useState, useEffect } from 'react';

export default function OurTeam() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchRandomUsers = async () => {
            try {
                const response = await fetch('https://randomuser.me/api/?results=8');
                const data = await response.json();
                setUsers(data.results);
            } catch (error) {
                console.error('Error fetching random user data:', error);
            }
        };

        fetchRandomUsers();
    }, []);

    const calculateAge = (dateOfBirth) => {
        const today = new Date();
        const birthDate = new Date(dateOfBirth);
        let age = today.getFullYear() - birthDate.getFullYear();
        const month = today.getMonth() - birthDate.getMonth();
        if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        return age;
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

            <header>
                <h1>Our Teams</h1>
            </header>

            <section id="teamSection">
                {users.map((user, index) => (
                    <article key={index}>
                        <img src={user.picture.thumbnail} alt={`${user.name.first} ${user.name.last}`} />
                        <p>{`${user.name.first} ${user.name.last}`}</p>
                        <p>Email: {user.email}</p>
                        <p>Date of Birth: {new Date(user.dob.date).toLocaleDateString()}</p>
                        <p>Birth Place: {`${user.location.city}, ${user.location.country}`}</p>
                        <p>Gender: {user.gender}</p>
                        <p>Age: {calculateAge(user.dob.date)}</p>
                    </article>
                ))}
            </section>

            <footer>
                <p>&copy; Abesaurus 2024</p>
                <p>We are not sponsored with Call of Duty by any means, with that said all due copyright is owned by Activision.</p>
            </footer>
        </div>
    );
}
