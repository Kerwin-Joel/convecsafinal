import styled from 'styled-components';

export const ServicesMain = styled.section`
	padding: 2.5% 10%;
  padding-bottom: 10%;

  

	& section {
		display: flex;
    align-items: center;
    padding: 6% 0;

	}
	& span {
		display: block;
		width: 100%;
		height: 1px;
		background: #479ed487;
	}

  & img{
    border-radius: 5px;
  }
  & h2{
    font-size: 40px;
    color:#25292e;
    width: 100%;
    margin:0;
    @media (max-width: 600px) {
      font-size: calc(25px + 6 * ((100vw - 320px) / 680));
      margin-right: 5%;
    }
  }
  & p{
    color:#25292e;
  }
  
  @media (max-width: 800px) {
  
    padding-bottom: 55% ;
    font-size: calc(16px + 6 * ((100vw - 320px) / 680));
  
  }
  
  @media (max-width: 750px) {
  
    padding-bottom: 60%;
    
  }
  @media (max-width: 550px) {
  
    padding-bottom: 65%;
    
  }
  @media (max-width: 450px) {
  
    padding-bottom: 95%;
    
  }
`;

export const Title = styled.h1`
	font-size: 35px;
	text-transform: uppercase;
	width: 100%;
  margin: 0;
  color:rgb(244, 237, 226);
  @media (max-width: 600px) {
    font-size: calc(25px + 6 * ((100vw - 320px) / 680));
    margin-right: 5%;
  }
  
`;

export const OverviewContainer = styled.div`

  display: grid;
  grid-template-columns: repeat(2, minmax(350px, 1fr));

  grid-template-rows: 1fr 1fr;
  gap: 10%;

	@media (max-width: 1350px) {
    
    grid-template-columns: repeat(2, minmax(300px, 1fr));
    gap: 5%;

  }
  @media (max-width: 780px) {
    
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 5%;

  }
  @media (max-width: 350px) {
    
    font-size: calc(16px + 6 * ((100vw - 320px) / 680));
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    

  }
`;
export const OverviewCol = styled.div`

  display: flex;
  gap: 10%;

	@media (max-width: 1350px) {
    align-items: center;
  }
  
  @media (max-width: 1100px) {
    align-items: center;
    flex-direction: column;

    h3{
      padding-top: 10px;
      text-align: center;
      
    }

  }

	& div {
		@media (max-width: 550px) {
      & h3 {
        margin-top: 0;
        font-size: 26px;
        line-height: 31px;
      }
		}

		& h3 {
      margin-top: 0;
			font-size: 26px;
			line-height: 31px;
		}
	}
  & img{
    width: 50%;
    height: fit-content;
    padding-bottom: 10px;
    @media (max-width: 1100px) {
      width: 80%;
    }
    @media (max-width: 450px) {
      width: 100%;
    }
  }
  @media (max-width: 50px) {
    & p {
      ${'' /* text-align: justify; */}
    }
  }
`;






export const ListContainer = styled.section`
	background-color: #479ed4;
	padding: 5% 10%;
  
  
  
  section{
    display: flex;
    align-items: center;
    padding-bottom: 5%;

    .listLine{
      display: block;
      width: 100%;
      height: 1px;
      background: white;
    }

  }
  @media (max-width: 450px) {
    padding:15% 10%;


    & section{
      padding-bottom: 15%;
    }

  }
  
`;

export const ListCol = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
	gap: 2rem;
	padding-bottom: 5%;
	& li {
		margin-top: 0.925rem;
    display: flex;
    align-items: center;
	}
	& span {
		color: rgb(244, 237, 226);
		text-decoration: none;
    
	}

  & h3{
    color:rgb(244, 237, 226);
  }

  & img{
    padding-right: 10px;
    width: 5%;
    height: 5%;
  }
  
`;

export const FeaturedContainer = styled.section`
	padding: 5% 10%;
	${'' /* color: rgb(215, 208, 195); */}

  & section{
    display: flex;
    align-items: center;
    padding-bottom: 5%;

    h1{
      font-size: 35px;
      width: 100%;
      color: #25292e;
      @media (max-width: 600px) {
        font-size: calc(25px + 6 * ((100vw - 320px) / 680));
        margin-right: 5%;
      }
    }

  }
  & span {
		display: block;
		width: 100%;
		height: 1px;
		background: #479ed487;
	}

`;

export const FeaturedWrapper = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
	gap: 3rem;
	padding-bottom: 8%;
	${'' /* @media (max-width: 980px) {
		gap: 1rem;
	}
	@media (max-width: 850px) {
		grid-template-columns: repeat(auto-fit, minmax(21rem, 1fr));
	}
	@media (max-width: 550px) {
		grid-template-columns: repeat(auto-fit, minmax(19rem, 1fr));
	} */}

	& h2 {
		font-size: 1.275rem;
    margin-top:0;
	}
`;

export const FeaturedFlex = styled.div`
	display: flex;
	justify-content: space-evenly;
  gap: 5% ;
	@media (max-width: 550px) {
		justify-content: space-between;
	}

	& div:nth-child(2) {
		width: 56%;
		@media (max-width: 850px) {
			width: 75%;
		}
		@media (max-width: 550px) {
			width: 64%;
		}

  }

	}

	& p {
		font-size: 0.915rem;
	}
`;

export const Icon = styled.div`
	border-radius: 50%;
	width: 91px;
	height: 91px;
`;

export const Banner = styled.section`
	background-image: url('src/static/img/parallax2.jpg');

	background-repeat: no-repeat;
	background-size: cover;
	background-position: center center;
	height: 55vh;
	position: relative;
	overflow: hidden;
	padding: 5% 10%;
	justify-content: center;
	display: flex;
	flex-direction: column;

	& span {
		display: block;
		position: absolute;
		width: 0;
		height: 0;
		border-left: 50px solid transparent;
		border-right: 50px solid transparent;
		border-bottom: 50px solid transparent;
		border-top: 80px solid #00000024;
		transform: rotate(-90deg) scale(70);
		top: 35%;
	}
	& span:nth-child(2) {
		left: -10%;
	}
`;

export const ParallaxTitle = styled.h2`
	font-size: 80px;
	font-weight: 700;
	text-transform: uppercase;
	z-index: 4;
	position: relative;
  color: white;
  margin-bottom: 0;

  @media (max-width: 992px) {
		font-size: 40px;
	}
  @media (max-width:450px) {
		font-size: 40px;
	}
  @media (max-width:450px) {
		font-size: 30px;
	}

`;

export const ParallaxParagraph = styled.p`
	z-index: 4;
	position: relative;
	font-size: 25px;
  color: white;

  @media (max-width: 992px) {
		font-size: 20px;
	}
  @media (max-width:450px) {
		font-size: 15px;
  }
`;
