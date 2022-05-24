import React from "react";
import { View, Text, StyleSheet } from "react-native";

const SecretKey = (props) => {
  return (
    <View>
      <Text style={styles.labelStyle}>{props.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  labelStyle: {
    marginVertical: 5,
    backgroundColor: "#445599",
    color: "#cceeff",
    padding: 10,
  },
});

export default SecretKey;
