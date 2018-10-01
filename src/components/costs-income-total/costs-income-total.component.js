import React from "react";
import PropTypes from "prop-types";
import {
  InformationCard,
  CenteredContent,
  LargeCostDisplay
} from "../../scenes/persona-page/persona-page.styles";
import { BlueBar, GreyBar } from "./costs-income-total.styles";

export const CostsIncomeWithBars = ({ topMoney, income, originalCost }) => (
  <InformationCard>
    <CenteredContent>
      <LargeCostDisplay>{topMoney}</LargeCostDisplay>
    </CenteredContent>
    Costs{" "}
    <BlueBar
      variant="buffer"
      value={
        parseInt(topMoney.replace(/[,$]/g, ""), 10) <
        parseInt(income.replace(/[,$]/g, ""), 10)
          ? (parseInt(topMoney.replace(/[,$]/g, ""), 10) /
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
        parseInt(topMoney.replace(/[,$]/g, ""), 10) <
        parseInt(income.replace(/[,$]/g, ""), 10)
          ? 100
          : (parseInt(income.replace(/[,$]/g, ""), 10) /
              parseInt(topMoney.replace(/[,$]/g, ""), 10)) *
            100
      }
    />
  </InformationCard>
);

CostsIncomeWithBars.propTypes = {
  topMoney: PropTypes.string,
  income: PropTypes.string,
  originalCost: PropTypes.string
};
