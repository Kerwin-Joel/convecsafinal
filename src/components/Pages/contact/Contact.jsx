import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Container, Content, Left, Rigth } from './styles';
import { BannerAux } from '../banneAux/BannerAux';

export const Contact = () => {
	const form = useRef();

	const sendEmail = e => {
		e.preventDefault();

		emailjs
			.sendForm(
				'service_qz7aygn',
				'template_u6bpruk',
				form.current,
				'nx2WiY5B2aLcb-CZ4'
			)
			.then(
				result => {
					console.log(result.text);
				},
				error => {
					console.log(error.text);
				}
			);

		e.target.reset();
	};

	return (
		<>
			<BannerAux />
			<Container>
				<section>
					<h1>CONTACTO</h1>
					<span></span>
				</section>
				<Content>
					<Left>
						<h2>Dirección :</h2>
						<p>8901 Marmora Road, Glasgow, D04 89GR.</p>
						<ul>
							<h2>Teléfonos :</h2>
							<li>+1 800 559 6580</li>
							<li>+1 959 603 6035</li>
							<li>+1 959 603 6035</li>
						</ul>
					</Left>
					<Rigth>
						<h2>Escríbenos</h2>
						<form ref={form} onSubmit={sendEmail}>
							<section>
								<div>
									<input type="text" name="from_name" />
									<label>Nombre</label>
								</div>
								<div>
									<input type="email" name="email" />
									<label>Email</label>
								</div>
								<div>
									<input type="phone" name="phone" />
									<label>Teléfono</label>
								</div>
							</section>
							<main>
								<textarea name="message"></textarea>
								<label>Mensaje</label>
							</main>
							<button>Enviar</button>
						</form>
					</Rigth>
				</Content>
			</Container>
		</>
	);
};
