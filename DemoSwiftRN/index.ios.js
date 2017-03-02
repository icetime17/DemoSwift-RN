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
     View
} from 'react-native';

class DemoSwiftRN extends Component {
    render() {
    var contents = this.props["scores"].map(
      score => <Text key={score.name}>{score.name}:{score.value}{"\n"}</Text>
    );
    let pic = {
        uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg',
    };
    return (
      <View style={styles.container}>
        <Text style={styles.highScoresTitle}>
          2048 High Scores!
        </Text>
        <Text style={styles.scores}>
          {contents}
        </Text>

        <Image source={pic} style={{width:200,height:100}}/>

        <MyImageTextView style={{width:200,height:200}}>
        </MyImageTextView>
      </View>
    );
  }

}


class MyImageTextView extends Component {
    render() {
        let pic = {
            uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg',
        };
        return (
            <View style={{width:200,height:200}}>
                <Image source={pic} style={{width:150,height:100}}/>
                <Text style={{width:200,height:50}}>
                    {pic.uri}
                </Text>
            </View>
        );
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
