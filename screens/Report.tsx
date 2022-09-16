import React, { useState } from 'react';
import { View, StyleSheet, ImageBackground, Text, Image, Pressable, Alert, BackHandler } from 'react-native';
const image = require('../assets/sky.jpg')
import WeatherReport from './WeatherReport';
import { formatNumber } from '../app/helperFunction';

const Report = ({route}:any) => {
    const { capital, population, flags, lat_Lon } = route.params.countryData
    
    const formatPopulation = formatNumber(population)
    const [isVisible, setIsVisible] = useState(false)

    

    return (
        <View style={styles.container}>
            <View style={styles.childTopView}>
                <ImageBackground
                    source={image}
                    resizeMode='cover'
                    style={styles.image}
                    blurRadius={2}>
                </ImageBackground>
            </View>
            <View style={styles.childBottomView}>
                <View>
                    <Image source={{ uri: flags.png }} style={{ width: 100, height: 50 }} />
                    <Text style={styles.BottomView__title}>
                        {capital}
                    </Text>
                    <View style={styles.BottomView__desc}>
                        <View>
                            <Text>Population </Text>
                            <Text style={styles.BottomView__title}>
                                {formatPopulation}
                            </Text>
                        </View>
                        <View>
                            <Text>Latitude / Longitude</Text>
                            <Text style={styles.BottomView__title}>
                                {lat_Lon[0]} / {lat_Lon[1]}
                            </Text>
                        </View>
                    </View>
                </View>
                <View>
                    <Pressable
                    style={styles.BottomView__button}
                        onPress={() => setIsVisible(isVisible => !isVisible)}>
                        <Text style={styles.BottomView__buttonText}>{isVisible ? 'Hide weather' : 'Capital Weather'}</Text>
                    </Pressable>
                    {
                        isVisible ? <WeatherReport /> : null
                    }
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        backgroundColor: 'black'
    },
    childTopView: {
        flex: 0.5,
    },
    childBottomView: {
        flex: 1,
        padding: 25,
        backgroundColor: "#fff",
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        borderWidth: 1,
        borderColor: '#fff',
    },
    BottomView__title: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#2a2a2a'
    },
    BottomView__desc: {
        paddingVertical: 10
    },
    BottomView__button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: 'black',
    },
    BottomView__buttonText:{
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
    },
    image: {
        flex: 1,
        marginBottom: -50
    },
});

export default Report;