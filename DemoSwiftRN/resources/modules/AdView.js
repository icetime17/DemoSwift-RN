
import React, { Component } from 'react';
import {
     AppRegistry,
     StyleSheet,
     View,
     Text,
     Image,
} from 'react-native';

import MyImageTextView  from '../../resources/js/MyImageTextView'

class AdView extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let imgUri = { uri: this.props.img };
        return (
            <View>
                <Image style={{width:200,height:100}}
                    source={imgUri}
                />
                <Text style={{width:200,height:30}}
                    style={{fontSize:20}}
                >
                    {this.props.title}
                </Text>
                <Text style={{width:200,height:15}}
                    style={{fontSize:15}}
                >
                    {this.props.desc}
                </Text>
            </View>
        )
    }
}

export default AdView;
