import React from "react";
import PropTypes from "prop-types";
import {
  InformationCard,
  CenteredContent,
  LargeCostDisplay
} from "../../scenes/persona-page/persona-page.styles";
import { CostsBar, IncomeBar } from "./costs-income-total.styles";

export const CostsIncomeWithBars = ({ topMoney, income, originalCost }) => (
  <InformationCard>
    <CenteredContent>
      <LargeCostDisplay>{topMoney}</LargeCostDisplay>
    </CenteredContent>
    Costs{originalCost ? " and other financial impacts" : " "}
    <CostsBar
      variant="buffer"
      value={
        parseInt(topMoney.replace(/[,$]/g, ""), 10) <
        parseInt(income.replace(/[,$]/g, ""), 10)
          ? (parseInt(topMoney.replace(/[,$]/g, ""), 10) /
              parseInt(income.replace(/[,$]/g, ""), 10)) *
            100
          : 100
      }
      valueBuffer={(parseInt(topMoney.replace(/[,$]/g, ""), 10) + originalCost) <
        parseInt(income.replace(/[,$]/g, ""), 10)
          ? (parseInt(topMoney.replace(/[,$]/g, ""), 10) + originalCost) /
            parseInt(income.replace(/[,$]/g, ""), 10) *
            100
          : 100
      }
    />

    <br />
    Income{" "}
    <IncomeBar
      variant="buffer"
      value={
        parseInt(topMoney.replace(/[,$]/g, ""), 10) + originalCost <
        parseInt(income.replace(/[,$]/g, ""), 10)
          ? 100
          : (parseInt(income.replace(/[,$]/g, ""), 10) /
            (originalCost + parseInt(topMoney.replace(/[,$]/g, ""), 10))) *
            100
      }
      valueBuffer={
        parseInt(topMoney.replace(/[,$]/g, ""), 10) + originalCost <
        parseInt(income.replace(/[,$]/g, ""), 10)
          ? 100
          : (parseInt(income.replace(/[,$]/g, ""), 10) /
            (originalCost + parseInt(topMoney.replace(/[,$]/g, ""), 10))) *
            100
      }
    />
  </InformationCard>
);

CostsIncomeWithBars.propTypes = {
  topMoney: PropTypes.string,
  income: PropTypes.string,
  originalCost: PropTypes.number
};
