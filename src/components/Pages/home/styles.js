import styled from 'styled-components';

export const Img = styled.img`
  display: width: 100vw;
`;
export const ButtonsImg = styled.img`
  width: 100%;
`;
export const CustomerSay = styled.div`
  background: #479ed4;
  padding: 3% 20%;
  display: flex;
  gap: 3%;
  justify-content: center;
  align-items:center;
  color:white;
  & img {
    border-radius:100%;
  }

  @media (max-width: 980px) {
    padding: 5%;

    & img {
      border-radius:100%;
      width: 100%;
      height: 100%;
      
    }
  }
  @media (max-width: 550px) {
    padding: 10% 20%;
    flex-direction:column;
  }
`;

export const ServicesMain = styled.div`
  padding: 2.5% 10%;

  & h1{
    font-size: 40px;
    text-transform: uppercase;
    color: #25292e;
    width: 100%;
  }
  & section{
    position:relative;
    display:flex;
    align-items: center;

  }
  & span{
    display:block;
    width:100%;
    height:1px;
    background: #479ed487;
  }
`;

export const ContainerCard = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
  align-items: end;
  gap:8%;
  justify-items: center;
  padding-bottom: 5%;

  @media (max-width: 550px){
    gap:5%;
  }

`;


export const Card = styled.div`
  color:#25292e;
  
  @media (max-width: 1100px){
      &:nth-child(3) {
      padding-bottom: 40%;
    }
  }
  @media (max-width: 670px){
      &:nth-child(3) {
      padding-bottom: 80%;
    }
  }

  & img{
    width:100%;
    border-radius:5px;
  }

  & p{
    color:#626262;
  }

  & a{
    display:flex;
    background:#479ed4;
    border-radius: 8px;
    width:100px;
    height:40px;
    text-align:center;
    justify-content:center;
    align-items:center;
    font-weight:bold;
    text-transform: capitalize;
    color:white;
    transition: all .3s ease-in-out;
  }
  & a:hover{
    transform:translateY(-3px);
    box-shadow: 0px 1px 5px #479ed4;
    background:#397ba5;
  }

`;


export const Advantages = styled.div`
    padding: 7% 10%;
    background: #f3f3f3;
    
    & section{
      display:flex;
      align-items:center;
    }
    
    & h1{
      font-size: 40px;
      text-transform: uppercase;
      color: #25292e;
      width: 100%;
      margin-top: 0;
    }
    & span{
      display:block;
      width:100%;
      height:1px;
      background: #479ed487;
    }
    
    @media (max-width: 1100px) {
      padding-bottom: 15%;
    }
    @media (max-width: 750px) {
      padding-bottom: 25%;
    }
    @media (max-width: 600px) {
      padding-bottom: 45%;
    }
    @media (max-width: 375px) {
      padding-bottom: 60%;
    }
`;

export const Item = styled.div`
    display: flex;
    align-items :center;
    gap:5%;
    
    & img{
      height:110px;
    }
    
`;

export const ItemContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(2,1fr);
    grid-template-rows: 1fr 1fr;
    gap: 5%;
    justify-content: center;

    @media (max-width: 750px){
      grid-template-columns: 1fr;
    }
`;

export const Banner = styled.section`
  background:url('https://livedemo00.template-help.com/wt_55373/images/parallax1.jpg');
  background-size: cover;
  height: 55vh;
  position: relative;
  overflow: hidden;
  padding: 5% 10%;
  justify-content: center;
  display: flex;
  flex-direction: column;
  color:#ffffffe3;

  & span{
    display:block;
    position:absolute;
    width: 0;
    height: 0;
    border-left: 50px solid transparent;
    border-right: 50px solid transparent;
    border-bottom: 50px solid transparent;
    border-top: 80px solid #00000024;
    transform: rotate(-90deg) scale(70) ;
    top: 35%;
  }
  & span:nth-child(2){
    border-top: 80px solid #479ed44f;
    left:-10%;
  }

  & h1,p{
    z-index: 4;
    position: relative;
  }

  & h1{
    font-size: 4rem;
    line-height: 77px;
    font-weight: 900;
    text-transform: uppercase;
    margin-top:0;
    margin-bottom:0;
  }

  & p{
    font-size: 19px;
  }


  @media (max-width: 980px) {
    & h1{
      font-size: 3rem;
      line-height: 50px;
    }
  }
  @media (max-width: 750px) {
    background-position: center;
    & h1{
      font-size: 2.5rem;
    }
  }
  @media (max-width: 500px) {
    padding: 5% 10%;
    & h1{
      font-size: 2.5rem;
    }
  }


`;

export const Responsability = styled.div`
  padding: 7% 10%;
  background: #f3f3f3;
  
  & section{
    display:flex;
    align-items:center;
  }
  
  & h1{
    font-size: 40px;
    text-transform: uppercase;
    color: #25292e;
    width: 100%;
    margin-top: 0;
  }
  & span{
    display:block;
    width:100%;
    height:1px;
    background: #479ed487;
  }
  & img{
    width: 40%;
    border-radius:5px;

  }
  & main{
    display:flex;
    gap:5%;

    & div{
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
  }
  & p{
    margin: 0;
  }

  & a{
    background: #479ed4;
    width: 110px;
    display: flex;
    height: 35px;
    align-items: center;
    justify-content: center;
    margin-top: 5%;
    border-radius: 10px;
    color: white;
    font-weight: bold;
    transition: all .3s ease-in-out;
  }

  & a:hover{
    transform:translateY(-3px);
    box-shadow: 0px 1px 5px #479ed4;
  }  

  @media(max-width: 750px){
    & main{
      display:flex;
      flex-direction: column;
    }
    & img{
      width: 100%;
      padding-bottom: 5%;
    }
  }
`;