import React from 'react';

const GradientPreview = ({ colors, angle }) => {
  const gradientStyle = {
    background: `linear-gradient(${angle}deg, ${colors.join(', ')})`,
  };
  return <div className="gradient-preview" style={gradientStyle} />;
};

export default GradientPreview;
