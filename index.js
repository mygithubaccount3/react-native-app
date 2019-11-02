import React from 'react';
import { Provider } from 'react-redux';
import {AppRegistry} from "react-native";
import {createStackNavigator, createAppContainer} from 'react-navigation';
import configureStore from './app/store';
import PicturesList from './app/components/PicturesList';
import Picture from "./app/components/Picture";

const store = configureStore();

const MainNavigator = createStackNavigator({
    PictureList: {screen: PicturesList},
    Picture: {screen: Picture},
}, {
    initialRouteName: "PictureList"
});

const AppContainer = createAppContainer(MainNavigator);

const ReactNativeApp = () => (
    <Provider store={store}>
        <AppContainer />
    </Provider>
);

AppRegistry.registerComponent("ReactNativeApp", () => ReactNativeApp);
