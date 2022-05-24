import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";

const ListScreen = (props) => {
  const friends = [
    { name: "FRND#1", age: 23 },
    { name: "FRND#2", age: 27 },
    { name: "FRND#3", age: 31 },
    { name: "FRND#4", age: 21 },
    { name: "FRND#5", age: 29 },
    { name: "FRND#6", age: 22 },
    { name: "FRND#7", age: 27 },
    { name: "FRND#8", age: 25 },
    { name: "FRND#9", age: 21 },
  ];

  //   const renderItem = ({ item }) => <Text>{item.name}</Text>;

  return (
    <View>
      <FlatList
        keyExtractor={(item) => item.name}
        data={friends}
        renderItem={({ item }) => {
          return (
            <Text style={styles.fontStyle}>
              {item.name} Age: {item.age}
            </Text>
          );
        }}
      />
      <TouchableOpacity
        style={styles.style1}
        onPress={() => props.navigation.navigate("Home")}
      >
        <Text>BACK</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  fontStyle: {
    fontSize: 20,
    color: "#6e5e88",
  },
  style1: {
    marginVertical: 10,
    backgroundColor: "#ddaa99",
    padding: 10,
  },
});

export default ListScreen;
