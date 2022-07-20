import React, { Component } from 'react';
import { Text, TextInput, Image, View, StatusBar, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import style from './style';
import Header from '../Header';
import Colors from '../../utils/Colors';
import LinearGradient from 'react-native-linear-gradient';



class Verifyotp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dropModal: false,
            language: 'Select Language',
            Verifyotp:'',
            confirmation:null
        }
    }

  async  componentDidMount  () {
const confirmation = await this.props.navigation.getParam("confirmation")
const number = await this.props.navigation.getParam("number")
this.setState({confirmation:confirmation})
    }
      confirmCode=async()=> {
        const {confirmation,Verifyotp} = this.state
    try {
     const result = await confirm.confirm(Verifyotp);
     console.log(result)
     this.props.navigation.navigate("Setpassword")
    } catch (error) {
      console.log('Invalid code.');
    }
  }

    render() {
        return (
            <LinearGradient colors={['#bfc9c9', '#fcfcfc', '#fcfcfc']} style={style.mainview}>
                <StatusBar backgroundColor={'#bfc9c9'} />
                <View style={{ flexDirection: 'row', marginTop: 10, alignItems: 'center' }}>
                    <TouchableOpacity onPress={() => this.props.navigation.goBack()} style={style.icon}>
                        <Icon size={40} name='angle-left' style={{ color: 'black' }} />
                    </TouchableOpacity>

                </View>
                <View style={{ flex: 1, }}>
                    <View style={style.emailview}>
                        <Text style={style.emailtext}>Enter verification code</Text>
                    </View>
                    <View style={style.doubletextflex}>
                        <View style={{}}>
                            <Text style={style.verifytext}>Verification code has been send to:</Text>
                        </View>
                        <View style={{}}>
                            <Text style={style.emailtexts}> kibtech.atul@gmail.com</Text>
                        </View>
                    </View>
                    <View style={style.otpviewflex}>
                        <View style={style.otp1}>
                            <TextInput keyboardType='number-pad'
                                maxLength={1}
                                returnKeyType={"next"}
                                autoFocus={true}
                                value={this.state.otp1}
                                ref={(input) => { this.text1 = input; }}
                                onChangeText={(text) => { this.setState({ otp1: text }); if (text != '') { this.text2.focus(); } }}
                                style={style.text}></TextInput>
                            <View style={{ height: 4, marginHorizontal: 7 }} />
                        </View>
                        <View style={style.otp1}>
                            <TextInput keyboardType='number-pad'
                                maxLength={1}
                                returnKeyType={"next"}
                                value={this.state.otp2}
                                onChangeText={(text) => { this.setState({ otp2: text }); if (text == '') { this.text1.focus(); } else { this.text3.focus(); } }}
                                ref={(input) => { this.text2 = input; }}
                                style={style.text}></TextInput>
                            <View style={{ height: 4, marginHorizontal: 7 }} />
                        </View>
                        <View style={style.otp1}>
                            <TextInput keyboardType='number-pad'

                                returnKeyType={"next"}
                                value={this.state.otp3}
                                onChangeText={(text) => { this.setState({ otp3: text }); if (text == '') { this.text2.focus(); } else { this.text4.focus(); } }}
                                ref={(input) => { this.text3 = input; }}
                                maxLength={1} style={style.text}></TextInput>
                            <View style={{ height: 4, marginHorizontal: 7 }} />
                        </View>
                        <View style={style.otp1}>
                            <TextInput keyboardType='number-pad'
                                returnKeyType={"next"}
                                value={this.state.otp4}
                                onChangeText={(text) => { this.setState({ otp4: text }); if (text == '') { this.text3.focus() } else { this.text5.focus(); } }}
                                ref={(input) => { this.text4 = input; }}
                                maxLength={1} style={style.text}></TextInput>
                            <View style={{ height: 4, marginHorizontal: 7 }} />
                        </View>
                        <View style={style.otp1}>
                            <TextInput keyboardType='number-pad'
                                returnKeyType={"next"}
                                value={this.state.otp5}
                                onChangeText={(text) => { this.setState({ otp5: text }); if (text == '') { this.text4.focus(); } else { this.text6.focus(); } }}
                                ref={(input) => { this.text5 = input; }}
                                maxLength={1} style={style.text}></TextInput>
                            <View style={{ height: 4, marginHorizontal: 7 }} />
                        </View>
                        <View style={style.otp1}>
                            <TextInput keyboardType='number-pad'
                                returnKeyType={"next"}
                                value={this.state.otp6}
                                onChangeText={(text) => { this.setState({ otp6: text }); if (text == '') { this.text5.focus(); } }}

                                // {this.setState({otp6:text}); if(text==''){this.text5.focus();}}
                                ref={(input) => { this.text6 = input; }}
                                maxLength={1} style={style.text}></TextInput>
                            <View style={{ height: 4, marginHorizontal: 7 }} />
                        </View>
                    </View>
                </View>
                <TouchableOpacity onPress={this.confirmCode} style={style.loginview}>
                    <Text style={style.textlogin}>Next</Text>
                </TouchableOpacity>
            </LinearGradient>

        )

    }
}
export default Verifyotp;