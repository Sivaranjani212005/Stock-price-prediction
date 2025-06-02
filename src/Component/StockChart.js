import React, { useEffect, useState } from 'react';
import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer} from 'recharts';
const StockChart = ({ timeInterval }) => {
const [data, setData] = useState([]);
useEffect(() => {
    const generateData = () => {
      const simulatedData = Array.from({ length: 20 }, (_, i) => ({
        time: `${i * timeInterval} min`,
        price: (Math.random() * 50 + 100).toFixed(2),
        average: (105 + Math.random() * 5).toFixed(2)
      }));
      setData(simulatedData);
    };
    generateData();
  }, [timeInterval]);
  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data} margin={{ top: 10, right: 30, left: 20, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="time" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="price" stroke="#8884d8" name="Price" />
        <Line type="monotone" dataKey="average" stroke="#82ca9d" name="Average" />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default StockChart;
