import React from "react";
import PropTypes from "prop-types";

import { PersonaTextRegular, QuoteBlock } from "../persona-page.styles";

export const Stress = ({ persona }) => (
  <QuoteBlock>
    <PersonaTextRegular>
      <em>{`"${persona.instabilityQuote1}"`}</em>
    </PersonaTextRegular>
    <PersonaTextRegular>
      <em>{`"${persona.instabilityQuote2}"`}</em>
    </PersonaTextRegular>
  </QuoteBlock>
);

Stress.propTypes = {
  persona: PropTypes.any
};
