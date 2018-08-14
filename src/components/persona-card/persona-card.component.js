import React from "react";
import PropTypes from "prop-types";

import {
  StyledCard,
  StyledLink,
  PersonaCardMedia,
  PersonaAttr
} from "./persona-card.styles";

import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

export const PersonaCard = ({ persona }) => (
  <StyledCard>
    <StyledLink key={`link-${persona.name}`} to={`/${persona.name}`}>
      <PersonaCardMedia
        image="/static/images/cards/contemplative-reptile.jpg"
        title="Contemplative Reptile"
      />
      <CardContent>
        <Typography gutterBottom variant="headline" color="primary" >
          {persona.name}
        </Typography>
        <PersonaAttr>
          Job Stability: {persona.jobStability} <br />
          Stage: {persona.stage} <br />
          Ability to handle stress: {persona.stressCapacity}
        </PersonaAttr>
      </CardContent>
    </StyledLink>
  </StyledCard>
);


PersonaCard.propTypes = {
  persona: PropTypes.object
};
