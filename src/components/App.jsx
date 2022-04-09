import React from 'react';
import { Nav } from './nav/Nav';
import { Footer } from './footer/Footer';
import Projects from './Pages/Projects/Projects';
import { Home } from './Pages/home/Home';
import { Routes, Route, Link } from "react-router-dom";
import { About } from './Pages/about/About';
import Services from './Pages/Services/Services';
import { Contact } from './Pages/contact/Contact';



export const App = () => {
	return (
		<>
    <Nav />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="services" element={<Services />} />
      <Route path="projects" element={<Projects />} />
      <Route path="contact" element={<Contact />} />
    </Routes>
    <Footer />
		</>
	);
};
