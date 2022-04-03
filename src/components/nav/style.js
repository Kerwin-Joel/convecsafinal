import styled from 'styled-components';

export const Navigation = styled.nav`
	border: 1px solid red;
	display: flex;
	justify-content: space-between;

	@media (max-width: 768px) {
		flex-direction: column;
		align-items: center;
		gap: 15px;
	}
`;

export const LogoDesktop = styled.div`
	border: 1px solid black;
`;

export const LogoMobile = styled.div``;

export const List = styled.ul`
	border: 1px solid blue;
	display: flex;
	& li {
		margin: 15px;
		padding: 5px 10px;
		background: red;
	}
	@media (max-width: 450px) {
		display: none;
	}
`;
