import React, {Component} from 'react'
import {View, Text, StyleSheet} from 'react-native'

type things = {
  questionNumber: number,
  answered: boolean,
  score: number,
  allAnswered:boolean

};


const QUESTION_1 = "What is your stance on puppies?";
const QUESTION_2 = "Do you chew with your mouth closed?";
const QUESTION_3 = "For ten dollars would you slap a baby?";

function getQuestionNumber(){
  return (<Text>{this.things.questionNumber}</Text>)
}

class Question extends Component{



  render(){

    return(
      <View style = {styles.container}>


      </View>

    );
  };


}



const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default Question;
