import React from 'react';
import { Container } from 'react-bootstrap';
import BodyImageText from '../components/BodyTextImage';
import SpecialMenu from '../components/SpecialMenu';

// Top-level Hana Tea parent component
const HanaTea = () => (
  <Container fluid className="px-0 d-flex flex-column min-vh-100">
    <BodyImageText />
    <SpecialMenu />
  </Container>
);

export default HanaTea;
