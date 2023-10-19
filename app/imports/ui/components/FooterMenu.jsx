import React from 'react';
import { Container, Row } from 'react-bootstrap';

// React component:
// Footer menu
const FooterMenu = () => (
  <footer className="mt-auto pb-3" id="footer">
    <Container className="text-center">
      <Row className="py-3">
        <p><b>DILLINGHAM</b> | <b>m.</b> (808)376-8139 | 1111 Dillingham Blvd, Unit E-2, Honolulu, HI 96817</p>
        <p><b>PEARL CITY</b> | <b>m.</b> (808)600-5024  |  1160 Kuala street, Unit 204, Pearl City, HI, 96782</p>
      </Row>
      <Row>
        <p className="change-font">© Hana Tea • All rights reserve</p>
      </Row>
    </Container>
  </footer>
);

export default FooterMenu;
