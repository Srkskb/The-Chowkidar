import React, { Component } from 'react';
import { Text, TextInput, Image, View, StatusBar, ImageBackground, TouchableOpacity } from 'react-native';
import style from './style';
import Colors from '../../utils/Colors';
import Icon from 'react-native-vector-icons/FontAwesome';
import Footer from '../footer';
import Fonts from '../../utils/Fontsize';
import LinearGradient from 'react-native-linear-gradient';


class Feedback extends React.Component {
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
                <StatusBar backgroundColor={'#bfc9c9'}/>
                <View style={{flex:1}}>
                <View style={{flexDirection:'row',alignItems:'center',marginTop:10}}>
                    <TouchableOpacity onPress={()=> this.props.navigation.goBack()} style={{width:50}}>
                <Icon size={40} name='angle-left' style={{color:'black',paddingLeft:20,}}/>
                </TouchableOpacity>
                <View style={{flex:1,justifyContent:'center',alignItems:'center',paddingRight:50}}>
                <Text style={{color:Colors.colordarkgrey,fontSize:Fonts.xlarge,}}>Feedback</Text>
                </View>
                 </View>
                 <View style={style.textview}>
                     <Text style={style.textlooking}>Looking Forward to your valuable suggestions</Text>
                 </View>
                 <View style={{marginTop:50}}>
                            <TextInput
                                multiline
                                placeholderTextColor={Colors.colordarkgrey}
                                placeholder='Write here your suggestion'
                                style={style.textinput}
                            ></TextInput>
                        </View>
                 <TouchableOpacity style={style.buttonview}>
                     <Text style={style.textsubmit}>Submit</Text>
                 </TouchableOpacity>
                 </View>
            </LinearGradient>
        )

    }
}
export default Feedback;