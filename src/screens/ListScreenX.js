import React from "react";
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  TouchableOpacity,
  Button,
} from "react-native";

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "First Item",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Second Item",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Third Item",
  },
];

const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

const ListScreenX = (props) => {
  const renderItem = ({ item }) => <Item title={item.title} />;
  let username = "Name Prints on Click - [Print Name]";

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={(renderItem) => {
          return <Text style={styles.style1}>{renderItem.item.title}</Text>;
        }}
        keyExtractor={(item) => item.id}
      />

      <Button
        title="Print Name"
        onPress={() => {
          username = "Kaushal";
        }}
      />
      <Text>{username}</Text>

      <TouchableOpacity
        style={styles.style12}
        onPress={() => props.navigation.navigate("Home")}
      >
        <Text>BACK</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
  style1: {
    fontSize: 15,
    backgroundColor: "#eeaaaa",
    padding: 15,
    margin: 5,
  },
  style12: {
    marginVertical: 10,
    backgroundColor: "#ddaa99",
    padding: 10,
  },
});

export default ListScreenX;
