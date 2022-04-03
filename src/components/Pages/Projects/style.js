import styled from 'styled-components';

export const Wrapper = styled.main`
	background-color: rgb(26, 27, 26);
	height: 100vh;
`;

export const Section = styled.section`
	padding-bottom: 103px;
	padding-top: 91px;
`;

export const Title = styled.h2`
	color: rgb(215, 208, 195);
	font-size: 40px;
	line-height: 48px;
	text-transform: uppercase;
	color: rgb(215, 208, 195);
	overflow: hidden;
`;

export const Cards = styled.div`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	grid-template-rows: repeat(3, 1fr);
	gap: 20px;
	margin-top: 40px;
`;

export const Card = styled.div`
	box-shadow: 0 0 3px rgba(0, 0, 0, 0.1);
`;

export const CardImage = styled.img`
	width: 100%;
`;

export const CardContent = styled.div`
	background-color: rgb(33, 34, 34);
	color: rgb(215, 208, 195);
	line-height: 1.5rem;
	font-size: 0.9rem;
	padding: 25px 20px 35px;
`;
