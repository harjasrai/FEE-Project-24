import React from 'react';
import "../src/App.css";
import ReactDOM from 'react-dom';
    function slideLeft() {
        // Add logic to slide left
        console.log('Slide left');
    }

    function slideRight() {
        // Add logic to slide right
        console.log('Slide right');
    }

        const App = () => {
            return (
                <div>
                    <header className="navbar">
                        <div className="logo">Terrain</div>
                        <nav>
                            <ul>
                                <li><a href="#home">Home</a></li>
                                <li><a href="#products">Peaks</a></li>
                                <li><a href="#about">About</a></li>
                                <li><a href="#contact">Contact</a></li>
                            </ul>
                        </nav>
                    </header>

                    <section id="home" className="hero">
                        <div className="hero-content">
                            <h1>Explore the Majestic Mountains</h1>
                            <p>"Getting to the top is optional. Getting down is mandatory."</p>
                            <a href="#products" className="btn">Famous Peaks</a>
                        </div>
                    </section>

                    <section id="products" className="products">
                        <h2>Peaks</h2>
                        <div className="product-grid">
                            <div className="product">
                                <img src="images/product1.jpg" alt="Product 1" />
                                <h3>Mount Everest</h3>
                                <p>The world's tallest mountain, standing 8848m tall.</p>
                                <a href="https://en.wikipedia.org/wiki/Mount_Everest" className="btn">Learn More</a>
                            </div>
                            <div className="product">
                                <img src="images/product2.jpg" alt="Product 2" />
                                <h3>Kangchenjunga</h3>
                                <p>Standing 8586m tall, it is the highest peak in India.</p>
                                <a href="https://en.wikipedia.org/wiki/Kangchenjunga" className="btn">Learn More</a>
                            </div>
                            <div className="product">
                                <img src="images/product3.jpg" alt="Product 3" />
                                <h3>Mount Kilimanjaro</h3>
                                <p>Highest in Africa, Highest free-standing mountain in the world.</p>
                                <a href="https://en.wikipedia.org/wiki/Mount_Kilimanjaro" className="btn">Learn More</a>
                            </div>
                        </div>
                    </section>

                    <section id="slider" className="slider-section">
                        <h2>Explore Our Services</h2>
                        <div className="slider-container">
                            <div className="slider">
                                <a href="signup.html" className="slide-button">Sign Up</a>
                                <a href="gearlist.html" className="slide-button">Gear List</a>
                                <a href="besttimes.html" className="slide-button">Best Times</a>
                                <a href="trekdetails.html" className="slide-button">Trek Details</a>
                                <a href="maps.html" className="slide-button">Maps</a>
                                <a href="https://www.nimsdai.com/post/nimsdai-nims-purja-completes-the-seven-summits" className="slide-button">Blog</a>
                            </div>
                        </div>
                        <div className="navigation">
                            <button className="nav-left" onClick={slideLeft}>←</button>
                            <button className="nav-right" onClick={slideRight}>→</button>
                        </div>
                    </section>

                    <section id="about" className="about">
                        <h2>About Us</h2>
                        <p>We are a trekking and mountaineering company focused on bringing adventurous opportunities closer with our innovative, simple, and informative website.</p>
                        <div className="team">
                            <div className="team-member">
                                <img src="images/team1.jpg" alt="Team Member 1" />
                                <h3>Rudraksh Bhandari</h3>
                                <p>Mountain Guide & Safety Expert</p>
                            </div>
                            <div className="team-member">
                                <img src="images/team2.jpg" alt="Team Member 2" />
                                <h3>Kartik Joshi</h3>
                                <p>Logistics Coordinator</p>
                            </div>
                            <div className="team-member">
                                <img src="images/team3.jpg" alt="Team Member 3" />
                                <h3>Harjas Singh Rai</h3>
                                <p>Environmental Specialist</p>
                            </div>
                            <div className="team-member">
                                <img src="images/team4.jpg" alt="Team Member 4" />
                                <h3>Himank Goel</h3>
                                <p>Marketing and Social Media Manager</p>
                            </div>
                        </div>
                    </section>

                    <section id="contact" className="contact">
                        <h2>Contact Us</h2>
                        <form id="contact-form">
                            <label htmlFor="name">Name:</label>
                            <input type="text" id="name" name="name" required />
                            <label htmlFor="email">Email:</label>
                            <input type="email" id="email" name="email" required />
                            <label htmlFor="message">Message:</label>
                            <textarea id="message" name="message" required></textarea>
                            <button type="submit">Send Message</button>
                        </form>
                    </section>

                    <footer>
                        <p>&copy; 2024 Terrain. Designed by Team.</p>
                    </footer>
                </div>
            );
        }

        export default App;