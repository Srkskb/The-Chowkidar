import { StyleSheet } from 'react-native';
import Utils from '../../utils';
import Colors from '../../utils/Colors';
import Fonts from '../../utils/Fontsize';

export default StyleSheet.create({
    main:{
        width:'100%',
        backgroundColor:'#fcfcfc',
        flexDirection:'row',
        paddingVertical:5,
        flex:1
    },

text:{
    flex:1,
    alignItems:'center'
},
text1:{
    fontWeight:'bold',
    color:Colors.colorBlack,
    fontSize:Fonts.medium
}

})