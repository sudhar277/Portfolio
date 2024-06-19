// Import necessary libraries
import React from 'react';
 // Import your CSS file for styling

// Functional component for About Me section
const AboutMe = () => {
    return (
        <section className="about-me">
            <h2>About Me</h2>
            <div className="timeline">
                <div className="timeline-item">
                    <div className="timeline-content">
                        <h3>2021 - Present</h3>
                        <h4>B.Tech, Computer Science and Engineering</h4>
                        <p>Amrita Vishwa Vidyapeetham, Coimbatore, Tamil Nadu</p>
                    </div>
                </div>
                <div className="timeline-item">
                    <div className="timeline-content">
                        <h3>2019 - 2021</h3>
                        <h4>XII, Velammal Vidhyashram</h4>
                        <p>Chennai, Tamil Nadu</p>
                    </div>
                </div>
                <div className="timeline-item">
                    <div className="timeline-content">
                        <h3>2019</h3>
                        <h4>X, Velammal Vidhyashram</h4>
                        <p>Chennai, Tamil Nadu</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutMe;
