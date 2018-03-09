import React, {Component} from 'react'
import {View, Text, StyleSheet} from 'react-native'

type things = {
  questionNumber: number,
  answered: boolean,
  score: number,
  allAnswered:boolean

};




class Question extends Component<things>{

  static defaultProps ={
    questionNumber: 1,
    answered: false,
    score: 0,
    allAnswered: false
  };

   nextQuestion(){
     this.setState({questionNumber: this.props.questionNumber + 1});
  }

  getQuestionNumber() {
     if(this.props.answered) this.nextQuestion();
    return (<Text>{this.props.questionNumber}</Text>)
  }



  render(){
    const {questionNumber, allAnswered, score, answered} = this.props;

    return(
      <View style = {styles.container}>
        <Text style={styles.qnumber}>

          Question number: {this.getQuestionNumber()}

        </Text>

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
    paddingTop: 25
  }
});

export default Question;
