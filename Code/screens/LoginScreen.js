import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Dimensions, StyleSheet, Text, View, Image, TextInput, Button, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';


export function Details() {
  const navigation = useNavigation();
  return (
    <View style={styles.formBody}>
        
      <View style={styles.loginView}>
        <Image style={styles.img} source={require('../logo.png')} ></Image>
        <TextInput placeholderTextColor='gray' style={styles.input} placeholder='Email'></TextInput>
        <TextInput placeholderTextColor='gray' style={styles.input} placeholder='Senha' secureTextEntry></TextInput>
        <Pressable style={styles.btn} onPress={() => {navigation.navigate('D')
          navigation.setOptions({})
        }}>
        <View>
            <Text style={{textAlign: 'center', color: 'white'}}>Login</Text>
        </View>
        </Pressable>
      </View>
    </View>
  )
}
const styles = StyleSheet.create(
    {
        img : {resizeMode: 'contain', width: '50%', height: '50%'},
        btn : {width: '80%', borderRadius: 33, backgroundColor: 'black',
            padding: 12, elevation: 1, marginTop: 10
        },
        input: {
            width: '80%',
            padding: 10,
            margin: 10,
            borderRadius: 25,
            outlineWidth: 0,
            
            fontSize: 14,
            borderRadius: 33,
            backgroundColor: 'white'

            
             /*Dimensions.get('screen').width / 4*/
        },
        loginView: {
            
            width: '80%',
            height: '70%',
            maxWidth: 350,
            backgroundColor: '#b9d9dfff',
            paddingTop: 30,
            paddingLeft: 0,
            marginRight: 0,
            borderRadius: 15,
            textAlign: 'center',
            alignItems: 'center',
            shadowRadius: 10,
            shadowOpacity: 0.25,
            
            
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