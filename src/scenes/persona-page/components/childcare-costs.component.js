import React from "react";
import PropTypes from "prop-types";

import {
  SectionSubheader,
  PersonaTextRegular,
  CostDisplay,
  CostSectionWrapper,
  CostTextContentWrapper
} from "../persona-page.styles";

export const ChildcareCosts = ({ childcareFees, persona }) => (
  <CostSectionWrapper>
    <CostTextContentWrapper>
      <SectionSubheader>Childcare Costs</SectionSubheader>
      <PersonaTextRegular>{persona.childcareCostText}</PersonaTextRegular>
    </CostTextContentWrapper>

    <CostDisplay>{childcareFees}</CostDisplay>
  </CostSectionWrapper>
);

ChildcareCosts.propTypes = {
  childcareFees: PropTypes.string,
  persona: PropTypes.any
};
