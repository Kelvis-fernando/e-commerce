import { createStore } from "@reduxjs/toolkit";

const CART_ITEM = "CART_ITEM";
const REMOVE_ITEM = "REMOVE_ITEM";

export const removeItemFromCart = (itemId: any) => {
  return {
    type: REMOVE_ITEM,
    info: "remove item from cart",
    payload: itemId,
  };
};

export const addItemToCart = (item?: any) => {
  return {
    type: CART_ITEM,
    info: "add items to cart",
    payload: item,
  };
};

interface CartState {
  [x: string]: any;
  items: any[];
}

const initialState: CartState = {
  items: [],
};

const reducer = (prevState: CartState = initialState, action: any) => {
  switch (action.type) {
    case CART_ITEM:
      return {
        ...prevState,
        items: [...prevState.items, action.payload],
      };
    case REMOVE_ITEM:
      return {
        ...prevState,
        items: prevState.items.filter((item) => item.id !== action.payload),
      };
    default:
      return prevState;
  }
};

// store
export const store = createStore(reducer);
