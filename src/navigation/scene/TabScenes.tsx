import { BottomTabBarProps, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Home from 'features/home/Home';
// Screen
import StyledTabBar from 'navigation/components/StyledTabBar';
import navigationConfigs from 'navigation/config/options';
import { TAB_NAVIGATION_ROOT } from 'navigation/config/routes';
import React from 'react';
import { Platform } from 'react-native';

const MainStack = createStackNavigator();
const MainTab = createBottomTabNavigator();

const HomeStack = () => (
    <MainStack.Navigator screenOptions={navigationConfigs}>
        <MainStack.Screen name={TAB_NAVIGATION_ROOT.HOME_ROUTE.ROOT} component={Home} />
    </MainStack.Navigator>
);

const MainTabContainer = () => {
    const ArrayTabs = [
        {
            name: TAB_NAVIGATION_ROOT.HOME_ROUTE.ROOT,
            title: 'home',
            component: Home,
            icon: '',
        },
        {
            name: TAB_NAVIGATION_ROOT.HOME_ROUTE.ROOT,
            title: 'setting',
            component: Home,
            icon: '',
        },
    ];
    return (
        <MainTab.Navigator tabBar={(props: BottomTabBarProps) => <StyledTabBar {...props} />}>
            {ArrayTabs.map((item, index) => (
                <MainTab.Screen key={`${index}`} options={{ ...item }} {...item} />
            ))}
        </MainTab.Navigator>
    );
};

export default MainTabContainer;
