import React, { useEffect, useRef } from 'react';
import './About.css';
import Pbphoto from './Pphoto.jpg'

const About = () => {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          ref.current.classList.add('animate__animated', 'animate__lightSpeedInLeft');
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);
  return (
    <div  id="about">
      <section  className="about-contenair">
        <div className="about-section">
        <h1>About <br/><scan className="textline"></scan></h1>
          <p>
            I'm a Frontend Web Developer building the Front-end of 
            Websites and Web Applications that leads to the success 
            of the overall product. Check out some of my work in the 
            Projects section.
          </p>
          <p>
            I'm open to Job opportunities where I can contribute, learn,
             and grow. If you have a good opportunity that matches my skills 
             and experience then don't hesitate to contact me.
          </p>
          <a href="#contact">
            <button >Contact</button>
            </a>
        </div>
        <div ref={ref} className="image-container">
        <img src={Pbphoto} alt="Photo Phayouderson" />
        </div>
        
      </section>
    </div>
  );
};

export default About;
