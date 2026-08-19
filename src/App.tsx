/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import SmoothScroll from './components/SmoothScroll';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import ServiceDetail from './pages/ServiceDetail';
import Blogs from './pages/Blogs';
import BlogDetail from './pages/BlogDetail';
import Contact from './pages/Contact';
import GetQuote from './pages/GetQuote';

function App() {
  return (
    <Router basename={import.meta.env.BASE_URL}>
      <SmoothScroll>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/:id" element={<ServiceDetail />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/blogs/:id" element={<BlogDetail />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/get-a-quote" element={<GetQuote />} />
          </Routes>
        </Layout>
      </SmoothScroll>
    </Router>
  );
}

export default App;
