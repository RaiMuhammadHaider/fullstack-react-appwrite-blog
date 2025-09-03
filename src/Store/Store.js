// import { configureStore } from "@reduxjs/toolkit"; 
// import authSliceReducer from '../Store/authSlice'
// export const store = configureStore({
// reducer :{
//     auth  : authSliceReducer
// }
// })
// export default store
import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer, // Store slice is `auth`
  },
});

export default store;
