import React, { Component } from 'react';
import { Text, TextInput, Image, View, StatusBar, ImageBackground, TouchableOpacity } from 'react-native';
import style from './style';
import Colors from '../../utils/Colors';
import Icon from 'react-native-vector-icons/FontAwesome';
import Footer from '../footer';

class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    componentDidMount = async () => {

    }

    personalinfo(){
        this.props.navigation.navigate('Personalinfo')
    }




    render() {
        return (
            <View style={style.mainview}>
                <StatusBar backgroundColor={Colors.colorPurpleLight} />
                <View style={{ flex: 1, }}>
                    <View style={style.profileblueview}>
                        <TouchableOpacity onPress={()=> this.personalinfo()} style={style.profileview}>
                            <View style={style.photoview}>
                                <Icon name='user' size={30} style={{ color: Colors.colorWhite }} />
                            </View>
                            <View style={style.textview}>
                                <Text style={style.textemail}>atulsharma49428@gmail.com</Text>
                                <Text style={style.textdevice}>0 camera devices</Text>
                            </View>
                            <View style={style.iconright}>
                                <Icon name='angle-right' size={40} style={{ color: Colors.colorWhite }} />
                            </View>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity style={style.faqview}>
                        <View style={style.iconfaqview}>
                            <Icon name='user' size={20} style={{color:Colors.colorBlack}}/>
                        </View>
                        <View style={{ flex: 1, }}>
                            <Text style={style.textfaq}>FAQ</Text>
                        </View>
                        <View>
                            <Icon name='angle-right' size={30} style={{ color: Colors.colorBlack, paddingRight: 30 }} />
                        </View>
                    </TouchableOpacity>
                    <View style={style.lineview} />
                    <TouchableOpacity onPress={()=> this.props.navigation.navigate('Feedback')} style={style.faqview}>
                        <View style={style.iconfaqview}>
                            <Icon name='comment' size={20} style={{color:Colors.colorPurple}}/>
                        </View>
                        <View style={{ flex: 1, }}>
                            <Text style={style.textfaq}>Feedback</Text>
                        </View>
                        <View>
                            <Icon name='angle-right' size={30} style={{ color: Colors.colorBlack, paddingRight: 30 }} />
                        </View>
                    </TouchableOpacity>
                    <View style={style.lineview} />
                </View>
                <Footer navigation={this.props.navigation} />
            </View>
        )

    }
}
export default Profile;