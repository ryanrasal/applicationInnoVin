import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { EvilIcons } from '@expo/vector-icons';

export default function HeaderWines() {
  return (
    <View>
      <Text style={styles.title}>Liste des Vins</Text>
      <View style={styles.viewContainerInputs}>
        <EvilIcons name="search" size={24} color="black" />
        <TextInput style={styles.input} placeholder="Rechercher.." />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    textAlign: 'center',
    textDecorationLine: 'underline',
    letterSpacing: 1,
  },
  viewContainerInputs: {
    flexDirection: 'row',
    marginHorizontal: 50,
    marginVertical: 20,
    borderBottomWidth: 1,
  },
  input: {
    paddingLeft: 10,
  },
});
