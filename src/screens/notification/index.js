import React, { Component } from 'react';
import { Text, TextInput, Image, View, StatusBar, ImageBackground, TouchableOpacity } from 'react-native';
// import Colors from '../utils/Colors';
// import CommonStyle '';
import style from './style';
import Colors from '../../utils/Colors';
import Icon from 'react-native-vector-icons/FontAwesome';
import Header from '../Header';
import Fonts from '../../utils/Fontsize';
import LinearGradient from 'react-native-linear-gradient';


class Notification extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    componentDidMount = async () => {

    }

    render() {
        return (
            <LinearGradient colors={['#bfc9c9','#fcfcfc', '#fcfcfc']}  style={style.mainview}>
                <View style={{flexDirection:'row',alignItems:'center',marginTop:10}}>
                    <TouchableOpacity onPress={()=> this.props.navigation.goBack()} style={{width:50}}>
                <Icon size={50} name='angle-left' style={{color:'black',paddingLeft:20}}/>
                </TouchableOpacity>
                <View style={{flex:1,justifyContent:'center',alignItems:'center',paddingRight:50}}>
                <Text style={{color:Colors.colordarkgrey,fontSize:Fonts.xlarge,}}>Notification Center</Text>
                </View>
                 </View>
            </LinearGradient>
        )

    }
}
export default Notification;