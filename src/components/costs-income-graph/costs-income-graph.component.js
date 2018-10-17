import React from "react";
import { PropTypes } from "prop-types";
import MediaQuery from "react-responsive";
import { colours } from "src/styles";

import {
  FlexibleWidthXYPlot,
  LabelSeries,
  HorizontalRectSeries
} from "react-vis";

import { numberToMoneyDisplay } from "src/scenes/persona-page/store/persona-page.utils";

const barColours = [colours.indigoMedium, colours.periwinkleBlueDark];

export const CostsIncomeGraph = ({ income = 0, costs = [], id }) => {
  const BarSeries = HorizontalRectSeries;
  const sumOfCosts = costs.reduce((sum, cost) => sum + cost.value, 0);
  const isSmallRelativeCost = sumOfCosts / income < 0.35;
  let currentCostSum = 0;
  return (
    <div>
      <MediaQuery maxWidth={475}>
        {isCompact => (
          <FlexibleWidthXYPlot
            height={250}
            yPadding={30}
            margin={{ left: isCompact ? -1 : 0 }}
            stackBy="x"
          >
            {costs.map(({ value, label }, i) => {
              const labelXPosition = currentCostSum;
              currentCostSum += value;
              return [
                <LabelSeries
                  key={`series-${label}-${value}`}
                  animation
                  data={[
                    {
                      y: 3.2,
                      yOffset:
                        isCompact || isSmallRelativeCost ? -i * 15 - 5 : 0,
                      x: labelXPosition,
                      label
                    }
                  ]}
                  style={{ font: `bold ${isCompact ? 0.75 : 1}rem sans-serif` }}
                  labelAnchorY="baseline"
                  labelAnchorX="start"
                />,
                <BarSeries
                  animation
                  key={`series-${label}-${value}-${id}`}
                  data={[{ y: 2, y0: 3, x: value }]}
                  color={barColours[i] || colours.grayMedium}
                />
              ];
            })}

            <LabelSeries
              animation
              data={[
                {
                  y: 1.2,
                  x: 0,
                  yOffset: isCompact ? -5 : 0,
                  label: "Income"
                }
              ]}
              labelAnchorY="baseline"
              style={{ font: `bold ${isCompact ? 0.75 : 1}rem sans-serif` }}
            />
            <BarSeries
              animation
              data={[{ y: 0, y0: 1, x: income }]}
              color={colours.periwinkleBlue}
            />
            <LabelSeries
              animation
              data={[
                {
                  y: 2,
                  x: 1,
                  yOffset: -19,
                  label: numberToMoneyDisplay(sumOfCosts),
                  xOffset:
                    (isCompact && costs.length === 1) || isSmallRelativeCost
                      ? 10
                      : -10
                }
              ]}
              style={{
                font: "bold 1.5rem sans-serif",
                fill:
                  costs.length > 1 ||
                  (isCompact && costs.length === 1) ||
                  isSmallRelativeCost
                    ? "black"
                    : "white"
              }}
              labelAnchorY="middle"
              labelAnchorX={
                (isCompact && costs.length === 1) || isSmallRelativeCost
                  ? "start"
                  : "end"
              }
            />
            <LabelSeries
              animation
              data={[
                {
                  y: 0,
                  x: 1,
                  yOffset: -19,
                  xOffset: -10,
                  label: numberToMoneyDisplay(income)
                }
              ]}
              style={{ font: "bold 1.5rem sans-serif", fill: "white" }}
              labelAnchorY="middle"
              labelAnchorX="end"
            />
          </FlexibleWidthXYPlot>
        )}
      </MediaQuery>
    </div>
  );
};

CostsIncomeGraph.propTypes = {
  personaName: PropTypes.string,
  income: PropTypes.number,
  costs: PropTypes.array,
  id: PropTypes.string
};
