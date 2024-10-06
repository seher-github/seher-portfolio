import React, { useEffect } from 'react';
import { Button, Card, Col, Container, Row, Nav } from 'react-bootstrap';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import p1 from '../Assets/project1.png';
import p2 from '../Assets/project2.png';
import p3 from '../Assets/project3.png';
import { FaAngular, FaCode, FaReact } from 'react-icons/fa';
import { BsBootstrapFill } from "react-icons/bs";
import { FaNodeJs } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Experience = () => {
  useEffect(() => {
    AOS.init({ once: true });
    AOS.refresh();
  }, []);

  return (
    <div id='project' className='experience'>
      <Container expand='lg'>
        <Row className='row'>
          <h2 data-aos="fade-up" data-aos-duration="2000">Recent <span>Projects</span></h2>
          <Col className='col1'>
            <Card className='card' style={{ width: '23rem' }} data-aos="fade-up" data-aos-duration="2000">
              <Card.Img variant="top" src={p1} height={'130px'} width={'auto'} />
              <Card.Body>
                <Card.Title>
                  RoomRover Website
                </Card.Title>
                <Nav variant="pills" defaultActiveKey="#first">
                  <Nav.Item>
                    <Nav.Link href="#disabled" disabled>
                      <FaCode style={{ color: '#0868AC' }} /> jQuery
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link href="#disabled" disabled>
                      <FaAngular style={{ color: '#dd0330' }} /> Angular
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link href="#disabled" disabled>
                      <FaReact style={{ color: '#61DBFB' }} /> Ajax
                    </Nav.Link>
                  </Nav.Item>
                </Nav>
                <Card.Text>
                  Online platform for room booking system, built using front-end technologies, offers seamless features
                  like booking with great ease and providing different packages according to your need.
                </Card.Text>
              </Card.Body>
            </Card>
            
            <Card className='card' style={{ width: '23rem' }} data-aos="fade-up" data-aos-duration="2000">
              <Card.Img variant="top" src={p2} height={'130px'} width={'auto'} />
              <Card.Body>
                <Card.Title>
                  FoodLover Website
                </Card.Title>
                <Nav variant="pills" defaultActiveKey="#first">
                  <Nav.Item>
                    <Nav.Link href="#disabled" disabled>
                      <FaReact style={{ color: '#61DBFB' }} /> React JS
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link href="#disabled" disabled>
                      <SiMongodb style={{ color: '#4DB33D' }} />  MongoDB
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link href="#disabled" disabled>
                      <FaNodeJs style={{ color: '#68A063' }} /> Node JS
                    </Nav.Link>
                  </Nav.Item>
                </Nav>
                <Card.Text>
                  Dynamic blogs website, built using MERN Stack, which allows users to create and display their blogs
                  with a lot of customization features.
                </Card.Text>
              </Card.Body>
            </Card>

            <Card className='card' style={{ width: '23rem' }} data-aos="fade-up" data-aos-duration="2000">
              <Card.Img variant="top" src={p3} height={'130px'} width={'auto'} />
              <Card.Body>
                <Card.Title>
                  Plants Web Store
                </Card.Title>
                <Nav variant="pills" defaultActiveKey="#first">
                  <Nav.Item>
                    <Nav.Link href="#disabled" disabled>
                      <FaCode style={{ color: '#0868AC' }} /> Express JS
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link href="#disabled" disabled>
                      <BsBootstrapFill style={{ color: '#563d7c' }} /> Bootstrap
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link href="#disabled" disabled>
                      <FaReact style={{ color: '#61DBFB' }} /> React JS
                    </Nav.Link>
                  </Nav.Item>
                </Nav>
                <Card.Text>
                  Online plants store, built using MERN Stack with bootstrap, allows users to navigate through different products
                  and also provide them the ease of booking their orders online.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          
          <div className="mb-2 py-3">
            <Button size="lg">
              <a href="https://github.com/seher-github" style={{ textDecoration: 'none', color: 'white' }} target="_blank" rel="noopener noreferrer">
                Explore More <ArrowForwardIcon style={{ color: 'white', fontSize: 30, backgroundColor: 'black', borderRadius: '50%', border: 'none' }} />
              </a>
            </Button>{' '}
            <Button size="lg">
              <a href="#contact" style={{ textDecoration: 'none', color: 'white' }} target="_blank" rel="noopener noreferrer">
                Get Connected <ArrowForwardIcon style={{ color: 'white', fontSize: 30, backgroundColor: '#b575c6', borderRadius: '50%', border: 'none' }} />
              </a>
            </Button>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default Experience;
