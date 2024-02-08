import { createSlice } from "@reduxjs/toolkit";

interface stateType {
  currentPage: string;
}

const initialState = {
  currentPage: "home",
};

export const currentPageSlice = createSlice({
  name: "currentPage",
  initialState() {
    return initialState;
  },
  reducers: {
    setCurrentPage: (state: stateType, action) => {
      state.currentPage = action.payload;
    },
  },
});

export const { setCurrentPage } = currentPageSlice.actions;
export const selectCurrentPage = (state: stateType) => state.currentPage;
export default currentPageSlice.reducer;
