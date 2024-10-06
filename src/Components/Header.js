import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';

const Header = () => {

  return (
    <div className='header'>
      <Navbar expand="lg" fixed="top" className="bg-transparent">
        <Container>
          <Navbar.Brand href="#home" className='text-white brand'>Seher.</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" className="custom-toggler" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home" className='text-white'>Home</Nav.Link>
              <Nav.Link href="#about" className='text-white'>About</Nav.Link>
              <Nav.Link href="#project" className='text-white'>Experience</Nav.Link>
              <Nav.Link href="#contact" className='text-white'>Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
