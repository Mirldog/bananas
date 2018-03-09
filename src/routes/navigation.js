import React from 'react-native'
import {StackNavigator} from 'react-navigation'
import Login from "../pages/login/Login";
import Question from "../pages/questions/QuestionPage";



const Nav = StackNavigator({
  Login: {
    screen: Login
  },
  Question: {
    screen: Question
  },
},
  {
   initialRouteName: 'Login',
    headerMode: 'none'
  }
);

export default Nav