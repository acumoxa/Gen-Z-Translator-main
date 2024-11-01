import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Home from './pages/Home';
import About from './pages/About';
import Privacy from './pages/Privacy';
import DataProtection from './pages/DataProtection';
import Glossary from './pages/Glossary';
import Shop from './pages/Shop';

function App() {
  return (
    <HelmetProvider>
      <div className="relative overflow-x-hidden">
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/data-protection" element={<DataProtection />} />
            <Route path="/glossary" element={<Glossary />} />
            <Route path="/shop" element={<Shop />} />
          </Routes>
        </Router>
      </div>
    </HelmetProvider>
  );
}

export default App;