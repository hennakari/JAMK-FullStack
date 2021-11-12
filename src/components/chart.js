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

//   useEffect(() => {
//     // if (rendered) {
//     //   chart.setFilter(filter).catch(err => console.log("Error while filtering.", err));
//     // }
//   }, [chart, filter, rendered]);

  return <div className="chart" id={"chart"+chartId} ref={chartDiv}/>;
};

export default Chart;

