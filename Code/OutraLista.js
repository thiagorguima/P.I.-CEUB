import React, { useState, useEffect } from 'react';
import { View, TextInput, ScrollView, StyleSheet, Button} from 'react-native';
import Item from '../components/itemCard';
import {useNavigation} from '@react-navigation/native'
import {Ionicons} from '@react-native-vector-icons/ionicons'

export function ListScreen() {
  const [search, setSearch] = useState('');
  const [listSaved, setListSaved] = useState(false);
  const [bm, setbm] = useState('bookmarks-outline')
  const nav = useNavigation();
  const items = [
    { id: 1, title: 'Primeiro Item', subtitle: 'Descrição opcional ', saved : 'bookmark' },
    { id: 2, title: 'Segundo Item', saved : 'bookmark' },
    { id: 3, title: 'Terceiro Item', subtitle: 'Mais detalhes aqui', saved : 'bookmark-o' },
    { id: 4, title: 'Quarto Item' ,saved : 'bookmark-o'},
    
  ];
  
  const filtered = items.filter(i => i.title.toLowerCase().includes(search.toLowerCase()));
  const savedOnly = filtered.filter(i => !i.saved.includes('-o'));
  useEffect(
    () => {nav.setOptions(
      {headerRight: () => (<Ionicons style={{paddingRight : 25}} name={bm} size={22} color="#FFFFFF" onPress={() => {listSaved ? setListSaved(false) : setListSaved(true); bm === 'bookmarks' ? setbm('bookmarks-outline') : setbm('bookmarks')}}/>)}
    )}
  )

  return (
    <View style={styles.container} >
      <TextInput
        style={styles.search}
        placeholder="Pesquisar..."
        placeholderTextColor="#95A5A6"
        value={search}
        onChangeText={setSearch}
      />
      
      <ScrollView contentContainerStyle={{ paddingBottom: 2 }} showsVerticalScrollIndicator = {false}>
        {(listSaved ? savedOnly : filtered).map(item => (
          <Item key={item.id} title={item.title} subtitle={item.subtitle} saved={item.saved} />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F9FA',
    paddingHorizontal: 20,
    paddingVertical: 2
  },
  search: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    paddingHorizontal: 14,
    paddingVertical: 10,
    marginVertical: 12,
    fontSize: 16,
    borderColor: '#E0E0E0',
    borderWidth: 1,
  },
  
});
