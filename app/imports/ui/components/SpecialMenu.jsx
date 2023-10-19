import React from 'react';
import { Container, Nav, Row, Col, Button } from 'react-bootstrap';

// React component
// Special Menu text
const SpecialMenu = () => (
  <Row className="align-content-center justify-content-center pt-5" id="middle">
    <Col lg={10} className="text-center py-5 mb-5">
      <Container className="p-1 change-font">
        <h5 className="mb-4">During special hours, only certain drinks are available.</h5>
        <h3 className="my-5">‖   In-store   and   online   ordering   available   ‖</h3>
        <h5 className="my-4 change-font">We accept phone order. Please call (808)376-8139.</h5>
      </Container>
      <Container className="p-1">
        <Button type="button" variant="dark" className="py-3 px-4">Special Menu</Button>
      </Container>
    </Col>
    <Nav activeKey="/home" className="justify-content-center ms-4 mt-5 py-5">
      <Nav.Item className="fs-4 mx-3"><Nav.Link className="p-0" href="/home" aria-current="page">Home</Nav.Link></Nav.Item>
      <div className="fs-3">||</div>
      <Nav.Item className="fs-4 mx-3"><Nav.Link className="p-0" href="/home">Special Menu</Nav.Link></Nav.Item>
      <div className="fs-3">||</div>
      <Nav.Item className="fs-4 mx-3"><Nav.Link className="p-0" href="/home">About</Nav.Link></Nav.Item>
      <div className="fs-3">||</div>
      <Nav.Item className="fs-4 mx-3"><Nav.Link className="p-0" href="/home">Visit</Nav.Link></Nav.Item>
    </Nav>
  </Row>
);

export default SpecialMenu;
