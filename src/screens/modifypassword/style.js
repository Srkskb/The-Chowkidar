import { StyleSheet } from 'react-native';
import Fonts from '../../utils/Fontsize';
import Colors from '../../utils/Colors'

export default StyleSheet.create({

    mainview: {
        flex: 1,
        backgroundColor:'#ebedf0'
    },
    textpassword:{
        width:'100%',
        height:40,
        backgroundColor:Colors.colorlightgrey,
        marginVertical:10,
        justifyContent:'center',
        paddingLeft:20
    },
    passwordtextview:{
        width: '100%',
        alignItems: 'center',
        marginTop:5,
        borderWidth:0.5,
        flexDirection:'row',
        borderColor:'grey',
        backgroundColor:Colors.colorWhite
    },
    emailtexts: {
        flex:1
    },
    forgotpassword:{
        marginTop:20,
        alignItems:'flex-end',
        marginRight:20
    },
    textforgot:{
        color:Colors.colorPurple,
        fontSize:Fonts.large
    },
    confirmtextview:{
        flex:0.07,
        backgroundColor:Colors.colorPurple,
        marginVertical:30,
        borderRadius:20,
        width:'80%',
        alignSelf:'center',
        justifyContent:'center',
        alignItems:'center'
    },
    confirmtext:{
        color:Colors.colorWhite,
        fontSize:Fonts.large
    }




})