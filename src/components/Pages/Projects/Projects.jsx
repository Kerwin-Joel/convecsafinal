import React from 'react';
import img1 from '../../../static/img/page-4_img01.jpg';
import img2 from '../../../static/img/page-4_img02.jpg';
import img3 from '../../../static/img/page-4_img03.jpg';
import img4 from '../../../static/img/page-4_img04.jpg';
import img5 from '../../../static/img/page-4_img05.jpg';
import img6 from '../../../static/img/page-4_img06.jpg';
import img7 from '../../../static/img/page-4_img07.jpg';
import img8 from '../../../static/img/page-4_img08.jpg';
import img9 from '../../../static/img/page-4_img09.jpg';
import {
	Card,
	CardContent,
	CardImage,
	Cards,
	CardThumb,
	Center,
	Container,
	Link,
	Paragraph,
	Parallax,
	ParallaxContent,
	ParallaxImage,
	ParallaxParagraph,
	ParallaxTitle,
	ParallaxWrapper,
	Section,
	Subtitle,
	Title,
  Wrapper,
} from './style';

const Projects = () => {
	return (
		<Wrapper>
			<Section>
				<Container>
					<Center>
						<Title>
							our products <span></span>
						</Title>
						<Cards>
							<Card>
								<CardThumb>
									<CardImage src={img1}></CardImage>
								</CardThumb>
								<CardContent>
									<Subtitle>
										<Link href="/">Quisque a quam dictum, rutrum</Link>
									</Subtitle>
									<Paragraph>
										Lorem ipsum dolor sit amet, coetuer adipiscing elit.
										Praesent vestibulum molestie nonummy varius.
									</Paragraph>
								</CardContent>
							</Card>
							<Card>
								<CardThumb>
									<CardImage src={img2}></CardImage>
								</CardThumb>
								<CardContent>
									<Subtitle>
										<Link href="/">Quisque a quam dictum, rutrum</Link>
									</Subtitle>
									<Paragraph>
										Lorem ipsum dolor sit amet, coetuer adipiscing elit.
										Praesent vestibulum molestie nonummy varius.
									</Paragraph>
								</CardContent>
							</Card>
							<Card>
								<CardThumb>
									<CardImage src={img3}></CardImage>
								</CardThumb>
								<CardContent>
									<Subtitle>
										<Link href="/">Quisque a quam dictum, rutrum</Link>
									</Subtitle>
									<Paragraph>
										Lorem ipsum dolor sit amet, coetuer adipiscing elit.
										Praesent vestibulum molestie nonummy varius.
									</Paragraph>
								</CardContent>
							</Card>

							<Card>
								<CardThumb>
									<CardImage src={img4}></CardImage>
								</CardThumb>
								<CardContent>
									<Subtitle>
										<Link href="/">Quisque a quam dictum, rutrum</Link>
									</Subtitle>
									<Paragraph>
										Lorem ipsum dolor sit amet, coetuer adipiscing elit.
										Praesent vestibulum molestie nonummy varius.
									</Paragraph>
								</CardContent>
							</Card>
							<Card>
								<CardThumb>
									<CardImage src={img5}></CardImage>
								</CardThumb>
								<CardContent>
									<Subtitle>
										<Link href="/">Quisque a quam dictum, rutrum</Link>
									</Subtitle>
									<Paragraph>
										Lorem ipsum dolor sit amet, coetuer adipiscing elit.
										Praesent vestibulum molestie nonummy varius.
									</Paragraph>
								</CardContent>
							</Card>
							<Card>
								<CardThumb>
									<CardImage src={img6}></CardImage>
								</CardThumb>
								<CardContent>
									<Subtitle>
										<Link href="/">Quisque a quam dictum, rutrum</Link>
									</Subtitle>
									<Paragraph>
										Lorem ipsum dolor sit amet, coetuer adipiscing elit.
										Praesent vestibulum molestie nonummy varius.
									</Paragraph>
								</CardContent>
							</Card>

							<Card>
								<CardThumb>
									<CardImage src={img7}></CardImage>
								</CardThumb>
								<CardContent>
									<Subtitle>
										<Link href="/">Quisque a quam dictum, rutrum</Link>
									</Subtitle>
									<Paragraph>
										Lorem ipsum dolor sit amet, coetuer adipiscing elit.
										Praesent vestibulum molestie nonummy varius.
									</Paragraph>
								</CardContent>
							</Card>
							<Card>
								<CardThumb>
									<CardImage src={img8}></CardImage>
								</CardThumb>
								<CardContent>
									<Subtitle>
										<Link href="/">Quisque a quam dictum, rutrum</Link>
									</Subtitle>
									<Paragraph>
										Lorem ipsum dolor sit amet, coetuer adipiscing elit.
										Praesent vestibulum molestie nonummy varius.
									</Paragraph>
								</CardContent>
							</Card>
							<Card>
								<CardThumb>
									<CardImage src={img9}></CardImage>
								</CardThumb>
								<CardContent>
									<Subtitle>
										<Link href="/">Quisque a quam dictum, rutrum</Link>
									</Subtitle>
									<Paragraph>
										Lorem ipsum dolor sit amet, coetuer adipiscing elit.
										Praesent vestibulum molestie nonummy varius.
									</Paragraph>
								</CardContent>
							</Card>
						</Cards>
					</Center>
				</Container>
			</Section>
			<Parallax>
				<ParallaxImage></ParallaxImage>
				<ParallaxWrapper>
					<ParallaxContent>
						<Container>
							<ParallaxTitle>
								we work hard <br /> for your satisfaction!
							</ParallaxTitle>
							<ParallaxParagraph>
								Suspendisse potenti. Nulla pretium orci vel massa convallis
								fermentum. Maecenas in convallis magna. Donec sem enim, congue
								non risus non, tincidunt viverra mauris. Mauris at dolor tempor,
								finibus mi sed, feugiat ex. Ut rhoncus velit eget lectus tempor
								interdum. Sed nec mi eu arcu ultrices scelerisque in dignissim
								enim.
							</ParallaxParagraph>
						</Container>
					</ParallaxContent>
				</ParallaxWrapper>
			</Parallax>
		</Wrapper>
	);
};

export default Projects;
