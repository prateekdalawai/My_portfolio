import React from "react";
import { Card, CardBody, CardSubtitle, CardText, CardTitle, Col } from "reactstrap";
import { ExperienceType } from "../types/sections";

const ExperienceCard = ({ companyLogo, company, role, date, desc, descBullets }: ExperienceType) => {
  const trimmedDesc = desc?.trim();
  const bullets = descBullets?.filter(Boolean) ?? [];
  const hasBullets = bullets.length > 0;

  return (
    <Col lg="6" className="mb-4">
      <Card className="theme-card experience-card h-100 border-0 shadow-lg--hover">
        <CardBody className="experience-card__body">
          <div className="experience-card__header">
            {companyLogo ? (
              <div className="experience-card__logo-wrapper">
                <img src={companyLogo} alt={`${company} logo`} className="experience-card__logo" />
              </div>
            ) : null}
            <div className="experience-card__meta">
              <CardTitle tag="h4" className="experience-card__company">
                {company}
              </CardTitle>
              <CardSubtitle tag="h5" className="experience-card__role">
                {role}
              </CardSubtitle>
              <span className="experience-card__date">{date}</span>
            </div>
          </div>
          <CardText tag="div" className="experience-card__description">
            {trimmedDesc ? <p>{trimmedDesc}</p> : null}
            {hasBullets ? (
              <ul>
                {bullets.map(bullet => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            ) : null}
          </CardText>
        </CardBody>
      </Card>
    </Col>
  );
};

export default ExperienceCard;
