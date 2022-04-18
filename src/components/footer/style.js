import styled from 'styled-components';

export const ContainerFooter = styled.footer`
  background-color: #333333;
  display:grid;
  grid-template-columns: repeat(4, 1fr);
  justify-items: center;
  align-items: start;
  padding: 3% 10%;
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

  & li{
    padding: 0.4rem 0;
  }
  & a{
    display: inline-block;
  }
  & a:after{
    content: '';
    display: block;
    height: 1px;
    width: 0;
    background-color: #479ed4;
    margin: 0.1rem 0;
    transition: width 0.3s ease-in-out;
  }
  & a:hover:after{
    width: 100%;
  }

  & a,span,p{
    color: #9d9d9d;
    padding: 0;
  }
  
  & .margen{
    padding: 3.5px 0;
  }
  
  & h2{
    margin-top: 0;
  }


  @media (max-width: 980px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 30px;
    text-align:center;
    padding: 10%;

    & li{
      padding: 0.05rem 0;
    }

  }
  @media (max-width: 600px) {
    grid-template-columns: repeat(1, 1fr);
    text-align:center;
    
    & a{
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