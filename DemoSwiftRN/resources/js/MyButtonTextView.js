
import React, { Component } from 'react';
import {
     AppRegistry,
     StyleSheet,
     View,
     Button,
     Text,
     Alert,
} from 'react-native';

class MyButtonTextView extends Component {
    render() {
        return(
            <View style={{width:200,height:100}}>
                <Button style={{width:200,height:50,color:'blur'}}
                    title={this.props.title}
                    onPress={this.props.action}
                />
                <Text style={{width:200,height:30,fontSize:12, color:'blue'}}
                    style={{backgroundColor: 'powderblue'}}
                >
                    {this.props.desc}
                </Text>
            </View>
        )
    }
}

class MyButtonTextViewFlex extends Component {
    render() {
        return(
            <View style={{flex:1,flexDirection: 'column'}}>
                <Button style={{flex:1,color:'blur'}}
                    title={this.props.title}
                    onPress={this.props.action}
                />
                <Text style={{flex:1,fontSize:12, color:'blue'}}
                    style={{backgroundColor: 'black'}}
                >
                    {this.props.desc}
                </Text>
            </View>
        )
    }
}

function onButtonPressed() {
    Alert.alert('Button has been pressed!');
}

const onButtonPressGlobal = () => {
  Alert.alert('Button has been pressed!');
};

// 指定默认的export
export default MyButtonTextView;
