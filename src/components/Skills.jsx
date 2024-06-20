import React from 'react';
import './skills.css';
import { FaPython, FaJava, FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaCloud, FaNetworkWired, FaLinux, FaGitAlt, FaDatabase } from 'react-icons/fa';
import { SiC, SiCplusplus, SiFigma, SiFastapi,SiPostgresql } from 'react-icons/si';
import { GiArtificialIntelligence, GiProcessor } from 'react-icons/gi';
import { AiOutlineLaptop } from 'react-icons/ai';

function Skills() {
  const skills = [
    { name: 'Python', icon: <FaPython /> },
    { name: 'Java', icon: <FaJava /> },
    { name: 'HTML', icon: <FaHtml5 /> },
    { name: 'CSS', icon: <FaCss3Alt /> },
    { name: 'JavaScript', icon: <FaJsSquare /> },
    { name: 'ReactJS', icon: <FaReact /> },
    { name: 'Cloud Computing', icon: <FaCloud /> },
    { name: 'Computer Networks', icon: <FaNetworkWired /> },
    { name: 'Linux', icon: <FaLinux /> },
    { name: 'Git', icon: <FaGitAlt /> },
    { name: 'SQL', icon: <FaDatabase /> },
    { name: 'C', icon: <SiC /> },
    { name: 'C++', icon: <SiCplusplus /> },
    { name: 'Figma', icon: <SiFigma /> },
    { name: 'Machine Learning', icon: <GiArtificialIntelligence /> },
    { name: 'FastAPI', icon: <SiFastapi /> },
    { name: 'Data Structures', icon: <AiOutlineLaptop /> },
    { name: 'Embedded Systems', icon: <GiProcessor /> },
    { name: 'Operating Systems', icon: <AiOutlineLaptop /> },
    {name: 'PostgreSQL' , icon :<SiPostgresql/>}
  ];

  return (
    <div className="skills-container">
      <h1>Skills</h1>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div className="skill-card" key={index}>
            <div className="skill-icon">{skill.icon}</div>
            <p>{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
