import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Platform, Text, View } from 'react-native';

import { APP_ROUTE, TAB_NAVIGATION_ROOT } from '../config/routes';
import navigationConfigs from '../config/options';
import MainTabContainer from './TabScenes';
import AuthStack from './AuthScenes';

const MainStack = createStackNavigator();

const AppStack = () => (
    <MainStack.Navigator screenOptions={navigationConfigs}>
        <MainStack.Screen name={APP_ROUTE.MAIN_TAB} component={MainTabContainer} />
    </MainStack.Navigator>
);

const Navigation: React.FunctionComponent = () => {
    return <AuthStack />;
};

export default Navigation;
