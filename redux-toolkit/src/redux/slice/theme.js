import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = "";

export const themeSlice = createSlice({
  name: "theme",
  initialState: {
    value: initialStateValue,
  },
  reducers: {
    changeColor: (state, action) => {
      state.value = action.payload;
    },
  },
});

////This is Action
export const { changeColor } = themeSlice.actions;

///This is defualt reducer
export default themeSlice.reducer;
