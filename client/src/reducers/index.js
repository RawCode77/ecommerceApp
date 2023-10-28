import { combineReducers } from "redux";
import authReducer from "./authReducer";
// import cartReducer from "./cartReducer";
import productsReducer from "./productsReducer";
// import profileReducer from "./profileReducer";

export default combineReducers({
  auth: authReducer,
  products: productsReducer,
  //   profile: profileReducer,
  //   cart: cartReducer,
});
