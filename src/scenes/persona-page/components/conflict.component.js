import React from "react";
import {
  XYPlot,
  XAxis,
  VerticalGridLines,
  HorizontalGridLines,
  VerticalBarSeries,
  LabelSeries
} from 'react-vis';
import PropTypes from "prop-types";
import { PersonaTextRegular, SectionHeader } from "../persona-page.styles";
import { colours } from "src/styles";
import { numberToMoneyDisplay } from "../store/persona-page.utils";

export const Conflict = ({ persona, mediation, courtResolution, increasedConflict, highConflict }) => (
  <React.Fragment>
    <SectionHeader>What if</SectionHeader>
    <PersonaTextRegular>
      {`The costs and timing of a family law process can vary dramatically
            depending on how much conflict there is between partners. The legal costs
            in this scenario are based on a relatively low level of conflict. The legal
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

    <XYPlot height={300} width={700}>
      <VerticalGridLines />
      <HorizontalGridLines />
      <XAxis />
      <VerticalBarSeries color={colours.periwinkleBlueMedium} colorType="literal"
        data={[
          {x: 0, y: mediation},
          {x: 1, y: 50000, color: colours.periwinkleBlueDark},
          {x: 2, y: courtResolution},
          {x: 3, y: increasedConflict},
          {x: 4, y: highConflict}
        ]} />

      <LabelSeries
        data={[
          {x: 0, label: numberToMoneyDisplay(50000)},
          {x: 1, label: numberToMoneyDisplay(parseInt(mediation, 10))},
          {x: 2, label: numberToMoneyDisplay(parseInt(courtResolution, 10))},
          {x: 3, label: numberToMoneyDisplay(parseInt(increasedConflict, 10))},
          {x: 4, label: numberToMoneyDisplay(parseInt(highConflict, 10))}
        ]} />

    </XYPlot>

  </React.Fragment>
);

Conflict.propTypes = {
  persona: PropTypes.any
};
