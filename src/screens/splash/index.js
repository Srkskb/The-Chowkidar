import React, { Component } from 'react';
import { Text, TextInput, Image, View, StatusBar,TouchableOpacity } from 'react-native';
import style from './style';
import LinearGradient from 'react-native-linear-gradient';



class Splash extends React.Component {
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
                <TouchableOpacity onPress={()=> this.props.navigation.navigate('Login')} style={style.Loginview}>
                    <Text style={style.textlogin}>LOGIN</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=> this.props.navigation.navigate('Emailpage')} style={style.Registerview}>
                    <Text style={style.textregister}>REGISTER</Text>
                </TouchableOpacity>
            </LinearGradient>

        )

    }
}
export default Splash;