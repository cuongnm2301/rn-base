import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import navigationConfigs from 'navigation/config/options';
import { AUTHENTICATE_ROUTE } from 'navigation/config/routes';
import Login from 'features/authentication/Login';
import { Platform } from 'react-native';

const MainStack = createStackNavigator();

const AuthStack = () => (
    <MainStack.Navigator screenOptions={navigationConfigs}>
        <MainStack.Screen name={AUTHENTICATE_ROUTE.LOGIN} component={Login} />
    </MainStack.Navigator>
);

export default AuthStack;
