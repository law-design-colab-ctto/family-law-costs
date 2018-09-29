import React from "react";
import PropTypes from "prop-types";

import {
  StyledCard,
  PersonaCardMedia,
  PersonaDetails,
  PersonaAttr,
  StyledChip,
  StyledQuote,
} from "./persona-card.styles";

import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { capitalize } from "src/utils";

export const PersonaCard = ({ persona }) => (
  <StyledCard>
    <CardContent>
      <PersonaCardMedia
        image={`/assets/${persona.name}.card@1x.png`} />
      <Typography gutterBottom variant="headline" color="primary" >
        {capitalize(persona.name)}
      </Typography>
      <PersonaDetails>{persona.details}</PersonaDetails>
      <PersonaAttr>
        <StyledChip label= {persona.stage} />
        <StyledChip label= {persona.jobStability} />
        <StyledChip label= {persona.children} />
      </PersonaAttr>
      <StyledQuote>
        "{persona.quote1}"
      </StyledQuote>
    </CardContent>
  </StyledCard>
);


PersonaCard.propTypes = {
  persona: PropTypes.object
};
