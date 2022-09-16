import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Text, StyleSheet, ImageBackground, TextInput, TouchableOpacity} from 'react-native';
import getCountryData from './fetchCountryData';
import { tostMessage } from '../app/toastMessage';
import { validFiledInput } from '../app/fieldValidation';
const image = require('../assets/sky.jpg')

interface HomeScreenProps {
    navigation: any;
}

const Home = (props: HomeScreenProps) => {

    const [countryName, setCountryName] = useState('');

    const changeHandler = (e: string) => {
        let checkString = validFiledInput(e);
        if(checkString){
            setCountryName(e)
        } else if (e.length < 1){
            setCountryName(e)
        }else{
            tostMessage('Invalid Input: Only Strings')
        }
    }

    const submitHandler = () => {
        if (countryName.length > 1 ) {
            getCountryData(countryName)
                .then(response => {                                        
                    if(response !== '404'){
                        props.navigation.navigate('Report', {
                            countryData: {
                                "capital": response[0].capital,
                                "population": response[0].population,
                                "lat_Lon": response[0].latlng,
                                "flags": response[0].flags
                            }
                        })
                    }else{
                        tostMessage('incorrect country name')
                        setCountryName('');
                    }
                    setCountryName('');
                }).catch(() => {
                    tostMessage('incorrect country name')
                    setCountryName('');
                })
        } else {
            tostMessage('Invalid Input')
        }
    }

    return (
        <View style={styles.container}>
            <ImageBackground
                source={image}
                resizeMode='cover'
                style={styles.image}
                blurRadius={5}>
                <StatusBar style='auto' />

                <View style={styles.wrapper}>
                    <TextInput value={countryName} onChangeText={changeHandler} placeholder='Country name' style={styles.input} />
                    <TouchableOpacity style={styles.exploreBtn} onPress={submitHandler}>
                        <Text style={styles.exploreBtnTxt}>Submit</Text>
                    </TouchableOpacity>
                </View>

            </ImageBackground>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    wrapper: {
        marginLeft: "auto",
        marginRight: "auto",

        height: "80%",
        width: "80%",
        alignItems: 'center',
        justifyContent: "center",
    },
    clock: {
        height: "60%",
    },
    image: {
        flex: 1,
        justifyContent: "center"
    },
    input: {
        width: "80%",
        padding: 10,
        borderRadius: 10,
        backgroundColor: 'cornflowerblue',
        borderWidth: 2,
        borderColor: "black",
    },
    exploreBtn: {
        backgroundColor: 'skyblue',
        padding: 10,
        paddingRight: 30,
        paddingLeft: 30,
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 10
    },
    exploreBtnTxt: {
        color: "solid black",
    }
});

export default Home;