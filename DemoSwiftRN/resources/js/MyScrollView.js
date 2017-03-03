
import React, { Component } from 'react';
import {
     AppRegistry,
     StyleSheet,
     View,
     Text,
     Image,
     ScrollView,
} from 'react-native';

class MyScrollView extends Component {
    render() {
        let pic = {
            uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg',
        };
        return (
            <ScrollView>
                <Text style={{fontSize:15}}>Image 1</Text>
                <Image style={{width:200,height:100}}
                    source={require('../../resources/images/model.png')}
                />
                <Text style={{fontSize:15}}>Image 2</Text>
                <Image style={{width:200,height:100}}
                    source={require('../../resources/images/model.png')}
                />
            </ScrollView>
        );
    }
}

export default MyScrollView;
