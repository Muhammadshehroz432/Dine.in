import { createSlice } from "@reduxjs/toolkit";

const Bagslice = createSlice({
  name: "bag",
  initialState: [],
  reducers: {
    addBag(state, action) {
      state.push(action.payload);
    },
    removeBag(state, action) {
      // Use the return statement to return the new state array
      return state.filter((item) => item.id !== action.payload);
    },
  },
});

export const BagAction = Bagslice.actions;
export default Bagslice; // Corrected this line to export the reducer
