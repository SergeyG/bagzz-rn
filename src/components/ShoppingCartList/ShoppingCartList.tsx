import React, {useCallback} from 'react';
import {View} from 'react-native';
import {BottomSheetFlatList} from '@gorhom/bottom-sheet';
import {useShoppingCartProvider} from '../../contexts/ShoppingCartProvider';
import ShoppingCart from '../ShoppingCart/ShoppingCart';
import CartItem from '../../models/CartItem';
import styles from './styles';

export default function ShoppingCartSheet() {
  const {decreaseQuantity, increaseQuantity, carts} = useShoppingCartProvider();
  const renderItem = useCallback(
    ({item}: {item: CartItem}) => (
      <ShoppingCart
        cart={item}
        decreaseQuantity={decreaseQuantity}
        increaseQuantity={increaseQuantity}
      />
    ),
    [decreaseQuantity, increaseQuantity],
  );
  const renderSeparator = () => {
    return <View style={styles.separator} />;
  };
  // renders
  return (
    <BottomSheetFlatList
      data={carts}
      keyExtractor={i => `${i.item_id}`}
      renderItem={renderItem}
      ItemSeparatorComponent={renderSeparator}
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
    />
  );
}
