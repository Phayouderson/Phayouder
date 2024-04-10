import React from "react";
import Footer from "./Footer";
import Form from "./Form";
import Navbar from "./Navbar";
import About from "./About";
import Projects from "./Projects";
import CaseStudy from './CaseStudyPage'
import Home from "./Home";

const app = ()=>{
  return (
    <>
      <div>
        <Navbar/>
        <Home/>
        <About/>
        <Projects/>
        <Form/>
        <Footer/>
      </div>
    </>
  )
}
export default app