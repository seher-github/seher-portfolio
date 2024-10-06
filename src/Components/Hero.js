import React, { useEffect } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Hero = () => {
  useEffect(() => {
    AOS.init({ once: true });
    AOS.refresh();
  }, []);

  return (
    <div id="home" className="hero">
      <Container expand="lg">
        <Row>
          <Col className="col1">
            <h4 data-aos="fade-right" data-aos-duration="2000">Hi, <span>I'm</span></h4>
            <h1 data-aos="fade-left" data-aos-duration="2000"><span>Seher Siddique</span></h1>
            <h4 data-aos="fade-up" data-aos-duration="2000">Computer Science Student & Web Developer</h4>
            <div className="mb-2 py-3">
              <Button size="lg">
                <a href="#contact" style={{ textDecoration: 'none', color: 'white' }} rel="noopener noreferrer">
                  Let's Talk <ArrowForwardIcon style={{ color: 'white', fontSize: 30, backgroundColor: 'black', borderRadius: '50%', border: 'none' }} />
                </a>
              </Button>{' '}
              <Button size="lg">
                <a href="#project" style={{ textDecoration: 'none', color: 'white' }} rel="noopener noreferrer">
                  My Experience <ArrowForwardIcon style={{ color: 'white', fontSize: 30, backgroundColor: '#b575c6', borderRadius: '50%', border: 'none' }} />
                </a>
              </Button>
            </div>
            <p data-aos="fade-up" data-aos-duration="2000">Check out my:
              <a href="https://github.com/seher-github" target="_blank" rel="noopener noreferrer">
                <GitHubIcon style={{ color: 'black', fontSize: 45 }} />
              </a>
              <a href="https://linkedin.com/in/seher-siddique" target="_blank" rel="noopener noreferrer">
                <LinkedInIcon style={{ color: '#b575c6', fontSize: 45 }} />
              </a>
            </p>
          </Col>
          <Col className="col2" data-aos="fade-down" data-aos-duration="2000">
            <a href="#about" rel="noopener noreferrer">
              Scroll Down <br /> <br />
              <ArrowDownwardIcon className="scroll-icon" style={{ backgroundColor: 'black', border: '8px solid #b575c6', borderRadius: '50%', color: '#b575c6', fontSize: 50 }} />
            </a>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Hero;
