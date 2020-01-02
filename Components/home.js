import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { Appbar } from 'react-native-paper';

const style = StyleSheet.create({
    container: {
        backgroundColor: '#23232f',
        flex: 1,
    }
})
class HomeView extends React.Component {
    
    render(){
        return (
        <View style={style.container}>
        <Appbar.Header style= {{backgroundColor: '#23232f'}}>
            <Appbar.Content title="favoris" subtitle="dans l'heure suivante"/>
            <Appbar.Action icon="magnify"/>
            <Appbar.Action icon="dots-vertical" />
        </Appbar.Header>
        <Text> this is home page with favorites Stopoints schedules </Text>
        </View>
        )
    }
}

export default HomeView
