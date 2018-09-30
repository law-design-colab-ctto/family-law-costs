import React from "react";
import PropTypes from "prop-types";

import {
  SectionSubheader,
  CostDisplay,
  CostSectionWrapper,
  CostTextContentWrapper
} from "../persona-page.styles";

//TODO: remove this default
export const TotalLostIncome = ({ totalLostIncome }) => (
  <CostSectionWrapper>
    <CostTextContentWrapper>
      <SectionSubheader>Total Lost Income</SectionSubheader>
    </CostTextContentWrapper>

    <CostDisplay>{totalLostIncome}</CostDisplay>
  </CostSectionWrapper>
);

TotalLostIncome.propTypes = {
  totalLostIncome: PropTypes.string
};
