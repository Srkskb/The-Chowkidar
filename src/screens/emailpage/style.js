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
    dropDown: {
        marginHorizontal: 60,
        width: '70%',
    },
    selector: {
        marginTop: 50,
        flexDirection: 'row',
        width: '100%',
        alignSelf: 'center',
        borderBottomWidth: 2,
        borderColor: Colors.colorPurpleLight,
        paddingVertical: 10,
        paddingHorizontal: 10
    },
    selectorModal: {
        width: '100%',
        backgroundColor: Colors.colorWhite,
        flexDirection: 'row',
        alignSelf: 'center',
        paddingVertical: 10,
        paddingHorizontal: 10,
        ...StyleSheet.shadow
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
    text: {
        paddingRight: 20
    },




})