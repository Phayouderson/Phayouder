// import "./Projects.css";
// import Littlelemonphoto from "./Littlelemonphoto.png";
// import { Link } from "react-router-dom";
// import "@animxyz/core";
// import 'animate.css';



// const projectsData = [
//   {
//     title: "Little Lemon",
//     description:"I created the Little Lemon website from start to finish, showcasing my passion for web development and design. As the sole developer, I designed an intuitive and visually appealing interface that embodies the essence of Little Lemon's brand.",
//     image: Littlelemonphoto,
//     caseStudyLink: "CaseStudyPage",
//     liveLink: "url",
//     GitHubRepo: "GitHub Repo",
//   },
//   {
//     title: "Little Lemon",
//     description:"I created the Little Lemon website from start to finish, showcasing my passion for web development and design. As the sole developer, I designed an intuitive and visually appealing interface that embodies the essence of Little Lemon's brand.",
//     image: Littlelemonphoto,
//     caseStudyLink: "CaseStudyPage",
//     liveLink: "url",
//     GitHubRepo: "GitHub Repo",
//   },
//   {
//     title: "Little Lemon",
//     description:"I created the Little Lemon website from start to finish, showcasing my passion for web development and design. As the sole developer, I designed an intuitive and visually appealing interface that embodies the essence of Little Lemon's brand.",
//     image: Littlelemonphoto,
//     caseStudyLink: "CaseStudyPage",
//     liveLink: "url",
//     GitHubRepo: "GitHub Repo",
//   },
//   {
//     title: "Little Lemon",
//     description:"I created the Little Lemon website from start to finish, showcasing my passion for web development and design. As the sole developer, I designed an intuitive and visually appealing interface that embodies the essence of Little Lemon's brand.",
//     image: Littlelemonphoto,
//     caseStudyLink: "CaseStudyPage",
//     liveLink: "url",
//     GitHubRepo: "GitHub Repo",
//   },
//   {
//     title: "Little Lemon",
//     description:"I created the Little Lemon website from start to finish, showcasing my passion for web development and design. As the sole developer, I designed an intuitive and visually appealing interface that embodies the essence of Little Lemon's brand.",
//     image: Littlelemonphoto,
//     caseStudyLink: "CaseStudyPage",
//     liveLink: "url",
//     GitHubRepo: "GitHub Repo",
//   },
// ];
// const Projects = () => {
//   return (
//     <div id="projects" className="projects-container">
//       <div className="project">
//         <h1>Projects <br/><span className="textline"></span></h1>
//       </div>
//       <div className="project-grid">
//         {projectsData.map((project, index) => (
//           <ProjectItem key={index} project={project} />
//         ))}
//       </div>
//     </div>
//   );
// };

// const ProjectItem = ({ project }) => {
  
//   return (
//         <Link to="/CaseStudyPage" style={{ textDecoration: 'none' }}>
//           <section className="project-item">
//             <div className="project-card ">
//               <img src={project.image} alt={project.title} />
//               <p>{project.description}</p>
//             </div>
//           </section>
//         </Link>
//   );
// };

// export default Projects;


import React from 'react';
import useIntersectionObserver from './useIntersectionObserver'; // Import the custom hook
import Littlelemonphoto from "./Littlelemonphoto.png";
import { Link } from "react-router-dom";
import "./Projects.css";

const projectsData = [
  {
    title: "Little Lemon",
    description: "I created the Little Lemon website from start to finish, showcasing my passion for web development and design. As the sole developer, I designed an intuitive and visually appealing interface that embodies the essence of Little Lemon's brand.",
    image: Littlelemonphoto,
    caseStudyLink: "CaseStudyPage",
    liveLink: "https://phayouderson.github.io/final-project/",

    GitHubRepo: "GitHub Repo",
  },
  // Add other project data here
];

const Projects = () => {
  const handleIntersection = () => {
    projectsData.forEach((project, index) => {
      const element = document.getElementById(`project-${index}`); // Assuming project index is unique
      if (element) {
        element.classList.add('animate__animated', 'animate__backInLeft');
      }
    });
  };

  const ref = useIntersectionObserver(handleIntersection, { threshold: 0.2 });

  return (
    <div id="projects" className="projects-container" ref={ref}>
      <div className="project">
        <h1>Projects <br/><span className="textline"></span></h1>
      </div>
      <div className="project-grid">
        {projectsData.map((project, index) => (
          <ProjectItem key={index} project={project} index={index} />
        ))}
      </div>
    </div>
  );
};

const ProjectItem = ({ project, index}) => {
  return (
    // <Link to="/CaseStudyPage" style={{ textDecoration: 'none' }}>
      <section id={`project-${index}`} className="project-item">
        <div className="project-card">
          <img src={project.image} alt={project.title} />
          <p>{project.description}</p>
          <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
            <button style={{ marginTop: '1rem' }}>Project Link</button>
          </a>
        </div>
      </section>
    // </Link>
  );
};

export default Projects;
