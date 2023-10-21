import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { HeaderWineProfil } from '../components/WineProfil/HeaderWineProfil';
import { InformationWine } from '../components/WineProfil/InformationWine';

const backendUrl = process.env.EXPO_PUBLIC_ADDRESS_BACK_END;

export const WineProfil = ({ route, navigation }) => {
  const { wineProfil, toggleReloadWines } = route.params;
  const [modalVisible, setModalVisible] = useState(false);
  const [updateDataWine, setUpdateDataWine] = useState({
    name: wineProfil.name,
    year: wineProfil.year,
    wine_type: wineProfil.wine_type,
    wine_type: wineProfil.wine_type,
    origin_country: wineProfil.origin_country,
    region: wineProfil.region,
    grape_variety: wineProfil.grape_variety,
    region: wineProfil.region,
    description: wineProfil.description,
    price: wineProfil.price,
    best_seller: wineProfil.best_seller,
    image: wineProfil.image,
  });

  const handleChange = (fieldName, value) => {
    const updatedValue =
      fieldName === 'year' || fieldName === 'price' ? parseInt(value, 10) : value;
    setUpdateDataWine({ ...updateDataWine, [fieldName]: updatedValue });
  };

  const toggleModalVisible = () => {
    setModalVisible(!modalVisible);
  };

  const wineDetails = [
    { iconName: 'wine-bar', title: 'name', label: 'Nom', value: wineProfil.name },
    {
      iconName: 'wine-bar',
      title: 'grape_variety',
      label: 'Variété de grappe',
      value: wineProfil.grape_variety,
    },
    { iconName: 'flag', title: 'region', label: 'Région', value: wineProfil.region },
    {
      iconName: 'flag',
      title: 'origin_country',
      label: "Pays d'origine",
      value: wineProfil.origin_country,
    },
    { iconName: 'euro', title: 'price', label: 'Prix', value: wineProfil.price },
    {
      iconName: 'notes',
      title: 'description',
      label: 'Description',
      value: wineProfil.description,
    },
    { iconName: 'wine-bar', title: 'wine_type', label: 'Type de vin', value: wineProfil.wine_type },
    { iconName: 'date-range', title: 'year', label: 'Année', value: wineProfil.year },
  ];

  const submitUpdateWine = () => {
    fetch(`${backendUrl}/wines/${wineProfil.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updateDataWine),
    })
      .then((response) => {
        if (response.ok) {
          toggleModalVisible();
          toggleReloadWines();
          navigation.navigate('wines');
        } else {
          console.error('Erreur lors de la mise à jour du vin.');
        }
      })
      .catch((error) => {
        console.error('Erreur lors de la mise à jour du vin : ', error);
      });
  };

  return (
    <View style={styles.viewContainer}>
      <HeaderWineProfil navigation={navigation} />
      <InformationWine
        wineDetails={wineDetails}
        toggleModalVisible={toggleModalVisible}
        modalVisible={modalVisible}
        handleChange={handleChange}
        updateDataWine={updateDataWine}
        submitUpdateWine={submitUpdateWine}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  viewContainer: { paddingTop: 80, backgroundColor: 'white', height: '100%' },
});
