import React from "react";
import { ScrollView, Text, StyleSheet } from "react-native";
import ImageDetailComp from "../components/ImageDetailComp";

const ImageScreen = () => {
  return (
    <ScrollView>
      <ImageDetailComp
        title="Forest"
        imageSrc={require("../../assets/forest.jpg")}
        imageScore="7"
        imageDetails="If a promise resolves normally, of a rejection, it throws the error, statement at that line."
      />
      <ImageDetailComp
        title="Ocean"
        imageSrc={require("../../assets/ocean.jpeg")}
        imageScore="8"
        imageDetails="If a promise resolves normally, then await promise returns the result."
      />
      <ImageDetailComp
        title="Mountain"
        imageSrc={require("../../assets/mountain.jpg")}
        imageScore="6"
        imageDetails="If a it throws the error, just as if there were a throw statement at that line."
      />
      <ImageDetailComp
        title="Beach"
        imageSrc={require("../../assets/beach.jpg")}
        imageScore="7"
        imageDetails="If a promise resolves normally, rejection, it throws the error, just as if there were."
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  verticalMargin: {
    marginVertical: 10,
  },
});

export default ImageScreen;
