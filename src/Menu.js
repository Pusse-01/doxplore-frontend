import React from 'react'
import { BrowserRouter as Router, Route, Routes  } from 'react-router-dom';
// import styled from 'styled-components';
import PersistentDrawerLeft from './sidebar';
import Home from './views/screens/home.js';
import Documents from './views/screens/documents.js';
export default function Menu() {
  return (
    <Router>
  <PersistentDrawerLeft/>
  <Routes>
    <Route path="/" element={<Home/>}/>
        <Route path="/documents" element={<Documents />} />
      </Routes>

</Router>
  )
}
