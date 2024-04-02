import React from 'react';
import Littlelemonphoto from './Littlelemonphoto.png'
import './CaseStudy.css'

function CaseStudy() {
  return (
    <div className="case-study">
      <h1>Little Lemon Restaurant</h1>
      <div>
        <p>
          As part of the Meta Front-End Developer Professional Certificate program, I undertook the challenge of redesigning the website for "Little Lemon Restaurant," an imaginary establishment, to boost its online presence and customer engagement.
        </p>
        <img src={Littlelemonphoto} alt='Little lemon' className="case-study-image"></img>
      </div>
      <div>
        <h2>Project Overview:</h2>
        <p>Little Lemon Restaurant (Fictional Client) needed a modern website makeover. Their existing site was outdated, lacked responsiveness, and hindered user experience, hampering customer reservations.</p>
        <p>As a Front-End Developer my primary goal for this project was to give "Little Lemon Restaurant" a fresh online presence. We wanted to create a user-friendly website that would attract more customers and make reservations hassle-free.</p>
        <p>To achieve this, i focused on redesigning the website with a modern and appealing look. i made it fully responsive to provide an excellent user experience on all devices. We also implemented an easy-to-use reservation system to enhance customer convenience. Additionally, i worked on improving the site's SEO to increase online visibility.</p>
        <p>I look forward to applying the knowledge gained from this project to real-world opportunities in front-end development.</p>
      </div>
      <div className="skills-section">
          <h2>
          Tools Used
          </h2>
          <div className="skills">
            <p>
              HTML5
            </p>
            <p>
              CSS
            </p>
            <p>
              JavaScript
            </p>
            <p>
              React
            </p>
            <p>Responsive Design</p>
          </div>
      </div>
      <div className="View-Project-section">
        <h2>Link to View Project</h2>
          <div>
            <a href="https://phayouderson.github.io/final-project/" target="_blank" rel="noopener noreferrer">
              <button > Project Link</button>
              </a>
              <a href="/" >
              <button className='back'>Back</button>
              </a>
          </div>
        </div>
    </div>
  );
}

export default CaseStudy;
