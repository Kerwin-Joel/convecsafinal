import styled from 'styled-components';

export const Navigation = styled.nav`
  border: 1px solid red;
  display: flex;
  justify-content: space-between;
  background-color: rgba(0, 0, 0, 0.8);
  padding:2% 10%;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap:15px;
  }

  @media (max-width: 600px) {
    flex-direction: row;
  }
`;

export const LogoDesktop = styled.div`
  border: 1px solid black;
  & img {
    width: 100%;
    height: 60px;
  }
  
`;

export const Menu = styled.div`
  border: 1px solid black;
  @media (min-width: 600px) {
    display: none;
  }
  & img {
    width: 50px;
    height: 50px;
    cursor: pointer;
  }
`;

export const List = styled.ul`
  border: 1px solid blue;
  display: flex;
  
  & li{
    margin: 18px 3px;
    padding: 8px 15px;
    border-radius: 5px;
    transition: all 0.25s ease-in-out;
    &:nth-child(1){
      background-color: #3c8dc7;
    }
    &:hover{
      background: #3c8dc7;
    }

    & a{
      color: #fff;
    }
  }
  @media (max-width: 601px) {
    display:none
  }
`;

export const ModalMenu = styled.ul`
  position: absolute;
  background-color: blue;
  width:60%;
  height: 100vh;
  top: 0;
  right: 0;
  display:none;

  & li,li:hover{
    transition: all 0.25s ease-in-out;
    padding: 20px;
    margin: 5px 0;
    padding-left: 0;
  }
  & li:hover{
    background: #479ed4;
  }
  & a{
    padding: 16px 55% ;
    color:white;
    padding-left: 20px;
  }
  & img{
    width:50%;
    padding: 20px;
    display:block;
    margin: 0 auto;
  }

  @media (max-width: 600px) {
    ${'' /* display: block; */}
  }
`;