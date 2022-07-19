import { StyleSheet } from 'react-native';
import Fonts from '../../utils/Fontsize';
import Colors from '../../utils/Colors'

export default StyleSheet.create({

    mainview: {
        flex: 1,
        backgroundColor:'#ebedf0'
    },
    welcomeview:{
        marginTop:20,
        paddingLeft:50
    },
    welcometext:{
        fontSize:Fonts.xxxlarge,
        color:Colors.colorBlack,
        fontWeight:'bold'
    },
    emailview:{
        width:'80%',
        alignSelf:'center',
        borderRadius: 10,
        alignItems: 'center',
        backgroundColor:Colors.colorWhite,
        marginTop:70,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 7, },
        shadowOpacity: 0.43,
        shadowRadius: 9.51,
        elevation: 10,
        flexDirection:'row',
         paddingLeft:20
    },
    emailview1:{
        width:'80%',
        alignSelf:'center',
        borderRadius: 10,
        alignItems: 'center',
        backgroundColor:Colors.colorWhite,
        marginTop:20,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 7, },
        shadowOpacity: 0.43,
        shadowRadius: 9.51,
        elevation: 10,
        flexDirection:'row',
         paddingLeft:20

    },
    emailtext:{
        flex:1
    },
    loginview:{
        backgroundColor:Colors.colorPurple,
        flex:0.06,
        marginVertical:30,
        alignItems:'center',
        justifyContent:'center',
        width:'80%',
        alignSelf:'center',
        borderRadius:20
    },
    textlogin:{
        color:Colors.colorWhite,
        fontWeight:'bold',
        fontSize:Fonts.large
    },
    icon: {
        paddingLeft: 20,
        marginTop:20
    },
 


})