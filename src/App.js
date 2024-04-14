import React from "react";
import Footer from "./Footer";
import Form from "./Form";
import Navbar from "./Navbar";
import About from "./About";
import Projects from "./Projects";
import Skill from "./skill";
import Home from "./Home";

const app = ()=>{
  return (
    <>
      <div>
        <Navbar/>
        <Home/>
        <About/>
        <Skill/>
        <Projects/>
        <Form/>
        <Footer/>
      </div>
    </>
  )
}
export default app