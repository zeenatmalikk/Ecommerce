import * as actionTypes from "./ShoppingTypesToolkit";

const INITIAL_STATE = {
  products: [],
  cart: [],
  currentItem: null,
};

const shopReducer = (state = INITIAL_STATE, action) => {
  // console.log("attremove", action.payload);
  switch (action.type) {
    case actionTypes.ADD_PRODUCT:
      return {
        ...state,
        products: action.payload,
      };

    case actionTypes.ADD_TO_CART:
      // console.log("st", state);

      // Great Item data from products array
      const item = state.products.find(
        (product) => product._id === action.payload.id._id
      );
      // console.log("addcartITEM", item);

      // Check if Item is in cart already
      const inCart = state.cart.find((item) =>
        item._id === action.payload.id._id ? true : false
      );
      // console.log("addcartITEMCartin", inCart);

      return {
        ...state,
        cart: inCart
          ? state.cart.map((item) =>
              item._id === action.payload.id._id
                ? { ...item, qty: item.qty + 1 }
                : item
            )
          : [...state.cart, { ...item, qty: 1 }],
      };

    case actionTypes.REMOVE_FROM_CART:
      console.log("action.payload.id._id", action.payload.id);
      // console.log();
      return {
        ...state,
        cart: state.cart.filter((item) => item._id !== action.payload.id),
      };
    case actionTypes.ADJUST_ITEM_QTY:
      return {
        ...state,
        cart: state.cart.map((item) =>
          item._id === action.payload.id._id
            ? { ...item, qty: +action.payload.qty }
            : item
        ),
      };
    case actionTypes.LOAD_CURRENT_ITEM:
      return {
        ...state,
        currentItem: action.payload,
      };
    default:
      return state;
  }
};
export default shopReducer;
