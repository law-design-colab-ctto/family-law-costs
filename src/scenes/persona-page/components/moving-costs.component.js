import React from "react";
import PropTypes from "prop-types";
import { numberToMoneyDisplay } from "../store/persona-page.utils";

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
      <PersonaTextRegular>
        <em>{persona.movingCostText ? `"${persona.movingCostText}"` : ""}</em>
      </PersonaTextRegular>
    </CostTextContentWrapper>

    <CostDisplay>{numberToMoneyDisplay(movingFees)}</CostDisplay>
  </CostSectionWrapper>
);

MovingCosts.propTypes = {
  movingFees: PropTypes.number,
  persona: PropTypes.any
};
