import React from "react";
import { useDispatch } from "react-redux";
import { removeWidget } from "../features/dashboardSlice";

const Widget = ({ widget, categoryId }) => {
  const dispatch = useDispatch();

  return (
    <div
      style={{
        border: "1px solid gray",
        padding: "1rem",
        borderRadius: "8px",
        width: "200px",
        position: "relative",
      }}
    >
      <button
        onClick={() =>
          dispatch(removeWidget({ categoryId, widgetId: widget.id }))
        }
        style={{ position: "absolute", top: "5px", right: "5px" }}
      >
        ❌
      </button>
      <h4>{widget.name}</h4>
      <p>{widget.text}</p>
    </div>
  );
};

export default Widget;
