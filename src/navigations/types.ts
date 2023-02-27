import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import Item from '../models/Item';

export enum DrawerPages {
  BottomNavStack = 'Bottom Nav Screen',
  Search = 'Search',
  Favorites = 'Favorites',
  Cart = 'Cart',
}

export type DrawerParamsList = {
  [DrawerPages.BottomNavStack]: undefined;
  [DrawerPages.Search]: undefined;
  [DrawerPages.Favorites]: undefined;
  [DrawerPages.Cart]: undefined;
};

export type ProductDetailsParams = {
  product: Item;
};

export enum HomePages {
  Home = 'Home',
  ProductDetails = 'ProductDetails',
}

export type HomeParamList = {
  [HomePages.Home]: undefined;
  [HomePages.ProductDetails]: ProductDetailsParams;
};

export type ProductDetailsProps = RouteProp<
  HomeParamList,
  HomePages.ProductDetails
>;

export type ProductDetailsNavProps = StackNavigationProp<
  HomeParamList,
  HomePages.ProductDetails
>;

export type TabTwoParamList = {
  ShoppingCart: Item;
};

export type BottomTabParamList = {
  HomeTab: undefined;
  SearchTab: undefined;
  FavoritesTab: undefined;
  CartTab: undefined;
};
