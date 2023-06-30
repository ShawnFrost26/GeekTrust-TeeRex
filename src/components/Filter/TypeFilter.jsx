import React from 'react';
import { useFilter } from '../../contexts/filter-context';


const TypeFilter = () => {

  const { filterDispatch } = useFilter();

  const handleTypeChange = (e, option) => {
    let check = e.target.checked;
    filterDispatch({
      type: "TYPE",
      payload: {
        option,
        check,
      },
    });
  }

  return (
    <div className="filter-option">
    <div className="filter-section-title">Type</div>
    <div className="filter-section-options">
      <label className="filter-label" >
        <input className="input" type="checkbox" value="Hoodie" 
         onChange={(e) => handleTypeChange(e, "Hoodie")}
        />
        <span>Hoodie</span>
      </label>
      <label className="filter-label" >
        <input className="input" type="checkbox" value="Polo" 
         onChange={(e) => handleTypeChange(e, "Polo")}
        />
        <span>Polo</span>
      </label>
      <label className="filter-label" >
        <input className="input" type="checkbox" value="Round" 
         onChange={(e) => handleTypeChange(e, "Round")}
        />
        <span>Round</span>
      </label>
        </div>
      </div>
  );
};

export default TypeFilter;
