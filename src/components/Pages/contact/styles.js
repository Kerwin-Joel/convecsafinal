import styled from 'styled-components';

export const Container = styled.div`
	padding: 5% 10%;
	padding-bottom: 8%;

	& section {
		display: flex;
		align-items: center;
		gap: 5%;
	}

	& span {
		display: block;
		width: 100%;
		height: 1px;
		background: #479ed487;
	}

	& h1 {
		font-size: 40px;
	}
`;

export const Content = styled.div`
	display: grid;
	grid-template-columns: 30% 70%;

	h2,
	h1 {
		color: #25292e;
	}

	@media (max-width: 980px) {
		grid-template-columns: repeat(auto-fit, minmax(15rem, 100%));
	}
`;
export const Left = styled.div`
	h2 {
		font-size: 1.5em;
	}
	p,
	li {
		font-size: 0.85em;
		margin-top: 0;
	}
	ul > li {
		padding: 1.5% 0;
	}
`;
export const Rigth = styled.div`
	section {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(10rem, 1fr));
		gap: 2rem;
		@media (max-width: 980px) {
			grid-template-columns: repeat(auto-fit, minmax(12rem, 100%));
			gap: 1rem;
		}

		input {
			display: block;
			width: 100%;
			margin: 0;
			outline: none;
			font-size: 16px;
			padding: 0.525rem 0;
			line-height: 24px;
			color: #626262;
			border: 1px solid #cccccc;
			border-radius: 0;
			border-radius: 5px;
		}
		& > div {
			position: relative;
			width: auto;
		}

		label {
			position: absolute;
			top: 25%;
			left: 5%;
			color: #a9a9a9;
			transition: all 0.3s ease-in-out;
		}
	}
	input:focus + label {
		top: 7%;
		left: 3%;
		font-size: 13px;
		color: #a9a9a9;
	}

	main {
		position: relative;
		margin-top: 2rem;

		label {
			position: absolute;
			top: 5%;
			left: 1.5%;
			color: #a9a9a9;
			transition: all 0.3s ease-in-out;

			@media (max-width: 450px) {
				left: 5%;
			}
		}
		textarea {
			border-radius: 5px;
			width: 100%;
			resize: none;
			height: 204px;
			padding: 0;
			border: 1px solid #cccccc;
		}
	}
	textarea:focus + label {
		top: 1%;
		left: 1%;
		font-size: 13px;
		color: #a9a9a9;
	}
	textarea:focus,
	input:focus {
		outline: none !important;
		border-color: #719ece;
	}
	button {
		border: none;
		display: flex;
		background: #479ed4;
		border-radius: 8px;
		width: 100px;
		height: 40px;
		text-align: center;
		justify-content: center;
		align-items: center;
		font-weight: bold;
		text-transform: capitalize;
		color: white;
		transition: all 0.3s ease-in-out;
		margin-top: 1.5rem;
		font-size: 1.2rem;
	}
	button:hover {
		transform: translateY(-3px);
		box-shadow: 0px 1px 5px #479ed4;
		background: #397ba5;
		cursor: pointer;
	}
`;
