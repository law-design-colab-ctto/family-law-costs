import React from "react";
import PropTypes from "prop-types";

import {
  StyledCard,
  StyledLink,
  PersonaCardMedia,
  PersonaCardContent
} from "./persona-card.styles";

import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';

export const PersonaCard = ({ persona }) => (
  <StyledCard>
    <StyledLink key={`link-${persona.name}`} to={`/${persona.name}`}>
      <PersonaCardMedia
        image="/static/images/cards/contemplative-reptile.jpg"
        title="Contemplative Reptile"
      />
      <PersonaCardContent>
        <Typography gutterBottom variant="headline" color="primary" >
          {persona.name}
        </Typography>
          \{ persona.details } this will be the persona details <br />
        <Chip label={persona.jobStability} />
        <Chip label={persona.stage} />
        <Chip label={persona.stressCapacity} />
      </PersonaCardContent>
    </StyledLink>
  </StyledCard>
);


PersonaCard.propTypes = {
  persona: PropTypes.object
};
