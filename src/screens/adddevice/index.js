import React, { Component } from 'react';
import { Text, TextInput, Image, View, StatusBar,TouchableOpacity,PermissionsAndroid, ScrollView, } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import style from './style';
import Header from '../Header';
import Colors from '../../utils/Colors';
import LinearGradient from 'react-native-linear-gradient';
import Fonts from '../../utils/Fontsize';
import Footer from '../footer';
// const [show,setShow] = React.useState(false);
// const [visible,setVisible] = React.useState(true);


class Adddevice extends React.Component {
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
                <View style={{flexDirection:'row',alignItems:'center',marginTop:10}}>
                    <TouchableOpacity onPress={()=> this.props.navigation.goBack()} style={{width:50}}>
                <Icon size={50} name='angle-left' style={{color:'black',paddingLeft:20}}/>
                </TouchableOpacity>
                <View style={{flex:1,justifyContent:'center',alignItems:'center',paddingRight:50}}>
                <Text style={{color:Colors.colordarkgrey,fontSize:Fonts.xlarge,}}>Add device</Text>
                </View>
                 </View>
                 <ScrollView style={{flex:1,}}>
                 {/* <View style={style.textview}>  
                     <Text>Manually add by device ID</Text>
                 </View> */}
                 <View style={style.imgview}>
                     <Image source={require('../../images/camera1.jpg')} resizeMode='contain' style={{width:'45%',height:200, borderRadius:10}}/>
                     <Image source={require('../../images/camera2.jpg')} resizeMode='contain' style={{width:'45%',height:200, borderRadius:10,marginHorizontal:10}}/>
                 </View>
                 <View style={style.textviewfind}>
                     <Text style={style.textfind}>Please find the device ID number at the bottom or back of the device</Text>
                 </View>
                 <View style={style.emailtextview}>
                        <TextInput placeholderTextColor={Colors.colordarkgrey}
                            placeholder='Please enter the device ID' style={style.emailtexts} />
                    </View>
                    <View style={style.admintextview}>
                        <TextInput placeholderTextColor={Colors.colordarkgrey}
                            placeholder='User' style={style.emailtexts} />
                    </View>
                    <View style={style.passwordtextview}>
                        <TextInput placeholderTextColor={Colors.colordarkgrey}
                        // secureTextEntry = {visible}
                            placeholder='Please enter the password' style={style.emailtexts} />
                            {/* <TouchableOpacity onPress={()=> 
                                {this.setVisible(!visible)
                                this.setShow(!show) }}>
                                <Icon name ={ show === false ? 'eye' : 'eye-slash' } size={20}/>
                            </TouchableOpacity> */}
                    </View>
                    <TouchableOpacity style={style.button}>
                        <Text style={style.textlogin}>Add</Text>
                    </TouchableOpacity>
                    </ScrollView>
            </LinearGradient>

        )

    }
}
export default Adddevice;