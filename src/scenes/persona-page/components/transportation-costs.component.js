import React from "react";
import PropTypes from "prop-types";

import {
  SectionSubheader,
  PersonaTextRegular,
  CostDisplay,
  CostSectionWrapper,
  CostTextContentWrapper
} from "../persona-page.styles";

export const TransportationCosts = ({ transportationFeesDisplay }) => (
  <CostSectionWrapper>
    <CostTextContentWrapper>
      <SectionSubheader>Transportation Costs</SectionSubheader>
      <PersonaTextRegular>
        {`Includes travel to and from court.`}
      </PersonaTextRegular>
    </CostTextContentWrapper>

    <CostDisplay>{transportationFeesDisplay}</CostDisplay>
  </CostSectionWrapper>
);

TransportationCosts.propTypes = {
  transportationFeesDisplay: PropTypes.string
};
