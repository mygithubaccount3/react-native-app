import React, {Component} from 'react';
import {AppRegistry, View, Image, StyleSheet} from 'react-native';

export default class Picture extends Component{
    static navigationOptions = {
        title: "Picture"
    };
    render(){
        return(
            <View style={styles.list}>
                <Image
                    style={{flex: 1}}
                    source={{uri: this.props.navigation.getParam('url') }}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    list: {
        flex: 1,
        alignItems: "stretch"
    }
});

AppRegistry.registerComponent('Picture', () => Picture);
