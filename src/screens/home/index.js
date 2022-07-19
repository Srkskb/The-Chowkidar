import React, { Component } from 'react';
import { Text, TextInput, Image, View, StatusBar,TouchableOpacity,PermissionsAndroid, } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import style from './style';
import Header from '../Header';
import Colors from '../../utils/Colors';
import LinearGradient from 'react-native-linear-gradient';
import Fonts from '../../utils/Fontsize';
import Footer from '../footer';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';



class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
           
        }
    }

    componentDidMount = async () => {

    }

     requestCameraPermission = async () => {
        try {
          const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.CAMERA,
            {
              title: "Please Access your Camera Permission",
              message:
                "App needs access to your camera " +
                "so you can take video.",
              buttonNeutral: "Ask Me Later",
              buttonNegative: "Cancel",
              buttonPositive: "OK"
            }
          );
          if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            let option = {
                      mediaType: 'photo',
                      includeBase64: false,
                  };
                  console.log('Option', option, response);
                  const result = await launchCamera(option, response);
                  let response;
                  console.log('result', result);
            console.log("You can use the camera");
          } else {
            console.log("Camera permission denied");
          }
        } catch (err) {
          console.warn(err);
        }
      };

      opengallery = async () => {
        let option = {
            quality: 1,
            maxWidth: 400,
            maxHeight:400,
            mediaType: 'photo',
            includeBase64: false,
        };
        console.log('Option', option, response);
        const result = await launchImageLibrary(option, response);
        let response;
        console.log('result', result);
    }

    render() {
        return (
            <LinearGradient colors={['#bfc9c9','#fcfcfc', '#fcfcfc']}  style={style.mainview}>
                <StatusBar backgroundColor={'#bfc9c9'} />
                <View style={{flex:1}}>
       <View style={{flexDirection:'row',marginTop:20}}>
           <View style={style.texthome}>
           <Text style={{fontSize:Fonts.xxxlarge,color:Colors.colorBlack,fontWeight:'bold'}}>My home</Text>
           </View>
           <View style={{flexDirection:'row',paddingRight:20}}>
               <TouchableOpacity>
               <Icon size={25} name='search' style={style.icon}/>
               </TouchableOpacity>
               <TouchableOpacity onPress={()=> this.props.navigation.navigate('Notification')} >
               <Icon size={25} name='bell' style={style.icon}/>
               </TouchableOpacity>
               <TouchableOpacity onPress={()=> this.props.navigation.navigate('Adddevice')}>
               <Icon  size={25} name='plus' style={style.icon}/>
               </TouchableOpacity>
           </View>
       </View>
       <View style={{paddingLeft:30,marginTop:20}}>
           <Text style={{color:Colors.colordarkgrey}}>Live a secure and smart life</Text>
       </View>
       <View style={style.viewtexts}>
           <View style={{flexDirection:'row'}}>
             <View style={style.viewinnertext}>
               <Text style={style.textadd}>Add device</Text>
               <Text style={style.textstart}>Start my security life</Text>
             </View>
             <TouchableOpacity onPress={()=> this.props.navigation.navigate('Cameracontrol')} style={style.iconplus}>
                 <Icon size={20} name='plus' style={{color:Colors.colorPurple}}/>
             </TouchableOpacity>
             </View>
       </View>
       </View>
       <Footer navigation={this.props.navigation}/>
            </LinearGradient>

        )

    }
}
export default Home;