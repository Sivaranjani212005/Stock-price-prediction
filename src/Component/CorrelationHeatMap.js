import React, { useEffect, useState } from 'react';
import Plot from 'react-plotly.js';
const CorrelationHeatmap = ({ timeInterval }) => {
  const [heatmapData, setHeatmapData] = useState({
    x: [],
    y: [],
    z: []
  });

  useEffect(() => {
    const stocks = ['Stock A', 'Stock B', 'Stock C', 'Stock D'];
    const z = stocks.map(() => stocks.map(() => Math.random().toFixed(2)));

    setHeatmapData({ x: stocks, y: stocks, z });
  }, [timeInterval]);

  return (
    <div className="heatmap-container">
      <Plot
        data={[
          {
            z: heatmapData.z,
            x: heatmapData.x,
            y: heatmapData.y,
            type: 'heatmap',
            colorscale: 'Viridis'
          }
        ]}
        layout={{
          width: 600,
          height: 400,
          title: 'Stock Correlation Heatmap'
        }}
      />
    </div>
  );
};
export default CorrelationHeatmap;
