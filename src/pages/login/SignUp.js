
import React, {Component} from 'react'
import {View,Text,TouchableOpacity,TextInput,KeyboardAvoidingView,StyleSheet} from 'react-native'

class SignUp extends Component{

  constructor(props){
    super(props);
  }

  render(){
    return(
      <KeyboardAvoidingView style ={styles.container}>
        <View>

        </View>
      </KeyboardAvoidingView>
    );
  }

}

const styles = StyleSheet.create({
  container:{
    flex:1
  }

});


export default SignUp;