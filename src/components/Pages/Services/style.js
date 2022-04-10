import styled from 'styled-components';

export const ServicesMain = styled.section`
	background-color: rgb(26, 27, 26);
	padding: 2.5% 10%;
	color: rgb(215, 208, 195);
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

export const OverviewContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
	gap: 3rem;
	padding-bottom: 8%;
	@media (max-width: 550px) {
		grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
		gap: 6rem;
	}
`;
export const OverviewCol = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(10rem, 22rem));
	@media (max-width: 550px) {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(24rem, 1fr));

		justify-items: center;
	}

	& div {
		@media (max-width: 550px) {
			text-align: center;
		}

		& h3 {
			font-size: 26px;
			line-height: 31px;
		}
	}
`;

export const ListContainer = styled.section`
	background-color: rgb(59, 106, 133);
	padding: 2.5% 10%;
`;

export const ListCol = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
	gap: 2rem;
	padding-bottom: 5%;
	& li {
		margin-top: 0.925rem;
	}
	& a {
		color: rgb(244, 237, 226);
		text-decoration: none;
	}
`;

export const FeaturedContainer = styled.section`
	background-color: #1a1b1a;
	padding: 2.5% 10%;
	color: rgb(215, 208, 195);
`;

export const FeaturedWrapper = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(10rem, 1fr));
	gap: 3rem;
	padding-bottom: 8%;
	@media (max-width: 980px) {
		gap: 1rem;
	}
	@media (max-width: 850px) {
		grid-template-columns: repeat(auto-fit, minmax(21rem, 1fr));
	}
	@media (max-width: 550px) {
		grid-template-columns: repeat(auto-fit, minmax(19rem, 1fr));
	}

	& h2 {
		font-size: 1.275rem;
	}
`;

export const FeaturedFlex = styled.div`
	display: flex;
	justify-content: space-evenly;

	@media (max-width: 550px) {
		justify-content: space-between;
	}

	& div:nth-child(2) {
		width: 56%;
		@media (max-width: 850px) {
			width: 75%;
		}
		@media (max-width: 550px) {
			width: 64%;
		}

  }

	}

	& p {
		font-size: 0.915rem;
	}
`;

export const Icon = styled.div`
	background: #333333;
	border-radius: 50%;
	width: 91px;
	height: 91px;
`;

export const Banner = styled.section`
	background-image: url('src/static/img/parallax2.jpg');

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
