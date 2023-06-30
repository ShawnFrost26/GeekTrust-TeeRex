import React from 'react';
import { useFilter } from '../../contexts/filter-context';


const PriceFilter = () => {

  const { filterDispatch } = useFilter();

  const handlePriceChange = (e, option) => {
    let check = e.target.checked;
    filterDispatch({
      type: "PRICE",
      payload: {
        option,
        check,
      },
    });
  }

    return (
      <div className="filter-option">
      <div className="filter-section-title">Price</div>
      <div className="filter-section-options">
        <label className="filter-label" >
          <input className="input" type="checkbox" value="0-200" 
          onChange={(e) => handlePriceChange(e, "0-200")}
          />
          <span>₹0 - ₹200</span>
        </label>
        <label className="filter-label" >
          <input className="input" type="checkbox" value="200-400" 
          onChange={(e) => handlePriceChange(e, "200-400")}
          />
          <span>₹200 - ₹400</span>
        </label>
        <label className="filter-label" >
          <input className="input" type="checkbox" value="400-600" 
          onChange={(e) => handlePriceChange(e, "400-600")}
          />
          <span>₹400 - ₹600</span>
        </label>
          </div>
        </div>
    );
};

export default PriceFilter;
