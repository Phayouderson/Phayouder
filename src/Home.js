import React from "react";
import { FaFacebookF, FaGithub } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { BiLogoUpwork } from "react-icons/bi";
import 'animate.css';



import './Home.css'
const Home = () => {
    
    return (
        <div id="home" className="home">
            <h1 className="animate__animated animate__backInLeft ">
                Hi, i'm<br/> Phayouderson
            </h1>
            <p className="animate__animated animate__backInRight animate__delay-1s">A passionate web developer driven by the challenge of <br/>crafting beautiful and functional user experiences. 
            </p>
            <div className="social-media-main-container ">
                <div className="social-media-container animate__animated animate__backInLeft animate__delay-2s">
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
                </div>
                <div className="theLine"></div>
        </div>
    )
}
export default Home;


// import React from 'react'
// import './Home.css'
// import { TypeAnimation } from 'react-type-animation';
// import {BiLogoUpwork} from 'react-icons/bi'
// import {MdOutlineMail} from 'react-icons/md'
// import {BsGithub, BsLinkedin} from 'react-icons/bs'
// const Home = () => {
//   return (
//     <div className='home-container'>
//         <div>
//              <h1>Hi, i'm Phayoudeson</h1>
//         </div>
//         <div className='animation'>
//             <p>i'm a </p>
//             <TypeAnimation
//                 sequence={[
//                     'Developer',
//                     2000,
//                     'Coder',
//                     2000,
//                     'Tech Lover ',
//                     2000,
//                 ]}
//                 wrapper="div"
//                 speed={50}
//                 style={{ fontSize: '1em', display: 'inline-block' }}
//                 repeat={Infinity}
//                 />
//         </div>
//         <div className='medias'>
//             <MdOutlineMail className='medias-image'/>
//             <BsLinkedin className='medias-image'/>
//             <BsGithub className='medias-image'/>
//             <BiLogoUpwork className='medias-image'/>
//         </div>
//     </div>
//   )
// }

// export default Home