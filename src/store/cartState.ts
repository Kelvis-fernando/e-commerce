import { ProductCardProps } from "./../types/productCardProps";
import { createStore, Action } from "@reduxjs/toolkit";

interface CartState {
  items: ProductCardProps[];
}

interface CartAction extends Action {
  type: string;
  payload?: ProductCardProps | number;
}

const CART_ITEM = "CART_ITEM";
const REMOVE_ITEM = "REMOVE_ITEM";

export const removeItemFromCart = (itemId: number): CartAction => {
  return {
    type: REMOVE_ITEM,
    payload: itemId,
  };
};

export const addItemToCart = (item?: ProductCardProps): CartAction => {
  return {
    type: CART_ITEM,
    payload: item,
  };
};

const initialState: CartState = {
  items: [],
};

const reducer = (prevState: CartState = initialState, action: CartAction) => {
  switch (action.type) {
    case CART_ITEM:
      return {
        ...prevState,
        items: [...prevState.items, action.payload as ProductCardProps],
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
