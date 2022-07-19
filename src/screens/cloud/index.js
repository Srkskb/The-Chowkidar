import React, { Component } from 'react';
import { Text, TextInput, Image, View, StatusBar,TouchableOpacity,goBack } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import style from './style';
import Colors from '../../utils/Colors'
import Fonts from '../../utils/Fontsize';
import Footer from '../footer';
import LinearGradient from 'react-native-linear-gradient';




class Cloud extends React.Component {
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
                {/* <StatusBar backgroundColor={'#0a0a0a'} /> */}
                <View style={{flex:1}}>
     <View style={{justifyContent:'center',alignItems:'center',marginTop:300}}>
         <Icon name='user' size={50} />
         <Text style={{color:Colors.colorBlack,marginTop:20,fontSize:Fonts.xxlarge,fontWeight:'bold'}}>Please Login</Text>
     </View>
     <TouchableOpacity onPress={()=> this.props.navigation.navigate('Splash')} style={style.loginbuttton}>
         <Text style={style.textlogin}>Log in</Text>
     </TouchableOpacity>
     </View>
     <Footer navigation={this.props.navigation}/>
            </LinearGradient>

        )

    }
}
export default Cloud;