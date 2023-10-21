import React from 'react';
import { Text } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export const HeaderWineProfil = ({ navigation }) => {
  return (
    <>
      <MaterialCommunityIcons
        name="arrow-left-bold-circle-outline"
        size={40}
        color="black"
        style={{ marginLeft: 20 }}
        onPress={() => navigation.goBack()}
      />
      <Text style={{ fontSize: 24, textAlign: 'center' }}>Informations</Text>
    </>
  );
};
