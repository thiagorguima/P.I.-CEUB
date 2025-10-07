import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Pressable } from 'react-native';
import { createStaticNavigation, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Button } from '@react-navigation/elements'
import { Details } from './screens/LoginScreen'
import { Categorias } from './screens/Categorias'
import { ListScreen } from './screens/List'
import { SearchBar } from 'react-native-elements';
import { useFonts } from 'expo-font';




function HomeScreen() {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button onPressIn = {() => {
        navigation.navigate('D');
        navigation.setOptions({})
      }} >
        <Button onPressIn = {() => {
        navigation.navigate('E');
        navigation.setOptions({})
      }} ></Button>
          
      </Button>
    </View>
  );
}

const RootStack = createNativeStackNavigator({
  screens: {
    Home: {
      screen : Details,
      options: {
        headerShown : false
      }
    },
    D : {
      screen: ListScreen,
      options : {headerStyle : {
        backgroundColor: '#a5d3dc'
      }, headerTitleAlign : 'center', headerTitle : 'Orações', headerTitleStyle: {fontFamily : 'Lancelot', fontSize: 33, color: '#ffffff', }}
    },
    E : Categorias
  }
});

const Navigation = createStaticNavigation(RootStack);

export default function App() {
  const [fontsLoaded] = useFonts({
    'Lancelot': require('./assets/Lancelot-Regular.ttf')
  });
  return <Navigation />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
});
