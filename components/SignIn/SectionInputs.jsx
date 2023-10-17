import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import {StyleSheet, TextInput } from 'react-native';

export default function SectionInputs({ field }) {
  return (
    <>
      <MaterialCommunityIcons name={field.icon} size={24} color="black" />
      <TextInput
        style={styles.input}
        placeholder={field.placeholder}
        secureTextEntry={field.secureTextEntry}
      />
    </>
  );
}

const styles = StyleSheet.create({
  input: {
    paddingLeft: 10,
  },
});
