import React, { useState } from "react";
import { useSelector } from "react-redux";
import Widget from "../components/Widgets";
import AddWidgetModal from "../components/AddWidgetModal";
import SearchWidget from "../components/SearchWidget";
import AllCategory from "../components/AllCategory";
import "../style/dashboard.css";

const Dashboard = () => {
  const categories = useSelector((state) => state.dashboard.categories);
  const searchQuery = useSelector((state) => state.dashboard.searchQuery);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [showAssignmentModal, setShowAssignmentModal] = useState(false);

  const handleAddClick = (categoryId) => {
    setSelectedCategory(categoryId);
    setShowModal(true);
  };

  return (
    <div className="body">
      <div className="navbar">
        <h2>Home</h2>
        <SearchWidget className="search-widget" />
      </div>

      <div className="dashboard-container">
        <div className="dashboard-header">
          <h1> Dashboard</h1>
          <div className="dashboard-controls">
            <button onClick={() => setShowModal(true)}>+ Add Widget</button>
            <button onClick={() => setShowAssignmentModal(true)}>
              All categories and widget
            </button>
          </div>
        </div>

        {categories.map((category) => (
          <div className="category-container" key={category.id}>
            <h2 className="category-title">{category.name}</h2>
            <div className="widget-list">
              {(category.widgets || [])
                .filter((widget) =>
                  widget.name.toLowerCase().includes(searchQuery.toLowerCase())
                )
                .map((widget) => (
                  <Widget
                    key={widget.id}
                    widget={widget}
                    categoryId={category.id}
                  />
                ))}
            </div>
          </div>
        ))}

        {showModal && (
          <AddWidgetModal
            categoryId={selectedCategory}
            onClose={() => setShowModal(false)}
          />
        )}

        {showAssignmentModal && (
          <AllCategory onClose={() => setShowAssignmentModal(false)} />
        )}
      </div>
    </div>
  );
};

export default Dashboard;
