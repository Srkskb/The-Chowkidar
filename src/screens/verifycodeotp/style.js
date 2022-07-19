import { StyleSheet } from 'react-native';
import Fonts from '../../utils/Fontsize';
import Colors from '../../utils/Colors'

export default StyleSheet.create({

    mainview: {
        flex: 1,
        backgroundColor: '#ebedf0'
    },
    emailview: {
        marginTop: 50,
        marginLeft: 20
    },
    emailtext: {
        color: Colors.colorBlack,
        fontSize: Fonts.xxxlarge,
        fontWeight: 'bold'
    },
    emailtextview: {
        width: '75%',
        alignSelf: 'center',
        borderRadius: 10,
        alignItems: 'center',
        backgroundColor: Colors.colorWhite,
        marginTop: 50,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 7, },
        shadowOpacity: 0.43,
        shadowRadius: 9.51,
        elevation: 5,
    },
    emailtexts: {
        width: '90%'
    },
    loginview: {
        backgroundColor: Colors.colorPurple,
        flex: 0.06,
        marginVertical: 30,
        alignItems: 'center',
        justifyContent: 'center',
        width: '80%',
        alignSelf: 'center',
        borderRadius: 20
    },
    textlogin: {
        color: Colors.colorWhite,
        fontWeight: 'bold',
        fontSize: Fonts.xlarge
    },
    icon: {
        paddingLeft: 20
    },
    doubletextflex: {
        marginTop: 20,
        width:'90%',
    },
    verifytext: {
        color: Colors.colordarkgrey,
        fontSize: Fonts.medium,
        marginLeft: 20
    },
    emailtexts: {
        color: Colors.colorPurple,
        fontSize: Fonts.medium,
        marginLeft: 20,
        marginTop:5
    },
    otp1: {
        width: '12%',
        height: 50,
        backgroundColor: 'trannsparent',
        marginHorizontal: 8,
        borderWidth: 1,
        borderRadius: 10,
    
    },
    text: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'black',
     
    },
    otpviewflex: {
        flexDirection: 'row',
        marginTop: 70,
        width: '90%',
        alignSelf: 'center',
    }





})