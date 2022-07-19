import React, { Component } from 'react';
import { Text, TextInput, Image, View, StatusBar, TouchableOpacity } from 'react-native';
import style from './style';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome';




class Setpassword extends React.Component {
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
                            <StatusBar backgroundColor={'#bfc9c9'} />
                            <TouchableOpacity onPress={() => this.props.navigation.goBack()} style={style.icon}>
                            <Icon size={40} name='angle-left' style={{ color: 'black' }} />
                            </TouchableOpacity>
                <View style={{flex:1,}}>
                <View style={style.welcomeview}>
                    <Text style={style.welcometext}>Set password</Text>
                </View>
                <View style={style.emailview}>
                    <TextInput placeholderTextColor={'black'}
                        placeholder='Password' style={style.emailtext} />
                        <Icon name='eye' size={20} style={{paddingRight:20}}/>
                </View>
                <View style={style.emailview1}>
                    <TextInput placeholderTextColor={'black'}
                        placeholder=' Enter the password again' style={style.emailtext} />
                           <Icon name='eye' size={20} style={{paddingRight:20}}/>
                </View>
                </View>
                <TouchableOpacity onPress={()=> this.props.navigation.navigate('Home')}  style={style.loginview}>
                    <Text style={style.textlogin}>Log in</Text>
                </TouchableOpacity>
            </LinearGradient>

        )

    }
}
export default Setpassword;