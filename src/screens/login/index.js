import React, { Component } from 'react';
import { Text, TextInput, Image, View, StatusBar, TouchableOpacity,BackHandler,Alert } from 'react-native';
import style from './style';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome';
import Snack from '../../utils/snack';
import auth from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
// import AsyncStorage from '@react-native-async-storage/async-storage';



class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
         email:'',
         password:'',
        }
    }
    componentDidMount = async () => {

        GoogleSignin.configure({
            webClientId: '"447914886870-v6ltiq4eiljs7h3t4i4ash6fta23ofik.apps.googleusercontent.com"',
          });
    }
    submithome(){
        // if(this.state.email.match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)){
            // AsyncStorage.setItem(Utils.phone, this.state.mobile);
        this.props.navigation.navigate('Home');
        // }else(
        //     Snack('Please enter the email')
        // )

    }
    componentWillUnmount() {
        if ("android" === Platform.OS) {
          BackHandler.removeEventListener(
            "hardwareBackPress",
            this.handleBackPress
          );
        }
      }
    
      handleBackPress = () => {
     if (this.props.navigation.isFocused()) {
      Alert.alert(
         'Exit App',
         'Exiting the application?', [{
             text: 'Cancel',
             onPress: () => {},
             style: 'cancel'
         }, {
             text: 'OK',
             onPress: () => BackHandler.exitApp()
         }, ], {
             cancelable: false
         }
      )
      return true;
    }
    }
    emailSignIn=async()=>{
        auth()
  .signInWithEmailAndPassword(this.state.email, this.state.password)
  .then((res) => {
    console.log('User signed in!');
    this.props.navigation.navigate('Home');
  })
 
  .catch(error => {
    if (error.code === 'auth/email-already-in-use') {
      console.log('That email address is already in use!');
    }

    if (error.code === 'auth/invalid-email') {
      console.log('That email address is invalid!');
    }

    console.error(error);
  });
    }
    render() {
        return (
            <LinearGradient colors={['#bfc9c9','#fcfcfc', '#fcfcfc']}  style={style.mainview}>
                            <StatusBar backgroundColor={'#bfc9c9'} />
                {/* <Header/> */}
                <View style={{flex:1,}}>
                <TouchableOpacity onPress={()=> this.props.navigation.goBack()} style={{width:50,marginTop:20}}>
                <Icon size={40} name='angle-left' style={{color:'black',paddingLeft:20,}}/>
                </TouchableOpacity>
                <View style={style.welcomeview}>
                    <Text style={style.welcometext}>Welcome</Text>
                </View>
                <View style={style.emailview}>
                    <TextInput placeholderTextColor={'black'}
                    onChangeText={(email) => this.setState({email:email})}
                    value={this.state.email}
                        placeholder='Please enter your account' style={style.emailtext} />
                </View>
                <View style={style.emailview1}>
                    <TextInput placeholderTextColor={'black'}
                        placeholder=' Enter the password again' style={style.emailtext}
                        value={this.state.password}
                        onChangeText={(password) => this.setState({password:password})}
                        />
                           <Icon name='eye' size={20} style={{paddingRight:20}}/>
                </View>
                <TouchableOpacity onPress={()=> this.props.navigation.navigate('Forgotpassword')} style={style.forgotview}>
                    <Text style={style.forgottext}>Forgot Password</Text>
                </TouchableOpacity>
              
                </View>
                <TouchableOpacity onPress={()=> this.emailSignIn()}  style={style.loginview}>
                    <Text style={style.textlogin}>Log in</Text>
                </TouchableOpacity>
            </LinearGradient>

        )

    }
}
export default Login;