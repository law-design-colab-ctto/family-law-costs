import React from "react";
import PropTypes from "prop-types";

import { Link } from "react-router-dom";

import {
  StyledCard,
  PersonaCardMedia,
  PersonaCardContent,
  PersonaName2,
  PersonaAttr
} from "./persona-card.styles";

import {
  PersonaCardDiv,
  PersonaName,
  PersonaStage
} from "./persona-card.styles";
import Typography from '@material-ui/core/Typography';

export const PersonaCard = ({ persona }) => (
  <Link key={`link-${persona.name}`} to={`/${persona.name}`}>
    <StyledCard>
      <PersonaCardMedia
        image="/static/images/cards/contemplative-reptile.jpg"
        title="Contemplative Reptile"
      />
      <PersonaCardContent>
        <PersonaName2>{persona.name}</PersonaName2>
        <PersonaAttr>{persona.jobStability}</PersonaAttr>
        <PersonaAttr>{persona.stage}</PersonaAttr>
        <PersonaAttr>{persona.stressCapacity}</PersonaAttr>
      </PersonaCardContent>
    </StyledCard>
  </Link>
);

// export default withStyles(styles)(SimpleMediaCard);

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
