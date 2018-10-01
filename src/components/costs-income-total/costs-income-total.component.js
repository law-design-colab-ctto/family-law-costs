import React from "react";
import PropTypes from "prop-types";
import {
  InformationCard,
  CenteredContent,
  LargeCostDisplay
} from "../../scenes/persona-page/persona-page.styles";
import { BlueBar, GreyBar } from "./costs-income-total.styles";

export const CostsIncomeWithBars = ({ persona, totalDirectCosts, income }) => (
  <InformationCard>
    <CenteredContent>
      <LargeCostDisplay>{totalDirectCosts}</LargeCostDisplay>
    </CenteredContent>
    Costs{" "}
    <BlueBar
      variant="determinate"
      value={
        parseInt(totalDirectCosts.replace(/[,$]/g, ""), 10) <
        parseInt(income.replace(/[,$]/g, ""), 10)
          ? (parseInt(totalDirectCosts.replace(/[,$]/g, ""), 10) /
              parseInt(income.replace(/[,$]/g, ""), 10)) *
            100
          : 100
      }
    />
    <br />
    Income{" "}
    <GreyBar
      variant="determinate"
      value={
        parseInt(totalDirectCosts.replace(/[,$]/g, ""), 10) <
        parseInt(income.replace(/[,$]/g, ""), 10)
          ? 100
          : (parseInt(income.replace(/[,$]/g, ""), 10) /
              parseInt(totalDirectCosts.replace(/[,$]/g, ""), 10)) *
            100
      }
    />
  </InformationCard>
);

CostsIncomeWithBars.propTypes = {
  totalDirectCosts: PropTypes.string,
  income: PropTypes.string
};
