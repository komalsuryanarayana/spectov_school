import Navbar from "./component/Navbar.jsx";
import Hero from "./component/Hero.jsx";
import Footer from "./component/Footer.jsx";
import FAQ from "./component/FAQ.jsx";
import AboutUs from "./component/AboutUs.jsx";
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdmissionForm from "./pages/Admission.jsx";
import BlogPage from "./pages/Blog.jsx";
import GalleryPage from "./pages/Gallery.jsx";
import './index.css';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />} />
        <Route path="/admission" element={<AdmissionForm />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
      </Routes>
    </BrowserRouter>
  );
};

const MainLayout = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <AboutUs />
      <FAQ />
      <Footer />
    </div>
  );
};

export default App;
