import React from "react";
import { useDispatch } from "react-redux";
import { setSearchQuery } from "../features/dashboardSlice";

const SearchWidget = () => {
  const dispatch = useDispatch();

  return (
    <div style={{ marginBottom: "1rem" }}>
      <input
        type="text"
        placeholder="Search widgets..."
        onChange={(e) => dispatch(setSearchQuery(e.target.value))}
      />
    </div>
  );
};

export default SearchWidget;
