import React, {Component} from 'react';
import {View,Text,StyleSheet,Image} from 'react-native';

export default class Login extends Component {
  render(){
    return (
      <View style ={styles.container}>
        <View style = {styles.logoContainer}>
          <Image
            source = {require('../../../src/img/banana_logo.png')}
            style = {styles.logo}
          />
          <Text style = {styles.title}>Take the Quiz to Find Out What Kind of Banana You Are</Text>
        </View>
        <View style = {styles.formContainer }></View>

    </View>
    );
  };
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#f9ca24'
  },
  logoContainer: {
    alignItems: 'center',
    flexGrow: 1,
    justifyContent: 'center'
  },
  logo:{
    width: 100,
    height: 100
  },
  title:{
    color: '#130f40',
    marginTop: 10,
    width: 170,
    textAlign: 'center',
    opacity: .8
  }

});


