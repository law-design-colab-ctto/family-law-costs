import React from "react";
import PropTypes from "prop-types";

import {
  SectionSubheader,
  PersonaTextRegular,
  CostDisplay,
  CostSectionWrapper,
  CostTextContentWrapper
} from "../persona-page.styles";

//TODO: remove this default
export const TotalLostIncome = ({ totalLostIncome = "$16,528" }) => (
  <CostSectionWrapper>
    <CostTextContentWrapper>
      <SectionSubheader>Total Lost Income</SectionSubheader>
      <PersonaTextRegular>
        {`Includes travel to and from court.`}
      </PersonaTextRegular>
    </CostTextContentWrapper>

    <CostDisplay>{totalLostIncome}</CostDisplay>
  </CostSectionWrapper>
);

TotalLostIncome.propTypes = {
  totalLostIncome: PropTypes.string
};
