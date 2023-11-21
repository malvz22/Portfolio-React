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

function Navbar(props) {
  return (
    <div className="navbar">
      <div className="navbar-contents">
        <div className="navbar-myname">{props.name}</div>
        <div className="navbar-menu">
          <span>Home</span>
          <span>Portfolio</span>
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

function App() {
  return (
    <>
      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
      <Navbar name="Malvin A." />
      <div className="container">
        <Intro intro="Hi I'm Malvin, a programmer with some ability to love learning and working on teamwork." />
        <Featured />
        <Footer />
      </div>
    </>
  );
}

export default App;
