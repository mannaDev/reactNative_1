import React from 'react';
import {ImageBackground, Text, StyleSheet, View} from 'react-native';

const image = { uri: "https://reactjs.org/logo-og.png" };

const ComponentsScreen = () => {
    const hola = 'Hi there!';
    const greetings = <Text style={styles.myColor1}>Have a nice Day!</Text>;

    return <View style={styles.container}>
        <ImageBackground source={image} resizeMode="cover" style={styles.image}>
            <Text style={styles.myStyle}>Oi. this is the 2nd Tab!</Text>
            <Text style={styles.myColor2}>{hola}</Text>
            {greetings}
        </ImageBackground>
    </View>
}

const styles = StyleSheet.create({
    myStyle : {
        fontSize: 25,
        color: '#eef',
    },
    myColor1 : {
        color: '#85a',
    },
    myColor2 : {
        color: '#999',
        backgroundColor: '#0000ffa5'
    },
    container: {
        flex: 1,
    },
    image: {
        flex: 1,
        /*justifyContent: "center"*/
    },
});

export default ComponentsScreen;