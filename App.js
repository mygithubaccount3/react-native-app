import React, {Component} from 'react';
import {createStackNavigator, createAppContainer} from 'react-navigation';
import { connect } from "react-redux";
import PicturesList from './app/components/PicturesList'
import Picture from './app/components/Picture'

const MainNavigator = createStackNavigator({
    PictureList: {screen: PicturesList},
    Picture: {screen: Picture},
  }, {
      initialRouteName: "PictureList"
    });

const AppContainer = createAppContainer(MainNavigator);

class App extends Component {
  render() {
    return (
      <AppContainer />
    );
  }
}

const mapStateToProps = state => {
  return {
    data: state
  };
};

export default connect(mapStateToProps)(App);
