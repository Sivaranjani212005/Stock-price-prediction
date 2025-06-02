import React from 'react';

const TimeIntervalSelector = ({ value, onChange }) => {
  return (
    <div className="time-selector">
      <label>Select Time Interval (minutes):</label>
      <select
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
      >
        <option value={30}>30 minutes</option>
        <option value={60}>60 minutes</option>
        <option value={120}>120 minutes</option>
      </select>
    </div>
  );
};

export default TimeIntervalSelector;