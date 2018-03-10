import React, {Component} from 'react';
import Nav from './src/routes/navigation'


class App extends Component {


  render() {
    return (

      <Nav/>


    );
  }
}


Expo.ScreenOrientation.allow(Expo.ScreenOrientation.Orientation.PORTRAIT_UP);

export default App;
