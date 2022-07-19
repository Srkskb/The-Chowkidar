import { StyleSheet } from 'react-native';
import Fonts from '../../utils/Fontsize';
import Colors from '../../utils/Colors'

export default StyleSheet.create({

    mainview: {
        flex: 1,
        backgroundColor:'#ebedf0'
    },
    profileblueview:{
        width:'100%',
        height:'15%',
        backgroundColor:Colors.colorPurpleLight,
        alignItems:'center',
        justifyContent:'center'
    },
    profileview:{
        flexDirection:'row',
        alignItems:'center'
     
    },
    photoview:{
        width:70,
        height:70,
        borderRadius:35,
        backgroundColor:Colors.colorlightgrey,
        justifyContent:'center',
        alignItems:'center',
        marginHorizontal:20,
    },
    textemail:{
        color:Colors.colorWhite,
        fontSize:Fonts.medium,
        marginBottom:10
    },
    textview:{
        flex:1
    },
    textdevice:{
        color:Colors.colorWhite,
        fontSize:Fonts.medium, 
    },
    iconright:{
        alignItems:'flex-end',
        paddingRight:20
    },
    faqview:{
        flexDirection:'row',
        alignItems:'center',
        marginTop:30
    },
    iconfaqview:{
        marginHorizontal:20
    },
    textfaq:{
        color:Colors.colorBlack
    },
    lineview:{
        height:1.7,
        width:'90%',
        backgroundColor:Colors.colorPurpleLight,
        alignSelf:'center',
        marginTop:10
    }


})