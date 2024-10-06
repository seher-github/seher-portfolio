import React, { useEffect } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import dep from '../Assets/dep.jfif';
import nuexus from '../Assets/nuexus.png';
import GitHubIcon from '@mui/icons-material/GitHub';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Projects = () => {
  useEffect(() => {
    AOS.init({ once: true });
    AOS.refresh();
  }, []);

  return (
    <div className='project'>
      <Container expand='lg'>
        <Row className='row'>
          <h2 data-aos="fade-up" data-aos-duration="2000">Professional <span>Experience</span></h2>
          <Col className='col1'>
            <Card className='card' data-aos="fade-up" data-aos-duration="2000">
              <Card.Body>
                <Card.Title>
                  <img src={dep} height={'30px'} width={'30px'} style={{ border: 'none', borderRadius: '50%' }} />
                  Full Stack Developer
                </Card.Title>
                <Card.Text>
                  Worked as a Full Stack Developer at Digital Empowerment Network, acquired skills in MERN Stack and contributed to
                  many amazing projects.
                </Card.Text>
                <p>Check out my projects: 
                  <a href="https://github.com/seher-github/DEP" target="_blank" rel="noopener noreferrer">
                    <GitHubIcon style={{ color: 'black', fontSize: 45 }} />
                  </a>
                </p>
              </Card.Body>
            </Card>
            <Card className='card' data-aos="fade-up" data-aos-duration="2000">
              <Card.Body>
                <Card.Title>
                  <img src={nuexus} height={'30px'} width={'30px'} style={{ border: 'none', borderRadius: '50%' }} />
                  Front-End Developer
                </Card.Title>
                <Card.Text>
                  Currently working as a Remote Front End Intern with a dynamic team of developers and under the leadership
                  of skilled developers.
                </Card.Text>
                <p>Check out my projects: 
                  <a href="https://github.com/seher-github/quizgame-react" target="_blank" rel="noopener noreferrer">
                    <GitHubIcon style={{ color: 'black', fontSize: 45 }} />
                  </a>
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Projects;
