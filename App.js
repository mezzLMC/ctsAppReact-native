import React from 'react';
import * as Font from 'expo-font';
import { StyleSheet, Text, View, Button, ColorPropType } from 'react-native';
import ClockView from "./Components/clock.js"
import HomeView from "./Components/home.js"
import PathsView from "./Components/paths.js"
import {createAppContainer} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack'
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';



const style = StyleSheet.create({
  tabNavigatorIcons: {
    marginTop: -4,
    marginLeft: -10,
    fontSize: 40,
    color: '#FFFFFF'
  }
});

const RootStack = createMaterialBottomTabNavigator({
    Favoris: {
      screen: HomeView,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (<View><Text style={ style.tabNavigatorIcons }>{'\u{e903}'}</Text></View>),
      }
    },
    horaires: {
      screen: ClockView,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (<View><Text style={ style.tabNavigatorIcons }>{'\u{e903}'}</Text></View>),
    }
    },
    path: {
     screen: PathsView,
     navigationOptions: {
      tabBarIcon: ({ tintColor }) => (<View><Text style={ style.tabNavigatorIcons }>{'\u{e903}'}</Text></View>),      
     }
    }
    },
    {
      barStyle: { 
        backgroundColor: '#23232f',
        marginTop: 0,
      
      },
    }
  
  
  );

const App = createAppContainer(RootStack);

export default App;
