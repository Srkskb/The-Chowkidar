import React, { Component } from 'react';
import { Text, TextInput, Image, View, StatusBar, ImageBackground, TouchableOpacity } from 'react-native';
import style from './style';
import Colors from '../../utils/Colors';
import Icon from 'react-native-vector-icons/FontAwesome';

class Footer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    componentDidMount = async () => {

    }


    render() {
        return (
            <View style={{ backgroundColor: Colors.colorPurple,width:'100%',height:65 }}>
                <View style={style.main}>
                        <TouchableOpacity onPress={()=>this.props.navigation.navigate('Home')} style={style.text} >
                            <Icon  name='mobile' size={25} style={{color:Colors.colorBlack}}/>
                                <Text style={style.text1}>Device</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={style.text} >
                            <Icon name='image' size={25} style={{color:Colors.colorBlack}}/>
                                <Text style={style.text1}>Album</Text>
                        </TouchableOpacity>
                        {/* <TouchableOpacity style={style.text} >
                        <Icon name='file' size={25} style={{color:Colors.colorBlack}}/>
                                <Text style={style.text1}>News</Text>
                        </TouchableOpacity> */}
                        <TouchableOpacity  onPress={()=>this.props.navigation.navigate('Profile')}style={style.text} >
                        <Icon name='user' size={25} style={{color:Colors.colorBlack}}/>
                                <Text style={style.text1}>Profile</Text>
                        </TouchableOpacity>
                    </View>
            </View>
        )

    }
}
export default Footer;