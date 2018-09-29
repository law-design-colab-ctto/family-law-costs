import React from "react";
import PropTypes from "prop-types";

import {
  StyledCard,
  StyledLink,
  PersonaCardMedia,
  PersonaLabel,
  PersonaDetails,
  PersonaContent,
  PersonaQuote
} from "./persona-card.styles";
import { capitalize } from "src/utils";
import { FILTER_VALUE_TO_LABEL } from "src/scenes/choose-persona/store/choose-persona.constants";

import Typography from "@material-ui/core/Typography";

export const PersonaCardHorizontal = ({ persona }) => (
  <StyledCard>
    <StyledLink key={`link-${persona.name}`} to={`/persona/${persona.name}`}>
      <PersonaCardMedia name={persona.name} title={persona.name} />
      <PersonaContent>
        <Typography gutterBottom variant="headline" color="primary">
          {capitalize(persona.name)}
        </Typography>
        <PersonaDetails>{persona.details}</PersonaDetails>
        <PersonaLabel label={FILTER_VALUE_TO_LABEL[persona.jobStability]} />
        <PersonaLabel label={FILTER_VALUE_TO_LABEL[persona.stage]} />
      </PersonaContent>
      <PersonaQuote>
        <em>{`"${persona.quote1}"`}</em>
      </PersonaQuote>
    </StyledLink>
  </StyledCard>
);

PersonaCardHorizontal.propTypes = {
  persona: PropTypes.object
};
