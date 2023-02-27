import React from 'react';
import {StyleSheet} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {BottomSheetProvider} from '../contexts/BottomSheetProvider';
import DrawerContainer from '../screens/DrawerContainer/DrawerContainer';
import BottomTabNavigator from './BottomTabNavigator';
import {DataProvider} from '../contexts/DataProvider';
import {ShoppingCartProvider} from '../contexts/ShoppingCartProvider';

const Stack = createStackNavigator();

function MainNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Root" component={BottomTabNavigator} />
    </Stack.Navigator>
  );
}

const Drawer = createDrawerNavigator();

function DrawerStack() {
  return (
    <Drawer.Navigator
      initialRouteName="Main"
      screenOptions={{
        drawerPosition: 'left',
        drawerStyle: {
          width: 250,
        },
        headerShown: false,
      }}
      drawerContent={({navigation}) => (
        <DrawerContainer navigation={navigation} />
      )}>
      <Drawer.Screen name="Main" component={MainNavigator} />
    </Drawer.Navigator>
  );
}

export default function AppContainer() {
  return (
    <GestureHandlerRootView style={styles.rootContainer}>
      <DataProvider>
        <NavigationContainer>
          <ShoppingCartProvider>
            <BottomSheetProvider>
              <DrawerStack />
            </BottomSheetProvider>
          </ShoppingCartProvider>
        </NavigationContainer>
      </DataProvider>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
});
