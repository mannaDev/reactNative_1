import React, { useState } from "react";
import { View, Text, StyleSheet, FlatList, Button } from "react-native";
import SecretKey from "../components/SecretKey";

const VaultScreen = () => {
  let [allKeys, setAllKeys] = useState([]);
  const refreshAPI = async () => {
    console.log("Test -------><----- ");
    let response = await fetch("https://meracle.in/getMeMyCode/allFields__");
    let rcvd_data = await response.json();
    console.log(rcvd_data);
    setAllKeys(rcvd_data);
  };

  return (
    <View>
      <Button
        style={{ marginVertical: 10 }}
        onPress={() => {
          refreshAPI();
        }}
        title="Load Keys"
      />
      <FlatList
        keyExtractor={(item) => item.uniqId}
        data={allKeys}
        renderItem={({ item }) => {
          return (
            <SecretKey title={item.walletField} passkey={item.walletPassKey} />
          );
          //   <Text style={styles.labelStyle}>{item.walletField}</Text>;
        }}
      />
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

export default VaultScreen;
