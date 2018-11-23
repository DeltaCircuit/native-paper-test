import React, { Component } from "react";
import { Headline, Provider as PaperProvider } from "react-native-paper";
import "./App.css";

class App extends Component {
  render() {
    return (
      <PaperProvider>
        <Headline>Made With React Native!</Headline>
      </PaperProvider>
    );
  }
}

export default App;
