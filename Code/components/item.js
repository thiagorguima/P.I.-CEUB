import React from 'react';
import { Animated, Text, StyleSheet, View, Pressable } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useFonts } from 'expo-font';
import { useRef } from 'react';


  export default function Item({ title, subtitle }) {
    const navigation = useNavigation();
    const [fontsLoaded] = useFonts({
    'Lancelot': require('../assets/Lancelot-Regular.ttf'),
    'Cara': require('../assets/EBGaramond-Regular.ttf'),
  });
    const scaleAnim = useRef(new Animated.Value(1)).current;
  
    const animateIn = () => {
      Animated.spring(scaleAnim, {
        toValue: 0.96,
        useNativeDriver: true,
        speed: 30,
        bounciness: 8,
      }).start();
    };
  
    const animateOut = () => {
      Animated.spring(scaleAnim, {
        toValue: 1,
        useNativeDriver: true,
        speed: 30,
        bounciness: 8,
      }).start();
    } 
    
    ;
  
    const handlePress = () => {
      console.log(`Card "${title}" clicado!`);
    };
  
    return (
      <Pressable onPressIn={animateIn} onPressOut={animateOut} onPress={handlePress}>
        <Animated.View style={[styles.card, { transform: [{ scale: scaleAnim }] }]}>
          <View>
            <Text style={styles.title}>{title}</Text>
            {subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}
          </View>
          <FontAwesome name="bookmark-o" size={22} color="#2980B9" />
        </Animated.View>
      </Pressable>
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
