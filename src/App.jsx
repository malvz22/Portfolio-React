/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import { Routes, Route, Link } from "react-router-dom";
import reactLogo from "./assets/react.svg";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import displayPic from "/profilepic.png";
import html5Logo from "/html-5.png";
import css3Logo from "/css-3.png";
import jsLogo from "/js.png";
import project1 from "/project1.png";

import "./style.css";
import {
  Box,
  Center,
  Container,
  Divider,
  Grid,
  GridItem,
  HStack,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";

//Components

function Navbar(props) {
  return (
    <div className="navbar">
      <div className="navbar-contents">
        <div className="navbar-myname">{props.name}</div>
        <div className="navbar-menu">
          <span>
            <Link to="/">Home</Link>
          </span>
          <span>
            <Link to="/portfolio">Portfolio</Link>
          </span>
          <span>Blog</span>
        </div>
      </div>
      <Center>
        <Divider height={"1px"} maxWidth={"1140px"}></Divider>
      </Center>
    </div>
  );
}

function Intro() {
  return (
    <Grid
      templateColumns="200px 1fr 250px"
      templateRows="auto"
      gap={6}
      mt={"48px"}
    >
      <GridItem display={[null, null, "none"]} colSpan={3}>
        <Box
          margin={"auto"}
          display={"flex"}
          borderRadius={"full"}
          w={"170px"}
          h={"170px"}
          bgGradient={`linear(to-r, rgba(253, 29, 29, 1), rgba(252, 176, 69, 1))`}
        >
          <Image
            background={"#3a3636"}
            src={displayPic}
            borderRadius={"full"}
            boxSize={"160px"}
            margin={"auto"}
          ></Image>
        </Box>
      </GridItem>
      <GridItem
        display={["block", "block", "none"]}
        colSpan={[3, 3, 1, 1, 1, 1]}
      >
        <HStack justifyContent={["center", "center", "start"]}>
          <FaGithub className="icons" size={32} />
          <FaInstagram className="icons" size={32} />
          <FaLinkedin className="icons" size={32} />
        </HStack>
      </GridItem>
      <GridItem colSpan={3}>
        <Heading
          as={"h2"}
          size={"2xl"}
          className="mainIntro"
          py={"0px"}
          my={"12px"}
        >
          Hi I'm Malvin, a programmer with some ability to love learning and
          working on teamwork.
        </Heading>
      </GridItem>
      <GridItem
        display={["none", "none", "inline"]}
        colSpan={[3, 3, 1, 1, 1, 1]}
      >
        <Box
          margin={"auto"}
          display={"flex"}
          borderRadius={"full"}
          w={"170px"}
          h={"170px"}
          bgGradient={`linear(to-r, rgba(253, 29, 29, 1), rgba(252, 176, 69, 1))`}
        >
          <Image
            background={"#3a3636"}
            src={displayPic}
            borderRadius={"full"}
            boxSize={"160px"}
            margin={"auto"}
          ></Image>
        </Box>
      </GridItem>
      <GridItem colSpan={[3, 3, 1, 1, 1, 1]}>
        <Heading
          as={"h3"}
          size={"lg"}
          textAlign={["center", "center", "start"]}
        >
          Biography
        </Heading>
        <Text color={"white"}>
          I'm Malvin, some call me Malv. I have a hobby of playing games,
          gadgets, and also like to talk about cars as well. I'm passionate
          about technologies and interested in Web Development, also interested
          about learning React.js
        </Text>
      </GridItem>
      <GridItem
        display={["none", "none", "block"]}
        colSpan={[3, 3, 1, 1, 1, 1]}
      >
        <Heading
          as={"h3"}
          size={"lg"}
          textAlign={["center", "center", "start"]}
        >
          Let's Connect
        </Heading>
        <HStack justifyContent={["center", "center", "start"]}>
          <FaGithub className="icons" size={32} />
          <FaInstagram className="icons" size={32} />
          <FaLinkedin className="icons" size={32} />
        </HStack>
      </GridItem>
      <GridItem colSpan={3}>
        <Heading
          mb={"48px"}
          textAlign={"center"}
          m={"auto"}
          as={"h3"}
          size={"lg"}
        >
          What i do
        </Heading>
      </GridItem>
      <GridItem colSpan={3}>
        <Text textAlign={"center"} color={"white"}>
          For now I still learning how to build and maintain websites, learnt a
          little bit of Frontend Web Development and still curious about Backend
          Development. So far, i've learnt HTML, CSS, Javascript. Currently
          learning about React.js.
        </Text>
      </GridItem>
      <GridItem colSpan={3}>
        <HStack justifyContent={"center"}>
          <Image src={html5Logo} boxSize={"100px"}></Image>
          <Image src={css3Logo} boxSize={"100px"}></Image>
          <Image src={jsLogo} boxSize={"100px"}></Image>
          <Image src={reactLogo} boxSize={"100px"}></Image>
        </HStack>
      </GridItem>
    </Grid>
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
    <Box
      margin={"0 auto"}
      mb={"24px"}
      maxW={["400px", "400px", "740px", "1110px"]}
    >
      <h3>Featured Projects</h3>
      <Grid
        gridTemplateColumns={"auto auto auto auto auto auto"}
        gap={"12px"}
        justifyItems={"center"}
      >
        <GridItem colSpan={[6, 6, 3, 2, 2, 2]}>
          <Card image={project1} title="The Band Landing Page" alt="" />
        </GridItem>
        <GridItem colSpan={[6, 6, 3, 2, 2, 2]}>
          <Card image={project1} title="WIP" alt="" />
        </GridItem>
        <GridItem colSpan={[6, 6, 3, 2, 2, 2]}>
          <Card image={project1} title="WIP" alt="" />
        </GridItem>
        <GridItem colSpan={[6, 6, 3, 2, 2, 2]}>
          <Card image={project1} title="WIP" alt="" />
        </GridItem>
        <GridItem colSpan={[6, 6, 3, 2, 2, 2]}>
          <Card image={project1} title="WIP" alt="" />
        </GridItem>
        <GridItem colSpan={[6, 6, 3, 2, 2, 2]}>
          <Card image={project1} title="WIP" alt="" />
        </GridItem>
      </Grid>
    </Box>
  );
}

function Footer() {
  return (
    <div className="footer">
      <Divider height={"1px"} maxWidth={"1140px"}></Divider>
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
    <>
      <Intro />
      <Featured />
    </>
  );
}

function Portfolio() {
  return (
    <Box mx={"auto"} mb={"24px"} maxW={["400px", "400px", "740px", "1110px"]}>
      <h2>All Projects</h2>
      <Grid
        gridTemplateColumns={"auto auto auto auto auto auto"}
        gap={"12px"}
        justifyItems={"center"}
      >
        <GridItem colSpan={[6, 6, 3, 2, 2, 2]}>
          <Card image={project1} title="The Band Landing Page" alt="" />
        </GridItem>
        <GridItem colSpan={[6, 6, 3, 2, 2, 2]}>
          <Card image={project1} title="WIP" alt="" />
        </GridItem>
        <GridItem colSpan={[6, 6, 3, 2, 2, 2]}>
          <Card image={project1} title="WIP" alt="" />
        </GridItem>
        <GridItem colSpan={[6, 6, 3, 2, 2, 2]}>
          <Card image={project1} title="WIP" alt="" />
        </GridItem>
        <GridItem colSpan={[6, 6, 3, 2, 2, 2]}>
          <Card image={project1} title="WIP" alt="" />
        </GridItem>
        <GridItem colSpan={[6, 6, 3, 2, 2, 2]}>
          <Card image={project1} title="WIP" alt="" />
        </GridItem>
      </Grid>
    </Box>
  );
}

function App() {
  return (
    <>
      <Navbar name="Malvin A." />
      <Container maxW={"1140px"}>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/portfolio" element={<Portfolio />} />
        </Routes>
        <Footer />
      </Container>
    </>
  );
}

export default App;
