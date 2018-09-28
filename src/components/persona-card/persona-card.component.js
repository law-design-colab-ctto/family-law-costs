import React from "react";
import PropTypes from "prop-types";

import {
  StyledCard,
  StyledLink,
  PersonaCardMedia,
  PersonaAttr,
  StyledChip,
  StyledQuote
} from "./persona-card.styles";

import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { capitalize } from "src/utils";

export const PersonaCard = ({ persona }) => (
  <StyledCard>
    <StyledLink key={`link-${persona.name}`} to={`/${persona.name}`}>
      <PersonaCardMedia
        image="/static/images/cards/contemplative-reptile.jpg"
        title="Contemplative Reptile"
      />
      <CardContent>
        <Typography gutterBottom variant="headline" color="primary" >
          {capitalize(persona.name)}
        </Typography>
        {persona.details}
        <PersonaAttr>
          <StyledChip label= {persona.stage} />
          <StyledChip label= {persona.jobStability} />
          <StyledChip label= {persona.children} />
        </PersonaAttr>
        <StyledQuote>
          {persona.quote1}
        </StyledQuote>
      </CardContent>
    </StyledLink>
  </StyledCard>
);


PersonaCard.propTypes = {
  persona: PropTypes.object
};
