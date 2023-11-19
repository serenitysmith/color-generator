import React from 'react';


// GradientPreview functional component
const GradientPreview = ({ colors, angle }) => {

  // Calculate the gradientStyle object with the specified colors and angle
  const gradientStyle = {
     // Using a template string to construct the linear-gradient property
  // It includes the specified angle and colors joined into a comma-separated string
    background: `linear-gradient(${angle}deg, ${colors.join(', ')})`,
  };

  // Return a div element with the specified class and inline style
  return <div className="gradient-preview" style={gradientStyle} />;
};

export default GradientPreview;
