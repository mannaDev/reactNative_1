import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const ImageDetailComp = (props) => {
  return (
    <View style={styles.bg}>
      <View style={{ padding: 10 }}>
        <Image source={props.imageSrc} />
      </View>
      <Text style={{ fontSize: 25, marginLeft: 5 }}>{props.title}</Text>
      <Text style={{ fontSize: 15, fontWeight: "bold", marginLeft: 5 }}>
        Image Score: {props.imageScore}
      </Text>
      <Text
        style={{
          marginVertical: 10,
          textDecorationLine: "underline",
          fontStyle: "italic",
          paddingHorizontal: 10,
        }}
      >
        {props.imageDetails}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  bg: {
    backgroundColor: "#aaeecc",
    marginBottom: 10,
  },
});

export default ImageDetailComp;
