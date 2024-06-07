import React from "react";
import { XYPlot, XAxis, YAxis, VerticalBarSeries } from 'react-vis';

const Reports = () => {
  const data = [
    { x: 'Jan', y: 65 },
    { x: 'Feb', y: 59 },
    { x: 'Mar', y: 80 },
    { x: 'Apr', y: 81 },
    { x: 'May', y: 56 },
    { x: 'Jun', y: 55 },
    { x: 'Jul', y: 70 },
    { x: 'Aug', y: 85 },
    { x: 'Sept', y: 90 },
    { x: 'Oct', y: 75 },
    { x: 'Nov', y: 62 },
    { x: 'Dec', y: 68 }
  ];

  return (
    <div className="w-full mx-10">
      <h1 className="text-3xl mb-5">Reports</h1>
      <div className="overflow-x-auto max-w-screen-md mx-auto">
        <XYPlot xType="ordinal" width={600} height={400} xDistance={100}>
          <XAxis title="Month" />
          <YAxis title="Sales" />
          <VerticalBarSeries color="blue" data={data} />
        </XYPlot>
      </div>
    </div>
  );
};

export default Reports;
