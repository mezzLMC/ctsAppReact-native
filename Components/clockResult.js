import React from 'react';
import { TextInput, Text, View, StyleSheet, FlatList, TouchableOpacity, Alert } from 'react-native';
import { Appbar, Button } from 'react-native-paper';
import { render } from 'react-dom';
import ClockResultComponent from './clockResultComponent.js';

class ClockResult extends React.Component  {
    render(){
        return(
            <View>
                <FlatList data={this.props.data} />
            </View>
        )
    }
}

export default ClockResult