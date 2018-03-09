import React, {Component} from 'react';
import{StyleSheet, View, TextInput,Text, TouchableOpacity} from 'react-native';

import Question from "../questions/Question";


 class LoginForm extends Component{


  render(){
    return(
      <View style = {styles.container}>

        <TextInput
          style={styles.uname}
          placeholder = "Username"
          returnKeyType='next'
          placeholderTextColor ='rgba(0,0,0,.5)'
          onSubmitEditing = {() => this.password.focus()}
          ref = {(uname) => this.username = uname}
          autoCapitalize ='none'
          autoCorrect = {false}
        />
        <TextInput
          style={styles.pword}
          placeholder = "Password"
          secureTextEntry
          placeholderTextColor ='rgba(0,0,0,.5)'
          ref={(input) => this.password = input}
        />
        <TouchableOpacity
          style = {styles.button}
          onPress ={() =>
            this.props.navigation.navigate('Question')
          }
                  >
          <Text style={styles.text}>
            Login
          </Text>
        </TouchableOpacity>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    alignContent: 'center',
    padding:20
  },

  uname:{
    height: 40,
    backgroundColor: 'rgba(255,255,255, .6)',
    fontFamily: 'Verdana',
    paddingHorizontal: 10,
    fontSize:18,
    marginBottom: 20
  },
  pword:{
    height: 40,
    backgroundColor: 'rgba(255,255,255, .6)',
    fontFamily: 'Verdana',
    paddingHorizontal:10,
    fontSize: 18,
    marginBottom: 145

  },
  text:{
    fontFamily: 'Verdana',
    fontSize: 24,
    textAlign: 'center',
    color:'rgba(0,0,0,.5)',
    fontWeight: '700'
  },
  button:{
    backgroundColor: '#6ab04c',
    alignContent:'center',
    paddingVertical: 5,
    padding: 30


  }
});

export default LoginForm;