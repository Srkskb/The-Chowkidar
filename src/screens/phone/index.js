import React, { Component } from 'react';
import { Text, TextInput, Image, View, StatusBar,TouchableOpacity,goBack,ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import style from './style';
import Header from '../Header';
import Colors from '../../utils/Colors';
import LinearGradient from 'react-native-linear-gradient';
import Snack from '../../utils/snack';
import auth from '@react-native-firebase/auth';


class Mobilepage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dropModal:false,
            language:'Select Language',
            number:'',
            email:'',
            password:'',
            confirm:'',
        }
    }

    componentDidMount = async () => {

    }



    submitpass=async()=>{
        if (this.state.mobile.length == 20) {
            // if(!this.state.loading){
            //     this.setState({loading:true});
            //     try {
                    
            //         const data = await firebase.auth().signInWithPhoneNumber("+91"+this.state.mobile);
            //         this.setState({data, loading:false});
            //         if (data) {
            //         console.log('response from sent otp====>', data);
            //             this.setState({user: data, screen:'otp'});
            //         //   this.props.navigation.navigate('Register', {mobile:this.state.mobile});
            //         // this.verifyOTP();
            //         } else {
            //         alert('please enter your number');
            //         }
            //     } catch (error) {
            //         this.setState({loading:false});
            //         console.log(error);
            //         Snack('Something went wrong!'+error);
            //     }
            // }
            this.props.navigation.navigate('Verifyotp')
        }
        else {
            Snack('Please Enter 10 Digit Mobile No')
        }
    }
  signInWithPhoneNumber=async()=>{
    if(this.state.number){
    const {number} =this.state
    const confirmation = await auth.signInWithPhoneNumber(number);
    console.log("confirmation ==>",confirmation)
    if(confirmation._auth._authResult){
      this.props.navigation.navigate("Verifyotp", {"confirmation":confirmation, "number":this.state.number})
    } 
    else{
      alert("Internal Error")
    }
  } 
  else{
    Snack('Please enter the phone number')
  }
  }
    render() {
        return (
            <LinearGradient colors={['#bfc9c9','#fcfcfc', '#fcfcfc']}  style={style.mainview}>
                               <StatusBar backgroundColor={'#bfc9c9'} />
                <View style={{ flexDirection: 'row',marginTop:10,alignItems:'center' }}>
                    <TouchableOpacity onPress={()=> this.props.navigation.goBack()} style={style.icon}>
                        <Icon size={40} name='angle-left' style={{ color: 'black' }} />
                    </TouchableOpacity>
                    <View style={{ flex: 1 }} />
                    <TouchableOpacity onPress={()=> this.props.navigation.navigate('Emailpage')} style={style.text}>
                        <Text style={{color:Colors.colorPurple}}>Email</Text>
                    </TouchableOpacity>
                </View>
               <View style={{flex:1,}}>
                  <View style={style.emailview}>
                      <Text style={style.emailtext}>Register with mobile number</Text>
                  </View>
                  <View style={style.emailtextview}>
                    <TextInput placeholderTextColor={'black'}
                     keyboardType='number-pad' maxLength={20} 
                      placeholder='Please enter the mobile number' 
                      value={this.state.mobile}
                      onChangeText={(number) => this.setState({ number: number })}
                      style={style.emailtexts} />
                </View>
                  <View style={style.dropDown}>
                    {!this.state.dropModal ? (
                        <TouchableOpacity onPress={()=>this.setState({dropModal:true})}>
                            <View style={style.selector}>
                                <Text style={{flex:1, color:Colors.colorBlack}}>{this.state.language}</Text>
                                <Icon name="chevron-right" size={18} color={Colors.colorBlack} />
                            </View>
                        </TouchableOpacity>
                    ):(
                    <View style={{width:'100%'}}>
                        <ScrollView>
                    <TouchableOpacity onPress={()=>this.setState({dropModal:false, language:'Select language'})}>
                        <View style={[style.selectorModal, {marginTop:50, backgroundColor:Colors.colorWhite}]}>
                            <Text style={{flex:1, color:Colors.colorBlack}}>{this.state.language}</Text>
                            <Icon name="close" size={18} color={Colors.colorBlack} />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>this.setState({dropModal:false, language:'Africa'})}>
                        <View style={style.selectorModal}>
                            <Text style={{flex:1, color:Colors.colorBlack}}>Africa</Text>
                            {this.state.language=='Africa' && 
                                <Icon name="check" size={18} color={Colors.colorBlack} />
                            }
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>this.setState({dropModal:false, language:'Asia'})}>
                        <View style={style.selectorModal}>
                            <Text style={{flex:1, color:Colors.colorBlack}}>Asia</Text>
                            {this.state.language=='Asia' && 
                                <Icon name="check" size={18} color={Colors.colorBlack} />
                            }
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>this.setState({dropModal:false, language:'Europe'})}>
                        <View style={style.selectorModal}>
                            <Text style={{flex:1, color:Colors.colorBlack}}>Europe</Text>
                            {this.state.language=='Europe' && 
                                <Icon name="check" size={18} color={Colors.colorBlack} />
                            }
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>this.setState({dropModal:false, language:'Mainland China'})}>
                        <View style={style.selectorModal}>
                            <Text style={{flex:1, color:Colors.colorBlack}}>Mainland China</Text>
                            {this.state.language=='Mainland China' && 
                                <Icon name="check" size={18} color={Colors.colorBlack} />
                            }
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>this.setState({dropModal:false, language:'North America'})}>
                        <View style={style.selectorModal}>
                            <Text style={{flex:1, color:Colors.colorBlack}}>North America</Text>
                            {this.state.language=='North America' && 
                                <Icon name="check" size={18} color={Colors.colorBlack} />
                            }
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>this.setState({dropModal:false, language:'Oceania'})}>
                        <View style={style.selectorModal}>
                            <Text style={{flex:1, color:Colors.colorBlack}}>Oceania</Text>
                            {this.state.language=='Oceania' && 
                                <Icon name="check" size={18} color={Colors.colorBlack} />
                            }
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>this.setState({dropModal:false, language:'South America'})}>
                        <View style={[style.selectorModal, {borderBottomLeftRadius:10, borderBottomRightRadius:10}]}>
                            <Text style={{flex:1, color:Colors.colorBlack}}>South America</Text>
                            {this.state.language=='South America' && 
                                <Icon name="check" size={18} color={Colors.colorBlack} />
                            }
                        </View>
                    </TouchableOpacity>
                    </ScrollView>
                    </View>
                    )}
                </View>
              
               </View>
               <TouchableOpacity onPress={this.signInWithPhoneNumber} style={style.loginview}>
                    <Text style={style.textlogin}>Next</Text>
                </TouchableOpacity>
            </LinearGradient>

        )

    }
}
export default Mobilepage;
// import React, { useState } from 'react';
// import { Button, TextInput } from 'react-native';
// import auth from '@react-native-firebase/auth';

// const Mobilepage =()=> {
//   // If null, no SMS has been sent
//   const [confirm, setConfirm] = useState(null);

//   const [code, setCode] = useState('');

//   // Handle the button press
//   async function signInWithPhoneNumber(phoneNumber) {
//     const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
//     setConfirm(confirmation);
//   }

//   async function confirmCode() {
//     try {
//       await confirm.confirm(code);
//     } catch (error) {
//       console.log('Invalid code.');
//     }
//   }

//   if (!confirm) {
//     return (
//       <Button
//         title="Phone Number Sign In"
//         onPress={() => signInWithPhoneNumber('+91 7348618570')}
//       />
//     );
//   }

//   return (
//     <>
//       <TextInput value={code} onChangeText={text => setCode(text)} />
//       <Button title="Confirm Code" onPress={() => confirmCode()} />
//     </>
//   );
// }
// export default Mobilepage;