import React, { useState } from 'react';
import { View, TextInput, ScrollView, StyleSheet } from 'react-native';
import Item from '../components/itemCard';

export function ListScreen() {
  const [search, setSearch] = useState('');
  const items = [
    { id: 1, title: 'Primeiro Item', subtitle: 'Descrição opcional ' },
    { id: 2, title: 'Segundo Item' },
    { id: 3, title: 'Terceiro Item', subtitle: 'Mais detalhes aqui' },
    { id: 4, title: 'Quarto Item' },
    
  ];

  const filtered = items.filter(i => i.title.toLowerCase().includes(search.toLowerCase()));

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.search}
        placeholder="Pesquisar..."
        placeholderTextColor="#95A5A6"
        value={search}
        onChangeText={setSearch}
      />
      <ScrollView contentContainerStyle={{ paddingBottom: 2 }} showsVerticalScrollIndicator = {false}>
        {filtered.map(item => (
          <Item key={item.id} title={item.title} subtitle={item.subtitle} />
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
