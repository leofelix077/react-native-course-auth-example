import React, { Component } from 'react';
import { View } from 'react-native';
import { Header } from "./components/common";
import { Button } from "./components/common";
import { Spinner } from "./components/common";
import LoginForm from "./components/LoginForm"
/* import firebase from "firebase"; */

class App extends Component {
  state = { loggedIn: true }

  /*   firebaseConfig = {
      apiKey: "AIzaSyBj0AOnfUIpF2Tc4NEDiHdoCi_962td4ZU",
      authDomain: "react-course-authenticat-2734e.firebaseapp.com",
      databaseURL: "https://react-course-authenticat-2734e.firebaseio.com",
      projectId: "react-course-authenticat-2734e",
      storageBucket: "react-course-authenticat-2734e.appspot.com",
      messagingSenderId: "413657619757"
    }
    firebase.auth().onAuthStateChanged((user) =>{
      if (user) {
        this.setState({loggedIn:true});
      } else {
        this.setState({loggedIn:false});
      }
    });
   */
  componentWillMount() {
    /*     firebase.initializeApp(firebaseConfig); */
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return <LoginForm />
      case false:
        return (
          <Button onPress={() => {}}>
          /* firebase.auth().signOut()) */
          
            Log Out
            </Button >
        )
      default:
    return (
      <View style={styles.spinnerContainerStyle}>
        <Spinner style={styles.spinnerStyle} size="large" />
      </View>
    )

    }
  }

render() {
  return (
    <View>
      <Header headerText="Authentication" />
      {this.renderContent()}
    </View>
  );
}
}

const styles = {
  spinnerContainerStyle: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: 'center'
  },
  spinnerStyle: {
    flex: 1,
    alignSelf: 'center'
  }
}


export default App;
