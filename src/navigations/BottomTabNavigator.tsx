import React, {useCallback} from 'react';
import {Image, StyleSheet, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  DrawerActions,
  NavigationProp,
  ParamListBase,
} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {useBottomSheet} from '../contexts/BottomSheetProvider';
import {
  BottomTabParamList,
  HomePages,
  HomeParamList,
  TabTwoParamList,
} from './types';
import MenuImage from '../components/MenuImage/MenuImage';
import ShoppingCartList from '../components/ShoppingCartList/ShoppingCartList';
import {useShoppingCartProvider} from '../contexts/ShoppingCartProvider';
import HomeScreen from '../screens/Home/HomeScreen';
import ProductDetails from '../screens/ProductDetails/ProductDetails';
import * as Colors from '../constants/Colors';

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const bottomSheet = useBottomSheet();
  const {totalQuantity} = useShoppingCartProvider();
  const handlePresentModalPress = useCallback(() => {
    bottomSheet.expand({
      children: <ShoppingCartList />,
      snapPoints: ['50%', '75%', '100%'],
    });
  }, [bottomSheet]);

  return (
    <BottomTab.Navigator
      initialRouteName="HomeTab"
      screenOptions={{
        headerShown: false,
        lazy: false,
        tabBarActiveTintColor: Colors.activeTintColor,
        tabBarInactiveTintColor: Colors.inactiveTintColor,
        tabBarShowLabel: false,
        tabBarStyle: {
          borderRadius: 35,
          borderTopWidth: 0,
          marginBottom: 10,
          marginLeft: 50,
          marginRight: 50,
          paddingBottom: 5,
          opacity: 1,
          paddingHorizontal: 20,
          position: 'absolute',
        },
      }}>
      <BottomTab.Screen
        name="HomeTab"
        component={HomeNavigator}
        options={{
          tabBarIcon: ({color}) => <TabBarIcon name="home" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="SearchTab"
        component={TabTwoNavigator}
        options={{
          tabBarIcon: ({color}) => <TabBarIcon name="search" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="FavoritesTab"
        component={TabTwoNavigator}
        options={{
          tabBarIcon: ({color}) => <TabBarIcon name="heart" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="CartTab"
        component={TabTwoNavigator}
        options={{
          tabBarIcon: ({color}) => <TabBarIcon name="basket" color={color} />,
          tabBarBadge: totalQuantity || undefined,
          tabBarBadgeStyle: {
            backgroundColor: 'black',
            color: 'white',
          },
        }}
        listeners={() => ({
          tabPress: e => {
            e.preventDefault();
            handlePresentModalPress();
          },
        })}
      />
    </BottomTab.Navigator>
  );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: {name: string; color: string}) {
  return <Ionicons size={30} style={styles.icon} {...props} />;
}

function Drawer(navigation: NavigationProp<ParamListBase>) {
  return () => (
    <MenuImage
      onPress={() => {
        navigation.dispatch(DrawerActions.openDrawer());
      }}
    />
  );
}

function Avatar() {
  return (
    <Image source={require('../../assets/avatar.jpg')} style={styles.avatar} />
  );
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const HomeStack = createStackNavigator<HomeParamList>();

function HomeNavigator({
  navigation,
}: {
  navigation: NavigationProp<ParamListBase>;
}) {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name={HomePages.Home}
        component={HomeScreen}
        options={{
          headerTitle: 'bagzz',
          headerShadowVisible: false,
          headerLeft: Drawer(navigation),
          headerRight: Avatar,
        }}
      />
      <HomeStack.Screen
        name={HomePages.ProductDetails}
        component={ProductDetails}
        options={{
          headerTitle: 'bagzz',
          headerShadowVisible: false,
          headerLeft: Drawer(navigation),
          headerRight: Avatar,
        }}
      />
    </HomeStack.Navigator>
  );
}

const TabTwoStack = createStackNavigator<TabTwoParamList>();

function EmptyScreen() {
  return <View />;
}

function TabTwoNavigator({
  navigation,
}: {
  navigation: NavigationProp<ParamListBase>;
}) {
  return (
    <TabTwoStack.Navigator>
      <TabTwoStack.Screen
        name="ShoppingCart"
        component={EmptyScreen}
        options={{
          headerTitle: 'bagzz',
          headerShadowVisible: false,
          headerLeft: Drawer(navigation),
          headerRight: Avatar,
        }}
      />
    </TabTwoStack.Navigator>
  );
}

const styles = StyleSheet.create({
  avatar: {
    borderRadius: 32 / 2,
    height: 32,
    marginRight: 10,
    overflow: 'hidden',
    width: 32,
  },
  icon: {
    marginBottom: -5,
  },
});
