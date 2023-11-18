import React from 'react';

const AngleInput = ({ angle, handleAngleChange }) => {
  return (
    <div className="angle-input">
      <label htmlFor="angle-input">Angle:</label>
      <input
        type="number"
        id="angle-input"
        value={angle}
        min="0"
        max="360"
        onChange={(event) => handleAngleChange(event.target.value)}
      />
      <span>deg</span>
    </div>
  );
};

export default AngleInput;