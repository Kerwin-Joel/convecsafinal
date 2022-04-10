import styled from 'styled-components' ;

export const Container = styled.div`
  border:1px solid red;
  background:gray;
  padding: 0 10%;
`;

export const Content = styled.div`
  border:1px solid blue;
  display:grid;
  grid-template-columns: 30% 70%;
`;
export const Left = styled.div`
  border:1px solid black;

  h2{
    font-size:1.5em;
    margin-bottom:.5rem;

  }
  p,li{
    font-size:.85em;
    margin-top:0;
  }

`;
export const Rigth = styled.div`
  border:1px solid yellow;
  
  form{
    border:1px solid green;

  }
  section{
    display:grid;
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    border:1px solid blue;

    input{
      display: block;
      width: 100%;
      margin: 0;
      outline: none;
      font-size: 16px;
      padding: 5px 20px 5px 15px;
      line-height: 24px;
      color: #626262;
      ${'' /* background: transparent; */}
      border: 1px solid #cccccc;
      border-radius: 0;
    }
    & > div{
      border:1px solid pink;
      position:relative;
    }
    label{
      position:absolute;
    }

  }
  main{
    border:1px solid red;
    position:relative;
    margin-top:2rem;

    label{
      position:absolute;
    }
    textarea{
      width:100%;
    }

  }


`;
