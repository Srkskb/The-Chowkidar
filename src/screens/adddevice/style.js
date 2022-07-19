import { StyleSheet } from 'react-native';
import Fonts from '../../utils/Fontsize';
import Colors from '../../utils/Colors'

export default StyleSheet.create({

    mainview: {
        flex: 1,
        backgroundColor: '#ebedf0'
    },
    imgview: {
        marginTop: 50,
        flexDirection:'row',
        alignSelf:'center'
    },
    // textview:{
    //     backgroundColor:Colors.colorPurple,
    //     padding:10,
    //     width:'70%',
    //     alignSelf:'center',
    //     alignItems:'center',
    //     borderRadius:10,
    //     marginTop:50

    // },
    textviewfind: {
        paddingHorizontal: 20,
        marginTop: 30
    },
    textfind: {
        color: Colors.colorBlack,
        fontWeight: 'bold'
    },
    emailtextview: {
        width: '75%',
        alignSelf: 'center',
        borderRadius: 10,
        alignItems: 'center',
        marginTop: 50,
        borderWidth: 1,
        borderColor:'grey'
    },
    emailtexts: {
        width: '90%'
    },
    admintextview: {
        width: '75%',
        alignSelf: 'center',
        borderRadius: 10,
        alignItems: 'center',
        marginTop: 20,
        borderWidth: 1,
        borderColor:'grey'
    },
    passwordtextview:{
        width: '75%',
        alignSelf: 'center',
        borderRadius: 10,
        alignItems: 'center',
        marginTop: 20,
        borderWidth: 1,
        flexDirection:'row',
        paddingLeft:20,
        borderColor:'grey'
    },
    button: {
        backgroundColor: Colors.colorPurple,
        marginVertical: 30,
        alignItems: 'center',
        justifyContent: 'center',
        width: '60%',
        alignSelf: 'center',
        borderRadius: 20,
        padding: 10
    },
    textlogin: {
        color: Colors.colorWhite,
        fontWeight: 'bold',
        fontSize: Fonts.xlarge
    },




})