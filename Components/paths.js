import React from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import { Appbar } from 'react-native-paper';

const style = StyleSheet.create({
    container: {
        backgroundColor: '#23232f',
        flex: 1,
    }
})

class PathsView extends React.Component {
    render(){
        return (
            <View style={ style.container }>
                <Appbar.Header style= {{backgroundColor: '#23232f'}}>
                    <Appbar.Content title="trajets" subtitle="bus et trams" />
                    <Appbar.Action icon="dots-vertical" />
                </Appbar.Header>
                
            </View>
        )
    }
}

export default PathsView
