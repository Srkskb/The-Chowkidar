import React, { Component } from 'react';
import { Text, TextInput, Image, View, StatusBar, ImageBackground, TouchableOpacity } from 'react-native';
import style from './style';
import Colors from '../../utils/Colors';
import Icon from 'react-native-vector-icons/FontAwesome';
import Fonts from '../../utils/Fontsize'
import LinearGradient from 'react-native-linear-gradient';



class Personalinfo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    componentDidMount = async () => {

    }

    personalinfo() {
        this.props.navigation.navigate('Personalinfo')
    }




    render() {
        return (
            <LinearGradient colors={['#bfc9c9','#fcfcfc', '#fcfcfc']}  style={style.mainview}>
            <StatusBar backgroundColor={'#bfc9c9'}/>
                <View>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <TouchableOpacity onPress={() => this.props.navigation.goBack()} style={{width:50}}>
                            <Icon size={50} name='angle-left' style={{ color: 'black', paddingLeft: 20 }} />
                        </TouchableOpacity>
                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center',paddingRight:20 }}>
                            <Text style={{ color: Colors.colordarkgrey, fontSize: Fonts.xlarge, }}>Personal Information</Text>
                        </View>
                    </View>
                    <View style={style.rowitemsaccount}>
                        <View style={style.accountflexstyle} >
                            <Text style={style.accounttext}>Account</Text>
                        </View>
                        <View style={style.emailflexstyle}>
                            <Text style={style.emailtext}>Email ID</Text>
                        </View>
                    </View>
                    <View style={style.lineview} />
                    <TouchableOpacity onPress={()=> this.props.navigation.navigate('Modifypassword')}>
                        <View style={style.rowitemspassword}>
                            <View style={style.accountflexstyle} >
                                <Text style={style.accounttext}>Modify Password</Text>
                            </View>
                            <View style={style.emailflexstyle}>
                                <Icon size={30} name='angle-right' />
                            </View>
                        </View>
                    </TouchableOpacity>
                    <View style={style.lineview2} />



                </View>
                </LinearGradient>
        )

    }
}
export default Personalinfo;