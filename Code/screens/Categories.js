import React from 'react';
import {  SearchBar } from 'react-native-elements'
import { Dimensions, StyleSheet, Text, View, Image, TextInput, Button , Pressable, Animated, ImageBackground} from 'react-native';
import {Card} from '../components/CategorieCard'


export function Categorias() {
    
    return (
        
        <View >
            <TextInput
            style={styles.search}
            placeholder="Pesquisar..."
            placeholderTextColor="#95A5A6"

        />
        <View style={styles.cardConteiner}>
            <Card image={require('../assets/orações.jpg')} title='Orações'></Card>
            <Card image={require('../assets/bíblia.jpg')} title='Liturgia Diaria'></Card>
            <Card image={require('../assets/meditação.jpg')} title='Meditações'></Card>
            <Card image={require('../assets/exame.jpg')} title='Exame de Consciência'></Card>
            
            
        </View>
        </View>
        
    );
}

const styles = StyleSheet.create( {
    cardConteiner : {
        alignContent : 'center',
        display : 'flex',
        flexDirection: 'column',
    }, 
    search: {
        backgroundColor: '#FFFFFF',
        borderRadius: 12,
        paddingHorizontal: 14,
        paddingVertical: 10,
        marginVertical: 12,
        paddingLeft: 25,
        fontSize: 16,
        borderColor: '#E0E0E0',
        borderWidth: 1,
        marginLeft: 20,
        marginRight: 20
      }
})
