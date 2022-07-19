import React, { Component } from 'react';
import { Text, TextInput, Image, View, StatusBar, ImageBackground, TouchableOpacity } from 'react-native';
import style from './style';
import Colors from '../../utils/Colors';
import Icon from 'react-native-vector-icons/FontAwesome';
import Fonts from '../../utils/Fontsize'
import LinearGradient from 'react-native-linear-gradient';



class Modifypassword extends React.Component {
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
                <View style={{ flex: 1 }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                            <Icon size={50} name='angle-left' style={{ color: 'black', paddingLeft: 20 }} />
                        </TouchableOpacity>
                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', paddingRight: 20 }}>
                            <Text style={{ color: Colors.colordarkgrey, fontSize: Fonts.xlarge, }}>Modify Password</Text>
                        </View>
                    </View>
                    <View style={style.textpassword}>
                        <Text>After password is modified, Please login with new password.</Text>
                    </View>
                    <View style={style.passwordtextview}>
                        <Icon name='lock' size={20} style={{ marginLeft: 20, paddingRight: 10 }} />
                        <TextInput placeholderTextColor={Colors.colordarkgrey}
                            placeholder='Please enter the original password' style={style.emailtexts} />
                        <Icon name='eye' size={20} style={{ marginRight: 20, paddingLeft: 10 }} />
                    </View>
                    <View style={style.passwordtextview}>
                        <Icon name='lock' size={20} style={{ marginLeft: 20, paddingRight: 10 }} />
                        <TextInput placeholderTextColor={Colors.colordarkgrey}
                            placeholder='Please enter the new pasword' style={style.emailtexts} />
                        <Icon name='eye' size={20} style={{ marginRight: 20, paddingLeft: 10 }} />
                    </View>
                    <View style={style.passwordtextview}>
                        <Icon name='lock' size={20} style={{ marginLeft: 20, paddingRight: 10 }} />
                        <TextInput placeholderTextColor={Colors.colordarkgrey}
                            placeholder='Please input password again' style={style.emailtexts} />
                        <Icon name='eye' size={20} style={{ marginRight: 20, paddingLeft: 10 }} />
                    </View>
                    <TouchableOpacity onPress={()=> this.props.navigation.navigate('Forgotpassword')}>
                        <View style={style.forgotpassword}>
                            <Text style={style.textforgot}>Forgot password?</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={style.confirmtextview}>
                <View >
                    <Text style={style.confirmtext}>Confirm</Text>
                </View>
                </TouchableOpacity>
        </LinearGradient>
        )

    }
}
export default Modifypassword;