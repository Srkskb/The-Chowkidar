import Snackbar from 'react-native-snackbar';
import Colors from './Colors';
export default function Snack(msg) {
  Snackbar.show({
    text: msg,
    duration: Snackbar.LENGTH_SHORT,
    backgroundColor: Colors.colorPurple,
  });
}