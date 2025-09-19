import React from "react";
import { Button, Card, CardBody, Col } from "reactstrap";
import { ProjectType } from "../types/sections";

const ProjectsCard = ({ name, desc, github, link }: ProjectType) => {
  const trimmedDesc = desc?.trim();

  return (
    <Col lg="6" className="mb-4">
      <Card className="theme-card project-card h-100 border-0 shadow-lg--hover">
        <CardBody className="project-card__body">
          <div className="project-card__header">
            <h3 className="project-card__title">{name}</h3>
          </div>
          {trimmedDesc ? <p className="project-card__description">{trimmedDesc}</p> : null}
          <div className="project-card__actions">
            {github ? (
              <Button
                className="btn-icon project-card__action"
                color="github"
                href={github}
                target="_blank"
                rel="noopener"
                aria-label="Github"
              >
                <span className="btn-inner--icon">
                  <i className="fa fa-github" />
                </span>
                <span className="btn-inner--text">Code</span>
              </Button>
            ) : null}
            {link ? (
              <Button
                className="btn-icon project-card__action"
                color="success"
                href={link}
                target="_blank"
                rel="noopener"
                aria-label="Visit project"
              >
                <span className="btn-inner--icon">
                  <i className="fa fa-arrow-right" />
                </span>
                <span className="btn-inner--text">Live</span>
              </Button>
            ) : null}
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default ProjectsCard;
