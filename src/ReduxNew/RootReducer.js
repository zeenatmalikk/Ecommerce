import { combineReducers } from "redux";
import shopReducer from "./Shopping/ShoppingReducer";
const rootReducer = combineReducers({
  shop: shopReducer,
});
export default rootReducer;
