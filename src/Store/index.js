import { configureStore } from "@reduxjs/toolkit";
import Menuitemslice from "./Menuitem";
import Bagslice from "./bag";
const DineinStore = configureStore({
  reducer: {
    menuitem: Menuitemslice.reducer,
    bag: Bagslice.reducer,
  },
});

export default DineinStore;
