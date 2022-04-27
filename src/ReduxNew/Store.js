import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./RootReducer";

const store = createStore(rootReducer, composeWithDevTools());

export default store;



// import { productCartReducer } from "../store/reducers/ProductReducer";



// const rootReducer = combineReducers({
//   product: productCartReducer,
// });

// export const store = createStore(rootReducer);