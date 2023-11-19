import React, { useState } from 'react'
import ColorPicker from './ColorPicker'
import AngleInput from './AngleInput'
import GradientPreview from './GradientPreview'



import CssCode from './CssCode'

const GradientGenerator = () => {

    // State for managing colors and angle
  const [colors, setColors] = useState(['#FFFF00', '#000000']);
  const [angle, setAngle] = useState(50);
  // Function to add a new color to the colors state
  const handleAddColor = () => {
    setColors([...colors, '#FFF']);
  };

  const handleRemoveColor = () => {
    if (colors.length > 2) {
      setColors(colors.slice(0, -1));
    }
  };

  const handleColorChange = (index, newColor) => {
    const updatedColors = [...colors];
    updatedColors[index] = newColor;
    setColors(updatedColors);
  };

  // Function to handle color change for a specific index in the colors state
  const handleAngleChange = (newAngle) => {
    setAngle(newAngle);
  };
// Function to generate CSS code for the gradient
  const generateCssCode = () => {
    const vendorPrefixes = ['-moz-', '-webkit-'];

        // Generating vendor-prefixed versions of the CSS code

//         vendorPrefixes array contains the prefixes -moz- (for Mozilla Firefox) and -webkit- (for WebKit-based browsers).

// The initial CSS code is created with the standard linear-gradient property.

// The function then iterates through each vendor prefix, and for each prefix, it appends a version of the CSS code with that prefix to the cssCode string.
    let cssCode = `background: linear-gradient(${angle}deg, ${colors.join(', ')});\n`;
    vendorPrefixes.forEach((prefix) => {
      cssCode += `${prefix}background: linear-gradient(${angle}deg, ${colors.join(', ')});\n`;
    });
    return cssCode;
  };

  // Rendering the GradientGenerator component

  return (
    <div className="gradient-generator">
      <h1>Gradient Generator</h1>
      <div className="gradient-settings">
         {/* ColorPicker component for selecting colors */}
        <ColorPicker colors={colors} handleColorChange={handleColorChange} />

              {/* AngleInput component for setting the gradient angle */}
        <AngleInput angle={angle} handleAngleChange={handleAngleChange} />
        <button onClick={handleAddColor}>Add Color</button>
        <button onClick={handleRemoveColor}>Remove Color</button>
      </div>

        {/* GradientPreview component to show a preview of the gradient */}
      <GradientPreview colors={colors} angle={angle} />

        
      {/* CssCode component to display the generated CSS code */}
      <CssCode cssCode={generateCssCode()} />
    </div>
  );
};

export default GradientGenerator;