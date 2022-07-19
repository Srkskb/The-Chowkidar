import { StyleSheet } from 'react-native';
import Fonts from '../../utils/Fontsize';
import Colors from '../../utils/Colors'

export default StyleSheet.create({

    mainview: {
        flex: 1,
        backgroundColor:'#ebedf0'
    },
    loginbuttton:{
    backgroundColor:Colors.colorPurple,
    alignItems:'center',
    marginTop:50,
    width:'70%',
    alignSelf:'center',
    padding:10,
    borderRadius:10
    },
    textlogin:{
        color:Colors.colorWhite,
        fontSize:Fonts.xlarge,
        fontWeight:'bold'
    }
 


})