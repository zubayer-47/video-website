const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  tags: [],
  search: "",
  isReset: false
};

const filterSlice = createSlice({
  name: "video",
  initialState,
  reducers: {
    tagSelected: (state, action) => {
      state.tags.push(action.payload);
      state.isReset = false;
    },
    tagRemoved: (state, action) => {
      const indexToRemove = state.tags.indexOf(action.payload);

      if (indexToRemove !== -1) {
        state.tags.splice(indexToRemove, 1);
      }

      state.isReset = false;
    },
    searched: (state, action) => {
      state.search = action.payload;
    },

    resetFilters: (state, action) => {
      state.tags = [];
      state.search = "";
      state.isReset = true
    },
  },
});

export default filterSlice.reducer;
export const { tagSelected, tagRemoved, searched, resetFilters } = filterSlice.actions;
