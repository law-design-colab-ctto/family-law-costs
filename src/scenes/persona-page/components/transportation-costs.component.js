import React from "react";
import PropTypes from "prop-types";

import {
  SectionSubheader,
  PersonaTextRegular,
  CostDisplay,
  CostSectionWrapper,
  CostTextContentWrapper
} from "../persona-page.styles";

export const TransportationCosts = ({ transportationFees }) => (
  <CostSectionWrapper>
    <CostTextContentWrapper>
      <SectionSubheader>Transportation Costs</SectionSubheader>
      <PersonaTextRegular>
        {`Includes travel to and from court.`}
      </PersonaTextRegular>
    </CostTextContentWrapper>

    <CostDisplay>{transportationFees}</CostDisplay>
  </CostSectionWrapper>
);

TransportationCosts.propTypes = {
  transportationFees: PropTypes.string
};
