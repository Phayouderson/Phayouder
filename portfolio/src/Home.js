import React from "react";
import FacebookIcon from './FacebookIcon.png'
import LinkedinIcon from './LinkedinIcon.png'
import UpworkIcon from './UpworkIcon.png'
import GithubIcon from './GithubIcon.png'
import './Home.css'
const Home = () => {
    return (
        <div id="home" className="home">
            <h1>
                Hi, i'm Phayouderson
            </h1>
            <p>A Frontend focused Web Developer
                 building the Frontend of Websites and Web <br/>
                 Applications that leads to the success of 
                 the overall product 
            </p>
            <div className="social-media-main-container">
                <div className="social-media-container">
                    <a href="https://www.facebook.com/fayou.borgella" target="_blank" rel="noopener noreferrer">
                        <img src={FacebookIcon} alt="Facebook" />
                    </a>
                    <a href="https://www.linkedin.com/in/phayouderson/" target="_blank" rel="noopener noreferrer">
                        <img src={LinkedinIcon} alt="LinkedIn" />
                    </a>
                    <a href="https://github.com/Phayouderson" target="_blank" rel="noopener noreferrer">
                        <img src={GithubIcon} alt="GitHub" />
                    </a>
                    <a href="https://www.upwork.com/freelancers/~0190a886e9fe15b87e" target="_blank" rel="noopener noreferrer">
                        <img src={UpworkIcon} alt="Upwork" />
                    </a>
                </div>
                </div>
        </div>
    )
}
export default Home;