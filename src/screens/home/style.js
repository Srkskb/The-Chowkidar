import { StyleSheet } from 'react-native';
import Fonts from '../../utils/Fontsize';
import Colors from '../../utils/Colors'

export default StyleSheet.create({

    mainview: {
        flex: 1,
        backgroundColor:'#ebedf0'
    },
    icon:{
        marginHorizontal:10,
        color:Colors.colorBlack
    },
    texthome:{
        alignItems:'flex-start',
        paddingLeft:30,
        flex:1
    },
    viewtexts:{
        width:'90%',
        height:130,
        backgroundColor:Colors.colorPurple,
        alignSelf:'center',
        marginTop:50,
        borderRadius:10,
        justifyContent:'center',
    },
    viewinnertext:{
        alignItems:'flex-start',
        justifyContent:'flex-start',
        flex:1,
        marginLeft:20
    },
    iconplus:{
        width:40,
        height:40,
        borderRadius:20,
        backgroundColor:Colors.colorWhite,
        justifyContent:'center',
        alignItems:'center',
        marginRight:30

    },
    textadd:{
        fontSize:Fonts.xlarge,
        color:Colors.colorWhite
    },
    textstart:{
        marginVertical:5,
        color:Colors.colorWhite,
        fontSize:Fonts.large
    }


 


})