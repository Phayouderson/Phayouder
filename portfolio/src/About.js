import React from "react";
import './About.css';

const About = () => {
  return (
    <div id="about" className="about-container">
      <section className="about">
        <h1>About me</h1>
        <p>
          Here you will find more information about me, what I do, and my current skills mostly in terms <br />of programming and technology
        </p>
      </section>
      <section className="knowMe">
        <div className="knowMe-info">
          <h3>
            Get to know me!
          </h3>
          <p>
            I'm a Frontend Web Developer building the Front-end of<br /> Websites and Web Applications that leads to the success of the <br />overall product. Check out some of my work in the Projects section.
          </p>
          <p>
            I'm open to Job opportunities where I can contribute, learn, and grow.<br /> If you have a good opportunity that matches my skills and <br />experience then don't hesitate to contact me.
          </p>
          <a href="#contact">
            <button >Contact</button>
            </a>
        </div>
        <div className="skills-section">
          <h3>
            My Skills
          </h3>
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
            <p>
              Bootstrap
            </p>
            <p>
              Version Control
            </p>
            <p>
              API
            </p>
            <p>
              Responsive Design
            </p>
            <p>
              Terminal
            </p>
            <p>
              SEO
            </p>
            </div>
        </div>
      </section>
    </div>
  );
};

export default About;
