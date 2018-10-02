import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";

export interface Props {
  title: string;
  time: Date;
  name: string;
}

interface State {}

class Story extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {};
  }

  render() {
    const { title, time, name } = this.props;
    return (
      <View style={styles.root}>
        <View style={styles.text}>
          <Text style={styles.title}>{title || "sdfsd"}</Text>
          <Text style={styles.title}>{name || "none"}</Text>
        </View>
        <View style={styles.body}>
          <Text>{time}</Text>
        </View>
        <View style={styles.buttons}>
          <View style={styles.button}>
            <Button
              title="-"
              onPress={() => {}}
              accessibilityLabel="decrement"
              color="red"
            />
          </View>

          <View style={styles.button}>
            <Button
              title="+"
              onPress={() => {}}
              accessibilityLabel="increment"
              color="blue"
            />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    backgroundColor: "#0f0",
    alignItems: "center",
    alignSelf: "center"
  },
  text: {
    color: "black"
  },
  buttons: {
    flexDirection: "row",
    minHeight: 70,
    alignItems: "stretch",
    alignSelf: "center",
    borderWidth: 5,
    backgroundColor: '#8134f8'
  },
  button: {
    flex: 1,
    paddingVertical: 0
  },
  body: {
    height: 70,
    width: "100%",
    backgroundColor: "#66ffff55"
  },
  title: {
    padding: 50,
    width: "100%",
    color: "#999",
    fontWeight: "bold"
  }
});

export default Story;
