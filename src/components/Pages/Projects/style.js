import styled from 'styled-components';

export const Wrapper = styled.main`
	height: auto;
	margin-right: 0;
	margin-left: 0;
`;

export const Section = styled.section`
	background-color: rgb(26, 27, 26);
	padding-bottom: 103px;
	padding-top: 91px;
`;

export const Container = styled.div`
	width: 1170px;
	margin-right: auto;
	margin-left: auto;
	@media (max-width: 992px) {
		width: 970px;
	}
	@media (max-width: 768px) {
		width: 750px;
		padding-left: 0;
		padding-right: 0;
	}
`;

export const Title = styled.h2`
	font-size: 40px;
	line-height: 48px;
	text-transform: uppercase;
	color: rgb(215, 208, 195);
	overflow: hidden;
	@media (max-width: 768px) {
		margin-left: 3rem;
	}
`;

export const Cards = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(250px, 3fr));
	gap: 40px;
	width: 95%;
	margin-bottom: 40px;
	@media (max-width: 992px) {
		width: 82%;
	}
	@media (max-width: 768px) {
		width: 45%;
		margin-left: 3rem;
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
	font-size: 15px;
	line-height: 20px;
`;

export const Parallax = styled.section`
	position: relative;
	overflow: hidden;
`;

export const ParallaxImage = styled.div`
	background-image: url('src/static/img/parallax3.jpg');
	background-color: inherit;
	height: 500px;
	transform: translate3d(0px, -132.533px, 0px);
	background-repeat: no-repeat;
	background-size: cover;
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	background-position: center center;
	will-change: transform;
`;

export const ParallaxWrapper = styled.div`
	position: relative;
	padding-bottom: 144px;
	padding-top: 120px;
`;

export const ParallaxContent = styled.div`
	position: relative;

	color: rgb(244, 237, 226);
`;

export const ParallaxTitle = styled.span`
	font-size: 80px;
	font-weight: 700;
	line-height: 70px;
	text-transform: uppercase;
	@media (max-width: 992px) {
		font-size: 30px;
		line-height: 35px;
	}
`;

export const ParallaxParagraph = styled.p`
	font-size: 19px;
`;
