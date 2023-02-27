import {API_ENDPOINTS} from '../constants/Endpoints';
import HttpApi from '../http/HttpApi';
import CartItem from '../models/CartItem';
import Item from '../models/Item';

const getProducts = async (): Promise<Item[]> => {
  const response = await new HttpApi().get<Item[]>(API_ENDPOINTS.GetItems);
  return response.data;
};

const getShoppingCart = async (): Promise<CartItem[]> => {
  const response = await new HttpApi().get<CartItem[]>(
    API_ENDPOINTS.ShoppingCart,
  );
  return response.data;
};

const addToShoppingCart = async (
  id: number,
  quantity: number,
): Promise<void> => {
  const response = await new HttpApi().post(
    `${API_ENDPOINTS.ShoppingCart}?id=${id}&quantity=${quantity}`,
    {},
  );
  return response.data;
};

const updateCartItem = async (id: number, quantity: number): Promise<void> => {
  const response = await new HttpApi().put(
    `${API_ENDPOINTS.ShoppingCart}/${id}?quantity=${quantity}`,
    {},
  );
  return response.data;
};

const deleteFromShoppingCart = async (id: number): Promise<void> => {
  const response = await new HttpApi().delete(
    `${API_ENDPOINTS.ShoppingCart}/${id}`,
  );
  return response.data;
};

export {
  addToShoppingCart,
  deleteFromShoppingCart,
  getShoppingCart,
  getProducts,
  updateCartItem,
};
