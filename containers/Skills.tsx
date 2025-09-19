import { Icon } from "@iconify/react";
import React, { Fragment } from "react";
import Fade from "react-reveal/Fade";
import { Col, Container, Row, UncontrolledTooltip } from "reactstrap";
import DisplayLottie from "../components/DisplayLottie";
import { skillsSection } from "../portfolio";

const buildTooltipId = (name: string, index: number) => {
  const baseId = name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
  const safeId = baseId || "skill";
  return `${safeId}-${index}`;
};

const Skills = () => {
  return (
    skillsSection && (
      <Fade bottom duration={2000}>
        <section className="section section-lg themed-section text-center">
          <Container>
            <h1 className="h1">{skillsSection.title}</h1>
            <p className="lead">{skillsSection.subTitle}</p>
            {skillsSection.data.map((section, index) => {
              return (
                <Row className="my-5 align-items-center" key={index}>
                  <Col lg="6" className="order-2 order-lg-1">
                    <DisplayLottie animationPath={section.lottieAnimationFile} />
                  </Col>
                  <Col lg="6" className="order-1 order-lg-2">
                    <h3 className="h3 mb-2">{section.title}</h3>
                    <div className="d-flex justify-content-center flex-wrap mb-2">
                      {section.softwareSkills.map((skill, i) => {
                        const tooltipId = buildTooltipId(skill.skillName, i);

                        return (
                          <Fragment key={i}>
                            <div className="icon icon-lg icon-shape shadow-sm rounded-circle m-1" id={tooltipId}>
                              <Icon icon={skill.iconifyTag} data-inline="false"></Icon>
                            </div>
                            <UncontrolledTooltip delay={0} placement="bottom" target={tooltipId}>
                              {skill.skillName}
                            </UncontrolledTooltip>
                          </Fragment>
                        );
                      })}
                    </div>
                    <div>
                      {section.skills.map((skill, i) => {
                        return <p key={i}>{skill}</p>;
                      })}
                    </div>
                  </Col>
                </Row>
              );
            })}
          </Container>
        </section>
      </Fade>
    )
  );
};

export default Skills;