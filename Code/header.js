import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function CustomHeader({ title }) {
  const navigation = useNavigation();

  return (
    <View style={styles.header}>
      {/* Botão Voltar (opcional, só aparece se houver histórico) */}
      {navigation.canGoBack() ? (
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.iconButton}>
          <Ionicons name="arrow-back" size={24} color="#FFFFFF" />
        </TouchableOpacity>
      ) : (
        <View style={styles.iconPlaceholder} />
      )}

      {/* Título centralizado */}
      <Text style={styles.title}>{title}</Text>

      {/* Ícone de Configuração */}
      <TouchableOpacity
        onPress={() => navigation.navigate('Settings')}
        style={styles.iconButton}
      >
        <Ionicons name="settings-outline" size={24} color="#FFFFFF" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 60,
    backgroundColor: '#2980B9',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
  },
  title: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '700',
  },
  iconButton: {
    padding: 4,
  },
  iconPlaceholder: {
    width: 32, // espaço para alinhar mesmo quando sem botão voltar
  },
});
