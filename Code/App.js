import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Pressable } from 'react-native';
import { createStaticNavigation, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Button } from '@react-navigation/elements'
import { Details } from './screens/LoginScreen'
import { Categorias } from './screens/Categorias'
import { ListPray } from './screens/List'
import { SearchBar } from 'react-native-elements';




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
    D : ListPray,
    E : Categorias
  }
});

const Navigation = createStaticNavigation(RootStack);

export default function App() {
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
