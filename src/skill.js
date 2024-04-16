import React from 'react';
import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs } from 'react-icons/fa';
import { SiExpress, SiMongodb, SiJavascript } from 'react-icons/si';
import './skill.css';

const skillsData = [
  { icon: <FaHtml5 />, name: 'HTML5', className: 'html5' },
  { icon: <FaCss3Alt />, name: 'CSS3', className: 'css3' },
  { icon: <SiJavascript />  , name: 'JavaScript', className: 'JavaScript' },
  { icon: <FaReact />, name: 'React', className: 'react' },
  { icon: <FaNodeJs />, name: 'Node.js', className: 'nodejs' },
  { icon: <SiExpress />, name: 'Express', className: 'express' },
  { icon: <SiMongodb />, name: 'MongoDB', className: 'mongodb' },
];

const Skill = () => {
  return (
    <div className='skill-container1'>
      <h1>Skill<span className="textline"></span></h1>
      <div className="skill-container">
        {skillsData.map((skill, index) => (
          <div
            key={index}
            className={`skill-item ${skill.className}`}>
            {skill.icon}
            <p>{skill.name}</p>
          </div>
        ))}
      </div>
    </div>

  );
};

export default Skill;
