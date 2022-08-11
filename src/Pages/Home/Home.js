import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import openPeep from '../../Assets/openPeeps-0.svg';
import Particle from '../../Components/Particle';
import Details from '../../Components/Details';

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi!{' '}
              </h1>
              <h1 className="heading-name">
                My name is
                <strong className="main-name"> Elton Tay</strong>
              </h1>

              <div style={{ padding: 50, textAlign: 'left' }}>
                <Details />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={openPeep}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: '450px' }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      {/* <Home2 /> */}
    </section>
  );
}

export default Home;
