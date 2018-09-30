import React from "react";
import PropTypes from "prop-types";

import {
  SectionSubheader,
  PersonaTextRegular,
  CostDisplay,
  CostSectionWrapper,
  CostTextContentWrapper
} from "../persona-page.styles";

export const MovingCosts = ({ movingFees, persona }) => (
  <CostSectionWrapper>
    <CostTextContentWrapper>
      <SectionSubheader>Moving Costs</SectionSubheader>
      <PersonaTextRegular><i>{persona.movingCostText}</i></PersonaTextRegular>
    </CostTextContentWrapper>

    <CostDisplay>{movingFees}</CostDisplay>
  </CostSectionWrapper>
);

MovingCosts.propTypes = {
  movingFees: PropTypes.string,
  persona: PropTypes.any
};
