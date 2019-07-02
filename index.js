import React, {Component} from 'react';
import {AppRegistry} from 'react-native';
import store from './app/store'
import {Provider} from 'react-redux'
import App from './App'

export default class ReactNativeApp extends Component{
    render(){
        return(
            <Provider store={store}>
                <App />
            </Provider>
        );
    }
}

AppRegistry.registerComponent('ReactNativeApp', () => ReactNativeApp);
