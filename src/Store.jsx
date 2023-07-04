import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./features/user/userSlice";
import modalReducer from "./features/Modal/modalSlice";

const Store = configureStore({
  reducer: {
    user: userReducer,
    modal: modalReducer,
  },
});
export default Store;
