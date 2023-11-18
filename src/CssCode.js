const colors = ['#FFFF00', '#000000'];
const angle = 50;
const CssCode = () => {
  const vendorPrefixes = ['-moz-', '-webkit-'];
  let cssCode = `background: linear-gradient(${angle}deg, ${colors.join(', ')});\n`;

  vendorPrefixes.forEach((prefix) => {
    cssCode += `${prefix}background: linear-gradient(${angle}deg, ${colors.join(', ')});\n`;
  });

  return cssCode;
};


export default CssCode;

  

