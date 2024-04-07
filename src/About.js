import React from "react";
import './About.css';
import Pbphoto from './Pphoto.jpg'

const About = () => {
  return (
    <div id="about">
      <section className="about-contenair">
        <div className="about-section">
        <h1>About <br/><scan className="textline"></scan></h1>
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
        <div className="image-container">
        <img src={Pbphoto} alt="Photo Phayouderson" />
        </div>
        
      </section>
    </div>
  );
};

export default About;
