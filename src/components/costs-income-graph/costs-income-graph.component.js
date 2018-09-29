import React from "react";

import { XYPlot, XAxis, YAxis, HorizontalBarSeries } from "react-vis";

// EXAMPLE GRAPH
export const CostsIncomeGraph = () => {
  const BarSeries = HorizontalBarSeries;
  return (
    <div>
      <XYPlot width={300} height={300} stackBy="x">
        <XAxis />
        <YAxis />
        <BarSeries data={[{ y: 2, x: 10 }, { y: 4, x: 5 }, { y: 5, x: 15 }]} />
        <BarSeries data={[{ y: 2, x: 12 }, { y: 4, x: 2 }, { y: 5, x: 11 }]} />
      </XYPlot>
    </div>
  );
};
