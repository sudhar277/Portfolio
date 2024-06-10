import './home.css';
import profilePicture from './../profilepic.jpg'; // Ensure you have the correct path to your profile picture

function Home() {
    return (
        <>
            <div className="profile-section">
                <img src={profilePicture} alt="Profile" className="profile-picture" />
                <div className="name">
                    <h1>Hi, I'm Sudharshan Baskar</h1>
                    <h2>CSE Undergraduate (2025)</h2>
                </div>
            </div>
            <div className="content">
                <p>Hello, I'm Sudharshan Baskar, a B.Tech student specializing in <br />
                Computer Science and Engineering at Amrita Vishwa Vidyapeetham, expected to graduate in 2025. With a strong foundation in software development and a passion for technology, I have honed <br />
                my skills in Python, Java, JavaScript, ReactJS, and more. My experience spans full-stack development, cloud computing, and embedded systems, where I enjoy leveraging my technical expertise to solve complex problems and create impactful, user-centric applications. I am committed to continuous learning and staying at the forefront of technological advancements to deliver innovative solutions.</p>
            </div>
        </>
    );
}

export default Home;
