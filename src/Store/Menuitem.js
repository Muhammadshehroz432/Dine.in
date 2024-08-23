import { createSlice } from "@reduxjs/toolkit";
import { MenuItems } from "../data/menu";
const Menuitemslice = createSlice({
  name: "menuitem",
  initialState: [MenuItems],
  reducers: {
    addMenuItem(state, action) {
      state = [...state, action.payload];
    },
  },
});

export const MenuitemAction = Menuitemslice.actions;
export default Menuitemslice;
