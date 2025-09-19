import React from "react";
import { SkillBars } from "../portfolio";
import { Container, Row, Progress, Col } from "reactstrap";
import Fade from "react-reveal/Fade";
import GreetingLottie from "../components/DisplayLottie";
import { useTheme } from "../context/ThemeContext";

const Proficiency = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    SkillBars && (
      <section
        className={`section section-lg themed-section ${
          isDark ? "bg-dark text-white" : "bg-light text-dark"
        }`}
      >
        <Fade bottom duration={2000}>
          <Container>
            <Row className="align-items-center">
              <Col lg="6" className="mb-5 mb-lg-0">
                <h1 className={`h1 ${isDark ? "text-white" : "text-dark"}`}>
                  Proficiency
                </h1>
                {SkillBars.map((skill) => {
                  return (
                    <div className="progress-info" key={skill.Stack}>
                      <div className="progress-label">
                        <span className={isDark ? "text-white" : "text-dark"}>
                          {skill.Stack}
                        </span>
                      </div>
                      <div className="progress-percentage">
                        <span className={isDark ? "text-white" : "text-dark"}>
                          {skill.progressPercentage}%
                        </span>
                      </div>
                      <Progress
                        max="100"
                        value={skill.progressPercentage}
                        style={{
                          backgroundColor: isDark ? "#444" : "#e9ecef",
                        }}
                        barStyle={{
                          backgroundColor: isDark ? "#ffffff" : "#17a2b8", // ✅ White bar in dark mode
                        }}
                        role="progressbar"
                        aria-label={skill.Stack}
                      />
                    </div>
                  );
                })}
              </Col>
              <Col lg="6">
                <GreetingLottie animationPath="/lottie/build.json" />
              </Col>
            </Row>
          </Container>
        </Fade>
      </section>
    )
  );
};

export default Proficiency;
