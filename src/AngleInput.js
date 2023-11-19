import React from 'react';


// AngleInput component receives 'angle' and 'handleAngleChange' as props
const AngleInput = ({ angle, handleAngleChange }) => {
  return (

       // The outer div with the class 'angle-input' contains the entire component
    <div className="angle-input">

      {/* The label for the input field, associating it with the 'angle-input' id */}

      <label htmlFor="angle-input">Angle:</label>

       {/* The input field for entering the angle */}
      <input
        type="number"
        id="angle-input"
        value={angle}
        min="0"
        max="360"
        onChange={(event) => handleAngleChange(event.target.value)}

        // 'onChange' event handler triggers when the input value changes
        // Calls 'handleAngleChange' function with the new value as an argument
      />

      {/* Displaying 'deg' to indicate the unit of the angle */}
      <span>deg</span>
    </div>
  );
};

export default AngleInput;


// component renders an input field for an angle value with a label and unit indicator. The handleAngleChange function is expected to be provided from the parent component and is used to update the angle value when the input field changes