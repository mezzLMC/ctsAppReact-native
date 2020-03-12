import React from 'react';
import { TextInput, Text, View, StyleSheet, FlatList, TouchableOpacity, Alert, ToastAndroid, AsyncStorage } from 'react-native';
import { Appbar, Button } from 'react-native-paper';
import ClockResult from "./clockResult.js"
import ClockResultComponent from './clockResultComponent.js';
import stopNames from "./StopNames.json"
import stopLines from "./StopLines.json"


let stopNamesDataList = []
let finalObj = {}
const imageList = {
    '10' : require('../assets/res/ligne10.png'),
'12' : require('../assets/res/ligne12.png'),
'13' : require('../assets/res/ligne13.png'),
'14' : require('../assets/res/ligne14.png'),
'15' : require('../assets/res/ligne15.png'),
'15a' : require('../assets/res/ligne15a.png'),
'17' : require('../assets/res/ligne17.png'),
'19' : require('../assets/res/ligne19.png'),
'2' : require('./ligne2.png'),
'21' : require('../assets/res/ligne21.png'),
'22' : require('../assets/res/ligne22.png'),
'24' : require('../assets/res/ligne24.png'),
'27' : require('../assets/res/ligne27.png'),
'29' : require('../assets/res/ligne29.png'),
'30' : require('../assets/res/ligne30.png'),
'31' : require('../assets/res/ligne31.png'),
'4' : require('../assets/res/ligne4.png'),
'40' : require('../assets/res/ligne40.png'),
'41' : require('../assets/res/ligne41.png'),
'42' : require('../assets/res/ligne42.png'),
'43' : require('../assets/res/ligne43.png'),
'44' : require('../assets/res/ligne44.png'),
'4a' : require('../assets/res/ligne4a.png'),
'50' : require('../assets/res/ligne50.png'),
'50a' : require('../assets/res/ligne50a.png'),
'57' : require('../assets/res/ligne57.png'),
'6' : require('../assets/res/ligne6.png'),
'60' : require('../assets/res/ligne60.png'),
'62' : require('../assets/res/ligne62.png'),
'63' : require('../assets/res/ligne63.png'),
'67' : require('../assets/res/ligne67.png'),
'6a' : require('../assets/res/ligne6a.png'),
'6b' : require('../assets/res/ligne6b.png'),
'70' : require('../assets/res/ligne70.png'),
'71' : require('../assets/res/ligne71.png'),
'71a' : require('../assets/res/ligne71a.png'),
'72' : require('../assets/res/ligne72.png'),
'72a' : require('../assets/res/ligne72a.png'),
'73' : require('../assets/res/ligne73.png'),
'74' : require('../assets/res/ligne74.png'),
'75' : require('../assets/res/ligne75.png'),
'76' : require('../assets/res/ligne76.png'),
'77' : require('../assets/res/ligne77.png'),
'a' : require('../assets/res/lignea.png'),
'b' : require('../assets/res/ligneb.png'),
'c' : require('../assets/res/lignec.png'),
'd' : require('../assets/res/ligned.png'),
'e' : require('../assets/res/lignee.png'),
'f' : require('../assets/res/lignef.png'),
'g' : require('../assets/res/ligneg.png'),
'hibus' : require('../assets/res/lignehibus.png'),
'l1' : require('../assets/res/lignel1.png'),
'l3' : require('../assets/res/lignel3.png'),
'l6' : require('../assets/res/lignel6.png'),
'missing' : require('../assets/res/lignemissing.png'),
'taxibus' : require('../assets/res/lignetaxibus.png'),
  } 
let finalObj3 = []

const token = "14df45e6-40b1-4d94-bce2-0535fcdb1c42";
const proxyurl = "https://cors-anywhere.herokuapp.com/";
let headers = new Headers();
//let favoris = AsyncStorage.setItem("favoris", {})
headers.append("Content-Type", "application/json");
headers.append("Accept", "application/json");
headers.append("Access-Control-Allow-Origin", "http://localhost");
headers.append("Access-Control-Allow-Credentials", "true");
headers.append("GET", "POST", "OPTIONS");
headers.append("Authorization", "Basic " +"MTRkZjQ1ZTYtNDBiMS00ZDk0LWJjZTItMDUzNWZjZGIxYzQyOnBhc3N3b3Jk");

