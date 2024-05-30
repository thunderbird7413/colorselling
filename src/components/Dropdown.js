import React from 'react';

const ColorDropdown = ({ onSelectColor }) => {
  const colors = ['Red', 'Green', 'Blue', 'Yellow', 'Purple']; // List of colors

  const handleColorSelect = (color) => {
    onSelectColor(color); // Pass selected color to parent component
  };

  return (
    <div className="color-dropdown">
      <label htmlFor="color-select">Choose a color:</label>
      <select id="color-select" onChange={(e) => handleColorSelect(e.target.value)}>
        {colors.map((color, index) => (
          <option key={index} value={color}>{color}</option>
        ))}
      </select>
    </div>
  );
};

export default ColorDropdown;
