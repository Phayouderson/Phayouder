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
            I'm Phayouderson Borgella, a web developer with a passion 
            for creating engaging user experiences. My expertise spans
             from front-end technologies like HTML5, CSS3, and JavaScript, 
             learned through the Meta Front-End Development Certificate, to 
             full-stack development with Node.js and MongoDB, honed with the 
             Zero to Mastery course. Committed to lifelong learning, I thrive 
             on turning complex problems into intuitive solutions. My latest 
             project, a dynamic e-commerce platform, exemplifies my ability 
             to enhance online shopping experiences. Interested in collaborating?<a className='aScan' href="#contact">
             <scan> Let's connect and bring your ideas to life!</scan></a>
          </p>
          {/* <a href="#contact">
            <button >Contact</button>
            </a> */}
        </div>
        <div ref={ref} className="image-container">
        <img src={Pbphoto} alt="Photo Phayouderson" />
        </div>
        
      </section>
    </div>
  );
};

export default About;
