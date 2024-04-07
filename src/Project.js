import React from 'react';
import './CaseStudy.css';

function Project({ title, description, image, skills, projectLink,challenge, Objective,Approach, Outcome }) {
  return (
    <div className="case-study">
      <h1>{title}</h1>
      <div>
        <p>{description}</p>
        <img src={image} alt={title} className="case-study-image"></img>
        <p>{challenge}</p>
        <p>{Objective}</p>
        <p>{Approach}</p>
        <p>{Outcome}</p>
      </div>
      <div>
        <p><strong>Skills Used:</strong></p>
        <ul>
          {skills.map(skill => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
      </div>
      <div className="View-Project-section">
        <h2>Link to View Project</h2>
        <div>
          <a href={projectLink} target="_blank" rel="noopener noreferrer">
            <button>Project Link</button>
          </a>
          <a href="/">
            <button className='back'>Back</button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Project;
<div>
//         <p>
//         <strong>Challenge:</strong> The existing website was antiquated, non-responsive, and offered a subpar user experience that negatively impacted customer reservations.          </p>
//         <p>
//         <strong>Objective:</strong> My primary objective was to revitalize “Little Lemon Restaurant” with a contemporary and inviting online interface. The goal was to craft a user-centric website that not only draws in more patrons but also simplifies the reservation process.          </p>
//         <p>
//         <strong>Approach:</strong> I spearheaded the website’s redesign, infusing it with a modern aesthetic and ensuring full responsiveness for optimal user experience across all devices. A key feature I introduced was an intuitive reservation system to facilitate customer bookings. Moreover, I enhanced the website’s search engine optimization (SEO) to bolster its online discoverability.          </p>
//         <p>
//         <strong>Outcome:</strong> The project culminated in a sleek, user-friendly website that stands as a testament to the knowledge and skills I’ve honed through the certificate program. I eagerly anticipate leveraging this experience in real-world front-end development scenarios.          </p>
//       </div>