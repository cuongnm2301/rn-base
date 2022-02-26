import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from 'features/home/Home';
import { Provider } from 'react-redux';
import { persistor, store } from 'redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import { ActivityIndicator, Platform } from 'react-native';
import Config from 'react-native-config';
import codePush from 'react-native-code-push';

const Stack = createNativeStackNavigator();

const App = () => {
    React.useEffect(() => {
        if (!__DEV__) {
            codePush.sync({
                updateDialog: undefined,
                installMode: codePush.InstallMode.IMMEDIATE,
                deploymentKey:
                    Platform.OS === 'android'
                        ? Config.CODEPUSH_ANDROID_DEVELOPMENT_KEY
                        : Config.CODEPUSH_IOS_DEVELOPMENT_KEY,
            });
        }
    }, []);
    return (
        <Provider store={store}>
            <PersistGate loading={<ActivityIndicator />} persistor={persistor}>
                <NavigationContainer>
                    <Stack.Navigator>
                        <Stack.Screen name="Home" component={Home} />
                    </Stack.Navigator>
                </NavigationContainer>
            </PersistGate>
        </Provider>
    );
};

export default App;
