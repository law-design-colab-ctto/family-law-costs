import React from "react";
import {
  XYPlot,
  XAxis,
  VerticalGridLines,
  HorizontalGridLines,
  VerticalBarSeries,
  LabelSeries
} from "react-vis";
import PropTypes from "prop-types";
import {
  PersonaTextRegular,
  SectionHeader,
  ComparisonGraph
} from "../persona-page.styles";
import { colours } from "src/styles";
import { numberToMoneyDisplay } from "../store/persona-page.utils";

export const Conflict = ({
  income,
  mediation,
  courtResolution,
  increasedConflict,
  highConflict
}) => (
  <React.Fragment>
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

    <ComparisonGraph>
      <XYPlot
        height={525}
        width={640}
        xType="ordinal"
        margin={{ bottom: 200, top: 50 }}
      >
        <VerticalGridLines />
        <HorizontalGridLines />
        <XAxis tickLabelAngle={-45} />
        <VerticalBarSeries
          color={colours.periwinkleBlueMedium}
          colorType="literal"
          data={[
            { x: "Selected Income", y: income, color: colours.incomeyellow },
            { x: "Resolved Early through Mediation", y: mediation },
            { x: "Court Resolution as Described Above", y: courtResolution },
            { x: "Court Resolution: Increased Conflict", y: increasedConflict },
            { x: "Court Resolution: High Conflict", y: highConflict }
          ]}
        />

        <LabelSeries
          labelAnchorX="middle"
          data={[
            {
              x: "Selected Income",
              y: income,
              label: numberToMoneyDisplay(income)
            },
            {
              x: "Resolved Early through Mediation",
              y: mediation,
              label: numberToMoneyDisplay(parseInt(mediation, 10))
            },
            {
              x: "Court Resolution as Described Above",
              y: courtResolution,
              label: numberToMoneyDisplay(parseInt(courtResolution, 10))
            },
            {
              x: "Court Resolution: Increased Conflict",
              y: increasedConflict,
              label: numberToMoneyDisplay(parseInt(increasedConflict, 10))
            },
            {
              x: "Court Resolution: High Conflict",
              y: highConflict,
              label: numberToMoneyDisplay(parseInt(highConflict, 10))
            }
          ]}
        />
      </XYPlot>
    </ComparisonGraph>
  </div>
  </React.Fragment>
);

Conflict.propTypes = {
  income: PropTypes.number,
  mediation: PropTypes.number,
  courtResolution: PropTypes.number,
  increasedConflict: PropTypes.number,
  highConflict: PropTypes.number
};
