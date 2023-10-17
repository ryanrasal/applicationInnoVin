import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import wineLogo from '../../assets/wineLogo.png';

export default function HeaderSignIn() {
  return (
    <View>
      <View style={{ flexDirection: 'row', marginLeft: 20, marginRight: 20 }}>
        <View style={styles.hr} />
        <Image style={{ width: 150, height: 150 }} source={wineLogo} />
        <View style={styles.hr} />
      </View>
      <Text style={styles.title}>INNO'VIN</Text>
      <Text style={styles.text}>Bienvenue dans l’élégance du vin en quelques clics</Text>
      <View></View>
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    fontSize: 24,
    paddingTop: 100,
    fontWeight: 'bold',
    color: '#4D4D4D',
    backgroundColor: 'white',
    height: '100%',
  },
  hr: {
    borderBottomWidth: 1,
    width: 85,
    marginBottom: 30,
  },
  title: {
    fontSize: 30,
    textAlign: 'center',
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
    marginHorizontal: 50,
  },
});
