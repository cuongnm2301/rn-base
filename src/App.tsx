import React, { FunctionComponent } from 'react';
import { ActivityIndicator, LogBox } from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from 'redux/store';
import Navigation from 'navigation/scene/RootScenes';
import { NavigationContainer } from '@react-navigation/native';
import { navigationRef } from 'navigation/NavigationService';

LogBox.ignoreLogs(['Require cycle:']);

const App: FunctionComponent = () => {
    return (
        <Provider store={store}>
            <PersistGate loading={<ActivityIndicator />} persistor={persistor}>
                <NavigationContainer ref={navigationRef}>
                    <Navigation />
                </NavigationContainer>
            </PersistGate>
        </Provider>
    );
};

export default App;
