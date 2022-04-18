import styled from 'styled-components' ;

export const AboutContainer = styled.div`
  color:#25292e;

`;

export const Overview = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  padding: 0 8%;
  & p {
    font-size: .77rem;
  }

  & h2{
    font-size: 2rem;
    ${'' /* padding-bottom: 1rem; */}
  }

  & li {
    font-size: .8em;
    margin: 10px 0;
  }

  & h4{
    margin-top: 0.3rem;
    margin-bottom: 0.8rem;

  }

  & span{
    font-size: .8rem;
    color:#479ed4;
  }

  & img{
    width: 100%;
  }
`;

export const OverviewItem = styled.div`
  padding: 1rem;
`;


export const Team = styled.div`
  border: 1px solid green;
  background-color: #479ed4;
  color: white;
  margin-top: 4rem;
  padding: 8% 10%;

  & h2:first-child{
    font-size: 2.5rem;
  }
`;

export const Teamitem = styled.div`
  display:grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
`;
export const Item = styled.div`
  text-align: center;
  padding: 1rem 3rem;
  & img{
    width: 10em;
    border-radius:100%
  }
  & h2{
    margin-top: 0.3rem;
    margin-bottom: 0.8rem;
  }
  & p{
    font-size: .8rem;
  }

`;


export const Valores = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  padding: 8% ;
  font-size: .8rem;
  padding-bottom: 10%;

`;
export const ValoresItem = styled.div`
  padding: 0 4%;

  & h2{
    font-size: 2.5rem;
  }

  & li{
    display: flex;
    gap: 5%;
    & img{
      width: 15%;
      height: 20%;
      border-radius: 100%;
    }

    & h3{
      margin-top: 0;
    }
  }

  & .lista > li{
    padding: .35rem 0;

    & span{
      margin-left: -10px;
    }

  }

  & .lista img{
    width: 20px;
    height: 20px;
  }

  & .name{
    font-size: 1rem;
    font-weight: bold;
  }
`;