let cts = {
	method: "GET",
	headers: headers,
	mode: "cors"
};
const style = {
    container: {
        backgroundColor: '#23232f',
        flex: 1,
    },
    body: {
        
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
        marginLeft: 0,
        justifyContent: 'center',
    },
    numInput: {
        color: "#ffffff",
        fontSize: 80,
        height: 90,
        width: 90,
        borderBottomColor: "#69f0ae",
        borderBottomWidth: 4,
        borderBottomStartRadius: 3,
        borderBottomEndRadius: 3,
    },
    searrchResultButton:{
        ligne1:{
            color:"#ffffff",
            fontSize: 25,
            marginTop: 10,
            marginLeft: 15,
            
        },
        ligne2:{
            color:"#C0C0C0",
            fontSize: 22.5,
            marginLeft: 15,
        }
    },
    validerBut:{
            justifyContent: 'center',
            color: "#ffffff",
            marginTop: 50,
            marginLeft: 110,
            width: 260,
            borderRadius: 50,
            backgroundColor: "#69f0ae",
            elevation: 15
    }
}

let searchResultStyle = {
    marginTop: 10,
}
class ClockView extends React.Component {

    

    constructor(props){
        
        super(props)
        this.a = React.createRef()
        this.date = new Date()
        this.jour = this.date.getDate()
        this.mois = this.date.getMonth() + 1;
        this.année = this.date.getFullYear()
        if(this.date.getHours()!=0){
            this.hourNow = String(this.date.getHours())
        }
        else{
            this.hourNow = "00"
        }
        this.minuteNow = "0"+String(this.date.getMinutes())
        this.minuteNow = this.minuteNow[this.minuteNow.length-2]+ this.minuteNow[this.minuteNow.length-1] 
        this.hourNow = "0"+String(this.date.getHours())
        this.hourNow = this.hourNow[this.hourNow.length-2]+ this.hourNow[this.hourNow.length-1] 
        

        this.state = {
            resultList: [],
            clockResultState: false,
            hourInput: "",
            minutInput: "",
            focused : false,
            stopNamesDataListUpdated: [],
            searchResultStyleDisplay: { display: "none"},
            numInputViewDisplay: {display: 'flex'},
            showButton: true,
            arretInputValue: "",
            marginTopBody: {
                marginTop: 70,
            },
            clockDisplay : {
                display: "flex",
            },
            clockResultDisplay:{
                display: "none"
            }
        }
    }

    _searchResultDisplay(text){
        this.setState({
            searchResultStyleDisplay: {display: "flex"},
            numInputViewDisplay: {display:'none'},
            showButton: false,
            marginTopBody: {
                marginTop: 30,
            },
        })
    }
    _searchResultHide(text){
        this.setState({
            searchResultStyleDisplay: { display: "none"},
            numInputViewDisplay: {display: 'flex'},
            showButton: true,
            marginTopBody: {
                marginTop: 70,
            },
        })
    }


    
    _choosenStopName(text){
        this._searchResultHide(" ")
        this.setState({
            arretInputValue: text,
            focused: true,
        })
    }

    _backButton(){
        this.setState({
            resultList : [],
        }, function(){
        })
        this.setState({
            clockDisplay:{
                display:"flex"
            },
            clockResultDisplay:{
                display: "none"
            },
            clockResultState: false,
        })
    }

    _stopNameSearch(text){
        let array = []
        this.setState({
            arretInputValue: text
        })
        Object.keys(stopNames).forEach(function(item){
            if(item.includes(text)){
                array.push({
                    key: item
                })
            }
        })
        this.setState({
            stopNamesDataListUpdated: array
        })
    }

    _hourInputVerify(text){
        this.setState({
            hourInput: text
        })
        if(text.length == 2 && Number(text)>0 && Number(text)<24){  
            this.a.current.focus()
        }
    }

    _minutInputVerify(text){
        this.setState({
            minutInput: text
        })
        if(text.length == 2 && Number(text)>0 && Number(text)<60){
            this.a.current.blur()
        }
    }

    _toIso(hour,minut){
        let format = ""
	    format+=this.année +"-"
	    format+=this.mois +"-"
	    format+=this.jour +"T"
        format+= hour+"%3A"+minut+"%3A00%2B01%3A00"
        return format
    }

    _arrivalListChosen(name){
        AsyncStorage.setItem("favoris",name)
        ToastAndroid.show(name + " à "+this.state.arretInputValue+" a été au favoris!", ToastAndroid.LONG);
    }

