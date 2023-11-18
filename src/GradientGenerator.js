import React, { useState } from 'react'
import ColorPicker from './ColorPicker'
import AngleInput from './AngleInput'
import GradientPreview from './GradientPreview'



import CssCode from './CssCode'

const GradientGenerator = () => {
  const [colors, setColors] = useState(['#FFFF00', '#000000']);
  const [angle, setAngle] = useState(50);

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

  const handleAngleChange = (newAngle) => {
    setAngle(newAngle);
  };

  const generateCssCode = () => {
    const vendorPrefixes = ['-moz-', '-webkit-'];
    let cssCode = `background: linear-gradient(${angle}deg, ${colors.join(', ')});\n`;
    vendorPrefixes.forEach((prefix) => {
      cssCode += `${prefix}background: linear-gradient(${angle}deg, ${colors.join(', ')});\n`;
    });
    return cssCode;
  };

  return (
    <div className="gradient-generator">
      <h1>Gradient Generator</h1>
      <div className="gradient-settings">
        <ColorPicker colors={colors} handleColorChange={handleColorChange} />
        <AngleInput angle={angle} handleAngleChange={handleAngleChange} />
        <button onClick={handleAddColor}>Add Color</button>
        <button onClick={handleRemoveColor}>Remove Color</button>
      </div>
      <GradientPreview colors={colors} angle={angle} />
      <CssCode cssCode={generateCssCode()} />
    </div>
  );
};

export default GradientGenerator;