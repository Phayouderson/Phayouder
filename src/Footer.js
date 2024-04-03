import React from "react";
import './Footer.css'
import FacebookIcon from './FacebookIcon.png'
import LinkedinIcon from './LinkedinIcon.png'
import UpworkIcon from './UpworkIcon.png'
import GithubIcon from './GithubIcon.png'
import { FaFacebookF, FaGithub } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { BiLogoUpwork } from "react-icons/bi";

const footer = () =>{
    return (
    <footer>
        <section className="footer-Section">
            <div>
                <h3>
                    Phayouderson Borgella
                </h3>
                <p>
                    A Frontend focused Web Developer building the Frontend of Websites <br/>
                    and Web Applications that leads to the success of the overall product
                </p>
            </div>
            <div className="social-media-main-container">
                <h3>
                Social Media
                </h3>
                <div className="social-media-container">
                    <a href="https://www.facebook.com/fayou.borgella" target="_blank" rel="noopener noreferrer">
                    <FaFacebookF />

                    </a>
                    <a href="https://www.linkedin.com/in/phayouderson/" target="_blank" rel="noopener noreferrer">
                    <FaLinkedinIn />
                    </a>
                    <a href="https://github.com/Phayouderson" target="_blank" rel="noopener noreferrer">
                         <FaGithub/>
                    </a>
                    <a href="https://www.upwork.com/freelancers/~0190a886e9fe15b87e" target="_blank" rel="noopener noreferrer">
                        <BiLogoUpwork />
                    </a>
                </div>

                {/* <div className="social-media-container">
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
                </div> */}
            </div>
        </section>
        <section >
            <div className="the-line">
            </div>
            <div className="Copyright">
                <p>
                    © Copyright 2023. Made by 
                    <a href="https://www.example.com" target="_blank" rel="noopener noreferrer">
                    Phayouderson Borgella
                </a>
                </p>
            </div>
        </section>
    </footer>
    )
}
export default footer;