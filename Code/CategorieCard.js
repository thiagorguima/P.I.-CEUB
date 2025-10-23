
import React from 'react';
import {  SearchBar } from 'react-native-elements'
import { Dimensions, StyleSheet, Text, View, Image, TextInput, Button , Pressable, Animated, ImageBackground} from 'react-native';
import { useFonts } from 'expo-font';
import {useNavigation} from '@react-navigation/native'



export function Card({title, image}) {
    const navigation = useNavigation();
    const go = () => {
        
        navigation.navigate('List')
    }
    const [fontsLoaded] = useFonts({
    'Fancy': require('../assets/EBGaramond-Regular.ttf'),})
    return (
        <View style = {styles.card}>
            <Pressable onPress={go}>
                <Animated.View >
                    <ImageBackground source = {image} style = {styles.backgroud_image} imageStyle={{borderRadius: 12}}>
                        <Text style = {styles.title}>{title}</Text>
                    </ImageBackground>
                    
                </Animated.View>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create( {
    card : {
        width: Dimensions.get('window').width,
        height: 100,
        paddingLeft : 25,
        paddingRight : 25,
        paddingTop: 15,
        marginBottom: 25
    },
    backgroud_image : {
        flex : 1,
        resizeMode : 'contain',
        width: 'auto',
        height: 100,
        borderRadius : 20
    },
    title : {
        paddingTop: 60,
        paddingLeft: 10,
        fontFamily : 'Fancy',
        color: 'white',
        fontSize: 24
    }
})
