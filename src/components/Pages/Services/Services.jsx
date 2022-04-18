import React from 'react';
import {
	ListContainer,
	OverviewCol,
	OverviewContainer,
	ServicesMain,
	ListCol,
	Title,
	FeaturedContainer,
	FeaturedWrapper,
	Banner,
	ParallaxTitle,
	ParallaxParagraph,
	Icon,
	FeaturedFlex,
} from './style';
import { BannerAux } from './../banneAux/BannerAux';
import cheque from '../../../images/cheque.png';


const Services = () => {
	return (
		<>
      <BannerAux/>
			<ServicesMain>
				<section>
					<h2>SERVICIOS</h2>
					<span></span>
				</section>
				<OverviewContainer>
					<OverviewCol>
						<img
							src="https://livedemo00.template-help.com/wt_55373/images/page-3_img01.jpg"
							alt=""
						/>
						<div>
							<h3>Commodo turpis quis felis posuere.</h3>
							<p>
								Lorem ipsum dolor sit amet, coetuer ridiculus mus. Nulla dui.
								Fusce feugiat amet eros. Lorem ipsum dolor sit amet, fermentum
								dictum magna. Sed laoreet aliquam leo.
							</p>
						</div>
					</OverviewCol>
					<OverviewCol>
						<img
							src="https://livedemo00.template-help.com/wt_55373/images/page-3_img01.jpg"
							alt=""
						/>
						<div>
							<h3>Commodo turpis quis felis posuere.</h3>
							<p>
								Lorem ipsum dolor sit amet, coetuer ridiculus mus. Nulla dui.
								Fusce feugiat amet eros. Lorem ipsum dolor sit amet, fermentum
								dictum magna. Sed laoreet aliquam leo.
							</p>
						</div>
					</OverviewCol>
					<OverviewCol>
						<img
							src="https://livedemo00.template-help.com/wt_55373/images/page-3_img01.jpg"
							alt=""
						/>
						<div>
							<h3>Commodo turpis quis felis posuere.</h3>
							<p>
								Lorem ipsum dolor sit amet, coetuer ridiculus mus. Nulla dui.
								Fusce feugiat amet eros. Lorem ipsum dolor sit amet, fermentum
								dictum magna. Sed laoreet aliquam leo.
							</p>
						</div>
					</OverviewCol>
					<OverviewCol>
						<img
							src="https://livedemo00.template-help.com/wt_55373/images/page-3_img01.jpg"
							alt=""
						/>
						<div>
							<h3>Commodo turpis quis felis posuere.</h3>
							<p>
								Lorem ipsum dolor sit amet, coetuer ridiculus mus. Nulla dui.
								Fusce feugiat amet eros. Lorem ipsum dolor sit amet, fermentum
								dictum magna. Sed laoreet aliquam leo.
							</p>
						</div>
					</OverviewCol>
				</OverviewContainer>
			</ServicesMain>

			<ListContainer>
				<section>
					<Title>Lista de servicios</Title>
					<span className="listLine"></span>
				</section>
				<ListCol>
					<ul>
						<li>
              <img src={cheque} alt="" />
							<span >Vestibulum placerat</span>
						</li>
						<li>
              <img src={cheque} alt="" />
							<span >Vehicula tortor</span>
						</li>
						<li>
              <img src={cheque} alt="" />
							<span >Fusce sed elit ac nulla</span>
						</li>
						<li>
              <img src={cheque} alt="" />
							<span >Non sit amet nisl integer lobortis</span>
						</li>
						<li>
              <img src={cheque} alt="" />
							<span >Fermentum hendrerit integer nec odio</span>
						</li>
						<li>
              <img src={cheque} alt="" />
							<span >Vivamus pellentesque risus vitae</span>
						</li>
					</ul>
					<ul>
						<li>
              <img src={cheque} alt="" />
							<span >Aliquam quis fringilla lacus</span>
						</li>
						<li>
              <img src={cheque} alt="" />
							<span >Curabitur placerat condimentum</span>
						</li>
						<li>
              <img src={cheque} alt="" />
							<span >Mauris sit amet lacus eget erat</span>
						</li>
						<li>
              <img src={cheque} alt="" />
							<span >Incidunt sodales non</span>
						</li>
						<li>
              <img src={cheque} alt="" />
							<span >Cras ornare erat nec iaculis porttitor</span>
						</li>
						<li>
              <img src={cheque} alt="" />
							<span >Vestibulum molestie condimentum</span>
						</li>
					</ul>
					<ul>
						<li>
              <img src={cheque} alt="" />
							<span >Endrerit ultricies</span>
						</li>
						<li>
              <img src={cheque} alt="" />
							<span >Accumsan leo, a bibendum felis</span>
						</li>
						<li>
              <img src={cheque} alt="" />
							<span >Praesent adipiscing quis sem in lobortis</span>
						</li>
						<li>
              <img src={cheque} alt="" />
							<span >Nunc in ornare augue, et lobortis</span>
						</li>
						<li>
              <img src={cheque} alt="" />
							<span >Integer vulputate ligula in elit ultricies</span>
						</li>
						<li>
              <img src={cheque} alt="" />
							<span >Aliquam quis fringilla lacus</span>
						</li>
					</ul>
				</ListCol>
			</ListContainer>

			<FeaturedContainer>
				<section>
          <h1>PRINCIPALES SERVICIOS</h1>
          <span></span>
        </section>
				<FeaturedWrapper>
					<FeaturedFlex>
						<Icon></Icon>
						<div>
							<h2>Aliquam quis fringilla lacus, sit amet tempor</h2>
							<p>
								Nam tempus semper, mattis dui quis, sociosqu ad litora torquent
								per conubia nostra, per inceptos himenaeos. Aenean Suspendisse
								ut elit imperdiet, imperdiet dis parturient montes, nascetur
								ridiculus nec, luctus a, lorem.
							</p>
						</div>
					</FeaturedFlex>
					<FeaturedFlex>
						<Icon></Icon>
						<div>
							<h2>Aliquam quis fringilla lacus, sit amet tempor</h2>
							<p>
								Nam tempus semper, mattis dui quis, sociosqu ad litora torquent
								per conubia nostra, per inceptos himenaeos. Aenean Suspendisse
								ut elit imperdiet, imperdiet dis parturient montes, nascetur
								ridiculus nec, luctus a, lorem.
							</p>
						</div>
					</FeaturedFlex>
					<FeaturedFlex>
						<Icon></Icon>
						<div>
							<h2>Aliquam quis fringilla lacus, sit amet tempor</h2>
							<p>
								Nam tempus semper, mattis dui quis, sociosqu ad litora torquent
								per conubia nostra, per inceptos himenaeos. Aenean Suspendisse
								ut elit imperdiet, imperdiet dis parturient montes, nascetur
								ridiculus nec, luctus a, lorem.
							</p>
						</div>
					</FeaturedFlex>
				</FeaturedWrapper>
			</FeaturedContainer>

			<Banner>
				<span></span>
				<span></span>
				<ParallaxTitle>WE TAKE PRIDE IN SERVICE WE PROVIDE!</ParallaxTitle>
				<ParallaxParagraph>
					Suspendisse potenti. Nulla pretium orci vel massa convallis fermentum.
					Maecenas in convallis magna. Donec sem enim, congue non risus non,
					tincidunt viverra mauris. Mauris at dolor tempor, finibus mi sed,
					feugiat ex. Ut rhoncus velit eget lectus tempor interdum. Sed nec mi
					eu arcu ultrices scelerisque in dignissim enim.
				</ParallaxParagraph>
			</Banner>
		</>
	);
};

export default Services;
