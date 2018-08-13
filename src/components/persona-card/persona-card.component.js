import React from "react";
import PropTypes from "prop-types";

import { Link } from "react-router-dom";
import {
  PersonaCardDiv,
  PersonaName,
  PersonaStage
} from "./persona-card.styles";

export const PersonaCard = ({ persona }) => (
  <Link key={`link-${persona.name}`} to={`/${persona.name}`}>
    <PersonaCardDiv key={persona.name}>
      <PersonaName>{persona.name}</PersonaName>
      Stage: <PersonaStage>{persona.stage}</PersonaStage>
      Job Stability: <PersonaStage>{persona.jobStability}</PersonaStage>
      Ability to handle stress:
      <PersonaStage>{persona.stressCapacity}</PersonaStage>
    </PersonaCardDiv>
  </Link>
);

PersonaCard.propTypes = {
  persona: PropTypes.object
};
