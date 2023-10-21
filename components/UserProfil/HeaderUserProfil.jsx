import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function HeaderUserProfil({ navigation, toggleValue, toggleMenu }) {
  return (
    <>
      <MaterialCommunityIcons
        name="arrow-left-bold-circle-outline"
        size={40}
        color="black"
        style={{ marginLeft: 20 }}
        onPress={() => navigation.goBack()}
      />
      <View style={styles.styleToggleMenu}>
        <TouchableOpacity onPress={toggleValue} disabled={toggleMenu}>
          <Text style={{ fontSize: 18, borderRightWidth: 1, paddingHorizontal: 20 }}>
            Informations
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={toggleValue} disabled={!toggleMenu}>
          <Text style={{ fontSize: 18, marginHorizontal: 20 }}>Commandes</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  styleToggleMenu: {
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
