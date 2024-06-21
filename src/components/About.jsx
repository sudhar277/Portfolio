import React from 'react';
import { AiFillLinkedin, AiFillInstagram, AiOutlineMail, AiFillPhone } from 'react-icons/ai';
import './Aboutme.css';

const AboutMe = () => {

    const handlePhoneCall = () => {
        window.location.href = 'tel:+919042095744'; 
    };

    return (
        <section className="about-me">
            <h2>About Me</h2>
            <div className="two-column-grid">
                <div className="personal-details">
                    <h3><u>Personal Details</u></h3>
                    <p><strong>Name:</strong> Sudharshan Baskar</p>
                    <p><strong>Date of Birth:</strong> 27/07/2003</p>
                    <p><strong>Place of Residence:</strong> Chennai, India</p>
                    <p><strong>Hobbies:</strong> Reading, Cricket, Chess</p>
                </div>
                <div className="contact-details">
                    <h3><u>Contact Details</u></h3>
                    <p><strong>Email:</strong> bsudharshan27@gmail.com</p>
                    <p><strong>Phone:</strong> +919042095744</p>
                    <h3><u>Social Media</u></h3>
                    <div className="social-icons">
                        <a href="https://www.linkedin.com/in/sudharshan-baskar/" target="_blank" rel="noopener noreferrer">
                            <AiFillLinkedin />
                        </a>
                        <a href="https://www.instagram.com/sudharshan_baskar_?igsh=cmZqbmZjanh4MHNx" target="_blank" rel="noopener noreferrer">
                            <AiFillInstagram />
                        </a>
                        <a href="mailto:bsudharshan27@gmail.com">
                            <AiOutlineMail />
                        </a>
                        <span className="social-icons" onClick={handlePhoneCall}>
                            <AiFillPhone />
                        </span>
                    </div>
                </div>
            </div>
            <div className="timeline">
                <h3>Education</h3>
                <div className="timeline-item">
                    <div className="timeline-content">
                        <h4>B.Tech, Computer Science and Engineering</h4>
                        <p>Amrita Vishwa Vidyapeetham, Coimbatore, Tamil Nadu</p>
                        <div className="timeline-details">
                            <p><strong>2021 - Present</strong> | <strong>CGPA:</strong> 7.36</p>
                        </div>
                    </div>
                </div>
                <div className="timeline-item">
                    <div className="timeline-content">
                        <h4>XII, Velammal Vidhyashram</h4>
                        <p>Chennai, Tamil Nadu</p>
                        <div className="timeline-details">
                            <p><strong>2021</strong> | <strong>Percentage:</strong> 85%</p>
                        </div>
                    </div>
                </div>
                <div className="timeline-item">
                    <div className="timeline-content">
                        <h4>X, Velammal Vidhyashram</h4>
                        <p>Chennai, Tamil Nadu</p>
                        <div className="timeline-details">
                            <p><strong>2019</strong> | <strong>Percentage:</strong> 92.8%</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutMe;
