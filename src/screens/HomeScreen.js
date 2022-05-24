import React from "react";
import { Text, View, Button, StyleSheet, TouchableOpacity } from "react-native";

const HomeScreen = (props) => {
  return (
    <View>
      <Text style={styles.text}>HomeScreen</Text>
      <Button
        style={styles.vertMargin}
        onPress={() => props.navigation.navigate("List")}
        title="Goto Listscreen"
      />
      <Button
        style={styles.vertMargin}
        onPress={() => props.navigation.navigate("List2")}
        title="Goto ListscreenX"
      />
      <Button
        style={styles.vertMargin}
        onPress={() => props.navigation.navigate("ListAPI")}
        title="Goto ListscreenAPI"
      />
      <Button
        style={styles.vertMargin}
        onPress={() => props.navigation.navigate("Vault")}
        title="Goto Vaults"
      />
      <Button
        style={styles.vertMargin}
        onPress={() => props.navigation.navigate("ImageScreen")}
        title="Goto Imagescreen"
      />
      <Button
        style={styles.vertMargin}
        onPress={() => props.navigation.navigate("CounterScreen")}
        title="Goto Counters"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
  style1: {
    marginVertical: 10,
    backgroundColor: "#ddaa99",
    padding: 10,
  },
  vertMargin: {
    marginVertical: 5,
  },
});

export default HomeScreen;
