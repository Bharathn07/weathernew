import { useRoute } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { View, StyleSheet, ImageBackground, Text, Image, Button } from 'react-native';
const image = require('../assets/sky.jpg')
const Countries = () => {
    const route:any = useRoute()
    const { capital } = route.params.countryData

    

    return (
        <View style={styles.container}>
            <View>
                <Text>something</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection:'column',
        justifyContent: 'flex-start',
        backgroundColor: 'black'
    }
});

export default Countries;