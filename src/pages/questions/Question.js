import React, {Component} from 'react'
import {View, Text} from 'react-native'

const QUESTION_1 = "What is your stance on puppies?";
const QUESTION_2 = "Do you chew with your mouth closed?";
const QUESTION_3 = "For ten dollars would you slap a baby?";


class Question extends Component{

  constructor(num){
    super(props);
    this.props.num = num;
  }

  static getQuestion(num){
    if(num === 1){
      return <Text>{QUESTION_1}</Text>
    }
    else if(num === 2){
      return <Text>{QUESTION_2}</Text>
    }
    else{
      return <Text>{QUESTION_3}</Text>
    }
  }

  render(){
    return(
      <View style = {styles.container}>
        {this.getQuestion(this.props.num)}
      </View>

    );
  }

}

const styles = {
  container: {
    flex: 1
  }
};


export default Question;