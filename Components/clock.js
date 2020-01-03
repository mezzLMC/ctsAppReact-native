import React from 'react';
import { TextInput, Text, View, Button, StyleSheet } from 'react-native';
import { Appbar } from 'react-native-paper';

const style = StyleSheet.create({
    container: {
        backgroundColor: '#23232f',
        flex: 1,
    },
    body: {
        marginTop: 70,
    },
    arretInput:{
        borderBottomColor: "#69f0ae",
        borderBottomWidth: 3,
        marginLeft: 15,
        marginRight: 15,
        fontSize: 22.5,
        color: "#ffffff"
    },
    numInputView: {
        marginTop: 70,
        flexDirection: 'row',
        marginLeft: 140,
    },
    numInput: {
        fontSize: 80,
        height: 90,
        width: 90,
        borderBottomColor: "#69f0ae",
        borderBottomWidth: 4,
        borderBottomStartRadius: 5,
        borderBottomEndRadius: 3,
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
                    <View style={style.numInputView}>
                        <TextInput placeholder="13" style={style.numInput} />
                        <TextInput placeholder="13" style={[style.numInput,{marginLeft: 20,}]}/>
                    </View>
                    <Button title="valider"/>
                </View>
            </View>

        )
    }
}

export default ClockView
