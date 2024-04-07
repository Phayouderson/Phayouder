
import React from 'react';
import Project from './Project';
import Littlelemonphoto from './Littlelemonphoto.png';

function CaseStudy() {
  const projects = [
    {
      title: "Little Lemon Restaurant",
      description: "As a capstone project for the Meta Front-End Developer Professional Certificate program, I embraced the challenge of transforming the “Little Lemon Restaurant” website. This fictional client required a digital revamp to enhance their online presence and streamline customer engagement.",
      image: Littlelemonphoto,
      skills: ["HTML5", "CSS", "JavaScript", "React", "Responsive Design"],
      projectLink: "https://phayouderson.github.io/final-project/",
      challenge: "The existing website was antiquated, non-responsive, and offered a subpar user experience that negatively impacted customer reservations.",
      Objective: "My primary objective was to revitalize “Little Lemon Restaurant” with a contemporary and inviting online interface. The goal was to craft a user-centric website that not only draws in more patrons but also simplifies the reservation process.",
      Approach: "I spearheaded the website’s redesign, infusing it with a modern aesthetic and ensuring full responsiveness for optimal user experience across all devices. A key feature I introduced was an intuitive reservation system to facilitate customer bookings. Moreover, I enhanced the website’s search engine optimization (SEO) to bolster its online discoverability.",
      Outcome: "The project culminated in a sleek, user-friendly website that stands as a testament to the knowledge and skills I’ve honed through the certificate program. I eagerly anticipate leveraging this experience in real-world front-end development scenarios."

    },
  ];

  return (
    <div>
      {projects.map((project, index) => (
        <Project key={index} {...project} />
      ))}
    </div>
  );
}

export default CaseStudy;
