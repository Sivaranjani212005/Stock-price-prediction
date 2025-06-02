import React, { useState } from 'react';
import TimeIntervalSelector from './Component/TimeIntervalSelector';
import StockChart from './Component/StockChart';
import CorrelationHeatmap from './Component/CorrelationHeatMap';
const App = () => {
  const [timeInterval, setTimeInterval] = useState(30);
  return (
    <div className="container">
      <h1>Stock Insights Dashboard</h1>
      <TimeIntervalSelector value={timeInterval} onChange={setTimeInterval} />
      <div className="section">
        <h2>Stock Page</h2>
        <StockChart timeInterval={timeInterval} />
      </div>
      <div className="section">
        <h2>Correlation Heatmap</h2>
        <CorrelationHeatmap timeInterval={timeInterval} />
      </div>
    </div>
  );
};
export default App;
