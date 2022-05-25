import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const SecretKey = (props) => {
  console.log(props);
  return (
    <View>
      {/*  */}
      <TouchableOpacity
        style={styles.labelStyle}
        // onPress={() => {
        //   props.navigation.navigate("VaultSecret");
        // }}
      >
        <Text style={styles.textClr}>{props.title}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  labelStyle: {
    marginVertical: 5,
    backgroundColor: "#445599",
    // width: 300,
    paddingHorizontal: 15,
    paddingVertical: 5,
  },
  textClr: {
    color: "#cceeff",
    backgroundColor: "#223344ee",
    padding: 8,
  },
});

export default SecretKey;
