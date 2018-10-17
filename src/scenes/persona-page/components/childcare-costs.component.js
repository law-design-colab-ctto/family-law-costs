import React from "react";
import PropTypes from "prop-types";

import {
  SectionSubheader,
  PersonaTextRegular,
  CostDisplay,
  CostSectionWrapper,
  CostTextContentWrapper
} from "../persona-page.styles";

export const ChildcareCosts = ({ childcareFeesDisplay, persona }) => (
  <CostSectionWrapper>
    <CostTextContentWrapper>
      <SectionSubheader>Childcare Costs</SectionSubheader>
      <PersonaTextRegular>
        <em>{`"${persona.childcareCostText}"`}</em>
      </PersonaTextRegular>
    </CostTextContentWrapper>

    <CostDisplay>{childcareFeesDisplay}</CostDisplay>
  </CostSectionWrapper>
);

ChildcareCosts.propTypes = {
  childcareFeesDisplay: PropTypes.string,
  persona: PropTypes.any
};
