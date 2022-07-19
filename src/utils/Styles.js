import { StyleSheet } from "react-native";

export default StyleSheet.create({
    button:{
        borderWidth: 1, 
        paddingHorizontal: 50,
        paddingVertical: 10, 
        borderRadius: 20, 
        backgroundColor: 'whitesmoke',
        borderColor: 'whitesmoke'
    },
    shadow:{
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
        elevation: 8,
    }

})