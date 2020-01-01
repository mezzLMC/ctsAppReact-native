import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import * as Font from 'expo-font';

class HomeView extends React.Component {
    componentDidMount() {
    Font.loadAsync({
      'tabNavigatorFont': require('./tabNavigatorFont.ttf'),
    });
   }

    render(){
        return (
            <Text> this is home page with favorites Stopoints schedules </Text>
        )
    }
}

export default HomeView
