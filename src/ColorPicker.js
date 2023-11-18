import React from 'react';

const ColorPicker = ({ colors, handleColorChange }) => {
  return (
    <div className="color-picker">
      {colors.map((color, index) => (
        <div key={index} className="color-picker-item">
          <input
            type="color"
            value={color}
            onChange={(event) => handleColorChange(index, event.target.value)}
          />
        </div>
      ))}
    </div>
  );
};

export default ColorPicker;