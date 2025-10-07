<Stack.Screen 
  name="List" 
  component={ListScreen} 
  options={({ navigation }) => ({
    title: 'Minha Lista',
    headerStyle: { backgroundColor: '#2980B9' },
    headerTintColor: '#FFF',
    headerRight: () => (
      <TouchableOpacity onPress={() => navigation.navigate('Settings')} style={{ marginRight: 16 }}>
        <Ionicons name="settings-outline" size={24} color="#FFF" />
      </TouchableOpacity>
    ),
  })}
/>

/*Não esta existindo, 