    _dataSend(){
        let classe = this
        let chosenHour = this._toIso(this.hourNow,this.minuteNow)
        if(this.state.hourInput!="" && this.state.minutInput!=""){
            chosenHour = this._toIso(this.state.hourInput,this.state.minutInput)
        }
        let arret = stopNames[this.state.arretInputValue]
        
        let url = "https://api.cts-strasbourg.eu/v1/siri/2.0/stop-monitoring?MonitoringRef="+arret+"&MonitoringRef=&StartTime="+chosenHour+"&MinimumStopVisitsPerLine=6"
        let liste = []
        fetch(url,cts).then(response=>response.json()).then(function(json){
            try{
            let array = json.ServiceDelivery.StopMonitoringDelivery[0].MonitoredStopVisit
            
            array.forEach(function(obj){
                let ntm = obj.MonitoredVehicleJourney
                let arrivalTime = ntm.MonitoredCall.ExpectedArrivalTime.split("T")[1]
                arrivalTime = arrivalTime.split("+")[0]
                arrivalTime = arrivalTime.split(":")[0]+":"+arrivalTime.split(":")[1]
                if(Object.keys(finalObj).includes(ntm.DestinationName) == false){
                    finalObj[ntm.DestinationName]={
                        "LineRef" : ntm.LineRef.toLowerCase(),
                        "arrivalList": []
                    }

                }
                if(finalObj[ntm.DestinationName]["arrivalList"].includes(arrivalTime) ==false){
                    finalObj[ntm.DestinationName]["arrivalList"].push(arrivalTime)
                }
                
            })
            Object.keys(finalObj).forEach(function(element){
                finalObj3.push({
                    "name" : element,
                    "LineRef" : finalObj[element]["LineRef"],
                    "arrivalList" : finalObj[element]["arrivalList"]

                })
            })
            
            classe.setState({
                clockDisplay:{
                    display:"none"
                },
                clockResultDisplay:{    
                    display: "flex"
                },
                clockResultState:true,
                resultList: finalObj3
            })
            finalObj3 = []
            }
            catch(err){
                console.log(err)
                Alert.alert("pas de bus/tram à cette arrêt en ce moment!","",
                [
                    {text: 'ok', onPress: () => {}}
                ]
                )
            }
        })
        
    }

    render() {
        return (
            <View style={ [style.container] }>
                <Appbar.Header style= {{backgroundColor: '#23232f'}}>
                    <Appbar.Action icon="arrow-left" style={this.state.clockResultDisplay} onPress={()=>this._backButton()} />
                    <Appbar.Content title="horraires" />
                    <Appbar.Action icon="dots-vertical" />
                </Appbar.Header>
                <View style={[this.state.marginTopBody, this.state.clockDisplay]}>
                    <TextInput placeholder="nom de l'arrêt" value={this.state.arretInputValue} style={style.arretInput} onFocus={(text) => this._searchResultDisplay(text)}  onChangeText={(text)=> this._stopNameSearch(text)}  />
                    <View style={[searchResultStyle, this.state.searchResultStyleDisplay]}>
                        <Text style={{fontSize: 22.5,color: "#69f0ae",marginLeft: 5,}}>résultats</Text>
                        <FlatList 
                            data={this.state.stopNamesDataListUpdated}
                            renderItem={({item, index, separators})=> 
                            <TouchableOpacity onPress={()=>this._choosenStopName(item.key)} >
                                <Text style={style.searrchResultButton.ligne1}>{item.key}</Text>
                                <Text style={style.searrchResultButton.ligne2}>{String(stopLines[item.key])}</Text>
                            </TouchableOpacity>}>
                        </FlatList>
                    </View>
                    <View style={[style.numInputView, this.state.numInputViewDisplay]}>
                        <TextInput placeholder={this.hourNow} keyboardType="numeric" style={style.numInput} onChangeText={(text) => this._hourInputVerify(text)} />
                        <TextInput ref={this.a} placeholder={this.minuteNow} keyboardType="numeric" style={[style.numInput,{marginLeft: 20,}]} onChangeText={(text) => this._minutInputVerify(text)} />
                    </View>
                    { this.state.showButton && 
                    <View style={{justifyContent: 'center', marginLeft: 0, marginRight:0,flexDirection: 'row',}}>
                    <Button mode="contained" style={[style.validerBut,{justifyContent: 'center', marginLeft: 0, marginRight:0,flexDirection: 'row',}]} onPress={() => this._dataSend()}>
                        <Text style={{fontSize:25,}}>valider</Text>
                    </Button>
                    </View>}
                    
                </View>
                { this.state.clockResultState && <FlatList data={this.state.resultList} 
            renderItem={({item})  => ( 
                <TouchableOpacity onPressIn={()=> this._arrivalListChosen(item.name )} delayPressIn={800} activeOpacity={0.9}><ClockResultComponent image={imageList[item.LineRef]} name={item.name} list={item.arrivalList}></ClockResultComponent></TouchableOpacity>)}
            keyExtractor={(item, index) => index.toString()}
            />}
                </View>

        )
    }
}
//<FlatList data={finalObj} renderItem={}/>
//<Button title={item.key} color="transparent" style={{borderWidth: 0,}} />
//onBlur={(text)=> this._searchResultHide(text)}
//this.state.clockResultState && 
export default ClockView
