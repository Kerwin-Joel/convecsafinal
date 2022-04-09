import styled from 'styled-components' ;

export const AboutContainer = styled.div`
  border: 1px solid red;
  padding: 0 10%;
`;

export const Overview = styled.div`
  border: 1px solid blue;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 5%;

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