import { StyleSheet } from 'react-native';
import Fonts from '../../utils/Fontsize';
import Colors from '../../utils/Colors'

export default StyleSheet.create({

    mainview: {
        flex: 1,
        backgroundColor: '#ebedf0'
    },
    circlecontrolview: {
        width: 150,
        height: 150,
        borderWidth: 1,
        borderRadius: 75,
        justifyContent: 'center',
        backgroundColor: 'white',
        alignSelf:'center',
        marginTop:50
    },
    middlebutton: {
        height: 50,
        width: 50,
        borderRadius: 25,
        backgroundColor: Colors.colorWhite,
        justifyContent: 'center',
        alignSelf: 'center',
        alignItems: 'center',

    },
    leftarrowview: {
        paddingLeft: 10,
        // backgroundColor: '#ff000044',
        width: '50%',
        height: '100%',
        justifyContent: 'center',
        position: 'absolute',
        left: 0,
    },
    rightarrowview: {
        paddingRight: 10,
        // backgroundColor: '#00ff0044',
        width: '50%',
        height: '100%',
        position: 'absolute',
        right: 0,
        alignItems: 'flex-end',
        justifyContent: 'center'
    },
    uparrowview: {
        backgroundColor:Colors.colorWhite,
        position: 'absolute',
        top: 5,
        alignSelf: 'center',
        width: '15%',
        height: '50%',
        // borderLeftWidth: 60,
        // borderLeftColor: "transparent",
        // borderRightWidth: 60,
        // borderRightColor: "transparent",
        // borderTopWidth: 100,
        // borderTopColor: "#ff000044",
        // borderRadius: 55,
    },
    downarrowview: {
        paddingBottom: 10,
        // backgroundColor: '#0000ff44',
        height: '50%',
        width: '100%',
        position: 'absolute',
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'flex-end'
    },
    viewalarm: {
        width: 45,
        height: 45,
        borderRadius: 23,
        borderWidth: 1,
        borderColor: Colors.colorRed,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30,
    },
    alarmtextview: {
        marginLeft: 30,
        flex:1,
        marginVertical:30
    },
    textalarm: {
        color: Colors.colorBlack,
        fontSize: Fonts.medium
    },
    mainfooter: {
        width: '100%',
        backgroundColor:'#fcfcfc',
        flexDirection: 'row',
        paddingVertical: 5,
        flex: 1
    },

    text: {
        flex: 1,
        alignItems: 'center',marginLeft:20
    },
    text1: {
        fontWeight: 'bold',
        color: Colors.colorBlack,
        fontSize: Fonts.medium
    },
    modalmore:{
        height:250,
        width:'90%',
        backgroundColor:'#fcfcfc',
        alignSelf:'center',
        borderRadius:10,
    },
    flexdirectionilp:{
        flexDirection:'row',
        width:'100%',
        alignSelf:'center',
        marginVertical:25
    },
    flexdirectionmip:{
        flexDirection:'row',
        width:'100%',
        alignSelf:'center',
    },
    lightimage:{
      justifyContent:'center',
      alignItems:'center',
      marginHorizontal:20
    },
    presestimage:{
        justifyContent:'center',
        alignItems:'center',
        marginHorizontal:20
    },
    textlight:{
        fontSize:Fonts.small,
        fontWeight:'bold',
        color:Colors.colordarkgrey
    },
    backmodal:{
    flex:0.4,
    alignItems:'center',
    width:'30%',
    alignSelf:'center'
    },
    cameraviewrec:{
        height:370,
        width:'100%',
        borderWidth:2,
        borderColor:Colors.colorlightgrey,
        alignSelf:'center',
        marginTop:20
    },
    camerablackview:{
        width:'100%',
        height:40,
        backgroundColor:Colors.colorBlack,
    },
    camerareclive:{
        width:'100%',
        flex:1,
        backgroundColor:'red'
    },
    blackiconsview:{
        flex:0.2,
        backgroundColor:Colors.colorBlack
    }







})