import { useEffect, useState } from "react";
import { removeItemFromCart, store } from "../store/cartState";
import { ProductCardProps } from "../types/productCardProps";
import cartService from "../services/cartService";
import { OrderItems } from "../types/orderItems";

const useCart = () => {
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);
  const [cartItems, setCartItems] = useState(store.getState().items);
  const [finishRequestItemsToast, setFinishRequestItemsToast] = useState(false);
  const { saveUserItemRequest } = cartService();

  useEffect(() => {
    const unsubscribe = store.subscribe(() => {
      setCartItems(store.getState().items);
    });
    return unsubscribe;
  }, []);

  const handleCloseCart = () => {
    setIsCartOpen(false);
  };

  const handleRemoveItem = (item: ProductCardProps) => {
    store.dispatch(removeItemFromCart(item.id ?? 0));
  };

  const finishProductsRequest = (cartItems: ProductCardProps[]) => {
    let orderItems: OrderItems = {
      products: [],
      prices: [],
      qtdAddedToCart: [],
    };

    cartItems.map((items) => {
      orderItems.products.push(items.name ?? "");
      orderItems.prices.push(items.price ?? "");
      orderItems.qtdAddedToCart.push(items.qtdAddedToCart ?? 0);
    });

    saveUserItemRequest(orderItems);
    setFinishRequestItemsToast(true);
  };

  return {
    cartItems,
    isCartOpen,
    setIsCartOpen,
    handleCloseCart,
    handleRemoveItem,
    finishProductsRequest,
    finishRequestItemsToast,
    setFinishRequestItemsToast,
  };
};

export default useCart;
