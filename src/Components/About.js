import React, { useEffect } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import ComputerIcon from '@mui/icons-material/Computer';
import WebAssetIcon from '@mui/icons-material/WebAsset';
import CodeIcon from '@mui/icons-material/Code';
import ScienceIcon from '@mui/icons-material/Science';
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {
  useEffect(() => {
    AOS.init({ once: true });
    AOS.refresh();
  }, []);

  return (
    <div id='about' className='about'>
      <Container expand='lg'>
        <Row>
          <Col className='col1'>
            <h5 data-aos="fade-right" data-aos-duration="2000">About Me</h5>
            <h2 data-aos="fade-left" data-aos-duration="2000">What <span>I Do?</span></h2>
            <p data-aos="fade-up" data-aos-duration="2000">
              Hi there! I'm Seher, a final year student at International Islamic University Islamabad,
              pursuing my BS Hons in Computer Science. With a passion for programming and web development,
              I've acquired skills in Java, JavaScript, C++ and web languages like HTML, CSS, Bootstrap,
              jQuery, PHP, and React JS.
              <br /> <br /> Let's connect and see how we can learn and grow together!
            </p>
          </Col>
          <Col className='col2'>
            <Col className='innercol1'>
              <Card className='card' data-aos="fade-up" data-aos-duration="2000">
                <Card.Body>
                  <Card.Title>
                    <ComputerIcon style={{ color: '#b575c6', fontSize: 40 }} /> <br /> Web Development
                  </Card.Title>
                  <Card.Text>
                    Experienced full-stack web developer with expertise in MERN stack and React JS.
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card className='card' data-aos="fade-up" data-aos-duration="2000">
                <Card.Body>
                  <Card.Title>
                    <CodeIcon style={{ color: '#b575c6', fontSize: 40 }} /> <br /> Programming
                  </Card.Title>
                  <Card.Text>
                    Passionate programmer with a strong foundation in Java, C++, and problem-solving skills.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col className='innercol2'>
              <Card className='card' data-aos="fade-up" data-aos-duration="2000">
                <Card.Body>
                  <Card.Title>
                    <WebAssetIcon style={{ color: '#b575c6', fontSize: 40 }} /><br /> WordPress Development
                  </Card.Title>
                  <Card.Text>
                    Proficient WordPress Developer with a portfolio of successful, real-time projects.
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card className='card' data-aos="fade-up" data-aos-duration="2000">
                <Card.Body>
                  <Card.Title>
                    <ScienceIcon style={{ color: '#b575c6', fontSize: 40 }} /><br /> AI Enthusiast
                  </Card.Title>
                  <Card.Text>
                    AI enthusiast currently researching and developing innovative solutions for my Final Year Project.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
