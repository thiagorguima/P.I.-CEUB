import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';

export  function ReadingScreen() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={{ padding: 20 }}>
      <View style={styles.textContainer}>
        <Text style={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Fusce et justo nec nunc pulvinar commodo. Maecenas fermentum, 
          nulla nec commodo dignissim, lorem tortor sodales sapien, 
          sed sollicitudin risus nunc vel purus. 
          Pellentesque habitant morbi tristique senectus et netus et malesuada 
          fames ac turpis egestas. Cras dictum, arcu sit amet tristique tincidunt, 
          justo augue luctus est, ut luctus orci sapien sed neque. 
          Sed mattis, sem ac facilisis blandit, libero justo varius ante, 
          vitae hendrerit sapien justo a arcu. 
          Mauris accumsan massa non mi vulputate, nec varius nunc suscipit. 
          Duis tincidunt turpis in augue suscipit, a efficitur velit volutpat.
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFAFA',
  },
  textContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  text: {
    textAlign: 'center',
    fontSize: 17,
    lineHeight: 26,
    color: '#2C3E50',
    fontFamily: 'System',
  },
});
