import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Button } from 'react-native';
import HeaderWines from '../components/Wines/HeaderWines';
import SectionWines from '../components/Wines/SectionWines';

const backendUrl = process.env.EXPO_PUBLIC_ADDRESS_BACK_END;

export default function Wines({ navigation, route }) {
  const { reloadWines } = route.params;
  const [wines, setWines] = useState([]);

  useEffect(() => {
    fetch(`${backendUrl}/wines`)
      .then((response) => response.json())
      .then((data) => {
        setWines(data);
      })
      .catch((error) => {
        console.error('Erreur lors de la récupération des Vins :', error);
      });
  }, [reloadWines]);

  return (
    <View style={styles.view}>
      <HeaderWines />
      {wines.map((wine, index) => (
        <View key={index} style={{ marginBottom: 20 }}>
          <SectionWines wine={wine} navigation={navigation} />
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    paddingTop: 50,
    backgroundColor: 'white',
    height: '100%',
  },
});
