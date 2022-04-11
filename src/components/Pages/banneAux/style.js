import styled from 'styled-components';

export const BannerContainer = styled.section`
	background-image: url('src/static/img/parallax2.jpg');

	background-repeat: no-repeat;
	background-size: cover;
	background-position: center center;
	height: 10vh;
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
		height: 20px;
		border-left: 50px solid transparent;
		border-right: 50px solid transparent;
		border-bottom: 50px solid transparent;
		border-top: 80px solid #00000024;
		transform: rotate(-90deg) scale(70);
		top: 0;
		left: 0;
	}
	& span:nth-child(2) {
		left: 50%;
	}
  @media (max-width: 550px) {
    span{
      width: 0;
      height: 20px;
      border-left: 60px solid transparent;
      border-right: 60px solid transparent;
      border-bottom: 60px solid transparent;
      border-top: 80px solid #00000024;
      transform: rotate(-90deg) scale(20);
      left: 60%;

    }
    & span:nth-child(2) {
      left: 80%;
    }
  }
  @media (max-width: 350px) {
    span{
      border-left: 75px solid transparent;
      border-right: 75px solid transparent;
      border-bottom: 75px solid transparent;
      top: -40%;
      left: 90%;
    }
    & span:nth-child(2) {
      left: 110%;
    }
  }
`;