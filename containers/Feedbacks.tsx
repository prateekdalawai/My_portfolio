import { feedbacks } from "../portfolio";
import React from "react";
import { Col, Container, Row } from "reactstrap";
import FeedbackCard from "../components/FeedbackCard";
import Fade from "react-reveal/Fade";

const Feedbacks = () => {
  if (!feedbacks || feedbacks.length === 0) {
    return null;
  }

  return (
    <Fade bottom duration={2000}>
      <section className="section section-lg themed-section">
        <Container>
          <div className="d-flex p-4">
            <div>
              <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-info">
                <i className="fa fa-star text-info" />
              </div>
            </div>
            <div className="pl-4">
              <h4 className="display-3 text-info">Testimonials</h4>
            </div>
          </div>
          <Row className="g-4 align-items-stretch">
            {feedbacks.map((data, i) => {
              return (
                <Col key={i} lg={6} className="mb-4">
                  <FeedbackCard {...data} />
                </Col>
              );
            })}
          </Row>
        </Container>
      </section>
    </Fade>
  );
};

export default Feedbacks;
