import React from 'react'
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, Image } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import reac from '../../../images/react.png'
import logo from '../../../images/logoS.png'
import cancel from '../../../images/cancel.png'
import inst from '../../../images/face.png'
import face from '../../../images/inst.png'
import servicio from '../../../images/servicio.jpg'
import man from '../../../images/man.jpg'
import { CustomerSay,
        Card, 
        ServicesMain, 
        ContainerCard, 
        Advantages ,
        Item, 
        ItemContainer,
        Banner,
        Responsability } from './styles';

export const Home = () => {
  return (
    <>
      <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={50}
        totalSlides={3}
        visibleSlides={1}
        isPlaying={true}
        className="carouselContainerx">
        <Slider>
          <Slide className="carouselx" index={0}>
            {/* <span>dsadas</span> */}
            <Image src={reac} />
          </Slide>
          <Slide index={1}>
          <Image src={logo} />
          </Slide>
          <Slide index={2}>
            <Image src={reac} />
          </Slide>
        </Slider>
        <ButtonBack className="buttonBack">{"<"}</ButtonBack>
        <ButtonNext className="buttonNext">{">"}</ButtonNext>
      </CarouselProvider>
      
      <CustomerSay>
        <img src={man} alt="" />
        <div>
          <h1>Customer Say</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio neque eius ex officiis asperiores suscipit, iure nulla tempore aspernatur ipsa libero, saepe nobis vitae maxime, itaque error earum dolor quos!</p>
          <span>Mark Johnson, USA</span>
        </div>
      </CustomerSay>
      
      <ServicesMain>
        <section>
          <h1>Principales Servicios</h1>
          <span></span>
        </section>
        <ContainerCard>
          <Card>
            <img src={logo} alt="" />
            <div>
              <h2>Remodelamiento</h2> 
              <p>Lorem ipsum dolor sit amet, coetuer adipiscing elit. Praesent vestibulum molestie lacus. Aenean nonummy Fusce susit varius penatibus et magnis.</p>
              <a href="#">saber más</a>
            </div>
          </Card>
          <Card>
            <img src={reac} alt="" />
            <div>
              <h2>Remodelamiento</h2> 
              <p>Lorem ipsum dolor sit amet, coetuer adipiscing elit. Praesent vestibulum molestie lacus. Aenean nonummy Fusce susit varius penatibus et magnis.</p>
              <a href="#">saber más</a>
            </div>
          </Card>
          <Card>
            <img src={servicio} alt="" />
            <div>
              <h2>Remodelamiento</h2> 
              <p>Lorem ipsum dolor sit amet, coetuer adipiscing elit. Praesent vestibulum molestie lacus. Aenean nonummy Fusce susit varius penatibus et magnis.</p>
              <a href="#">saber más</a>
            </div>
          </Card>
        </ContainerCard>
      </ServicesMain>

      <Advantages>
        <section>
          <h1>Nuestras ventajas</h1>
          <span></span>
        </section>
        <ItemContainer>
          <Item>
            <img src={face} alt="" />
            <div>
              <h2>Nunc imperdiet, sapien</h2>
              <p>Lorem ipsum dolor sit amet, coetuer adipiscing elit. Praesent vestibulum molestie lacus. Aenean nonummy varius penatibus et magnis.</p>
            </div>
          </Item>
          <Item>
            <img src={cancel} alt="" />
            <div>
              <h2>Nunc imperdiet, sapien</h2>
              <p>Lorem ipsum dolor sit amet, coetuer adipiscing elit. Praesent vestibulum molestie lacus. Aenean nonummy varius penatibus et magnis.</p>
            </div>
          </Item>
          <Item>
            <img src={inst} alt="" />
            <div>
              <h2>Nunc imperdiet, sapien</h2>
              <p>Lorem ipsum dolor sit amet, coetuer adipiscing elit. Praesent vestibulum molestie lacus. Aenean nonummy varius penatibus et magnis.</p>
            </div>
          </Item>
          <Item>
            <img src={cancel} alt="" />
            <div>
              <h2>Nunc imperdiet, sapien</h2>
              <p>Lorem ipsum dolor sit amet, coetuer adipiscing elit. Praesent vestibulum molestie lacus. Aenean nonummy varius penatibus et magnis.</p>
            </div>
          </Item>
        </ItemContainer>
      </Advantages>

      <Banner>
        {/* <span></span> */}
        <span></span>
        <span></span>
        <h1>Servicios para construir productos</h1>
        <p>Suspendisse potenti. Nulla pretium orci vel massa convallis fermentum. Maecenas in convallis magna. Donec sem enim, congue non risus non, tincidunt viverra mauris. Mauris at dolor tempor, finibus mi sed, feugiat ex. Ut rhoncus velit eget lectus tempor interdum. Sed nec mi eu arcu ultrices scelerisque in dignissim enim.</p>
      </Banner>
      <Responsability>
        <section>
          <h1>Responsabilidad Social</h1>
          <span></span>
        </section>
        <main>
          <img src={servicio} alt="" />
          <div>
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Praesent vestibulum molestie lacus. Aenean nonummy hendrerit mauris. Phasellus porta. Fusce suscipit varius mi. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla dui. Fusce feugiat malesuada odio.

  Morbi nunc odio, gravida at, cursus nec, luctus a, lorem. Maecenas tristique orci ac sem. Duis ultricies pharetra magna. Donec accumsan malesuada orci. Donec sit amet eros. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
            <a href="#">Saber más</a>
          </div>
        </main>
      </Responsability>
    </>
  );
}






