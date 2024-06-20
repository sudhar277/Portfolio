import './home.css';
import profilePicture from './../profilepic.jpg';
import github from './../github.png';
import linkedin from './../linkedin.png';
import gfg from './../gfg.jpg';
import resumePDF from './../Sudharshan_Resume (1).pdf';
import download from './../download.png'; 

function Home() {
  const giturl = "https://github.com/sudhar277";
  const linkurl = "https://www.linkedin.com/in/sudharshan-baskar/";
  const gfgurl = "https://www.geeksforgeeks.org/user/bsudharshan27/";

  function handleDownload() {
    const url = resumePDF;
    const anchor = document.createElement('a');
    anchor.href = url;
    anchor.download = 'Sudharshan_Resume.pdf';
    anchor.click();
  }

  return (
    <div className="container">
      <div className="profile-section">
        <div className="name">
          <h1>Sudharshan Baskar</h1>
          <h2>CSE Undergraduate (2025)</h2>
        </div>
        <div className="profile-picture">
          <img src={profilePicture} alt="Profile" />
        </div>
      </div>
      <div className="content">
        <p>Hello, I'm Sudharshan Baskar, a B.Tech student specializing in Computer Science and Engineering at Amrita Vishwa Vidyapeetham, expected to graduate in 2025. With a strong foundation in software development and a passion for technology, I have honed my skills in Python, Java, JavaScript, ReactJS, and more. My experience spans full-stack development, cloud computing, and embedded systems, where I enjoy leveraging my technical expertise to solve complex problems and create impactful, user-centric applications. I am committed to continuous learning and staying at the forefront of technological advancements to deliver innovative solutions.</p>
        <div className="button-container">
          <button className="button">Hire Me</button>
          <button className="button" onClick={handleDownload}><img src={download} height={20} width={20} alt='downloadicon'></img>&nbsp;Download Resume</button>
        </div>
      </div>
      <div className="footer">
        <br></br>
        <a href={giturl}><img src={github} alt="GitHub" /></a>
        <a href={linkurl}><img src={linkedin} alt="LinkedIn" /></a>
        <a href={gfgurl}><img src={gfg} alt="GeeksforGeeks" /></a>
      </div>
    </div>
  );
}

export default Home;
