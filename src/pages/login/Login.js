import React, {Component} from 'react';
import {View,Text,StyleSheet,Image, KeyboardAvoidingView, TouchableOpacity} from 'react-native';

import LoginForm from './LoginForm'
import SignUp from "./SignUp";


export default class Login extends Component {

  render(){
    return (
      <KeyboardAvoidingView style={styles.container}>
        <View>
          <View style = {styles.logoContainer}>
            <Image
              source = {require('../../img/banana_logo.png')}
              style = {styles.logo}
            />
            <Text style = {styles.title}>Take This Quiz to Find Out What Kind of Banana You Are!</Text>
          </View>
          <View style = {styles.formContainer }>

              <LoginForm
                navigation = {this.props.navigation}
              />
          </View>
          <View style={styles.signupContainer}>
            <TouchableOpacity
              onPress = {() =>
              this.props.navigation.navigate('SignUp')}
            >
              <Text style={styles.signUpText}>Or Sign Up Here</Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
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
    height:100,
    width: 100,
    marginTop: 25

  },
  title:{
    marginHorizontal:40,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 24
  },
  signupContainer:{
    alignItems:'center',
    justifyContent: 'center',
  },
  signUpText:{
    textAlign: 'center',
    justifyContent: 'center',
    fontSize: 16,
    textDecorationLine:'underline'
  }

});


