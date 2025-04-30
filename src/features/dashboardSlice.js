import { createSlice, nanoid } from "@reduxjs/toolkit";
import initilInfo from "../data/initialInfo.json";
const initialState = initilInfo;

const dashboardSlice = createSlice({
  name: "dashboard",
  initialState,
  reducers: {
    addWidget: {
      reducer(state, action) {
        const { categoryId, widget } = action.payload;
        const category = state.categories.find((c) => c.id === categoryId);
        if (category) {
          category.widgets.push(widget);
        }
      },
      prepare(categoryId, name, text) {
        return {
          payload: {
            categoryId,
            widget: {
              id: nanoid(),
              name,
              text,
            },
          },
        };
      },
    },
    removeWidget(state, action) {
      const { categoryId, widgetId } = action.payload;
      const category = state.categories.find((c) => c.id === categoryId);
      if (category) {
        category.widgets = category.widgets.filter((w) => w.id !== widgetId);
      }
    },
    setSearchQuery(state, action) {
      state.searchQuery = action.payload;
    },
  },
});

export const { addWidget, removeWidget, setSearchQuery } =
  dashboardSlice.actions;
export default dashboardSlice.reducer;
