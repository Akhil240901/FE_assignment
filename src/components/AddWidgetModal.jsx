// import React, { useState } from "react";
// import { useDispatch } from "react-redux";
// import { addWidget } from "../features/dashboardSlice";

// const AddWidgetModal = ({ categoryId, onClose }) => {
//   const [name, setName] = useState("");
//   const [text, setText] = useState("");
//   const dispatch = useDispatch();

//   const handleAdd = () => {
//     if (name.trim() && text.trim()) {
//       dispatch(addWidget(categoryId, name, text));
//       onClose();
//     }
//   };

//   return (
//     <div
//       style={{
//         position: "fixed",
//         top: 0,
//         left: 0,
//         right: 0,
//         bottom: 0,
//         backgroundColor: "rgba(0,0,0,0.5)",
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "center",
//       }}
//     >
//       <div
//         style={{
//           backgroundColor: "white",
//           padding: "2rem",
//           borderRadius: "8px",
//           minWidth: "300px",
//         }}
//       >
//         <h3>Add Widget</h3>
//         <input
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//           placeholder="Widget Name"
//         />
//         <br />
//         <textarea
//           value={text}
//           onChange={(e) => setText(e.target.value)}
//           placeholder="Widget Text"
//         />
//         <br />
//         <button onClick={handleAdd}>Add</button>
//         <button onClick={onClose}>Cancel</button>
//       </div>
//     </div>
//   );
// };

// export default AddWidgetModal;
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addWidget } from "../features/dashboardSlice";
import "../style/addWidget.css";
const AddWidgetModal = ({ onClose }) => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.dashboard.categories);

  const [categoryId, setCategoryId] = useState(categories[0]?.id || "");
  const [widgetName, setWidgetName] = useState("");
  const [widgetText, setWidgetText] = useState("");

  const handleAdd = () => {
    if (widgetName && widgetText && categoryId) {
      dispatch(addWidget(categoryId, widgetName, widgetText));

      onClose();
    }
  };

  return (
    <>
      <div className="modal-backdrop" onClick={onClose}></div>
      <div className="modal">
        <h3>Add Widget</h3>
        <label>
          Select Category:
          <select
            value={categoryId}
            onChange={(e) => setCategoryId(e.target.value)}
          >
            {categories.map((cat) => (
              <option key={cat.id} value={cat.id}>
                {cat.name}
              </option>
            ))}
          </select>
        </label>
        <input
          type="text"
          placeholder="Widget Name"
          value={widgetName}
          onChange={(e) => setWidgetName(e.target.value)}
        />
        <textarea
          placeholder="Widget Text"
          value={widgetText}
          onChange={(e) => setWidgetText(e.target.value)}
        />
        <button onClick={handleAdd}>Add</button>
        <button onClick={onClose}>Cancel</button>
      </div>
    </>
  );
};

export default AddWidgetModal;
