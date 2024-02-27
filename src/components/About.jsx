import FsLightbox from 'fslightbox-react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Container } from 'react-bootstrap';
import { useState } from 'react';
import './CSS/About.css';
import certificateImages from '../assets/Routes/AllCertificate';

function About() {
  const [lightboxController, setLightboxController] = useState({
    toggler: false,
    slide: 1,
  });

  const openLightboxOnSlide = (number) => {
    setLightboxController(prevState => ({
      ...prevState,
      toggler: !prevState.toggler,
      slide: number,
    }));
  }

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Asad Ullah - About</title>
        </Helmet>
      </HelmetProvider>
      <FsLightbox
        toggler={lightboxController.toggler}
        sources={certificateImages}
        slide={lightboxController.slide}
      />
      <Container fluid className="about-wrapper">
        <div className="about-left animate__animated animate__zoomIn">
          <h3>About</h3>
          <h4>
            ───&nbsp;&nbsp;Page <strong>02</strong>
          </h4>
        </div>
        <div className="about-right animate__animated animate__fadeIn animate__slower py-3">
        <p>Hey there! I'm <strong>Asad Ullah</strong>, a passionate Computer Science (CSIT) student at <a href="https://www.neduet.edu.pk/" target="_blank" style={{"color": "#8cb1e7", "text-decoration": "none"}}>NED University, Karachi</a>.  I have a strong interest in MERN stack Development and Blockchain.I have one year of experience working on various projects, gaining valuable skills and insights along the way. I'm eager to continue growing and contributing in new opportunities</p>

          <button className='btn-resume'>Download Resume</button>

          <h4>Certificates</h4>
          <span>─────</span>
          <div className="certificates-wrapper">
            {certificateImages
              .reduce((rows, src, index) => {
                if (index % 3 === 0) rows.push([]);
                rows[rows.length - 1].push(
                  <div className="col certificates-ratio gap-image" key={src}>
                    <img
                      className="shadow"
                      loading="lazy"
                      src={src}
                      alt={`Certificate ${index + 1}`}
                      onClick={() => openLightboxOnSlide(index + 1)}
                    />
                  </div>
                );
                return rows;
              }, [])
              .map((row, index) => (
                <div className="row my-4" key={index}>
                  {row}
                </div>
              ))}
          </div>
        </div>
      </Container>
    </>
  );
}

export default About;
