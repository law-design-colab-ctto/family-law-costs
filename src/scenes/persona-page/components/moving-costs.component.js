import React from "react";
import PropTypes from "prop-types";

import {
  SectionSubheader,
  QuoteBlock,
  CostDisplay,
  CostSectionWrapper,
  CostTextContentWrapper
} from "../persona-page.styles";

export const MovingCosts = ({ movingFees, persona }) => (
  <CostSectionWrapper>
    <CostTextContentWrapper>
      <SectionSubheader>Moving Costs</SectionSubheader>
      <QuoteBlock>{persona.movingCostText}</QuoteBlock>
    </CostTextContentWrapper>

    <CostDisplay>{movingFees}</CostDisplay>
  </CostSectionWrapper>
);

MovingCosts.propTypes = {
  movingFees: PropTypes.string,
  persona: PropTypes.any
};
