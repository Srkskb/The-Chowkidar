import { StyleSheet } from 'react-native';
import Fonts from '../../utils/Fontsize';
import Colors from '../../utils/Colors'

export default StyleSheet.create({

    mainview: {
        flex: 1,
        backgroundColor:'#ebedf0'
    },
    rowitemsaccount:{
        flexDirection:'row',
        marginTop:30,
        justifyContent:'center',
        alignItems:'center'
    },
    accountflexstyle:{
        justifyContent:'flex-start',
        paddingLeft:20,
        flex:1
    },
    emailflexstyle:{
        justifyContent:'flex-end',
        paddingRight:30
    },
    accounttext:{
        fontSize:Fonts.large,
        color:Colors.colorBlack
    },
    emailtext:{
        fontSize:Fonts.medium,
        color:'grey'
    },
    lineview:{
        height:1.7,
        width:'90%',
        backgroundColor:Colors.colorPurpleLight,
        alignSelf:'center',
        marginTop:10
    },
    lineview2:{
        height:1.7,
        width:'90%',
        backgroundColor:Colors.colorPurpleLight,
        alignSelf:'center',
        marginVertical:10
    },
    rowitemspassword:{
        flexDirection:'row',
        marginTop:15,
        justifyContent:'center',
        alignItems:'center'   
    }



})