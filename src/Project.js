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
