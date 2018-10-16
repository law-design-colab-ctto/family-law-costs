import React from "react";
import PropTypes from "prop-types";
import {
  CenteredContent,
  LargeCostDisplay
} from "../../scenes/persona-page/persona-page.styles";
import { numberToMoneyDisplay } from "src/scenes/persona-page/store/persona-page.utils.js";

import {
  XYPlot,
  VerticalGridLines,
  HorizontalGridLines,
  HorizontalBarSeries,
  LabelSeries
} from 'react-vis';

import { colours } from "src/styles";


export const CostsIncomeWithBars = ({ income, originalCost, addedCosts }) => (
  <React.Fragment>
  <CenteredContent>
  <LargeCostDisplay>{numberToMoneyDisplay(
    addedCosts ? addedCosts : originalCost)}</LargeCostDisplay>
</CenteredContent>
      <center>
    <XYPlot height={180} width={640} stackBy="x">
      <VerticalGridLines />
      <HorizontalGridLines />
      <HorizontalBarSeries color={colours.indigoMedium} colorType="literal"
        data={[{ y: 0, x: 0 },
               { y: 1, x: originalCost }]} />

      <HorizontalBarSeries color={colours.periwinkleBlueDark} colorType="literal"
        data={[{ y: 0, x: 0 },
               { y: 1, x: addedCosts }]} />

      <HorizontalBarSeries color={colours.periwinkleBlue} colorType="literal"
        data={[{ y: 0, x: income },
               { y: 1, x: 0 }]} />

      <LabelSeries
        data={[{y: 1, label: "Costs", style: {fontSize: 12} },
               {y: 0, label: "Income", style: {fontSize: 12} }]} />
    </XYPlot>
    </center>
  </React.Fragment>
)

CostsIncomeWithBars.propTypes = {
  addedCosts: PropTypes.number,
  income: PropTypes.number,
  originalCost: PropTypes.number
};
