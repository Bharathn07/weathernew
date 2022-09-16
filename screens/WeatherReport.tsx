import { useRoute } from '@react-navigation/native';
import React, { useState, useEffect } from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import getWeatherData from './fetchWeatherData';

export default function WeatherReport() {
    const route: any = useRoute()
    const { capital } = route.params.countryData

    const [data, setData] = useState({
        "temperature": '',
        "weather_icons": '',
        "wind_speed": '',
        "precipitation": ''
    });

    useEffect(() => {
        getWeatherData(capital)
            .then(response => {
                // console.log("from weather",response);
                setData(
                    {
                        "temperature": response.current.temperature,
                        "weather_icons": response.current.weather_icons,
                        "wind_speed": response.current.wind_speed,
                        "precipitation": response.current.precip
                    }
                )
            })
    }, [capital])

    const { temperature, weather_icons, wind_speed, precipitation } = data    

    return (
        <View style={[styles.weatherContainer, styles.containerShadow]}>
            <View style={styles.weatherContainer__temp}>
                <Text style={styles.weatherContainer__tempText}>{temperature}°C</Text>
                <Image source={{ uri: weather_icons[0]}} style={ styles.weatherContainer__icon} />
            </View>
            <View>
                <Text style={styles.weatherContainer__txt}>wind | {wind_speed} km/h</Text>
                <Text style={styles.weatherContainer__txt}>precipitation | {precipitation}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    weatherContainer:{
        backgroundColor: '#f3f3f3',
        borderRadius: 5,
        paddingVertical: 10,
        paddingHorizontal: 10,
        width: '100%',
        marginVertical: 15,
    },
    weatherContainer__temp:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    weatherContainer__tempText:{
        fontSize: 35,
        fontWeight: 'bold'
    },
    weatherContainer__icon:{
        width: 50,
        height: 50,
        borderWidth: 2,
        borderRadius: 50,
        backgroundColor: 'white'
    },
    weatherContainer__txt:{
        fontSize: 15,
        color: '#474747',
        fontWeight: 'bold',
        paddingVertical: 5
    },
    containerShadow:{
        shadowColor: '#171717',
        shadowOpacity: 0.1,
        elevation: 5,
    }
})
