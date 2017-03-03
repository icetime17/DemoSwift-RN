/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
     AppRegistry,
     StyleSheet,
     Text,
     Image,
     View,
     Alert,
} from 'react-native';


// Custom View
import MyListView       from './resources/js/MyListView'
import MyScrollView     from './resources/js/MyScrollView'
import MyImageTextView  from './resources/js/MyImageTextView'
import MyButtonTextView from './resources/js/MyButtonTextView'
import MyButtonTextViewFlex from './resources/js/MyButtonTextView'
import MyBlinkTextView  from './resources/js/MyBlinkTextView'
// Custom View

// Custom Module
import AdView  from './resources/modules/AdView'
// Custom Module


class DemoSwiftRN extends Component {
    render() {
    var contents = this.props["scores"].map(
      score => <Text key={score.name}>{score.name}:{score.value}{"\n"}</Text>
    );
    let pic = {
        uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg',
    };
    console.log('this is a console log');
    return (
      <View style={styles.container}>
        <Text style={styles.highScoresTitle}>
          2048 High Scores!
        </Text>
        <Text style={styles.scores} style={{fontSize:15}}>
          {contents}
        </Text>

        <AdView style={{width:200,height:30}}
            title='title'
            desc='this is desc'
            img='http://images.china.cn/attachement/jpg/site1000/20130318/001ec949ff4212b1122848.jpg'
        />

        <MyBlinkTextView style={{width:200,height:30}}
            text='This is a blink text'
        />
        <Image style={{width:200,height:100}}
            source={pic}
        />
        <MyImageTextView style={{width:200,height:150}}
        />

        <MyButtonTextView style={{width:200,height:100}}
            title='Button1'
            desc='Button1 Desc'
            action={onButtonPressed_1}
        />
        <MyButtonTextViewFlex style={{width:200,height:100}}
            title='Button2'
            desc='Button2 Desc'
            action={onButtonPressed_2}
        />

        <MyListView style={{width:200,height:400}}
        />

        <MyScrollView style={{width:200,height:400}}
        />
      </View>
    );
  }

}

function onButtonPressed_1() {
    Alert.alert('Button1 has been pressed!');
}

function onButtonPressed_2() {
    Alert.alert('Button2 has been pressed!');
}


class DemoFlex extends Component {
    render() {
        return (
            // 尝试把`flexDirection`改为`column`看看
                  <View style={{flex: 1, flexDirection: 'row'}}>
                    <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
                    <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
                    <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
                  </View>
        )
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  highScoresTitle: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  scores: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('DemoSwiftRN', () => DemoSwiftRN);
