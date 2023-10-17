import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function SectionUser({ user, navigation }) {
  const navigationUserProfil = (userProfil) => {
    navigation.navigate('userProfil', { userProfil: userProfil });
  };
  return (
    <>
      <TouchableOpacity style={styles.touchableOpacity} onPress={() => navigationUserProfil(user)}>
        <MaterialCommunityIcons name="account-outline" size={24} color="black" />
        <Text style={{ marginRight: 5 }}>{user.firstname}</Text>
        <Text>{user.lastname}</Text>
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
