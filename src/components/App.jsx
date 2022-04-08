import React from 'react';
import { Nav } from './nav/Nav';
import { Footer } from './footer/Footer';
import Projects from './Pages/Projects/Projects';
import { Home } from './Pages/home/Home';

export const App = () => {
	return (
		<>
			<Nav />
			{/* <Home/> */}
			<Projects />
			<Footer />
		</>
	);
};
