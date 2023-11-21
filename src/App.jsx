import { Routes, Route, Link } from "react-router-dom";
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import displayPic from "/profilepic.png";
import html5Logo from "/html-5.png";
import css3Logo from "/css-3.png";
import jsLogo from "/js.png";
import project1 from "/project1.png";

import "./style.css";

//Components

function Navbar(props) {
  return (
    <div className="navbar">
      <div className="navbar-contents">
        <div className="navbar-myname">{props.name}</div>
        <div className="navbar-menu">
          <span>
            <Link to="/Portfolio-React/">Home</Link>
          </span>
          <span>
            <Link to="/Portfolio-React/portfolio">Portfolio</Link>
          </span>
          <span>Blog</span>
        </div>
      </div>
      <hr style={{ maxWidth: "1140px", margin: "auto" }} />
    </div>
  );
}

function Intro(props) {
  return (
    <div className="intro">
      <h2>{props.intro}</h2>
      <img className="photo" src={displayPic} alt="" />
      <div className="bio">
        <h3>Biography</h3>
        <p>
          I'm Malvin, some call me Malv. I have a hobby of playing games,
          gadgets, and also like to talk about cars as well. I'm passionate
          about technologies and interested in Web Development, also interested
          about learning React.js
        </p>
      </div>
      <div className="social">
        <h3>Let's Connect</h3>
        <div className="social-icons">
          <FaGithub className="icons" size={32} />
          <FaInstagram className="icons" size={32} />
          <FaLinkedin className="icons" size={32} />
        </div>
      </div>
      <div className="jobdesc">
        <h3>What i do</h3>
        <p style={{ textAlign: "center" }}>
          For now I still learning how to build and maintain websites, learnt a
          little bit of Frontend Web Development and still curious about Backend
          Development. So far, i've learnt HTML, CSS, Javascript. Currently
          learning about React.js.
        </p>
        <div className="languages-icons">
          <img src={html5Logo} alt="" />
          <img src={css3Logo} alt="" />
          <img src={jsLogo} alt="" />
          <img src={reactLogo} alt="" />
        </div>
      </div>
    </div>
  );
}

function Card(props) {
  return (
    <div className="card">
      <img src={props.image} alt={props.alt} />
      <div className="project-title">
        <h4>{props.title}</h4>
      </div>
    </div>
  );
}

function Featured() {
  return (
    <div className="featured-project">
      <h3>Featured Projects</h3>
      <div className="featured-works">
        <Card image={project1} title="The Band Landingpage" alt="" />
        <Card image={project1} title="WIP" alt="" />
        <Card image={project1} title="WIP" alt="" />
      </div>
    </div>
  );
}

function Footer() {
  return (
    <div className="footer">
      <hr />
      <p>Reach me out</p>
      <div className="footer-social-icons">
        <FaGithub className="icons" size={32} />
        <FaInstagram className="icons" size={32} />
        <FaLinkedin className="icons" size={32} />
      </div>
    </div>
  );
}

//Pages

function Homepage() {
  return (
    <div className="container">
      <Intro intro="Hi I'm Malvin, a programmer with some ability to love learning and working on teamwork." />
      <Featured />
    </div>
  );
}

function Portfolio() {
  return (
    <div className="container">
      <h2>All Projects</h2>
      <div className="featured-works">
        <Card image={project1} title="The Band Landingpage" alt="" />
        <Card image={project1} title="WIP" alt="" />
        <Card image={project1} title="WIP" alt="" />
        <Card image={project1} title="WIP" alt="" />
        <Card image={project1} title="WIP" alt="" />
        <Card image={project1} title="WIP" alt="" />
        <Card image={project1} title="WIP" alt="" />
        <Card image={project1} title="WIP" alt="" />
        <Card image={project1} title="WIP" alt="" />
        <Card image={project1} title="WIP" alt="" />
        <Card image={project1} title="WIP" alt="" />
        <Card image={project1} title="WIP" alt="" />
      </div>
    </div>
  );
}

function App() {
  return (
    <>
      <Navbar name="Malvin A." />
      <Routes>
        <Route path="/Portfolio-React/" element={<Homepage />} />
        <Route path="/Portfolio-React/portfolio" element={<Portfolio />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
