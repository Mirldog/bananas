import React, {Component} from 'react'
import {View, Text, StyleSheet} from 'react-native'
import Question from './Question'

type things = {
  questionNumber: number,
  answered: boolean,
  score: number,
  allAnswered:boolean,
  username: string

};




class QuestionPage extends Component{

  static defaultProps ={
    questionNumber: 1,
    answered: false,
    score: 0,
    allAnswered: false,
  };

   nextQuestion(){
     this.setState({questionNumber: this.props.questionNumber + 1});
     this.setState({answered: this.props.answered = false});
  }

  getQuestionNumberText() {
     if(this.props.answered) this.nextQuestion();
    return (<Text>{this.props.questionNumber}</Text>)
  }

  getQuestionNumber(){
     return this.props.questionNumber
  }


  render(){
    const {questionNumber, allAnswered, score, answered} = this.props;

    return(
      <View style = {styles.container}>
        <Text style={styles.qnumber}>

          Question number: {this.getQuestionNumberText()}

        </Text>
        <View style = {styles.question}>
          <Question num = {this.getQuestionNumber()} username = {this.props.username}> </Question>
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

  qnumber:{
    fontSize: 30,
    textAlign: 'center',
    paddingTop: 60,
    fontWeight: 'bold'
  },

  question:{
    paddingTop: 20,
    paddingHorizontal: 20,
    marginBottom: 40,
    flex: 1
  }
});

export default QuestionPage;
