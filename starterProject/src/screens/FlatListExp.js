import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';

const FlatListExp = () => {
    const dataVal = [
    {key: '0', propertyName: 'Tech M', propertyValue: '1234'},
    {key: '1', propertyName: 'SBI DB', propertyValue: '3400'},
    {key: '2', propertyName: 'ICICI CC AmazonPay', propertyValue: '6666'},
    {key: '3', propertyName: 'ICICI CC Coral', propertyValue: '7777'},
    {key: '4', propertyName: 'ICICI CC mmt', propertyValue: '8888'},
    {key: '5', propertyName: 'ICICI DB', propertyValue: '1212'},
    {key: '6', propertyName: 'ICICI netbanking', propertyValue: '33393'}];

    

    return <View style={styles.customBackground2}>
        <FlatList 
            data={dataVal}
            renderItem={(elem) => {
                return <View style={styles.customBackground1}>
                    <Text style={{fontSize: 20,marginLeft: '4%', color: '#ccffff'}}>{elem.item.propertyName}</Text>
                    <Text style={[styles.miniFont, styles.centeredText, styles.fontCOlor1]}>{elem.item.propertyValue}</Text>
                </View>
            }}
        />
    </View>
}

const styles = StyleSheet.create({
    bigFont : {
        fontSize: 25,
    },
    miniFont : {
        fontSize: 15,
    },
    marginOne:{
        marginLeft: '4%'
    },
    customBackground1: {
        backgroundColor: '#006666',
        marginVertical: '1%',
        marginHorizontal: '2%'
    },
    customBackground2: {
        backgroundColor: '#1affff'
    },
    centeredText: {
        padding: 5,
        paddingLeft: 25,
        textAlign: 'left',
        borderWidth: 1,
        backgroundColor: '#00cccc',        
        margin: '5%'
    },
    fontCOlor1: {
        color: '#004d4d'
    }
});

export default FlatListExp;