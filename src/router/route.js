import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Splash from '../screens/splash';
import Login from '../screens/login';
import Forgotpassword from '../screens/forgotpassword';
import Header from '../screens/Header';
import Emailpage from '../screens/emailpage';
import Mobilepage from '../screens/phone';
import Home from '../screens/home';
import Footer from '../screens/footer';
import Notification from '../screens/notification';
import Cloud from '../screens/cloud';
import Profile from '../screens/profile';
import Adddevice from '../screens/adddevice';
import Feedback from '../screens/feedback';
import Personalinfo from '../screens/personalinfo';
import Modifypassword from '../screens/modifypassword';
import Verifyotp from '../screens/verifycodeotp';
import Setpassword from '../screens/setpassword';
import Cameracontrol from '../screens/cameraview';


const Stack = createNativeStackNavigator();

export default function AppNavigator({ navigation }) {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={'Splash'}>
        <Stack.Screen
          name="Splash"
          component={Splash}
          options={{ headerShown: false }}
        />
            <Stack.Screen
          name="Feedback"
          component={Feedback}
          options={{ headerShown: false }}
        />
         <Stack.Screen
          name="Cameracontrol"
          component={Cameracontrol}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Setpassword"
          component={Setpassword}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Verifyotp"
          component={Verifyotp}
          options={{ headerShown: false }}
        />
         <Stack.Screen
          name="Modifypassword"
          component={Modifypassword}
          options={{ headerShown: false }}
        />
         <Stack.Screen
          name="Personalinfo"
          component={Personalinfo}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
         <Stack.Screen
          name="Adddevice"
          component={Adddevice}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Forgotpassword"
          component={Forgotpassword}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Header"
          component={Header}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Emailpage"
          component={Emailpage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Mobilepage"
          component={Mobilepage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Footer"
          component={Footer}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Notification"
          component={Notification}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Cloud"
          component={Cloud}
          options={{ headerShown: false }}
        />
         <Stack.Screen
          name="Profile"
          component={Profile}
          options={{ headerShown: false }}
        />





      </Stack.Navigator>
    </NavigationContainer>
  );
}