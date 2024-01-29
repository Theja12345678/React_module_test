import { configureStore } from "@reduxjs/toolkit";
import appReducer from "./Slice";

const Store = configureStore({
  reducer: {
    app: appReducer,
  },
});

export default Store;