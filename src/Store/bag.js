import { createSlice } from "@reduxjs/toolkit";

const Bagslice = createSlice({
  name: "bag",
  initialState: [],
  reducers: {
    Addtobag: (state, action) => {
      state.push(action.payload);
    },
    removeBag(state, action) {
      return state.filter((item) => item.id !== action.payload);
    },
  },
});

export const BagAction = Bagslice.actions;
export default Bagslice; // Corrected this line to export the reducer
