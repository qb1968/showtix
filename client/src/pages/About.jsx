import React, { useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

const About = () => {
  useEffect(() => {
    // Scroll to the top of the screen when the component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header />
      <section>
        <Container className="mx-12 my-5">
          <Row>
            <Col lg="12" md="12" sm="12" className="my-10">
              <h5 className="services_subtitle text-[#3d0274]">
                Elevating Your Journey
              </h5>
              <h2 className="services_title">A Down Home Revolution</h2>
              <p className="text-black">
                Lorem ipsum dolor sit amet consectetur adipiscing elit commodo
                laoreet egestas feugiat imperdiet neque posuere, pulvinar
                fermentum habitasse eu dictumst vivamus nostra non sodales fusce
                dictum habitant. Habitant dui sociis blandit egestas ut varius
                felis fringilla consequat facilisis, sem velit odio aptent
                imperdiet malesuada nostra vel class placerat, sollicitudin
                gravida facilisi aliquam in lacinia aenean rutrum est. Sed donec
                fermentum litora inceptos pharetra ligula augue primis dictumst
                hac vestibulum maecenas magnis bibendum, parturient sapien
                pellentesque dapibus in curabitur magna morbi etiam sociis
                sagittis felis. Conubia facilisi maecenas habitasse nisi in
                sapien posuere lacinia netus, orci natoque sagittis praesent
                cursus fringilla duis sed, penatibus justo felis morbi tempus
                turpis convallis sociis. Pharetra pellentesque tellus senectus
                lectus iaculis vestibulum auctor, nam potenti eu dapibus
                venenatis cubilia nunc, mauris varius id interdum tristique
                fermentum. Odio interdum per dignissim semper malesuada non
                volutpat feugiat, dictumst felis augue turpis faucibus praesent
                vivamus cras vitae, aliquet donec ultrices quis magnis nisi
                luctus. Scelerisque tempor ad varius dignissim mollis auctor
                senectus faucibus purus, luctus ante sociis himenaeos metus
                vehicula taciti eleifend 
                <br />
                <br />
              </p>
            </Col>
            <Col lg="12" md="12" sm="12" className="my-10">
              <h5 className="services_subtitle text-[#3d0274]">
                Crafting Unforgettable Moments
              </h5>
              <h2 className="services_title">Great Shows</h2>
              <p className="text-black">
                .
                <br />
                <br />
              </p>
            </Col>

            <Col lg="6" md="6" sm="12" className="my-10">
              <h5 className="services_subtitle text-[#3d0274]">
                Redefining Accessibility
              </h5>
              <h2 className="services_title">Music for Everyone</h2>
              <p className="text-black">
                <br />

                <br />
              </p>
            </Col>
            <Col lg="6" md="6" sm="12" className="my-10">
              <h5 className="services_subtitle text-[#3d0274]">
                Beyond the sound
              </h5>
              <h2 className="services_title">Creating Connections</h2>
              <p className="text-black">
                Lorem ipsum dolor sit amet consectetur adipiscing, elit laoreet
                primis parturient libero.
                <br />
                Lorem ipsum dolor sit amet consectetur adipiscing, elit laoreet
                primis parturient libero.
                <br />
                Lorem ipsum dolor sit amet consectetur adipiscing, elit laoreet
                primis parturient libero.
              </p>
            </Col>
          </Row>
        </Container>
      </section>
      <Footer />
    </>
  );
};

export default About;
