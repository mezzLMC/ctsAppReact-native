import React from 'react';
import * as Font from 'expo-font';
import { StyleSheet, Text, View, Button } from 'react-native';
import ClockView from "./Components/clock.js"
import HomeView from "./Components/home.js"
import PathsView from "./Components/paths.js"
import {createAppContainer} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack'
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';


const RootStack = createMaterialBottomTabNavigator({
    Favoris: {
      screen: ClockView
    },
    horaires: {
      screen: HomeView
    },
    chemins: {
     screen: PathsView
    }
  });

const App = createAppContainer(RootStack);

export default App;
