import React, {Component} from 'react';
import {AppRegistry, Text, View, FlatList, Image, StyleSheet, TouchableOpacity} from 'react-native';
import store from '../store'
import {receive_images} from "../actions/fetchAction";

export default class PicturesList extends Component{
    constructor(props){
        super(props);
        this.state = {
            list: []
        }
    }
    componentDidMount() {
        fetch('http://api.unsplash.com/photos/?client_id=cf49c08b444ff4cb9e4d126b7e9f7513ba1ee58de7906e4360afc1a33d1bf4c0')
            .then(res => res.json())
            .then(res => {
                store.dispatch(receive_images(res));
                this.setState({
                    list: res
                });
            })
    };
    static navigationOptions = {
        title: "Gallery",
    };
    render(){
        return(
            <View style={styles.list}>
                <FlatList keyExtractor={(item, index) => index.toString()} data={store.getState().images} renderItem={({item}) => (
                    <View style={styles.item}>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('Picture', {
                            url: item.urls.regular,
                            pictureTitle: item.user.username
                        })}>
                            <Image source={{uri:item.urls.regular}} style={styles.image}/>
                        </TouchableOpacity>
                        <Text style={styles.author}>{item.user.name}</Text>
                        <Text style={styles.title}>{item.description ? item.description : item.alt_description ? item.alt_description : "No description"}</Text>
                    </View>

                    )}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    list: {
      paddingBottom: 20
    },
    item: {
        marginTop: 20,
        marginBottom: 20,
        alignItems: "center"
    },
    image: {
        height: 300,
        width: 300,
        marginBottom: 10
    },
    author: {
        textAlign: "center",
        width: 250,
        fontFamily: "Roboto-Bold"
    },
    title: {
        textAlign: "center",
        width: 250,
        fontFamily: "Roboto-Italic"
    }
});

AppRegistry.registerComponent('PicturesList', () => PicturesList);
