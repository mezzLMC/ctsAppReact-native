import React from 'react';
import * as Font from 'expo-font';
//import { Icon } from 'react-native-elements'
import { StyleSheet, Text, View, Button, ColorPropType } from 'react-native';
import ClockView from "./Components/clock.js"
import HomeView from "./Components/home.js"
import PathsView from "./Components/paths.js"
import { AppLoading } from 'expo'
import {createAppContainer} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack'
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { createIconSet } from 'react-native-vector-icons';
import { createIconSetFromFontello } from 'react-native-vector-icons';
import fontelloConfig from "./config.json"


const Icon = createIconSetFromFontello(fontelloConfig);
const style = StyleSheet.create({
  tabNavigatorIcons: {
    marginTop: -4,
    marginLeft: -10,
    fontSize: 40,
    color: '#FFFFFF',
    fontFamily: "tabNavigatorFont"
  }
});

const RootStack = createMaterialBottomTabNavigator({
    Favoris: {
      screen: HomeView,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (<Icon name='star' size={25} color={"#ffffff"} />),
      }
    },
    horaires: {
      screen: ClockView,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (<Icon name='clock-solid' size={24.5} color={"#ffffff"} />),
    }
    },
    path: {
     screen: PathsView,
     navigationOptions: {
      tabBarIcon: ({ tintColor }) => (<Icon name='code-branch' size={25} color={"#ffffff"} />),
    }
    }
    },
    {
      initialRouteName: "Favoris",
      shifting: true,
      barStyle: { 
        backgroundColor: '#23232f',
        marginTop: 0,
        //borderTopColor: "#ffffff",
        //borderTopWidth: 2,
        
      },
    }
  );
// #23232f
const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
  
  state = {
    isReady: false,
  };
  

  AppContainer = createAppContainer(RootStack);

  async _loadAssetsAsync(){
    await Font.loadAsync({
      'tabiconfont': require('./assets/fonts/tabiconfont.ttf'),
    });
  }

  
  render() {
    if (!this.state.isReady){
      return (
        <AppLoading
          startAsync={this._loadAssetsAsync}
          onFinish={() => this.setState({ isReady: true })}
          onError={console.warn}
        />
      );
    }

    if(this.state.isReady==true){
    return (
      <this.AppContainer/>
    );
  }
}

}