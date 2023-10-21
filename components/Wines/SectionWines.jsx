import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function SectionWines({ wine, navigation }) {
  const navigationWineProfil = (wineProfil) => {
    navigation.navigate('wineProfil', { wineProfil: wineProfil });
  };
  return (
    <>
      <TouchableOpacity style={styles.touchableOpacity} onPress={() => navigationWineProfil(wine)}>
        <MaterialCommunityIcons
          name="glass-wine"
          size={24}
          color={
            wine.wine_type === 'rouge'
              ? 'red'
              : wine.wine_type === 'blanc'
              ? 'beige'
              : wine.wine_type === 'rosé'
              ? 'pink'
              : 'black'
          }
        />
        <Text style={{ marginRight: 5 }}>{wine.name}</Text>
        <Text style={{ marginRight: 5 }}>{wine.year}</Text>
      </TouchableOpacity>
      <View style={styles.hr} />
    </>
  );
}

const styles = StyleSheet.create({
  touchableOpacity: { flexDirection: 'row', alignItems: 'center', marginLeft: 10, marginBottom: 5 },
  hr: {
    borderBottomWidth: 1,
    width: '100%',
    marginBottom: 10,
  },
});
