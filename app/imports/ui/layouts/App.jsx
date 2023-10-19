import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NotFound from '../pages/NotFound';
import HanaTea from '../pages/HanaTea';
import TopMenu from '../components/TopMenu';
import FooterMenu from '../components/FooterMenu';

/** Top-level layout component for this application. Called in imports/startup/client/startup.jsx. */
const App = () => (
  <Router>
    <div className="d-flex flex-column min-vh-100">
      <TopMenu />
      <Routes>
        <Route exact path="/" element={<HanaTea />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <FooterMenu />
    </div>
  </Router>
);

export default App;
