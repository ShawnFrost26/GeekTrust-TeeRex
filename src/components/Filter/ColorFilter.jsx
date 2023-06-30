import React from "react";
import { useFilter } from "../../contexts/filter-context";

const ColorFilter = () => {
  const { filterDispatch } = useFilter();

  const handleColorChange = (e, option) => {
    let check = e.target.checked; 
    filterDispatch({
      type: "COLOR",
      payload: {
        option,
        check,
      },
    });
  };

  return (
    <div className="filter-option">
      <div className="filter-section-title">Color</div>
      <div className="filter-section-options">
        <label className="filter-label">
          <input
            className="input"
            type="checkbox"
            value="Red"
            onChange={(e) => handleColorChange(e, "Red")}
          />
          <span>Red</span>
        </label>
        <label className="filter-label">
          <input
            className="input"
            type="checkbox"
            value="Blue"
            onChange={(e) => handleColorChange(e, "Blue")}
          />
          <span>Blue</span>
        </label>
        <label className="filter-label">
          <input
            className="input"
            type="checkbox"
            value="Green"
            onChange={(e) => handleColorChange(e, "Green")}
          />
          <span>Green</span>
        </label>
        <label className="filter-label">
          <input
            className="input"
            type="checkbox"
            value="Black"
            onChange={(e) => handleColorChange(e, "Black")}
          />
          <span>Black</span>
        </label>
        <label className="filter-label">
          <input
            className="input"
            type="checkbox"
            value="Pink"
            onChange={(e) => handleColorChange(e, "Pink")}
          />
          <span>Pink</span>
        </label>
        <label className="filter-label">
          <input
            className="input"
            type="checkbox"
            value="Grey"
            onChange={(e) => handleColorChange(e, "Grey")}
          />
          <span>Grey</span>
        </label>
        <label className="filter-label">
          <input
            className="input"
            type="checkbox"
            value="Purple"
            onChange={(e) => handleColorChange(e, "Purple")}
          />
          <span>Purple</span>
        </label>
        <label className="filter-label">
          <input
            className="input"
            type="checkbox"
            value="White"
            onChange={(e) => handleColorChange(e, "White")}
          />
          <span>White</span>
        </label>
      </div>
    </div>
  );
};

export default ColorFilter;
