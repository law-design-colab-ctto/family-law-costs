import React from "react";
import PropTypes from "prop-types";

import {
  StyledCard,
  StyledLink,
  PersonaCardMedia
} from "./persona-card.styles";

import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';

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
          \{ persona.details } this will be the persona details <br />
        <Chip label={persona.jobStability} />
        <Chip label={persona.stage} />
        <Chip label={persona.stressCapacity} />
      </CardContent>
    </StyledLink>
  </StyledCard>
);


PersonaCard.propTypes = {
  persona: PropTypes.object
};
