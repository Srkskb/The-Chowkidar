import React, { Component } from 'react';
import { Text, TextInput, Image, View, StatusBar, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import style from './style';
import Header from '../Header';
import Colors from '../../utils/Colors';
import LinearGradient from 'react-native-linear-gradient';
import Snack from '../../utils/snack';
import auth from '@react-native-firebase/auth';


class Emailpage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dropModal: false,
            language: 'Select Language',
            email:'',

        }
    }

    componentDidMount = async () => {

    }



    gonext(){
        // if(this.state.email != ''){
            if(this.state.email.match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)){
        this.props.navigation.navigate('Verifyotp')
        }else(
            Snack('please enter valid email ')
        )
    }
    emailSignUp=async()=>{
        if(this.state.email&&this.state.password){
        auth()
  .createUserWithEmailAndPassword(this.state.email, this.state.password)
  .then(() => {
    console.log('User account created & signed in!');
    this.props.navigation.navigate('Login');
  })
  .catch(error => {
    if (error.code === 'auth/email-already-in-use') {
      console.log('That email address is already in use!');
    }

    if (error.code === 'auth/invalid-email') {
      console.log('That email address is invalid!');
    }

    console.error(error);
  });}else{
    Snack('Please enter the email or Password')
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
                    <View style={{ flex: 1 }} />
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Mobilepage')} style={style.text}>
                        <Text style={{ color: Colors.colorPurple }}>Register with mobile number</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ flex: 1, }}>
                    <View style={style.emailview}>
                        <Text style={style.emailtext}>Email</Text>
                    </View>
                    <View style={style.emailtextview}>
                        <TextInput placeholderTextColor={'black'}
                        onChangeText={(email) => this.setState({ email: email })}
                        value={this.state.email}
                            placeholder='Email id' style={style.emailtexts} />
                    </View>
                    <View style={style.emailtextview}>
                        <TextInput placeholderTextColor={'black'}
                        onChangeText={(password) => this.setState({ password: password })}
                        value={this.state.password}
                            placeholder='Password' style={style.emailtexts} />
                    </View>
                    <View style={style.dropDown}>
                        
                        {!this.state.dropModal ? (
                            <TouchableOpacity onPress={() => this.setState({ dropModal: true })}>
                                <View style={style.selector}>
                                    <Text style={{ flex: 1, color: Colors.colorBlack }}>{this.state.language}</Text>
                                    <Icon name="chevron-right" size={18} color={Colors.colorBlack} />
                                </View>
                            </TouchableOpacity>
                        ) : (
                            <View style={{ width: '100%' }}>
                                <ScrollView>
                                    <TouchableOpacity onPress={() => this.setState({ dropModal: false, language: 'Select language' })}>
                                        <View style={[style.selectorModal, { marginTop: 50, backgroundColor: Colors.colorWhite }]}>
                                            <Text style={{ flex: 1, color: Colors.colorBlack }}>{this.state.language}</Text>
                                            <Icon name="close" size={18} color={Colors.colorBlack} />
                                        </View>
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={() => this.setState({ dropModal: false, language: 'Africa' })}>
                                        <View style={style.selectorModal}>
                                            <Text style={{ flex: 1, color: Colors.colorBlack }}>Africa</Text>
                                            {this.state.language == 'Africa' &&
                                                <Icon name="check" size={18} color={Colors.colorBlack} />
                                            }
                                        </View>
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={() => this.setState({ dropModal: false, language: 'Asia' })}>
                                        <View style={style.selectorModal}>
                                            <Text style={{ flex: 1, color: Colors.colorBlack }}>Asia</Text>
                                            {this.state.language == 'Asia' &&
                                                <Icon name="check" size={18} color={Colors.colorBlack} />
                                            }
                                        </View>
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={() => this.setState({ dropModal: false, language: 'Europe' })}>
                                        <View style={style.selectorModal}>
                                            <Text style={{ flex: 1, color: Colors.colorBlack }}>Europe</Text>
                                            {this.state.language == 'Europe' &&
                                                <Icon name="check" size={18} color={Colors.colorBlack} />
                                            }
                                        </View>
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={() => this.setState({ dropModal: false, language: 'Mainland China' })}>
                                        <View style={style.selectorModal}>
                                            <Text style={{ flex: 1, color: Colors.colorBlack }}>Mainland China</Text>
                                            {this.state.language == 'Mainland China' &&
                                                <Icon name="check" size={18} color={Colors.colorBlack} />
                                            }
                                        </View>
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={() => this.setState({ dropModal: false, language: 'North America' })}>
                                        <View style={style.selectorModal}>
                                            <Text style={{ flex: 1, color: Colors.colorBlack }}>North America</Text>
                                            {this.state.language == 'North America' &&
                                                <Icon name="check" size={18} color={Colors.colorBlack} />
                                            }
                                        </View>
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={() => this.setState({ dropModal: false, language: 'Oceania' })}>
                                        <View style={style.selectorModal}>
                                            <Text style={{ flex: 1, color: Colors.colorBlack }}>Oceania</Text>
                                            {this.state.language == 'Oceania' &&
                                                <Icon name="check" size={18} color={Colors.colorBlack} />
                                            }
                                        </View>
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={() => this.setState({ dropModal: false, language: 'South America' })}>
                                        <View style={[style.selectorModal, { borderBottomLeftRadius: 10, borderBottomRightRadius: 10 }]}>
                                            <Text style={{ flex: 1, color: Colors.colorBlack }}>South America</Text>
                                            {this.state.language == 'South America' &&
                                                <Icon name="check" size={18} color={Colors.colorBlack} />
                                            }
                                        </View>
                                    </TouchableOpacity>
                                </ScrollView>
                            </View>
                        )}
                    </View>

                </View>
                <TouchableOpacity onPress={() => this.emailSignUp()} style={style.loginview}>
                    <Text style={style.textlogin}>Next</Text>
                </TouchableOpacity>
            </LinearGradient>

        )

    }
}
export default Emailpage;