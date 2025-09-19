import React from "react";
import { Card, CardBody, CardSubtitle, CardTitle } from "reactstrap";
import { FeedbackType } from "../types/sections";

const FeedbackCard = ({ name, role, feedback }: FeedbackType) => {
  const trimmedFeedback = feedback?.trim();

  return (
    <Card className="theme-card feedback-card h-100 border-0 shadow-lg--hover">
      <CardBody className="feedback-card__body">
        <CardTitle tag="h4" className="feedback-card__name">
          {name}
        </CardTitle>
        <CardSubtitle tag="h6" className="feedback-card__role">
          {role}
        </CardSubtitle>
        {trimmedFeedback ? <p className="feedback-card__quote">{trimmedFeedback}</p> : null}
      </CardBody>
    </Card>
  );
};

export default FeedbackCard;
