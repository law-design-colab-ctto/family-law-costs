import React from "react";
import PropTypes from "prop-types";
import Card from "@material-ui/core/Card";

import { PlaceholderImage } from "src/assets/icons";
import {
  Name,
  CardDarkWrapper,
  PersonaImageWrapper,
  PersonaChip,
  CardLink
} from "./persona-card-dark.styles";
import { FILTER_VALUE_LABELS } from "src/scenes/choose-persona/store/choose-persona.constants";

export const PersonaCardDark = ({ persona }) => (
  <CardDarkWrapper>
    <CardLink key={`link-${persona.name}`} to={`/persona/${persona.name}`}>
      <Card classes={{ root: "card-dark" }}>
        <Name>{persona.name || "Aisha"}</Name>
        <PersonaImageWrapper>
          <PlaceholderImage fontSize="inherit" />
        </PersonaImageWrapper>
        <PersonaChip
          color="primary"
          label={`Job stability: ${persona.jobStability}`}
          classes={{
            colorPrimary: "chip-primary"
          }}
        />
        <PersonaChip
          color="primary"
          label={`Stage: ${persona.stage}`}
          classes={{
            colorPrimary: "chip-primary"
          }}
        />
        <PersonaChip
          color="primary"
          label={`Stress capacity: ${
            FILTER_VALUE_LABELS[persona.stressCapacity]
          }`}
          classes={{
            colorPrimary: "chip-primary"
          }}
        />
        <PersonaChip
          color="primary"
          label={`Dependents: ${persona.dependents}`}
          classes={{
            colorPrimary: "chip-primary"
          }}
        />
      </Card>
    </CardLink>
  </CardDarkWrapper>
);

PersonaCardDark.propTypes = {
  persona: PropTypes.object
};
