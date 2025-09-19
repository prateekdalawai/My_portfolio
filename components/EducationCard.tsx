import React from "react";
import { Card, CardBody } from "reactstrap";
import { EducationType } from "../types/sections";

const EducationCard = ({ schoolName, subHeader, duration, desc, grade, descBullets }: EducationType) => {
  const trimmedDesc = desc?.trim();
  const bullets = descBullets?.filter(Boolean) ?? [];
  const hasBullets = bullets.length > 0;

  return (
    <Card className="theme-card education-card h-100 border-0 shadow-lg--hover">
      <CardBody className="education-card__body">
        <div className="education-card__header">
          <div>
            <h5 className="education-card__school">{schoolName}</h5>
            <h6 className="education-card__degree">{subHeader}</h6>
          </div>
          <div className="education-card__meta">
            <span className="education-card__tag">{duration}</span>
            {grade ? <span className="education-card__tag education-card__tag--accent">{grade}</span> : null}
          </div>
        </div>
        {trimmedDesc ? <p className="education-card__description">{trimmedDesc}</p> : null}
        {hasBullets ? (
          <ul className="education-card__bullets">
            {bullets.map(bullet => (
              <li key={bullet}>{bullet}</li>
            ))}
          </ul>
        ) : null}
      </CardBody>
    </Card>
  );
};

export default EducationCard;
