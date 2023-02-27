import React from 'react';
import {Image, Pressable, Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/AntDesign';
import CartItem from '../../models/CartItem';
import {HomePages, ProductDetailsNavProps} from '../../navigations/types';
import styles from './styles';
import Item from '../../models/Item';
import {useBottomSheet} from '@gorhom/bottom-sheet';

interface ShoppingCartProps {
  decreaseQuantity: (cartId: number) => void;
  increaseQuantity: (cartId: number) => void;
  cart: CartItem;
}

export default function ShoppingCart({
  decreaseQuantity,
  increaseQuantity,
  cart,
}: ShoppingCartProps) {
  const navigation = useNavigation<ProductDetailsNavProps>();
  const {close} = useBottomSheet();
  const decreasePress = () => {
    decreaseQuantity(cart.item_id);
  };
  const increasePress = () => {
    increaseQuantity(cart.item_id);
  };
  const onShowDetails = () => {
    close();
    const product: Item = {
      id: cart.item_id,
      name: cart.name,
      image: cart.image,
      price: cart.price,
    };
    navigation.navigate(HomePages.ProductDetails, {product});
  };

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Pressable
          onPress={onShowDetails}
          style={[styles.row, styles.fullWidth]}>
          <View style={styles.leftPanel}>
            <Image style={styles.photo} source={{uri: cart.image}} />
          </View>
          <View style={styles.rightPanel}>
            <View>
              <Text style={styles.title}>{cart.name}</Text>
            </View>
            <View>
              <Text style={styles.description}>{cart.description}</Text>
            </View>
            <View>
              <Text style={styles.styleText}>{cart.style}</Text>
            </View>
          </View>
        </Pressable>
      </View>
      <View style={[styles.row, styles.separator]}>
        <View style={[styles.row, styles.leftPanel]}>
          <Pressable onPress={decreasePress}>
            <Icon
              name="minussquare"
              size={32}
              color="black"
              style={styles.removePaddings}
            />
          </Pressable>
          <View style={[styles.quantityPanel, styles.blackBox]}>
            <Text style={styles.description}>{cart.quantity}</Text>
          </View>
          <Pressable onPress={increasePress}>
            <Icon
              name="plussquare"
              size={32}
              color="black"
              style={styles.removePaddings}
            />
          </Pressable>
        </View>
        <View style={styles.rightPanel}>
          <Text style={styles.price}>{`£${cart.price}`}</Text>
        </View>
      </View>
    </View>
  );
}
