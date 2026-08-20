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
import CeoMessage from './pages/CeoMessage';
import Services from './pages/Services';
import ServiceDetail from './pages/ServiceDetail';
import Blogs from './pages/Blogs';
import BlogDetail from './pages/BlogDetail';
import Contact from './pages/Contact';
import GetQuote from './pages/GetQuote';
import Legal from './pages/Legal';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Router>
      <SmoothScroll>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/about/ceo" element={<CeoMessage />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/:id" element={<ServiceDetail />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/blogs/:id" element={<BlogDetail />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/get-a-quote" element={<GetQuote />} />
            <Route path="/privacy" element={<Legal type="privacy" />} />
            <Route path="/privacy-policy" element={<Legal type="privacy" />} />
            <Route path="/terms" element={<Legal type="terms" />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </SmoothScroll>
    </Router>
  );
}

export default App;