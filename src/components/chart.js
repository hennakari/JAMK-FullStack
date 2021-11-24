import React, {useEffect, useRef, useState} from 'react';
import ChartsEmbedSDK from "@mongodb-js/charts-embed-dom";

const Chart = ({chartId, height, width}) => {
  const sdk = new ChartsEmbedSDK({baseUrl:'https://charts.mongodb.com/charts-project-0-ohfsz'});
  const chartDiv = useRef(null);
  const [setRendered] = useState(false);
  const [chart] = useState(sdk.createChart({chartId: chartId, height: height, width: width, theme: "light", showAttribution: false}));

  useEffect(() => {
    chart.render(chartDiv.current).then(() => setRendered(true)).catch(err => console.log("Error during Charts rendering.", err));
  });

  return <div className="chart" id={"chart"} ref={chartDiv}/>;
};

export default Chart;

