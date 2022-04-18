import React from 'react'
import { AboutContainer, ValoresItem, Overview, Team, Teamitem, Item, OverviewItem, Valores } from './style';
import uno from '../../../images/uno.png';
import dos from '../../../images/dos.png';
import tres from '../../../images/tres.png';
import check from '../../../images/check.png';
import { BannerAux } from './../banneAux/BannerAux';


export const About = () => {
  return (
    <>
      <BannerAux/>
      <AboutContainer>
        <Overview>
          <OverviewItem>
            <h2>Nosotros</h2>
            <img src="https://livedemo00.template-help.com/wt_55373/images/page-2_img01.jpg" alt="" />
            <h3>Mauris commodo turpis quis felis posuere, a sceleris.</h3>
            <p>Lorem ipsum dolor sit amet, coetuer adipiscing elit. Praesent vestibulum molestie lacus. Aenean nonummy Fusce susit varius penatibus et magnis.</p>
          </OverviewItem>
          <OverviewItem>
            <h2>Historia</h2>
            <div>
              <span>01.02.2010</span>
              <h4>Curabitur cursus dui sed felis</h4>
              <p>Suspendisse tristique, dui non dignissim fringilla, nibh lacus consequat urna, ac tincidunt est nunc eget ligula. Nulla scelerisque consequat velit ac dignissim.</p>
            </div>
            <div>
              <span>02.03.2012</span>
              <h4>Cursus dui sed felis aliquet</h4>
              <p>Suspendisse tristique, dui non dignissim fringilla, nibh lacus consequat urna, ac tincidunt est nunc eget ligula. Nulla scelerisque consequat velit ac dignissim.</p>
            </div>
            <div>
              <span>03.04.2015</span>
              <h4>Quisque a quam dictum</h4>
              <p>Suspendisse tristique, dui non dignissim fringilla, nibh lacus consequat urna, ac tincidunt est nunc eget ligula. Nulla scelerisque consequat velit ac dignissim.</p>
            </div>
          </OverviewItem>
          <OverviewItem>
            <h2>Principios</h2>
            <h3>Quis porta ligula porta quis</h3>
            <p>Lorem ipsum dolor sit amet, coetuer adipiscing elit. Praesent vestibulum molestie lacus. Aenean nonummy varius penatibus et magnis.</p>
            <ul>
              <li>Vestibulum placerat</li>
              <li>Vehicula tortor</li>
              <li>Fusce sed elit ac nulla</li>
              <li>Non sit amet nisl integer lobortis</li>
              <li>Fermentum hendrerit integer nec odio</li>
              <li>Vivamus pellentesque risus vitae</li>
              <li>Endrerit ultricies</li>
              <li>Accumsan leo, a bibendum felis</li>
              <li>Praesent adipiscing quis sem in lobortis</li>
            </ul>
          </OverviewItem>
        </Overview>
        <Team>
          <div>
            <h2>EQUIPO</h2>
            <span></span>
          </div>
          <Teamitem>
            <Item>
              <img src="https://livedemo00.template-help.com/wt_55373/images/page-2_img02.jpg" alt="" />
              <h2>Eva Adamson</h2>
              <p>Lorem ipsum dolor sit amet, coetuer adipiscing elit. Praesent vestibulum.</p>
            </Item>
            <Item>
              <img src="https://livedemo00.template-help.com/wt_55373/images/page-2_img03.jpg" alt="" />
              <h2>David Austin</h2>
              <p>Lorem ipsum dolor sit amet, coetuer adipiscing elit. Praesent vestibulum.</p>
            </Item>
            <Item>
              <img src="https://livedemo00.template-help.com/wt_55373/images/page-2_img04.jpg" alt="" />
              <h2>Natalie Barnes</h2>
              <p>Lorem ipsum dolor sit amet, coetuer adipiscing elit. Praesent vestibulum.</p>
            </Item>
            <Item>
              <img src="https://livedemo00.template-help.com/wt_55373/images/page-2_img05.jpg" alt="" />
              <h2>Eva Adamson</h2>
              <p>Lorem ipsum dolor sit amet, coetuer adipiscing elit. Praesent vestibulum.</p>
            </Item>
          </Teamitem>
        </Team>
        <Valores>
          <ValoresItem>
            <h2>Valores</h2>
            <ul>
              <li>
                <img src={uno} alt="" />
                <div>
                  <h3>Maecenas mattis ultric</h3>
                  <p>Nam tempus semper, mattis dui quis, sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aenean arcu ipsum, varius.</p>
                </div>
              </li>
              <li>
                <img src={dos} alt="" />
                <div>
                  <h3>Maecenas mattis ultric</h3>
                  <p>Nam tempus semper, mattis dui quis, sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aenean arcu ipsum, varius.</p>
                </div>
              </li>
              <li>
                <img src={tres} alt="" />
                <div>
                  <h3>Maecenas mattis ultric</h3>
                  <p>Nam tempus semper, mattis dui quis, sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aenean arcu ipsum, varius.</p>
                </div>
              </li>
            </ul>
          </ValoresItem>
          <ValoresItem>
            <h2>Standares</h2>
            <div>
              <h3>Quisque a quam dictum, rutrum</h3>
              <p>Lorem ipsum dolor sit amet, coetuer adipiscing elit. Praesent vestibulum molestie lacus. Aenean nonummy varius penatibus et magnis.</p>
              <ul className="lista">
                <li>
                  <img src={check} alt="" />
                  <span>Vestibulum placerat</span>
                </li>
                <li>
                  <img src={check} alt="" />
                  <span>Vehicula tortor</span>
                  </li>
                <li>
                  <img src={check} alt="" />
                  <span>Fusce sed elit ac nulla</span>
                </li>
                <li>
                  <img src={check} alt="" />
                  <span>Non sit amet nisl integer lobortis</span>
                </li>
                <li>
                  <img src={check} alt="" />
                  <span>Fermentum hendrerit integer nec odio</span>
                </li>
                <li>
                  <img src={check} alt="" />
                  <span>Vivamus pellentesque risus vitae</span>
                </li>
                <li>
                  <img src={check} alt="" />
                  <span>Endrerit ultricies</span>
                </li>
                <li>
                  <img src={check} alt="" />
                  <span>Accumsan leo, a bibendum felis</span>
                </li>
                <li>
                  <img src={check} alt="" />
                  <span>Praesent adipiscing quis sem in lobortis</span>
                </li>
              </ul>
            </div>
          </ValoresItem>
          <ValoresItem>
            <h2>Testimonios</h2>
            <div>
              <p>“ Lorem ipsum dolor sit amet, coetuer adipiscing elit. Praesent vestibulum molestie lacus. Aenean dis parturient montes, nascetur malesuada odio. Morbi nunc odio, gravida at, cursus nec, luctus a, lorem. ”</p>
              <span className="name">Monica Higgins, Client</span>
            </div>
            <div>
              <p>“ Lorem ipsum dolor sit amet, coetuer adipiscing elit. Praesent vestibulum molestie lacus. Aenean dis parturient montes, nascetur malesuada odio. Morbi nunc odio, gravida at, cursus nec, luctus a, lorem. ”</p>
              <span className="name">Monica Higgins, Client</span>
            </div>
          </ValoresItem>
        </Valores>
      </AboutContainer>
    </>

  )
}
