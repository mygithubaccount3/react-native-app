import React, {Component} from 'react';
import {View, Image, StyleSheet} from 'react-native';

export default class Picture extends Component{
    static navigationOptions = ({ navigation }) => {
        return {
            title: navigation.getParam("pictureTitle") ? navigation.getParam("pictureTitle") + "'s image" : "Unknown author"
        }
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
