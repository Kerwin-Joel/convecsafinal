import styled from 'styled-components';

export const Navigation = styled.nav`
	display: flex;
  justify-content: space-between;
  background-color: #479ed4;
  ${'' /* padding:1% 0%; */}
  ${'' /* position: fixed; */}
  z-index:10;
  width:100%;

  @media (max-width: 980px) {
    flex-direction: column;
    align-items: center;
    gap:15px;
    
  }
  @media (max-width: 600px) {
    flex-direction: row;
    align-items: center;
  }
`;

export const LogoDesktop = styled.div`
  padding-left:10%;
  padding-bottom:1.5%;
  padding-top:1.5%;
  & img {
    width: 75px;
    height: 65px;
  }
  @media (max-width: 980px) {
    padding-left: 0;

  }
  @media (max-width: 600px) {
    padding-left: 10%;
  }
  
`;

export const Menu = styled.div`
  padding-right:10%;

  @media (min-width: 600px) {
    display: none;
  }
  & img {
    width: 35px;
    height: 35px;
    cursor: pointer;
  }
`;

export const List = styled.ul`
  display: flex;
  align-items: center;
  padding-right:10%;

  & li{
    border-radius: 5px;
    padding:10px 0;
    transition: all 0.25s ease-in-out;
    margin: 0 5px;

    &:nth-child(1){
      background-color: #3c8dc7;
    }
    &:hover{
      background: #3c8dc7;
    }
    &:hover a{
      color:white;
    }
    & a{
      transition: all 0.25s ease-in-out;
      color: white;
      padding: 10px 35px;
    }
  }
  @media (max-width: 980px) {
    & li a{
      padding: 10px 20px;
    }
    padding-right: 0;

  }
  @media (max-width: 690px) {
    & li a{
      padding: 10px 20px;
    }
  }
  @media (max-width: 601px) {
    display:none;
    & a{
      color: #fff;
    }
  }
`;

export const ModalMenu = styled.ul`
  position: absolute;
  background-color: white;
  height: 100vh;
  width: 60%;
  top: 0;
  display:none;
  transition: all 0.25s ease-in-out;
  animation: 1s slidein 1;


  & li,li:hover{
    transition: all 0.25s ease-in-out;
    padding: 20px;
    margin: 5px 0;
    padding-left: 0;
  }
  & li:hover{
    transition: all 0.25s ease-in-out;
    background: #479ed4;
  }
  & li:hover a{
    color: #fff;
  }
  & a{
    transition: all 0.25s ease-in-out;
    padding: 16px 55% ;
    color: gray;
    padding-left: 20px;
    
  }
  & .close{
    animation: 1s topin 1;
    position: absolute;
    width: 30px;
    right: 0;
    top:0;
    cursor: pointer;
  }
  & img{
    width:70%;
    padding: 20px;
    display:block;
    margin: 0 auto;
  }

  @media (max-width: 600px) {
    
    display: block;
    right: 0;
    z-index: 1;
  }

  @keyframes slidein {
    from {
      width:0%;
    }
    to {
      width:60%;
    }
  }
  @keyframes topin {
    from {
      top:-50px;
    }
    to {
      top:0;
      right: 0;
    }
  }
`;