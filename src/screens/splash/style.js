import { StyleSheet } from 'react-native';
import Fonts from '../../utils/Fontsize';
import Colors from '../../utils/Colors'

export default StyleSheet.create({

    mainview: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor:'#ebedf0'
    },
    Loginview:{
      backgroundColor:Colors.colorPurple,
      alignItems:'center',
      padding:15,
      width:'80%',
      alignSelf:'center',
      borderRadius:20
    },
    textlogin:{
        fontSize:Fonts.xlarge,
        fontWeight:'bold',
        color:Colors.colorWhite,
    },
    Registerview:{
        backgroundColor:'#bfc9c9',
        alignItems:'center',
        padding:15,
        width:'80%',
        alignSelf:'center',
        borderRadius:20,
        marginVertical:30
    },
    textregister:{
        fontSize:Fonts.xlarge,
        fontWeight:'bold',
        color:Colors.colorBlack,
    }


})