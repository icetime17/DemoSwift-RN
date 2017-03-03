
import React, { Component } from 'react';
import {
     AppRegistry,
     StyleSheet,
     View,
     Text,
     Image,
     ListView,
} from 'react-native';

class MyListView extends Component {
    // 需要准备datasource和renderRow, 与iOS的基本一致.
    constructor(props) {
        super(props)
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            dataSource: ds.cloneWithRows(['Chris', 'River'])
        };
    }

    // 在ListView中指定dataSource与renderRow的内容.
    render() {
        return (
            <ListView
                dataSource={this.state.dataSource}
                renderRow={ (rowData) =>
                    <View>
                        <Text>{rowData}</Text>
                        <Image style={{width:200,height:100}}
                            source={require('../../resources/images/model.png')}
                        />
                    </View>
                }
            >
            </ListView>
        );
    }
}

// 指定默认的export
export default MyListView;
