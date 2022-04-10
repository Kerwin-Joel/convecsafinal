import styled from 'styled-components';

export const Container = styled.div`
	border: 1px solid red;
	background: gray;
	padding: 0 10%;
	padding-bottom: 8%;
`;

export const Content = styled.div`
	border: 1px solid blue;
	display: grid;
	grid-template-columns: 30% 70%;
	@media (max-width: 980px) {
		grid-template-columns: repeat(auto-fit, minmax(15rem, 100%));
	}
`;
export const Left = styled.div`
	border: 1px solid black;

	h2 {
		font-size: 1.5em;
		margin-bottom: 0.5rem;
	}
	p,
	li {
		font-size: 0.85em;
		margin-top: 0;
	}
`;
export const Rigth = styled.div`
	border: 1px solid yellow;

	form {
		border: 1px solid green;
	}
	section {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(10rem, 1fr));
		border: 1px solid blue;
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
			${'' /* background: transparent; */}
			border: 1px solid #cccccc;
			border-radius: 0;
		}
		& > div {
			border: 1px solid pink;
			position: relative;
			width: auto;
		}

		label {
			position: absolute;
		}
	}
	main {
		border: 1px solid red;
		position: relative;
		margin-top: 2rem;

		label {
			position: absolute;
		}
		textarea {
			width: 100%;
			resize: none;
			height: 204px;
			padding: 0;
		}
	}
	button {
		display: inline-block;
		font-weight: 600;
		cursor: pointer;
		border: 1px solid transparent;
		margin-top: 1rem;
		outline: none;
		padding: 14px 25px;
		transition: 0.2s all ease;
		font-size: 20px;
		line-height: 31px;
		background-color: rgb(59, 106, 133);
		border-color: rgb(53, 96, 120);
		color: rgb(244, 237, 226);
		border-radius: 8px;
	}
`;
