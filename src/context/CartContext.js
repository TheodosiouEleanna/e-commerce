import React, { createContext, useReducer } from "react";

const initialState = {
  cartItems: [],
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      debugger;
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload],
      };
    case "REMOVE_FROM_CART":
      return {
        ...state,
        cartItems: state.cartItems.filter((item) => item.id !== action.payload),
      };
    case "INCREASE_QUANTITY":
      return {
        ...state,
        cartItems: state.cartItems.map((item) =>
          item.id === action.payload
            ? { ...item, quantity: item.quantity + 1 }
            : item
        ),
      };
    case "DECREASE_QUANTITY":
      return {
        ...state,
        cartItems: state.cartItems.map((item) =>
          item.id === action.payload && item.quantity > 1
            ? { ...item, quantity: item.quantity - 1 }
            : item
        ),
      };
    default:
      return state;
  }
};

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  const addToCart = (item) => {
    const existingItem = state.cartItems.find(
      (cartItem) => cartItem.id === item.id
    );
    if (existingItem) {
      dispatch({ type: "INCREASE_QUANTITY", payload: item.id });
    } else {
      dispatch({ type: "ADD_TO_CART", payload: item });
    }
  };

  const removeFromCart = (itemId) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: itemId });
  };

  const increaseQuantity = (itemId) => {
    dispatch({ type: "INCREASE_QUANTITY", payload: itemId });
  };

  const decreaseQuantity = (itemId) => {
    const existingItem = state.cartItems.find(
      (cartItem) => cartItem.id === itemId
    );
    if (existingItem) {
      if (existingItem.quantity > 1) {
        dispatch({ type: "DECREASE_QUANTITY", payload: itemId });
      } else {
        dispatch({ type: "REMOVE_FROM_CART", payload: itemId });
      }
    }
  };

  const cartContextValue = {
    cartItems: state.cartItems,
    addToCart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
  };

  return (
    <CartContext.Provider value={cartContextValue}>
      {children}
    </CartContext.Provider>
  );
};
