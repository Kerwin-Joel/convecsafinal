import React from 'react';
import { Nav } from './nav/Nav';
import { Footer } from './footer/Footer';
import Projects from './Pages/Projects/Projects';
import { Home } from './Pages/home/Home';
import { Routes, Route, Link } from "react-router-dom";



export const App = () => {
	return (
		<>
    <Nav />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="about" element={<Projects />} />
    </Routes>
    <Footer />
		</>
	);
};
