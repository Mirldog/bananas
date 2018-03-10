import React, {Component} from 'react';
import {View,Text,StyleSheet,Image, KeyboardAvoidingView} from 'react-native';

import LoginForm from './LoginForm'


export default class Login extends Component {

  render(){
    return (
        <View style ={styles.container}>
          <View style = {styles.logoContainer}>
            <Image
              source = {require('../../img/banana_logo.png')}
              style = {styles.logo}
            />
            <Text style = {styles.title}>Take This Quiz to Find Out What Kind of Banana You Are!</Text>
          </View>
          <View style = {styles.formContainer }>
            <KeyboardAvoidingView>
              <LoginForm
                navigation = {this.props.navigation}
              />
            </KeyboardAvoidingView>
          </View>
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
    width: 140,
    height: 140,
    marginTop: 40
  },
  title:{
    color: '#130f40',
    marginTop: 10,
    width: 170,
    textAlign: 'center',
    opacity: .8,
    fontWeight:'bold',
    fontSize: 22
  },
  formContainer:{
    marginBottom:50,
    paddingBottom: 50
  }

});


