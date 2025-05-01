import React from "react";
import { useDispatch } from "react-redux";
import { removeWidget } from "../features/dashboardSlice";
import { PieChartR } from "../charts/PieChartR";
import { BarChartR } from "../charts/BarChartR";

const Widget = ({ widget, categoryId }) => {
  const dispatch = useDispatch();
  console.log("Widget Data:", widget.name, widget.type, widget.data);

  const renderChart = () => {
    switch (widget.type) {
      case "pie":
        return <PieChartR data={widget.data} />;
      case "bar":
        return <BarChartR data={widget.data} />;
      default:
        return <p>{widget.text}</p>; // fallback to text if no chart type
    }
  };

  return (
    <div
      style={{
        border: "1px solid gray",
        padding: "1rem",
        borderRadius: "8px",
        width: "300px",
        position: "relative",
        backgroundColor: "#fff",
      }}
    >
      <button
        onClick={() =>
          dispatch(removeWidget({ categoryId, widgetId: widget.id }))
        }
        style={{
          position: "absolute",
          top: "5px",
          right: "5px",
          cursor: "pointer",
        }}
      >
        ❌
      </button>
      <h4 style={{ marginBottom: "0.5rem" }}>{widget.name}</h4>
      {renderChart()}
    </div>
  );
};

export default Widget;
