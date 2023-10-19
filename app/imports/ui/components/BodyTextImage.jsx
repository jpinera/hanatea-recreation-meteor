import React from 'react';
import { Container, Image, Col, Button, Card } from 'react-bootstrap';

// React component:
// Middle Text Image (card)
const BodyImageText = () => (
  <Card className="text-white">
    <Image src="/images/hanatea-backdrop-edit.jpeg" className="card-img" alt="Backdrop Image" />
    <Container fluid className="card-img-overlay">
      <Container fluid className="row align-content-center justify-content-end" id="mainText">
        <Col className="text-end me-3">
          <h1 className="display-2 mb-4"><strong>Dillingham Hours:</strong></h1>
          <h2 className="my-4">Unfortunately our Dillingham location is Closed as we look for a new location.</h2>
          <h2 className="my-4">Mahalo and thank you for your patience.</h2>
          <h1 className="display-2 my-5"><strong>Pearl City Hours:</strong></h1>
          <h2 className="my-4">Tuesday - Thursday, Sunday: 11:30am-8:00pm</h2>
          <h2 className="my-4">Friday, Saturday: 11:30AM - 9:00PM</h2>
          <h2 className="display-5 my-5">Monday: closed</h2>
          <Button type="button" variant="light" size="lg" className="py-3 px-4">Pearl City Order</Button>
        </Col>
      </Container>
    </Container>
  </Card>
);

export default BodyImageText;
