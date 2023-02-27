import React from 'react';
import {Image, Pressable, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Item from '../../models/Item';
import styles from './styles';

type ProductItemParams = {
  onAddToCart: () => void;
  onShowDetails: () => void;
  product: Item;
  selected: boolean;
};

export default function ProductItem({
  onAddToCart,
  onShowDetails,
  product,
  selected,
}: ProductItemParams) {
  return (
    <Pressable onPress={onShowDetails}>
      <View style={styles.card}>
        <Image style={styles.photo} source={{uri: product.image}} />
        <Icon
          name={selected ? 'favorite' : 'favorite-border'}
          size={24}
          color="black"
          style={styles.favoriteIcon}
        />
        <Text style={styles.title}>{product.name}</Text>
        <Pressable onPress={onAddToCart}>
          <View style={styles.shopNowPanel}>
            <Text style={styles.shopNowButton}>SHOP NOW</Text>
          </View>
        </Pressable>
      </View>
    </Pressable>
  );
}
