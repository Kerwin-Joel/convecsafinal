import React from 'react';
import { List, LogoDesktop, Navigation } from './style';

export const Nav = () => {
	return (
		<Navigation>
			<LogoDesktop>Convecsa</LogoDesktop>
			<List>
				<li>
					<a href="#">Inicio</a>
				</li>
				<li>
					<a href="#">Nosotros</a>
				</li>
				<li>
					<a href="#">Servicios</a>
				</li>
				<li>
					<a href="#Projects">Proyectos</a>
				</li>
				<li>
					<a href="#">Contacto</a>
				</li>
			</List>
		</Navigation>
	);
};
