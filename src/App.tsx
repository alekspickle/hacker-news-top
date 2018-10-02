import React from "react";
import { Component } from "react";
import { StyleSheet, View } from "react-native";

import StoryList from "./components/StoryList";

type Props = { name: string };

class App extends Component<Props> {
  render() {
    console.disableYellowBox = true;

    return (
      <View style={styles.container}>
        <StoryList name="Hacker News Top" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
});

const mapStateToProps = (state: any) => ({
  user: state.user
});

export default App;
