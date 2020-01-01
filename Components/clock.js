import React from 'react';
import { TextInput, Text, View, Button } from 'react-native';

class ClockView extends React.Component {
    render() {
        return (
            <View style={ {marginTop :20} }>
                <TextInput placeholder="nom de l'arrêt"/>
                <TextInput placeholder="13"/>
                <TextInput placeholder="13"/>
                <Button title="valider"/>
            </View>

        )
    }
}

export default ClockView
