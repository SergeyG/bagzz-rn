import React from 'react';
import {Image, Pressable, Text, View} from 'react-native';
import {useShoppingCartProvider} from '../../contexts/ShoppingCartProvider';
import {ProductDetailsProps} from '../../navigations/types';
import styles from './styles';

type IProps = {
  route: ProductDetailsProps;
};

export default function ProductDetails({route}: IProps) {
  const {addProduct} = useShoppingCartProvider();

  const onAddToCart = async () => {
    addProduct(route?.params?.product);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          style={styles.photo}
          source={{uri: route?.params?.product.image}}
        />
        <View style={styles.rightPanel}>
          <View>
            <Text style={styles.title}>{route?.params?.product.name}</Text>
          </View>
          <View style={styles.separator10} />
          <View>
            <Text style={styles.description}>Wallet with chain</Text>
          </View>
          <View style={styles.separator20} />
          <Text style={styles.title}>{`£${route?.params?.product.price}`}</Text>
        </View>
      </View>
      <View style={styles.separator10} />
      <Pressable onPress={onAddToCart}>
        <View style={styles.shopNowPanel}>
          <Text style={styles.shopNowButton}>SHOP NOW</Text>
        </View>
      </Pressable>
    </View>
  );
}
