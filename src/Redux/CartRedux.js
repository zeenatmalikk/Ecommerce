import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    quantity: 0,
    total: 0,
  },
  reducers: {
    addProduct (state, action) {
      state.quantity += 1;
      state.products.push(action.payload);
      state.total += action.payload.price * action.payload.quantity;
    },

    //   const existingIndex = state.products.findIndex(
    //     (item) => item.id === action.payload._id
    //   );

    //   if (existingIndex >= 0) {
    //     state.products[existingIndex] = {
    //       ...state.products[existingIndex],
    //       quantity: state.products[existingIndex].quantity + 1,
    //     };
    //     toast.info("Increased product quantity", {
    //       position: "bottom-left",
    //     });
    //   } else {
    //     let tempProductItem = { ...action.payload, quantity: 1 };
    //     state.products.push(tempProductItem);
    //     toast.success("Product added to cart", {
    //       position: "bottom-left",
    //     });
    //   }
    //   localStorage.setItem("products", JSON.stringify(state.products));
    // },
    
    
    removeFromCart(state, action) {
      const nextCartItem = state.products.filter(
        (product) => product.id !== action.payload.id
      );
      state.products = nextCartItem;
    },
    decreaseCart(state, action) {
      const itemIndex = state.products.findIndex(
        (item) => item.id === action.payload.id
      );

      if (state.products[itemIndex].quantity > 1) {
        state.products[itemIndex].quantity -= 1;

        toast.info("Decreased product quantity", {
          position: "bottom-left",
        });
      } else if (state.products[itemIndex].quantity === 1) {
        const nextproducts = state.products.filter(
          (item) => item.id !== action.payload.id
        );

        state.products = nextproducts;

        toast.error("Product removed from cart", {
          position: "bottom-left",
        });
      }

      // localStorage.setItem("products", JSON.stringify(state.products));
    },
  },
});

export const { addProduct, removeFromCart, decreaseCart } = cartSlice.actions;
export default cartSlice.reducer;
