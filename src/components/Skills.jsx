import { Container } from "react-bootstrap";
import { Helmet, HelmetProvider } from "react-helmet-async";

import "./CSS/Skills.css";
import TextSphere from "./Textsphere";
function Skills() {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Asad - Skills</title>
        </Helmet>
      </HelmetProvider>
      <Container fluid className="skills-wrapper">
        <div className="skills-left animate__animated animate__zoomIn">
          <h3>Skills</h3>
          <h4>
            ───&nbsp;&nbsp;Page <strong>03</strong>
          </h4>
        </div>

        <div className="skills-right">
          <div className="  my-4 animate__animated animate__flipInX animate_slow">
            <div className="col">
              <i
                className="devicon-html5-plain-wordmark colored"
                title="HTML"
              ></i>
              <i
                className="devicon-css3-plain-wordmark colored"
                title="CSS"
              ></i>
              <i
                className="devicon-javascript-plain colored"
                title="JavaScript"
              ></i>
              {/* <i className="devicon-php-plain colored" title="PHP"></i> */}
            </div>
          </div>
          <div className="row my-4 animate__animated animate__flipInX animate_slow">
            <div className="col">
              <i
                className="devicon-tailwindcss-plain colored"
                title="Tailwind"
              ></i>

              <i
                className="devicon-bootstrap-plain-wordmark colored"
                title="Bootstrap"
              ></i>
              <i
                className="devicon-react-original-wordmark colored"
                title="React JS"
              ></i>
              <i
                className="devicon-mongoose-plain-wordmark colored"
                title="Mongoose"
              ></i>
            </div>
          </div>
          <div className="row my-4 animate__animated animate__flipInX animate_slow">
            <div className="col">
              <i
                className="devicon-mongodb-plain-wordmark colored"
                title="Mongodb"
              ></i>
             
              <i
                className="devicon-express-original-wordmark colored"
                title="Express.js"
              ></i>
              <i
                class="devicon-firebase-plain-wordmark colored"
                title="Firebase"
              ></i>
            </div>
          </div>
          <div className="row my-4 animate__animated animate__flipInX animate_slow">
            <div className="col">
              <i
                class="devicon-nodejs-plain-wordmark colored"
                title="Node.js"
              ></i>
              <i className="devicon-sass-original colored" title="Sass"></i>
             
             
            </div>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexDirection: "column",
          }}
          className="text-sphere"
        >
          <TextSphere />
        </div>
      </Container>

      {/* <TextSphere/> */}
    </>
  );
}

export default Skills;
