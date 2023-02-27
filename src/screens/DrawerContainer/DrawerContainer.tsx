import React from 'react';
import {View} from 'react-native';
import {
  DrawerActions,
  NavigationProp,
  ParamListBase,
} from '@react-navigation/native';
import styles from './styles';
import MenuButton from '../../components/MenuButton/MenuButton';
import {HomePages} from '../../navigations/types';

type IProp = {
  navigation: NavigationProp<ParamListBase>;
};

export default function DrawerContainer({navigation}: IProp) {
  return (
    <View style={styles.content}>
      <View style={styles.container}>
        <MenuButton
          title="HOME"
          source={require('../../../assets/icons/home.png')}
          onPress={() => {
            navigation.navigate(HomePages.Home);
            navigation.dispatch(DrawerActions.closeDrawer());
          }}
        />
        <MenuButton
          title="SEARCH"
          source={require('../../../assets/icons/search.png')}
          onPress={() => {
            navigation.navigate('Search');
            navigation.dispatch(DrawerActions.closeDrawer());
          }}
        />
      </View>
    </View>
  );
}
