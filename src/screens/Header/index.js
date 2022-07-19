import React, { Component } from 'react';
import { Text, TextInput, Image, View, StatusBar,TouchableOpacity,goBack } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import style from './style'


class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    componentDidMount = async () => {

    }

    render() {
        return (
            <View>
                <StatusBar backgroundColor={'#0a0a0a'} />
                <View style={style.mainview}>
                <TouchableOpacity style={style.icon}>
                    <Icon size={40} name='angle-left' style={{color:'black'}}/>
                </TouchableOpacity>
                <View style={{flex:1}}/>
                <TouchableOpacity  style={style.text}>
                    <Text style={style.headertext}>{this.props.title} {this.props.navigation}</Text>
                </TouchableOpacity>
                </View>
            </View>

        )

    }
}
export default Header;