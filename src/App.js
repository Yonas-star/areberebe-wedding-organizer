import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import Services from './pages/Services/Services';
import Contact from './pages/Contact/Contact';
import About from './pages/About/About';
import GalleryPage from './pages/Gallery/GalleryPage';
import './styles/global.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
        <Footer 
          ownerName="?? ????? ??? ???"
          developerName="Yonas Kassahun"
        />
        <Analytics />
      </div>
    </Router>
  );
}

export default App;
