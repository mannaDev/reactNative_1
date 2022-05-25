import React from "react";
import { View, Text, StyleSheet } from "react-native";

const VaultSecret = (props) => {
  //   console.log(props);
  //   console.log(props.navigation.state.params);

  return (
    <View style={styles.style1}>
      <Text style={styles.style2}>{props.navigation.state.params.passKey}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  style1: {
    backgroundColor: "#aaccff",
    paddingHorizontal: 20,
    paddingVertical: 5,
  },
  style2: {
    color: "#112233",
    // fontSize: 10,
    backgroundColor: "#8ad",
    padding: 10,
    borderBottomColor: "#3333ff",
    // borderStyle: "solid",
  },
});

export default VaultSecret;
