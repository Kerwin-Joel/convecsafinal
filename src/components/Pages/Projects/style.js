import styled from 'styled-components';

export const ProductsMain = styled.section`
	background-color: rgb(26, 27, 26);
	padding: 2.5% 10%;
	& section {
		display: flex;
		align-items: center;
		justify-content: center;
	}
	& span {
		display: block;
		width: 100%;
		height: 1px;
		background: #479ed487;
	}
`;

export const Title = styled.h2`
	font-size: 40px;
	text-transform: uppercase;
	color: rgb(215, 208, 195);
	width: 100%;
`;

export const Cards = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(23rem, 1fr));
	gap: 5rem;
	padding-bottom: 5%;

	@media (max-width: 550px) {
		grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
		gap: 3rem;
	}
`;

export const Card = styled.div`
	box-shadow: 0 0 3px rgba(0, 0, 0, 0.1);
`;

export const CardThumb = styled.a`
	display: block;
`;

export const CardImage = styled.img`
	width: 100%;
	height: auto;
`;

export const CardContent = styled.div`
	background-color: rgb(33, 34, 34);
	color: rgb(215, 208, 195);
	line-height: 1.5rem;
	font-size: 0.9rem;
	padding: 25px 20px 35px;
`;

export const Subtitle = styled.h6`
	color: rgb(215, 208, 195);
	font-size: 20px;
	line-height: 14px;
	margin-bottom: 0;
	margin-top: 0;
`;

export const Link = styled.a`
	text-decoration: none;
	color: rgb(215, 208, 195);
	cursor: pointer;

	&:hover {
		text-decoration-color: currentcolor;
		color: rgb(114, 165, 193);
	}
`;

export const Paragraph = styled.p`
	line-height: 20px;
`;

export const Banner = styled.section`
	background-image: url('src/static/img/parallax3.jpg');

	background-repeat: no-repeat;
	background-size: cover;
	background-position: center center;
	height: 55vh;
	position: relative;
	overflow: hidden;
	padding: 5% 10%;
	justify-content: center;
	display: flex;
	flex-direction: column;
	color: #ffffffe3;

	& span {
		display: block;
		position: absolute;
		width: 0;
		height: 0;
		border-left: 50px solid transparent;
		border-right: 50px solid transparent;
		border-bottom: 50px solid transparent;
		border-top: 80px solid #00000024;
		transform: rotate(-90deg) scale(70);
		top: 35%;
	}
	& span:nth-child(2) {
		left: -10%;
	}
`;

export const ParallaxTitle = styled.h2`
	font-size: 80px;
	font-weight: 700;
	line-height: 70px;
	text-transform: uppercase;
	z-index: 4;
	position: relative;
	@media (max-width: 992px) {
		font-size: 30px;
		line-height: 35px;
	}
`;

export const ParallaxParagraph = styled.p`
	z-index: 4;
	position: relative;
	font-size: 19px;
`;
