import React from "react";
import {
  Text,
  View,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

const ListScreenAPI = (props) => {
  let outputList = [];
  let username = "kaushal";

  return (
    <View>
      <Text style={styles.style1}>Hello User - {username}</Text>
      <Text>{outputList}</Text>
      {/* <FlatList
            data={outputList}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
        /> */}
      <TouchableOpacity
        style={styles.style12}
        onPress={() => props.navigation.navigate("Home")}
      >
        <Text> BACK</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  style1: {
    fontSize: 25,
  },
  style12: {
    marginVertical: 10,
    backgroundColor: "#ddaa99",
    padding: 10,
  },
});

export default ListScreenAPI;
