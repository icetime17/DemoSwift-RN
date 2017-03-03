
import React, { Component } from 'react';
import {
     AppRegistry,
     StyleSheet,
     View,
     Text,
} from 'react-native';

class MyBlinkTextView extends Component {
    constructor(props) {
        super(props);
        this.state = { showText: true };
        setInterval(() => {
            // 必须使用setState，不能直接赋值
            this.setState({ showText: !this.state.showText });
        }, 1000);
    }

    render() {
        let textToShow = this.state.showText ? this.props.text : '';
        return (
            <Text>{textToShow}</Text>
        )
    }
}

export default MyBlinkTextView;
