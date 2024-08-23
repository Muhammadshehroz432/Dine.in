import { configureStore } from "@reduxjs/toolkit";
import Menuitemslice from "./Menuitem";

const DineinStore = configureStore({
  reducer: {
    menuitem: Menuitemslice.reducer,
  },
});

export default DineinStore;
