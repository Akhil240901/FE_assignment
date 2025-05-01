//

import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeWidget } from "../features/dashboardSlice";
import "../style/manageWidget.css";

const AllCategory = ({ onClose }) => {
  const { categories } = useSelector((state) => state.dashboard);
  const [activeTab, setActiveTab] = useState(categories?.name || "");
  const dispatch = useDispatch();

  const toggleAssignment = (widgetId, categoryId, checked) => {
    if (!checked) {
      dispatch(removeWidget({ categoryId, widgetId }));
    }
  };

  const activeCategory = categories.find((cat) => cat.name === activeTab);

  return (
    <>
      <div className="modal-backdrop" onClick={onClose}></div>
      <div className="modal">
        <div className="modal-header">
          <h3>All Categories</h3>
          <button onClick={onClose} className="close-btn">
            ×
          </button>
        </div>

        <div className="tabs">
          {categories.map((cat) => (
            <button
              key={cat.id}
              className={cat.name === activeTab ? "active" : ""}
              onClick={() => setActiveTab(cat.name)}
            >
              {cat.name}
            </button>
          ))}
        </div>

        <div className="widget-checkbox-list">
          {activeCategory?.widgets.length > 0 ? (
            activeCategory.widgets.map((widget) => (
              <div key={widget.id} className="widget-checkbox-item">
                <input
                  type="checkbox"
                  id={`widget-${widget.id}`}
                  checked={true}
                  onChange={(e) =>
                    toggleAssignment(
                      widget.id,
                      activeCategory.id,
                      e.target.checked
                    )
                  }
                />
                <label htmlFor={`widget-${widget.id}`}>{widget.name}</label>
              </div>
            ))
          ) : (
            <p>No widgets available.</p>
          )}
        </div>

        <div className="modal-footer">
          <button onClick={onClose} className="cancel-btn">
            Cancel
          </button>
          {/* <button className="confirm-btn">Confirm</button> */}
        </div>
      </div>
    </>
  );
};

export default AllCategory;
