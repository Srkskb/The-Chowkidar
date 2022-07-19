import React, { Component } from 'react';
import { Text, TextInput, Image, View, StatusBar, ImageBackground, TouchableOpacity, Modal, ScrollView } from 'react-native';
import style from './style';
import Colors from '../../utils/Colors';
import Icon from 'react-native-vector-icons/FontAwesome';
import Footer from '../footer';
import Fonts from '../../utils/Fontsize';
import LinearGradient from 'react-native-linear-gradient';
import ViewShot from "react-native-view-shot";


class Cameracontrol extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false,
             refs:''
        }
    }

    componentDidMount() {
        // this.refs.viewShot.capture().then(uri => {
        //     console.log("do something with ", uri);
        // });
    }

    render() {
        return (
            <LinearGradient colors={['#bfc9c9', '#fcfcfc', '#fcfcfc']} style={style.mainview}>
                <StatusBar backgroundColor={'#bfc9c9'} />
                <View style={{ flex: 1 }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>
                        <TouchableOpacity onPress={() => this.props.navigation.goBack()} style={{ width: 50 }}>
                            <Icon size={40} name='angle-left' style={{ color: 'black', paddingLeft: 20, }} />
                        </TouchableOpacity>
                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', paddingRight: 50 }}>
                            <Text style={{ color: Colors.colordarkgrey, fontSize: Fonts.xlarge, }}>Office</Text>
                        </View>
                    </View>
                    <View style={style.cameraviewrec}>
                     <View style={style.camerablackview}/>
                     <View style={style.camerareclive}>

                     </View>
                     <View style={style.blackiconsview}>
                         <TouchableOpacity>
                      <View>
                        <Icon name='pause' size={20} style={{color:Colors.colorWhite}}/>
                      </View>
                      </TouchableOpacity>
                      <TouchableOpacity>
                      {/* <View>
                        <Icon name='volume' size={20} style={{color:Colors.colorWhite}}/>
                      </View> */}
                      </TouchableOpacity>
                     </View>
                    </View>
                    <View style={style.circlecontrolview}>
                        <TouchableOpacity style={style.leftarrowview}>
                            <Icon name='angle-left' size={35} />
                        </TouchableOpacity>
                        <TouchableOpacity style={style.rightarrowview}>
                            <Icon name='angle-right' size={35} />
                        </TouchableOpacity>
                        <TouchableOpacity style={style.uparrowview}>
                            <Icon name='angle-up' size={35} />
                        </TouchableOpacity>
                        <TouchableOpacity style={style.downarrowview}>
                            <Icon name='angle-down' size={35} />
                        </TouchableOpacity>
                        {/* <View style={style.middlebutton}/> */}
                    </View>
                    <View style={style.alarmtextview}>
                        <TouchableOpacity style={style.viewalarm}>
                            <Icon name='bell' size={30} style={{ color: Colors.colorRed }} />
                        </TouchableOpacity>
                        <Text style={style.textalarm}>Alarm</Text>
                    </View>

                    <Modal transparent={true} visible={this.state.show}>
                        <View style={style.modalmore}>
                            <View style={{ flex: 1 }}>
                                <View style={style.flexdirectionilp}>
                                    {/* <View style={style.inversionimage}>
                              <Image source={require('../../images/snapshot.jpeg')} resizeMode='contain' style={{width:50,height:50,}}/>
                              <Text>Inversion</Text>
                          </View> */}
                                    <View style={style.lightimage}>
                                        <Image source={require('../../images/snapshot.jpeg')} resizeMode='contain' style={{ width: 50, height: 50, }} />
                                        <Text style={style.textlight}>Light control</Text>
                                    </View>
                                    <View style={style.presestimage}>
                                        <Image source={require('../../images/snapshot.jpeg')} resizeMode='contain' style={{ width: 50, height: 50, }} />
                                        <Text style={style.textlight}>Image setting</Text>
                                    </View>
                                </View>
                                {/* <View style={style.flexdirectionmip}>
                          <View style={style.inversionimage}>
                              <Image source={require('../../images/snapshot.jpeg')} resizeMode='contain' style={{width:50,height:50,}}/>
                              <Text>Motion track</Text>
                          </View>
                          <View style={style.lightimage}>
                              <Image source={require('../../images/snapshot.jpeg')} resizeMode='contain' style={{width:50,height:50,}}/>
                              <Text>Image settings</Text>
                          </View>
                          <View style={style.presestimage}>
                              <Image source={require('../../images/snapshot.jpeg')} resizeMode='contain' style={{width:50,height:50,}}/>
                              <Text>PTZ calibration</Text>
                          </View>
                        </View> */}
                            </View>
                            <TouchableOpacity style={style.backmodal} onPress={() => { this.setState({ show: false }) }}>
                                <Icon name='angle-left' size={50} />
                            </TouchableOpacity>
                        </View>
                    </Modal>

                </View>
                <View style={{ backgroundColor: Colors.colorPurple, width: '100%', flex:0.09 }}>
                    <View style={style.mainfooter}>
                        <TouchableOpacity  >
                            <ViewShot style={style.text} ref="viewShot" options={{ fileName: "Your-File-Name", quality: 0.9 }}>
                                <Image source={require('../../images/snapshot.jpeg')} resizeMode='contain' style={{ width: 35, height: 35 }} />
                                <Text style={style.text1}>Snapshot</Text>
                            </ViewShot>
                        </TouchableOpacity>
                        <TouchableOpacity style={style.text} >
                            <Image source={require('../../images/record.jpeg')} resizeMode='contain' style={{ width: 35, height: 35 }} />
                            <Text style={style.text1}>Record</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={style.text} >
                            <Image source={require('../../images/speak.jpeg')} resizeMode='contain' style={{ width: 35, height: 35 }} />
                            <Text style={style.text1}>Speak</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={style.text} >
                            <Image source={require('../../images/replay.jpeg')} resizeMode='contain' style={{ width: 35, height: 35 }} />
                            <Text style={style.text1}>Replay</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={style.text} onPress={() => { this.setState({ show: true }) }}>
                            <Image source={require('../../images/more.jpeg')} resizeMode='contain' style={{ width: 35, height: 35 }} />
                            <Text style={style.text1}>More</Text>
                        </TouchableOpacity>
                    </View>
                </View>

            </LinearGradient>

        )

    }
}
export default Cameracontrol;