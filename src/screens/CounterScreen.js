import React, { useState } from "react";
import { Text, View, StyleSheet, Button } from "react-native";

const CounterScreen = () => {
  let [counterVal, setCounterVal] = useState(0);
  return (
    <View>
      <Button title="Increase" onPress={() => setCounterVal(counterVal + 1)} />
      <Button title="Decrease" onPress={() => setCounterVal(counterVal - 1)} />
      <Text>Counter Value: {counterVal}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default CounterScreen;
