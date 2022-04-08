import styled from 'styled-components';

export const ContainerFooter = styled.footer`
  background-color: #3333338c;
  display:grid;
  grid-template-columns: repeat(4, 1fr);
  justify-items: center;
  align-items: center;
  padding: 0 10%;
  color: white;

  & img{
    width: 100px;
    height: 100px;
    margin: 0 auto;
  }

  & ul li img{
    width: 50px;
    height: 50px;
  }

  & a,span,p{
    color: #232323;
  }
  
  & .margen{
    padding: 3.5px 0;
  }


  @media (max-width: 980px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 30px;
    text-align:center;
  }
  @media (max-width: 600px) {
    grid-template-columns: repeat(1, 1fr);
    text-align:center;
    
    & a{
      display: block;
      padding: 3.5px 0;
    }

    & img{
      width: 80px;
      height: 70px;
    }
  
    & ul li img{
      width: 30px;
      height: 30px;
    }
  }

`;

export const Margen = styled.span`
    display:block;
    padding: 3.5px 0;
`;

export const Redes = styled.ul`
  display: flex;
  justify-content: space-evenly;
  margin: 20px 0;
`;

export const LogoRigths = styled.div`
  display: flex;
  flex-direction: column;
  text-align:center
`;