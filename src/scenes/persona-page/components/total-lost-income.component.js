import React from "react";
import PropTypes from "prop-types";

import {
  SectionSubheader,
  CostDisplay,
  CostSectionWrapper,
  CostTextContentWrapper
} from "../persona-page.styles";

export const TotalLostIncome = ({ totalLostIncomeDisplay }) => {
  return (
    <CostSectionWrapper>
      <CostTextContentWrapper>
        <SectionSubheader>Total Lost Income</SectionSubheader>
      </CostTextContentWrapper>

      <CostDisplay>{totalLostIncomeDisplay}</CostDisplay>
    </CostSectionWrapper>
  );
};

TotalLostIncome.propTypes = {
  totalLostIncomeDisplay: PropTypes.string
};
