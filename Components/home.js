import React from 'react';
import clockResultComponent from './clockResultComponent.js'
import { StyleSheet, Text, View, Button, Image,ScrollView,FlatList, AsyncStorage } from 'react-native';
import { Appbar } from 'react-native-paper';
import ClockResultComponent from './clockResultComponent.js';

const style = StyleSheet.create({
    container: {
        backgroundColor: '#23232f',
        flex: 1,
        color: "#ffffff"
    },
    principal:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    noFavorisView: {
        height: 50,
        width: 250,
        color: "#ffffff",
        
    },
    noFavorisText:{
        color: "#ffffff",
        textAlign: "center"
    }
})


class HomeView extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            noFavoris: true,
        }
        const favorisList = AsyncStorage.getItem('favoris')
        if (favorisList !== null) {
            this.state.noFavoris = false
          }
    }

    _f(){
        AsyncStorage.getItem('favoris').then(response => console.log(response))
    }
    render(){
        return (
        <View style={style.container}>
        <Appbar.Header style= {{backgroundColor: '#23232f'}}>
            <Appbar.Content title="favoris" subtitle="dans l'heure suivante"/>
            <Appbar.Action icon="magnify" onPress={()=> this._f()} />
            <Appbar.Action icon="dots-vertical" />
        </Appbar.Header>
        <View style={style.principal}>
        <View style={style.noFavorisView}>
            <Text style={[style.noFavorisText,{fontSize: 20}]}>pas de favoris!</Text>
            <Text style={[style.noFavorisText]}>ajouter des arrêts en favoris en recherchant ou dans l'onglet "horraire"</Text>
            </View>
        </View>
        </View>
        )
    }
}

export default HomeView

        
