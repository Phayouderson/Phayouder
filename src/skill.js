import React, { useEffect } from 'react';
// import useIntersectionObserver from './useIntersectionObserver'; // Import the custom hook
import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs } from 'react-icons/fa';
import { SiExpress, SiMongodb, SiJavascript } from 'react-icons/si';
import './skill.css';

const skillsData = [
  { icon: <FaHtml5 />, name: 'HTML5', className: 'html5' },
  { icon: <FaCss3Alt />, name: 'CSS3', className: 'css3' },
  { icon: <SiJavascript />, name: 'JavaScript', className: 'JavaScript' },
  { icon: <FaReact />, name: 'React', className: 'react' },
  { icon: <FaNodeJs />, name: 'Node.js', className: 'nodejs' },
  { icon: <SiExpress />, name: 'Express', className: 'express' },
  { icon: <SiMongodb />, name: 'MongoDB', className: 'mongodb' },
];

const Skill = () => {
  // const handleIntersection = () => {
  //   skillsData.forEach((skill) => {
  //     const element = document.getElementById(skill.name); // Assuming skill.name is unique
  //     if (element) {
  //       element.classList.add('animate__animated', 'animate__backInLeft');
  //     }
  //   });
  // };

  // const ref = useIntersectionObserver(handleIntersection, { threshold: 0.2 });

  return (
    <div id="skill" >
      {/* ref={ref} */}
      <h1>Skill <span className="textline"></span></h1>
      <div className="skill-container">
        {skillsData.map((skill, index) => (
          <div key={index} id={skill.name} className={`skill-item ${skill.className}`}>
            {skill.icon}
            <p>{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skill;
