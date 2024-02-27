// import { AiFillFileText } from "react-icons/ai";

import { Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import realProfile from "../assets/img/profile1.png";
import Typewriter from 'typewriter-effect';
// import hoverProfile from "../assets/img/profilehover.webp";
// import CVDoc from "../assets/download/CV.pdf";
import Hi from "../assets/img/Hi.gif";
import { Helmet, HelmetProvider } from "react-helmet-async";
import TextSphere from "./Textsphere";
import "./CSS/Home.css";

function Home() {
  function setAvatarReal() {
    setImage(realProfile);
  }

  function setAvatarAnimation() {
    setImage(realProfile);
  }
  const [image, setImage] = useState(realProfile);

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Asad</title>
        </Helmet>
      </HelmetProvider>
      <Container fluid className="home-wrapper">
        <div className="home-left animate__animated animate__fadeInLeft">
          <h3 style={{ fontWeight: "400" }}>
            Hi there <img width="35" src={Hi} alt="Hi" />, my name is
          </h3>
          <h2>
            <span className="name-hover">Asad </span>
            <span className="name-hover">Ullah</span>
          </h2>
          <h3>

            <Typewriter
              options={{
                strings: ['Full Stack Dev.', 'MERN Stack Dev.', 'Blockchain Enthusiast.'],
                autoStart: true,
                loop: true,
              }}
            />
          </h3>
           <div className="hide-small animate__animated animate__fadeIn animate__slower">
          <img
            className="home-image"
            src={image}
            onMouseOver={setAvatarReal}
            onMouseOut={setAvatarAnimation}
            alt="Avatar"
          />
        </div>
          {/* <div > */}
            <NavLink to="/contact" className="btn-download text-center">
              Let's Connect
            </NavLink>
            <br/>
            <NavLink to="/contact" className="btn-download text-center">
              Projects
            </NavLink>
            <br/><br/>
            {/* <AiFillFileText /> */}
          {/* </div> */}
        </div>
        {/* <div ><TextSphere/></div> */}
        <div className="home-right  animate__animated animate__fadeIn animate__slower">
          <img
            className="home-image"
            src={image}
            onMouseOver={setAvatarReal}
            onMouseOut={setAvatarAnimation}
            alt="Avatar"
          />
        </div>
      </Container>
    </>
  );
}

export default Home;
