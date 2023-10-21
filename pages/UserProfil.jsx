import React, { useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import InformationUser from '../components/UserProfil/InformationUser';
import HeaderUserProfil from '../components/UserProfil/HeaderUserProfil';

const backendUrl = process.env.EXPO_PUBLIC_ADDRESS_BACK_END;

export default function UserProfil({ route, navigation }) {
  const { userProfil, toggleReloadUsers } = route.params;
  const [toggleMenu, setToggleMenu] = useState(true);
  const [modalVisible, setModalVisible] = useState(false);

  const toggleValue = () => {
    setToggleMenu(!toggleMenu);
  };

  const toggleModalVisible = () => {
    setModalVisible(!modalVisible);
  };

  const userDetails = [
    { iconName: 'account-outline', label: 'Prénom', value: userProfil.firstname },
    { iconName: 'account-outline', label: 'Nom', value: userProfil.lastname },
    { iconName: 'account-outline', label: 'Pseudo', value: userProfil.username },
    { iconName: 'email-outline', label: 'Email', value: userProfil.email },
    { iconName: 'google-maps', label: 'Adresse', value: userProfil.address },
    { iconName: 'phone', label: 'Téléphone', value: userProfil.phone },
  ];

  const handleDelete = () => {
    fetch(`${backendUrl}/users/${userProfil.id}`, { method: 'DELETE' })
      .then(() => {
        toggleReloadUsers();
        toggleModalVisible();
        navigation.navigate('users');
      })
      .catch((error) => {
        console.error('Erreur lors de la suppression :', error);
      });
  };
  return (
    <View style={styles.viewContainer}>
      <HeaderUserProfil navigation={navigation} toggleValue={toggleValue} toggleMenu={toggleMenu} />
      {toggleMenu ? (
        <>
          <InformationUser
            userDetails={userDetails}
            userProfil={userProfil}
            toggleModalVisible={toggleModalVisible}
            modalVisible={modalVisible}
            handleDelete={handleDelete}
          />
        </>
      ) : (
        <Text style={{ fontSize: 18, borderRightWidth: 1, paddingHorizontal: 20 }}>
          Aucune commande effectuée pour le moment.
        </Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  viewContainer: { paddingTop: 80, backgroundColor: 'white', height: '100%' },
});
