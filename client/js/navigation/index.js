import React from 'react';
import Navigation from './navigation';
import OnBoarding from '../screens/Onboarding';
import Login from '../screens/Login';
import Signup from '../screens/Signup';
import Cancel from '../screens/Cancel';
import Calendar from '../screens/Calendar';
import ParkInfo from '../screens/ParkInfo';
import {createStackNavigator} from '@react-navigation/stack';
import {AuthContext} from '../context/AuthProvider';

const AuthStack = createStackNavigator();

const AuthStackScreens = props => {
  return (
    <AuthStack.Navigator initialRouteName="Login">
      <AuthStack.Screen name="Login" component={Login} />
      <AuthStack.Screen name="Signup" component={Signup} />
    </AuthStack.Navigator>
  );
};

showOnboarding = async () => {
  try {
    const onboarded = await AsyncStorage.getItem('OnBoarded');
    if (onboarded === null) {
      ('OnBoarding');
    } else {
      ('Map');
      console.log(onboarded);
    }
  } catch (error) {
    throw error;
  }
};

const RootStack = createStackNavigator();

const RootStackScreens = props => (
  <AuthContext.Consumer>
    {({state}) => (
      <RootStack.Navigator mode="modal" headerMode="none">
        {state.userToken ? (
          <>
            <RootStack.Screen name="Main" component={Navigation} />
            <RootStack.Screen name="ParkInfo" component={ParkInfo} />
            <RootStack.Screen name="Calendar" component={Calendar} />
            <RootStack.Screen name="Cancel" component={Cancel} />
          </>
        ) : (
          <RootStack.Screen name="Auth" component={AuthStackScreens} />
        )}
      </RootStack.Navigator>
    )}
  </AuthContext.Consumer>
);

export default RootStackScreens;
