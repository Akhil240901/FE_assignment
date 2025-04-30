import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeWidget } from "../features/dashboardSlice";
import "../style/manageWidget.css";

const WidgetAssignmentModal = ({ onClose }) => {
  const { categories } = useSelector((state) => state.dashboard);
  const dispatch = useDispatch();

  const allWidgets = categories.flatMap((cat) =>
    cat.widgets.map((widget) => ({ ...widget, fromCategory: cat.id }))
  );

  const toggleAssignment = (widgetId, categoryId, checked) => {
    if (!checked) {
      dispatch(removeWidget({ categoryId, widgetId }));
    }
  };

  return (
    <>
      <div className="modal-backdrop" onClick={onClose}></div>
      <div className="modal">
        <h3>Widget Assignment</h3>
        {allWidgets.map((widget) => (
          <div key={widget.id} className="widget-block">
            <strong>{widget.name}</strong>
            <div>
              {categories.map((category) => {
                const isInCategory = category.widgets.some(
                  (w) => w.id === widget.id
                );
                return (
                  <label key={category.id}>
                    <input
                      type="checkbox"
                      checked={isInCategory}
                      onChange={(e) =>
                        toggleAssignment(
                          widget.id,
                          category.id,
                          e.target.checked
                        )
                      }
                    />
                    {category.name}
                  </label>
                );
              })}
            </div>
          </div>
        ))}
        <button onClick={onClose}>Close</button>
      </div>
    </>
  );
};

export default WidgetAssignmentModal;
