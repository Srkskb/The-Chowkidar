import { StyleSheet } from 'react-native';
import Fonts from '../../utils/Fontsize';
import Colors from '../../utils/Colors'

export default StyleSheet.create({

    mainview: {
        flex: 1,
        backgroundColor: '#ebedf0'
    },
    textview: {
        paddingLeft: 20,
        marginTop: 50
    },
    textlooking: {
        color: Colors.colorBlack,
        fontWeight: 'bold',
        fontSize: Fonts.large
    },
    textinputview: {
        width: '90%',
        height: 200,
        backgroundColor: Colors.colorlightgrey,
        alignSelf: 'center',
        marginTop: 50,
        borderRadius: 10
    },
    textinput:{
        textAlignVertical: 'top',
        paddingBottom: 20,
        paddingLeft: 10,
        borderRadius: 10,
        width: '90%',
        height: 200,
        backgroundColor: '#e6e6e6',
        marginLeft: 20,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 7, },
        shadowOpacity: 0.43,
        shadowRadius: 9.51,
        elevation: 5,
    },
    buttonview: {
        backgroundColor: Colors.colorPurple,
        marginTop: 30,
        padding: 10,
        width: '70%',
        alignSelf: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    textsubmit: {
        fontSize: Fonts.medium,
        color: Colors.colorWhite,
        fontWeight: 'bold'
    }




})