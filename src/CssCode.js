// Hardcoded array of colors

const colors = ["#FFFF00", "#000000"];
//Hardcoded angle for the linear gradient
const angle = 50;

// CssCode component is a functional component
const CssCode = () => {
  // Array of vendor prefixes for different browsers
  const vendorPrefixes = ["-moz-", "-webkit-"];

  // Initial CSS code with the linear gradient using the specified angle and colors
  let cssCode = `background: linear-gradient(${angle}deg, ${colors.join(
    ", "
  )});\n`;
  // Loop through each vendor prefix and append their version of the linear gradient to the CSS code
  vendorPrefixes.forEach((prefix) => {
    cssCode += `${prefix}background: linear-gradient(${angle}deg, ${colors.join(
      ", "
    )});\n`;
  });

  return cssCode;
};

export default CssCode;

// code defines a React functional component named CssCode. It generates CSS code for a linear gradient background with a specified angle and colors. Here's a breakdown of the code with inline comments:
