import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useFonts } from 'expo-font';

export default function Item({ title, subtitle }) {
    const [fontsLoaded] = useFonts({
        'Lancelot': require('../assets/Lancelot-Regular.ttf'),
        'Cara': require('../assets/EBGaramond-Regular.ttf'),
      });
  return (
    <TouchableOpacity style={styles.card}>
      <View>
        <Text style={styles.title}>{title}</Text>
        {subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}
      </View>
      <FontAwesome name="bookmark-o" size={24} color="#2980B9" />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 5,
    padding: 14,
    marginVertical: 4,
    elevation: 2,
    maxHeight: 80,
    minHeight: 80,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    elevation: 2,
    shadowOffset: { width: 0, height: 2 },
  },
  title: {
    fontSize: 20,
    fontFamily: 'Cara',
    fontStyle: 'italic',
    fontWeight: '600',
    color: '#2C3E50',
  },
  subtitle: {
    fontSize: 13,
    fontFamily: 'Cara',
    color: '#7F8C8D',
    marginTop: 2,
  },
});
