import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Container, Content, Left, Rigth } from './styles';
import { BannerAux } from '../banneAux/BannerAux';
import Loader from '../../utils/Loader';
import { Toaster, toast } from 'react-hot-toast';

export const Contact = () => {
	const [loading, setLoading] = useState(false);
	const form = useRef();
	const [toggle, setToggle] = useState(false);
	const divRef = useRef(null);
	const divRef1 = useRef(null);
	const divRef2 = useRef(null);
	const divRef3 = useRef(null);
	const handleInput1 = e => {
		console.log(e.target.value);

		if (e.target.value.length > 0) {
			setToggle(!toggle);
			divRef.current.style.display = 'none';
		} else {
			divRef.current.style.display = 'block';
		}
	};

	const handleInput2 = e => {
		if (e.target.value.length > 0) {
			setToggle(!toggle);

			divRef1.current.style.display = 'none';
		} else {
			divRef1.current.style.display = 'block';
		}
	};

	const handleInput3 = e => {
		if (e.target.value.length > 0) {
			setToggle(!toggle);

			divRef2.current.style.display = 'none';
		} else {
			divRef2.current.style.display = 'block';
		}
	};

	const handleInput4 = e => {
		if (e.target.value.length > 0) {
			setToggle(!toggle);

			divRef3.current.style.display = 'none';
		} else {
			divRef3.current.style.display = 'block';
		}
	};
	const sendEmail = e => {
		e.preventDefault();
		setLoading(true);

		emailjs
			.sendForm(
				'service_qz7aygn',
				'template_u6bpruk',
				form.current,
				'nx2WiY5B2aLcb-CZ4'
			)
			.then(
				result => {
					setLoading(false);
					toast.success('Enviado');
					console.log(result.text);
				},
				error => {
					setLoading(false);
					toast.error('Hubo un problema, no se pudo enviar el mensaje');
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
									<input type="text" name="from_name" onChange={handleInput1} />
									<label ref={divRef}>Nombre</label>
								</div>
								<div>
									<input type="email" name="email" onChange={handleInput2} />
									<label ref={divRef1}>Email</label>
								</div>
								<div>
									<input type="phone" name="phone" onChange={handleInput3} />
									<label ref={divRef2}>Teléfono</label>
								</div>
							</section>
							<main>
								<textarea name="message" onChange={handleInput4}></textarea>
								<label ref={divRef3}>Mensaje</label>
							</main>
							<button> {loading ? <Loader /> : 'Enviar'}</button>
						</form>
						<Toaster position="top-center" reverseOrder={false} />
					</Rigth>
				</Content>
			</Container>
		</>
	);
};
