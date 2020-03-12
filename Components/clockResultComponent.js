import React from 'react';
import { StyleSheet, Text, View, Button, Image,FlatList,TouchableOpacity,TouchableWithoutFeedback,ToastAndroid } from 'react-native';
import {Menu} from 'react-native-paper'

const clockResultStyle = {
    container: {
        height: 150,
        backgroundColor: '#1D1D27',
        borderColor: "#17171E",
        borderRadius: 25,
        borderWidth: 1.5,
        marginTop: 30,
        marginLeft: 15,
        marginRight: 15,
        elevation: 15

    },
    title: {
        color: "#F9F9F9",
        fontSize: 20,
        marginLeft: 30,
        marginTop: 10,
    },
    image: {
        marginLeft: 10,
        marginTop: 10,
        borderRadius: 10,
        borderColor: "#17171E",
        borderWidth: 2,
        height: 50,

    },
    arrivalList: {
        color: "#D7D7D9",
        marginTop: 5,
        fontSize: 20,
        flexShrink: 1,
        marginLeft: 15,
        flex: 1, 
        flexWrap: 'wrap',
    },
    twoListsContainer:{
        marginLeft: 20,
        marginTop: 10,
        flexDirection: "column"
        
    }
}
  


    class ClockResultComponent extends React.Component{
        constructor(props){
            super(props)
            this.state={
                list1 : this.props.list,
                list2: [],
                listActivity: false
            }
            
            if(this.props.list[3]!=undefined){
                    this.state.list1 = [this.props.list[0],this.props.list[1],this.props.list[2]]
                    this.state.list2 = this.props.list.slice(3)
                    this.state.listActivity = true
            }        
        }
        name = this.props.name.toUpperCase()

        //imagePath  = "C:/Users/mazouz/Desktop/ctsAppReact-native/assets/res/ligne"+ this.image +".png"
        
        render(){
            return(
                
                <View style={clockResultStyle.container}>
                    <Text style={clockResultStyle.title}>{this.name}</Text>
                    <View style={{flexDirection: "row",height:300,}}>
                        <Image style={clockResultStyle.image} source={this.props.image} />
                        <FlatList style={{flexDirection: "row",}}
                                data={this.state.list1} 
                                renderItem={({item}) => <Text style={clockResultStyle.arrivalList}>{item}</Text>}
                                keyExtractor={(item, index) => index.toString()}    
                                listKey={this._keyExtractor}
                            />
                        <FlatList style={{flexDirection: "row",marginTop: 35,marginLeft: -193}}
                                data={this.state.list2} 
                                renderItem={({item}) => <Text style={clockResultStyle.arrivalList}>{item}</Text>}
                                keyExtractor={(item, index) => index.toString()}    
                                listKey={(item, index) => index.toString()}
                            />
                    </View>
                    
                </View>
            )
        }
    }

export default ClockResultComponent

