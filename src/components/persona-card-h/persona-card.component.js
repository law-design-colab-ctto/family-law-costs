import React from "react";
import PropTypes from "prop-types";

import {
  StyledCard,
  StyledLink,
  PersonaCardMedia,
  PersonaLabel,
  PersonaDetails
} from "./persona-card.styles";

import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

export const PersonaCard = ({ persona }) => (
  <StyledCard>
    <StyledLink key={`link-${persona.name}`} to={`/persona/${persona.name}`}>
      <PersonaCardMedia
        image="/static/images/cards/contemplative-reptile.jpg"
        title="Contemplative Reptile"
      />
      <CardContent>
        <Typography gutterBottom variant="headline" color="primary">
          {persona.displayName}
        </Typography>
        <PersonaDetails>{persona.details}</PersonaDetails>
        <PersonaLabel label={persona.jobStability} />
        <PersonaLabel label={persona.stage} />
        <PersonaLabel label={persona.stressCapacity} />
      </CardContent>
    </StyledLink>
  </StyledCard>
);

PersonaCard.propTypes = {
  persona: PropTypes.object
};
