import React from "react";
import { useDispatch } from "react-redux";
import { setSearchQuery } from "../features/dashboardSlice";

const SearchWidget = () => {
  const dispatch = useDispatch();

  return (
    <div
      style={{
        marginBottom: "1rem",
        borderRadius: "4px",
        background: "#fff",
        padding: "6px 10px",
        boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
        display: "flex",
        alignItems: "center",
      }}
    >
      <input
        type="text"
        placeholder="Search widgets..."
        onChange={(e) => dispatch(setSearchQuery(e.target.value))}
        style={{
          border: "none",
          outline: "none",
          fontSize: "14px",
          width: "200px",
        }}
      />
    </div>
  );
};

export default SearchWidget;
