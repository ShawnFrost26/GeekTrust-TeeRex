import React, { useContext, createContext, useReducer } from "react";
import { reducerFun } from "./reducerFun";

const initialState = {
  gender: "",
  color: [],
  type: [],
  price: []
};

const FilterContext = createContext(initialState);

const FilterProvider = ({ children }) => {
  const [state, filterDispatch] = useReducer(reducerFun, initialState);

  const clearAllFilters = () => {
    filterDispatch({ type: "CLEAR_ALL" });
  };

  return (
    <FilterContext.Provider value={{ state, filterDispatch, clearAllFilters }}>
      {children}
    </FilterContext.Provider>
  );
};

const useFilter = () => useContext(FilterContext);

export { useFilter, FilterProvider };
