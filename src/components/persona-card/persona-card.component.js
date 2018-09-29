import React from "react";
import PropTypes from "prop-types";

import {
  StyledCard,
  StyledLink,
  PersonaCardMedia,
  PersonaAttr
} from "./persona-card.styles";
import { FILTER_VALUE_TO_LABEL } from "src/scenes/choose-persona/store/choose-persona.constants";

import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

export const PersonaCard = ({ persona }) => (
  <StyledCard>
    <StyledLink key={`link-${persona.name}`} to={`/persona/${persona.name}`}>
      <PersonaCardMedia name={persona.name} title="Contemplative Reptile" />
      <CardContent>
        <Typography gutterBottom variant="headline" color="primary">
          {persona.name}
        </Typography>
        <PersonaAttr>
          <p>{persona.details}</p>
          <strong>Job Stability:</strong>
          {FILTER_VALUE_TO_LABEL[persona.jobStability]} <br />
          <strong>Stage:</strong> {FILTER_VALUE_TO_LABEL[persona.stage]} <br />
        </PersonaAttr>
      </CardContent>
    </StyledLink>
  </StyledCard>
);

PersonaCard.propTypes = {
  persona: PropTypes.object
};
