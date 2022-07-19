import React, { Component } from 'react';
import { Text, TextInput, Image, View, StatusBar, TouchableOpacity } from 'react-native';
import style from './style';
import Header from '../Header';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome';


class Forgotpassword extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    componentDidMount = async () => {

    }

    render() {
        return (
            <LinearGradient colors={['#bfc9c9', '#fcfcfc', '#fcfcfc']} style={style.mainview}>
                <StatusBar backgroundColor={'#bfc9c9'} />
                {/* <Header/> */}
                <View style={{ flex: 1, }}>
                <TouchableOpacity onPress={()=> this.props.navigation.goBack()} style={{width:50,marginTop:20,}}>
                <Icon size={40} name='angle-left' style={{color:'black',paddingLeft:20,}}/>
                </TouchableOpacity>
                    <View style={style.welcomeview}>
                        <Text style={style.welcometext}>Forgot Password</Text>
                    </View>
                    <View style={style.registerviewtext}>
                        <Text style={style.registertext}>Please enter the registered mobile phone number or email {'\n'}address</Text>
                    </View>
                    <View style={style.emailview}>
                        <TextInput placeholderTextColor={'black'}
                            placeholder='Please enter your account' style={style.emailtext} />
                    </View>
                </View>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Verifyotp')} style={style.loginview}>
                    <Text style={style.textlogin}>Next</Text>
                </TouchableOpacity>
            </LinearGradient>

        )

    }
}
export default Forgotpassword;