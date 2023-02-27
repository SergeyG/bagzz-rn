import React, {useEffect, useState} from 'react';
import {newsFeed} from '../data/dataArrays';
import Item from '../models/Item';
import News from '../models/News';
import {getProducts} from '../services/ShopService';

export type DataContextType = {
  news: News[];
  products: Item[];
};

const DataContext = React.createContext<DataContextType | undefined>(undefined);
const useDataProvider = () => {
  const contextIsDefined = React.useContext(DataContext);
  if (!contextIsDefined) {
    throw new Error('useDataProvider must be used within a Provider');
  }

  return contextIsDefined;
};

const DataProvider = ({children}: {children: React.ReactNode}) => {
  const [products, setProducts] = useState<Item[]>([]);
  useEffect(() => {
    getProducts().then(items => setProducts(items));
  }, []);

  return (
    <DataContext.Provider value={{news: newsFeed, products}}>
      {children}
    </DataContext.Provider>
  );
};

export {useDataProvider, DataProvider};
