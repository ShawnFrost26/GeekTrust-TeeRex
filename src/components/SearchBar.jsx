import React from "react";
import { TextField } from "@mui/material";

function SearchBar({ searchTerm, handleSearch }) {
  return (
<div style={{display:"flex", justifyContent:"center", margin: "2rem"}}>
    <TextField
      id="search"
      label="Search"
      variant="outlined"
      size="small"
      value={searchTerm}
      onChange={handleSearch}
    />
    </div>
  );
}

export default SearchBar;
