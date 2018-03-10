import React, {Component} from 'react'
import {View, Text, StyleSheet} from 'react-native'
import Question from './Question'

type things = {
  questionNumber: number,
  answered: boolean,
  score: number,
  allAnswered:boolean

};




class QuestionPage extends Component<things>{

  static defaultProps ={
    questionNumber: 1,
    answered: false,
    score: 0,
    allAnswered: false
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

        <Question style={styles.question} num = {this.getQuestionNumber()}> </Question>


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
    fontSize: 20,
    textAlign: 'center',
    paddingTop: 40,
    fontWeight: 'bold'
  },

  question:{
    marginBottom: 140
  }
});

export default QuestionPage;
