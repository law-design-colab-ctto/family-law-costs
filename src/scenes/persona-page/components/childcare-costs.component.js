import React from "react";
import PropTypes from "prop-types";

import {
  SectionSubheader,
  PersonaTextRegular,
  CostDisplay,
  CostSectionWrapper,
  CostTextContentWrapper
} from "../persona-page.styles";
import { numberToMoneyDisplay } from "../store/persona-page.utils";

export const ChildcareCosts = ({ childcareFees, persona }) => (
  <CostSectionWrapper>
    <CostTextContentWrapper>
      <SectionSubheader>Childcare Costs</SectionSubheader>
      <PersonaTextRegular><em>{`"${persona.childcareCostText}"`}</em></PersonaTextRegular>
    </CostTextContentWrapper>

    <CostDisplay>{numberToMoneyDisplay(childcareFees)}</CostDisplay>
  </CostSectionWrapper>
);

ChildcareCosts.propTypes = {
  childcareFees: PropTypes.number,
  persona: PropTypes.any
};
