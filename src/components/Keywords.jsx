import React, { useState } from "react";
import WordCloud from "react-wordcloud";
import insightCloudImageData from "../insights";
import { XYPlot, XAxis, YAxis, VerticalBarSeries } from 'react-vis';

const Keywords = () => {
  const [keywordData, setKeywordData] = useState(insightCloudImageData);
  const barGraphData = keywordData.map(item => ({ x: item.text, y: item.value }));

  return (
    <div className="p-7 w-full h-full flex flex-col items-center justify-center">
      <h2 className="text-2xl font-bold mb-4">Sentiments Summary</h2>
      <div className="overflow-x-auto max-w-screen-md mx-auto mb-8">
        <XYPlot xType="ordinal" width={800} height={400} xDistance={100}>
          <XAxis title="value" />
          <YAxis title="words" />
          <VerticalBarSeries color="blue" data={barGraphData} />
        </XYPlot>
      </div>
      <div className="w-full mt-8">
        <h3 className="text-xl font-bold mb-4">Word Cloud</h3>
        <div className="w-full max-w-screen-lg mx-10 p-4 border-2 border-gray-400">
          <WordCloud
            words={keywordData}
            options={{
              rotations: 2,
              rotationAngles: [-90, 0],
              fontFamily: "Arial",
              fontSize: [60, 120], 
              fontStyle: "normal",
              fontWeight: "bold",
              padding: 2,
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Keywords;
