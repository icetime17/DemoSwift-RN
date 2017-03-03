
import React, { Component } from 'react';
import {
     AppRegistry,
     StyleSheet,
     View,
     Image,
     Text,
} from 'react-native';

class MyImageTextView extends Component {
    render() {
        let pic = {
            uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg',
        };
        return (
            <View style={{width:200,height:150}}>
                <Image style={{width:200,height:100}}
                    source={pic}
                />
                <Text style={{width:200,height:50}}>
                    {pic.uri}
                </Text>
            </View>
        );
    }
}

// 指定默认的export
export default MyImageTextView;
