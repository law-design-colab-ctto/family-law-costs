import React from "react";
import {
  YAxis,
  FlexibleWidthXYPlot,
  LabelSeries,
  HorizontalBarSeries
} from "react-vis";
import PropTypes from "prop-types";
import { PersonaTextRegular, SectionHeader } from "../persona-page.styles";
import { colours } from "src/styles";
import { numberToMoneyDisplay } from "../store/persona-page.utils";

export const Conflict = ({
  income,
  mediation,
  courtResolution,
  increasedConflict,
  highConflict
}) => {
  const BarSeries = HorizontalBarSeries;
  return (
    <div id="what-if">
      <SectionHeader>What if</SectionHeader>
      <PersonaTextRegular>
        {`The costs and timing of a family law process can vary dramatically
            depending on how much conflict there is between partners. The legal costs
            in this scenario are based on a relatively low level of conflict \u2014 however, legal
            costs can escalate quickly. Longer court processes also take a toll on
            people's well-being, increasing their health costs and other financial expenses.`}
      </PersonaTextRegular>
      <PersonaTextRegular>
        {`Mediation is a way to resolve some or all of the issues earlier, with less
            conflict. Mediation can also be used at different points throughout the process,
            narrowing the issues and simplifying the court process. However, mediation
            is not an appropriate option for every situation. Some disputes cannot be mediated.`}
      </PersonaTextRegular>
      <PersonaTextRegular>
        {`This chart demonstrates what might happen to the costs if this scenario was
            resolved early through mediation or if it escalated due to increasing conflict.`}
      </PersonaTextRegular>

      <div>
        <FlexibleWidthXYPlot height={400} margin={{ left: -1 }} yType="ordinal">
          <BarSeries
            colorType="literal"
            data={[
              {
                y: "Selected Income",
                x: income,
                color: colours.periwinkleBlue
              },
              {
                y: "Resolved Early through Mediation",
                x: mediation,
                color: colours.periwinkleBlueMedium
              },
              {
                y: "Court Resolution as Described Above",
                x: courtResolution,
                color: colours.periwinkleBlueMedium
              },
              {
                y: "Court Resolution: Increased Conflict",
                x: increasedConflict,
                color: colours.periwinkleBlueMedium
              },
              {
                y: "Court Resolution: High Conflict",
                x: highConflict,
                color: colours.periwinkleBlueMedium
              }
            ]}
          />
          <YAxis
            left={0}
            orientation="right"
            top={-2}
            style={{ font: "bold 1rem sans-serif" }}
          />

          <LabelSeries
            labelAnchorX="start"
            labelAnchorY="middle"
            style={{ font: "bold 1rem sans-serif" }}
            data={[
              {
                y: "Selected Income",
                yOffset: 15,
                xOffset: 15,
                x: 0,
                label: numberToMoneyDisplay(income)
              },
              {
                y: "Resolved Early through Mediation",
                x: 0,
                yOffset: 15,
                xOffset: 15,
                label: numberToMoneyDisplay(parseInt(mediation, 10))
              },
              {
                y: "Court Resolution as Described Above",
                x: 0,
                yOffset: 15,
                xOffset: 15,
                label: numberToMoneyDisplay(parseInt(courtResolution, 10))
              },
              {
                y: "Court Resolution: Increased Conflict",
                x: 0,
                yOffset: 15,
                xOffset: 15,
                label: numberToMoneyDisplay(parseInt(increasedConflict, 10))
              },
              {
                y: "Court Resolution: High Conflict",
                x: 0,
                yOffset: 15,
                xOffset: 15,
                label: numberToMoneyDisplay(parseInt(highConflict, 10))
              }
            ]}
          />
        </FlexibleWidthXYPlot>
      </div>
    </div>
  );
};

Conflict.propTypes = {
  income: PropTypes.number,
  mediation: PropTypes.number,
  courtResolution: PropTypes.number,
  increasedConflict: PropTypes.number,
  highConflict: PropTypes.number
};
