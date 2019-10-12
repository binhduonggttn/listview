import React, { Component } from 'react';
import { FlatList, StyleSheet, Text, View, TouchableHighlight, Alert,Image,Button } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

// import Swipeout from 'react-native-swipeout';

class HomeScreen extends React.Component {

  constructor(props){
    super(props);
    this.state = {danhsach:[
      {monhoc:' Android ',nganhhoc:'CNTT'},
      {monhoc:'Android',nganhhoc:'CNTT'},
      {monhoc:'Android',nganhhoc:'CNTT'},
      {monhoc:'Android',nganhhoc:'CNTT'},

      ]}
    }

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.danhsach}
          renderItem={({item})=> (
              <TouchableHighlight onPress={() => this.props.navigation.navigate('Details'),{'monhoc': item.danhsach, 'nganhhoc' : item.danhsach}} >

              <View style={styles.duongvien}>

                  <View style={{flex: 3, flexDirection: 'row', }}>
                    <Image style={{width:80, height:80, borderRadius:50}}
                      source={require('D:/newProject/ListViews/logo1.png')}/>
                  </View>

                  <View style={{flex: 7, }}>
                    <Text style={styles.cusText}>Mon Hoc: {item.monhoc}</Text>
                    <Text style={styles.cusText}>Nghanh Hoc: {item.nganhhoc}</Text>
                  </View>

              </View>

            </TouchableHighlight>
            )}

        />
      </View>
    );
  }
}

class DetailsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
        <Text>
          {this.props.navigation.getParam('monhoc', 'defaultValue')}
          {this.props.navigation.getParam('nganhhoc', 'defaultValue')}
        </Text>
        <Button
          title="Go to Details... again"
          onPress={() => this.props.navigation.navigate('Details')}
        />
      </View>
    );
  }
}

const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Details: DetailsScreen,
  },
  {
    initialRouteName: 'Home',
  }
);

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 22,
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
  duongvien: {
    borderBottomWidth: 1,
    flex: 1,
    flexDirection: 'row'
  },
})
