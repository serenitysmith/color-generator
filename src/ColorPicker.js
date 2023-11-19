import React from "react";

const ColorPicker = ({ colors, handleColorChange }) => {
  return (
    // The outer div with the class 'color-picker' contains the entire component
    <div className="color-picker">
      {/* Mapping over the 'colors' array to generate color input elements */}
      {colors.map((color, index) => (
        // Each color input is contained in a div with a unique key and class
        <div key={index} className="color-picker-item">
          {/* Input element of type 'color' with the current color value */}
          <input
            type="color"
            value={color}
            // 'onChange' event handler triggers when the color input changes
            // Calls 'handleColorChange' function with the index and new color value as arguments
            onChange={(event) => handleColorChange(index, event.target.value)}
          />
        </div>
      ))}
    </div>
  );
};

export default ColorPicker;

// This code defines a React functional component called ColorPicker. It takes an array of colors (colors) and a function to handle color changes (handleColorChange) as props. The component renders a set of color input elements based on the provided array of colors. When a user changes a color, the handleColorChange function is called with the index of the changed color and the new color value. The entire component is then exported for use in other parts of the React application.
