import React from "react";
import PropTypes from "prop-types";

import { Link } from "react-router-dom";

import {
  StyledCard,
  PersonaCardMedia,
  PersonaName,
  PersonaAttr
} from "./persona-card.styles";

import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

export const PersonaCard = ({ persona }) => (
  <StyledCard>
    <Link key={`link-${persona.name}`} to={`/${persona.name}`}>
      <PersonaCardMedia
        image="/static/images/cards/contemplative-reptile.jpg"
        title="Contemplative Reptile"
      />
      <CardContent>
        <PersonaName>{persona.name}</PersonaName>
        Job Stability: <PersonaAttr>{persona.jobStability}</PersonaAttr>
        Stage: <PersonaAttr>{persona.stage}</PersonaAttr>
        Ability to handle stress:
        <PersonaAttr>{persona.stressCapacity}</PersonaAttr>
      </CardContent>
    </Link>
  </StyledCard>
);


PersonaCard.propTypes = {
  persona: PropTypes.object
};


/*

within <Link>

<PersonaCardDiv key={persona.name}>
  <PersonaName>{persona.name}</PersonaName>
  Stage: <PersonaStage>{persona.stage}</PersonaStage>
  Job Stability: <PersonaStage>{persona.jobStability}</PersonaStage>
  Ability to handle stress:
  <PersonaStage>{persona.stressCapacity}</PersonaStage>
</PersonaCardDiv>

*/
