import React, {Component} from 'react';
import {Text, View, FlatList, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {connect} from "react-redux";
import {itemsFetchData} from "../actions/fetchAction";

class PicturesList extends Component{
    componentDidMount() {
        this.props.fetchData('http://api.unsplash.com/photos/?client_id=cf49c08b444ff4cb9e4d126b7e9f7513ba1ee58de7906e4360afc1a33d1bf4c0');
    }
    static navigationOptions = {
        title: "Gallery"
    };
    render(){
        return(
            <View style={styles.list}>
                <FlatList keyExtractor={(item, index) => index.toString()} data={this.props.items} renderItem={({item}) => (
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

const mapStateToProps = (state) => {
    return {
        items: state.items
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: (url) => dispatch(itemsFetchData(url))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(PicturesList);

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
