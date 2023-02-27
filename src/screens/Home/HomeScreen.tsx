import React from 'react';
import {FlatList, View} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';
import NewsFeed from '../../components/NewsFeed/NewsFeed';
import ProductItem from '../../components/ProductItem/ProductItem';
import {HomePages} from '../../navigations/types';
import styles from './styles';
import {useDataProvider} from '../../contexts/DataProvider';
import {useShoppingCartProvider} from '../../contexts/ShoppingCartProvider';
import Item from '../../models/Item';

type HomeProps = StackScreenProps<any, any>;

export default function HomeScreen(props: HomeProps) {
  const {navigation} = props;
  const {news, products} = useDataProvider();
  const {addProduct} = useShoppingCartProvider();

  const onAddToCart = (item: Item) => {
    addProduct(item);
  };

  const onShowDetails = (product: Item) => {
    navigation.navigate(HomePages.ProductDetails, {product});
  };

  const renderHeader = () => <NewsFeed news={news} />;

  const renderFooter = () => <View style={styles.footer} />;

  const renderItem = ({item}: {item: Item}) => (
    <ProductItem
      onAddToCart={() => onAddToCart(item)}
      onShowDetails={() => onShowDetails(item)}
      product={item}
      selected={false}
    />
  );

  return (
    <View style={styles.container}>
      <FlatList
        showsVerticalScrollIndicator={false}
        numColumns={2}
        data={products}
        ListHeaderComponent={renderHeader}
        ListFooterComponent={renderFooter}
        renderItem={renderItem}
        keyExtractor={item => `${item.id}`}
      />
    </View>
  );
}
