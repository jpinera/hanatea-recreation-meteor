import React from 'react';
import { Container, Nav, Navbar, Image } from 'react-bootstrap';
import { Yelp, Instagram, Envelope } from 'react-bootstrap-icons';

// React component
// Top Menu
const TopMenu = () => (
  <Navbar expand="lg" className="py-4 change-font">
    <Container className="py-2">
      <Navbar.Brand href="#home"><Image src="/images/hanatea-logo.png" alt="logo" height={50} /></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
        <Nav activeKey="/home" className="fs-5 justify-content-end">
          <Nav.Link className="px-0 pb-0 me-2" href="#" active>Home</Nav.Link>
          <Nav.Link href="#">Menu</Nav.Link>
          <Nav.Link href="#">About</Nav.Link>
          <Nav.Link href="#">Visit</Nav.Link>
          <Nav.Link href="#">Join our team</Nav.Link>
        </Nav>
      </Navbar.Collapse>
      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
        <Nav className="fs-5 justify-content-end">
          <Nav.Link href="#" className="me-2"><Instagram /></Nav.Link>
          <Nav.Link href="#" className="me-2"><Yelp /></Nav.Link>
          <Nav.Link href="#"><Envelope /></Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

export default TopMenu;
