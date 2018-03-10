import React, {Component} from 'react';
import{StyleSheet, View, TextInput,Text, TouchableOpacity,KeyboardAvoidingView} from 'react-native';

import QuestionPage from "../questions/QuestionPage";


 class LoginForm extends Component{

   constructor(props){
     super(props);
     this.state ={
       username: this.props.username
     }
   }


  render(){

    return(

      <View style = {styles.container}>

        <KeyboardAvoidingView behaior = "padding">

          <TextInput
            style={styles.uname}
            placeholder = "Username"
            returnKeyType='next'
            placeholderTextColor ='rgba(0,0,0,.5)'
            onSubmitEditing = {() => this.password.focus()}
            ref = {(uname) => this.username = uname}
            onChangeText ={(text) => this.setState({username: text})}
            autoCapitalize ='none'
            autoCorrect = {false}
          />
          <TextInput
            style={styles.pword}
            placeholder = "Password"
            secureTextEntry
            placeholderTextColor ='rgba(0,0,0,.5)'
            ref={(input) => this.password = input}
            autoCapitalize = 'none'
            autoCorrect = {false}
          />
          <TouchableOpacity
            style = {styles.button}
            onPress ={() =>
              this.props.navigation.navigate('QuestionPage',this.username)
            }
                    >
            <Text style={styles.text}>
              Login
            </Text>
          </TouchableOpacity>
        </KeyboardAvoidingView>

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
    marginBottom: 20
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
    marginBottom: 30


  }
});

export default LoginForm;