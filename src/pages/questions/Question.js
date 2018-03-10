import React, {Component} from 'react'
import {View, Text} from 'react-native'

const QUESTION_1 = "Is your body a temple?";
const QUESTION_2 = "Do you chew with your mouth closed?";
const QUESTION_3 = "For ten dollars would you slap a baby?";


class Question extends Component{

  getQuestion = (num) => {
    if(num === 1){
      return <Text style = {styles.question}>{QUESTION_1}</Text>
    }
    else if(num === 2){
      return <Text style = {styles.question}>{QUESTION_2}</Text>
    }
    else{
      return <Text style = {styles.question}>{QUESTION_3}</Text>
    }
  };

  constructor(props){
    super(props);
    this.setState= {
      username: this.props.username
    }
  }

  render(){
    const {num,username} = this.props;

    return(
      <View style = {styles.container}>
        {this.getQuestion(num)}
      </View>

    );
  }

}

const styles = {
  container: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,.2)',
    paddingTop: 40,
    paddingBottom: 80,
    paddingHorizontal: 20
  },
  question: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
    fontFamily:'Verdana'
  }
};




export default Question;