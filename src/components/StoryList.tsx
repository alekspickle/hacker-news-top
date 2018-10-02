import React from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  FlatListProps,
  ListRenderItem
} from "react-native";
import Story from "./Story";
import { mockTop, mockUser } from "../constants";

export interface StoryType {
  by: string;
  descendants: number;
  id: number;
  kids: [];
  score: number;
  time: Date;
  title: string;
  type: string;
  url: string;
}
export interface Props {
  name: string;
}

interface State {}

class StoryList extends React.PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);
  }

  renderItem = (item: any): JSX.Element => {
      
    return <Story title={item.title} time={item.time} name={item.by} />;
  };

  render() {
    const { name } = this.props;
    return (
      <View style={styles.root}>
        <Text style={styles.header}>{name}</Text>
        <View style={styles.list}>
          <FlatList data={mockTop} renderItem={item => this.renderItem(item)} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    alignItems: "center",
    alignSelf: "center"
  },
  header: {
      marginTop: 10,
    fontSize: 20
},
  list: {
    padding: 10,
    paddingBottom: 0,
    backgroundColor: "#8134f8",
    marginBottom: '9%'
  },
  item: {
    flex: 1
  },
});

export default StoryList;
