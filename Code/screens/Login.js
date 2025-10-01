import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Dimensions, StyleSheet, Text, View, Image, TextInput, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';


export function Details() {
  const navigation = useNavigation();
  return (
    <View style={styles.formBody}>
        
      <View style={styles.loginView}>
        <Image style={styles.img} source={require('../pray.webp')} ></Image>
        <TextInput style={styles.input} placeholder='email'></TextInput>
        <TextInput style={styles.input} placeholder='senha' secureTextEntry></TextInput>
        <View style={styles.btn}>
            <Text style={{textAlign: 'center', color: 'white'}}>Login</Text>
        </View>
      </View>
    </View>
  )
}
const styles = StyleSheet.create(
    {
        img : {resizeMode: 'contain', width: '33%', height: '33%'},
        btn : {width: '90%', borderRadius: 33, backgroundColor: 'black',
            padding: 12
        },
        input: {
            width: '90%',
            padding: 12,
            margin: 10,
            borderRadius: 25,
            outlineWidth: 0,
            borderWidth: 1,
            fontSize: 14,
            borderRadius: 33
            
             /*Dimensions.get('screen').width / 4*/
        },
        loginView: {
            
            width: '90%',
            height: '90%',
            maxWidth: 350,
            backgroundColor: 'rgba(255, 54, 54, 0.15)',
            paddingTop: 30,
            paddingLeft: 0,
            marginRight: 0,
            borderRadius: 15,
            textAlign: 'center',
            alignItems: 'center'
        }, formBody: {
            width: '100%',
            height: '100%',
            flex: 1,
            justifyContent: 'center',
            alignContent: 'center',
            backgroundColor: '#a5d3dc',
            borderColor: 'black',
            borderWidth: 2,
            alignItems: 'center'
        }
    }
)