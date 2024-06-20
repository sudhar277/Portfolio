import React from 'react';
import './projects.css';
import project1 from './../projectimages/dementia.jpg'; // replace with actual paths to your project images
import project2 from './../projectimages/voicetrans.jpg';
import project3 from './../projectimages/foodapp.jpg';
import project4 from './../projectimages/ridesharing.jpg';
import project5 from './../projectimages/watermeter.png';
import project6 from './../projectimages/outcast.jpg';

function Projects() {
    const projects = [
        {
            title: "Dementia Guardian",
            date: "April 2024",
            description: "A caregiving platform using ESP32 for monitoring dementia patients with features like location tracking and emergency alerts.",
            link: "https://github.com/sudhar277/dementiaguardian",
            image: project1,
            demo: "https://dementiaguardian.vercel.app/"
        },
        {
            title: "Voice Translation",
            date: "December 2023",
            description: "Real-time voice translation project using Raspberry Pi with modules for speech recognition, translation, and audio playback.",
            link: "https://github.com/sudhar277/voice-translation-raspberrypi-/tree/main",
            image: project2,
            demo: "https://youtu.be/FadNcNHQBHY?feature=shared"
        },
        {
            title: "Food and Recipe Search",
            date: "September 2023",
            description: "Dynamic web app for food and recipe search using ReactJS.Used Publicly availabe Edamam API for fetching recipe Information.",
            link: "https://github.com/sudhar277/food-recipe-search",
            image: project3,
            demo: "https://main--stellular-piroshki-f84740.netlify.app/"
        },
        {
            title: "Ride Matching Service",
            date: "June 2023",
            description: "Python ride-sharing service with geolocation-based matching and map visualization.",
            link: "https://github.com/sudhar277/ridesharing-service",
            image: project4
        },
        {
            title: "Smart Water Meter",
            date: "February 2023",
            description: "Smart Water Meter system with PHP web interface for tracking water usage.",
            link: "https://github.com/sudhar277/smart-watermeter",
            image: project5
        },
        {
            title: "Movie Rating Website",
            date: "June 2022",
            description: "Movie rating website with interactive user interfaces using HTML, CSS, JavaScript, and PHP.",
            link: "https://github.com/sudhar277/Outcast-movieratingwebsite",
            image: project6
        }
    ];

    return (
        <div className="projects-container">
            <h1>Projects</h1>
            <div className="projects-grid">
                {projects.map((project, index) => (
                    <div className="project-card" key={index}>
                        <img src={project.image} alt={project.title} />
                        <div className="project-details">
                            <h3>{project.title}</h3>
                            <p>{project.date}</p>
                            <p>{project.description}</p>
                            <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>&nbsp;&nbsp;
                            {project.demo && (
                                <a href={project.demo} target="_blank" rel="noopener noreferrer" className="demo-button">View Demo</a>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Projects;
