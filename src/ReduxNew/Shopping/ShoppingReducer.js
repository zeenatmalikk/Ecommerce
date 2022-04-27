import * as actionTypes from "./ShoppingTypes";

const INITIAL_STATE = {
  products: [],
  cart: [],
  currentItem: null,
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      //Get items from array of products
      const item = state.products.find((prod) => prod.id === action.payload.id);
      //Check if ite is already in cart

      const inCart = state.cart.find((item) =>
        item.id === action.payload.id ? true : false
      );
      return {
        //duplicate the whole prev state

        ...state,
        //in cart object we check if it is in cart  then map through cart and find speicifc item and change its quanityt else send it as it is and if that is not in the cart so add it in cart

        cart: inCart
          ? state.cart.map((item) =>
              item.id === action.payload.id
                ? {
                    ...item,
                    qty: item.qty + 1,
                  }
                : item
            )
          : [...state.cart, { ...item, qty: 1 }],
      };
    case actionTypes.REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload.id),
      };
    case actionTypes.ADJUST_ITEM_QTY:
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload.id
            ? { ...item, qty: action.payload.qty }
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
