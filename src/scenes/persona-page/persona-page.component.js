import React from "react";
import PropTypes from "prop-types";
import { toLower } from "ramda";

export const PersonaPageComponent = ({
  match: {
    params: { personaName }
  },
  personasByName
}) => (
  <div>
    <h1>name: {personaName}</h1>
    <h2>stage: {personasByName[toLower(personaName)].stage}</h2>
  </div>
);

PersonaPageComponent.propTypes = {
  match: PropTypes.any,
  personasByName: PropTypes.any
};
