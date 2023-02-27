import React, {useEffect, useState} from 'react';
import CartItem from '../models/CartItem';
import Item from '../models/Item';
import {
  addToShoppingCart,
  deleteFromShoppingCart,
  getShoppingCart,
  updateCartItem,
} from '../services/ShopService';

export type ShoppingCartContextType = {
  addProduct: (product: Item) => void;
  increaseQuantity: (itemId: number) => void;
  decreaseQuantity: (itemId: number) => void;
  carts: CartItem[];
  totalQuantity: number;
};

const ShoppingCartContext = React.createContext<
  ShoppingCartContextType | undefined
>(undefined);
const useShoppingCartProvider = () => {
  const contextIsDefined = React.useContext(ShoppingCartContext);
  if (!contextIsDefined) {
    throw new Error('useShoppingCartProvider must be used within a Provider');
  }

  return contextIsDefined;
};

const ShoppingCartProvider = ({children}: {children: React.ReactNode}) => {
  const [carts, setCarts] = useState<Map<number, CartItem>>(
    new Map<number, CartItem>(),
  );
  const [totalQuantity, setTotalQuantity] = useState<number>(0);
  useEffect(() => {
    getShoppingCart().then(data =>
      setCarts(new Map(data.map(obj => [obj.item_id, obj]))),
    );
  }, []);
  useEffect(() => {
    const quantity = [...carts.values()].reduce(
      (total, cart) => total + cart.quantity,
      0,
    );
    setTotalQuantity(quantity);
  }, [carts]);
  const addProduct = async (product: Item) => {
    const cart: CartItem = carts.get(product.id) ?? {
      description: 'Wallet with chain',
      quantity: 0,
      image: product.image,
      price: product.price,
      item_id: product.id,
      name: product.name,
      style: '#36252 OYKOG 1000',
    };
    cart.quantity += 1;
    carts.set(product.id, cart);
    if (cart.quantity === 1) {
      await addToShoppingCart(product.id, cart.quantity);
    } else {
      await updateCartItem(product.id, cart.quantity);
    }
    setCarts(new Map<number, CartItem>(carts));
  };
  const increase = async (itemId: number) => {
    const cart: CartItem | undefined = carts.get(itemId);
    if (!cart) {
      return;
    }
    cart.quantity += 1;
    await updateCartItem(itemId, cart.quantity);
    setCarts(new Map<number, CartItem>(carts));
  };
  const decrease = async (itemId: number) => {
    const cart: CartItem | undefined = carts.get(itemId);
    if (!cart) {
      return;
    }
    cart.quantity -= 1;
    if (cart.quantity === 0) {
      carts.delete(itemId);
      await deleteFromShoppingCart(itemId);
    } else {
      await updateCartItem(itemId, cart.quantity);
    }
    setCarts(new Map<number, CartItem>(carts));
  };

  return (
    <ShoppingCartContext.Provider
      value={{
        addProduct,
        carts: [...carts.values()],
        decreaseQuantity: decrease,
        increaseQuantity: increase,
        totalQuantity,
      }}>
      {children}
    </ShoppingCartContext.Provider>
  );
};

export {useShoppingCartProvider, ShoppingCartProvider};
