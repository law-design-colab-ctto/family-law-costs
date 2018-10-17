import React from "react";
import PropTypes from "prop-types";

import {
  SectionSubheader,
  PersonaTextRegular,
  CostDisplay,
  CostSectionWrapper,
  CostTextContentWrapper
} from "../persona-page.styles";

export const MovingCosts = ({ movingFeesDisplay, persona }) => (
  <CostSectionWrapper>
    <CostTextContentWrapper>
      <SectionSubheader>Moving Costs</SectionSubheader>
      <PersonaTextRegular>
        <em>{persona.movingCostText ? `"${persona.movingCostText}"` : ""}</em>
      </PersonaTextRegular>
    </CostTextContentWrapper>

    <CostDisplay>{movingFeesDisplay}</CostDisplay>
  </CostSectionWrapper>
);

MovingCosts.propTypes = {
  movingFeesDisplay: PropTypes.string,
  persona: PropTypes.any
};
