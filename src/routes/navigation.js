import React from 'react-native'
import {StackNavigator} from 'react-navigation'
import Login from "../pages/login/Login";
import QuestionPage from "../pages/questions/QuestionPage"


const Nav = StackNavigator({
  Login: {
    screen: Login
  },
  QuestionPage: {
    screen: QuestionPage
  },
},
  {
   initialRouteName: 'Login',
    headerMode: 'none'
  }
);

export default Nav;