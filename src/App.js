

// import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import styled from 'styled-components';
import PersistentDrawerLeft from './sidebar';
import Home from './views/screens/home.js';
import Documents from './views/screens/documents.js';
import Resources from './views/screens/resources.js';
import Upgrade from './views/screens/upgrade.js';
import Synacal from './views/screens/synacal.js';
import Explore from './views/screens/expore';
import PricingPage from './views/screens/wishlist';
import React from 'react';
import ContactUs from './views/screens/contact';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/documents" element={<Documents />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/upgrade" element={<Upgrade />} />
        <Route path="/synacal" element={<Synacal />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>

    </Router>



  );
}
