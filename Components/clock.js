import React from 'react';
import { TextInput, Text, View, Button, StyleSheet } from 'react-native';
import { Appbar } from 'react-native-paper';

const style = StyleSheet.create({
    container: {
        backgroundColor: '#23232f',
        flex: 1,
    },
    body: {
        marginTop: 50,
    },
    arretInput:{
        borderBottomColor: "#69f0ae",
        borderBottomWidth: 2,
        marginLeft: 15,
        marginRight: 15,
        fontSize: 22.5,
        color: "#ffffff"
    },
    numInput: {
        marginTop: 50,
    }
})

class ClockView extends React.Component {

    render() {
        return (
            <View style={ style.container }>
                <Appbar.Header style= {{backgroundColor: '#23232f'}}>
                    <Appbar.Content title="horraires" />
                    <Appbar.Action icon="dots-vertical" />
                </Appbar.Header>
                <View style={style.body}>
                    <TextInput placeholder="nom de l'arrêt" style={style.arretInput} />
                    <TextInput placeholder="13" style={style.numInput} />
                    <TextInput placeholder="13"/>
                    <Button title="valider"/>
                </View>
            </View>

        )
    }
}

export default ClockView
