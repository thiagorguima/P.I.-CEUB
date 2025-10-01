import { StatusBar } from 'expo-status-bar';
import { StyleSheet,Image, Text, View, ScrollView, FlatList, TextInput, Button} from 'react-native';
import ItemCard from '../components/itemCard';
import {plist} from '../constants/bookdt.json'
import { NavigationContainer, useNavigation } from '@react-navigation/native'
import {useState} from 'react'

export function ListPray() {
  
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topNavigation}>
        <Text style={styles.pg_title} >ORAÇÕES</Text>
        </View>
      <StatusBar style="auto" />
      <ScrollView showsHorizontalScrollIndicator={false}>
        <FlatList  data={plist} 
        renderItem={({ item}) => {
          return (
            <ItemCard {...item}></ItemCard>
          );
        }}></FlatList>

      </ScrollView>
      <NavigationContainer>
      </NavigationContainer>
    </SafeAreaView>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  topNavigation: {
    backgroundColor: 'rgba(56, 167, 215, 1)',
    height: 80,
    flex: 1,
    width: 360,
    minHeight: 40,
  },
  pg_title : {
    textAlign: 'center',
    alignContent: 'center',
    paddingTop: 10,
    fontFamily: 'Arial',
    fontWeight: '400',
  },
  form : {
    backgroundColor: 'rgba(52, 160, 206, 1)',
    flex: 1,
    padding: 20,

    borderRadius: 10,
    shadowOpacity: 0.25,
    shadowColor: 'black',
    shadowRadius: 4,
    shadowOffset : {
      width: 0,
      height: 2
    },
    elevation: 5
  }, 
  input : {
    height: 40,
    borderBlockColor: '#ddd',
    borderWidth: 1,
    marginBlock: 15,
    padding: 10,
    borderRadius: 5
  },
  label : {
    fontSize: 16,
    marginBottom: 5,
    fontWeight: "bold"
  }

});
