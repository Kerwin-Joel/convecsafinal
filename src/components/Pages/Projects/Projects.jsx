import React from 'react';
import img1 from '../../../static/img/page-4_img01_original.jpg';
import {
	Card,
	CardContent,
	CardImage,
	Cards,
	Section,
	Title,
	Wrapper,
} from './style';

const Projects = () => {
	return (
		<Wrapper>
			<Section>
				<Title>
					our products <span></span>
				</Title>
				<Cards>
					<Card>
						<CardImage src={img1}></CardImage>
						<CardContent>
							<h6>
								<a href="#">Quisque a quam dictum, rutrum</a>{' '}
							</h6>
							<p>
								Lorem ipsum dolor sit amet, coetuer adipiscing elit. Praesent
								vestibulum molestie nonummy varius.
							</p>
						</CardContent>
					</Card>
				</Cards>
			</Section>
		</Wrapper>
	);
};

export default Projects;
