import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import ModalDeleteUser from './ModalDeleteUser';

export default function InformationUser({
  userDetails,
  toggleModalVisible,
  modalVisible,
  userProfil,
  handleDelete,
}) {
  return (
    <>
      {userDetails.map((user, index) => (
        <View key={index}>
          <View style={styles.viewUser}>
            <MaterialCommunityIcons name={user.iconName} size={24} color="black" />
            <Text style={{ marginRight: 5 }}>
              {user.label}: {user.value}
            </Text>
          </View>
          <View style={styles.hr} />
        </View>
      ))}
      <TouchableOpacity style={styles.button} onPress={toggleModalVisible}>
        <Text style={{ color: 'white', textAlign: 'center' }}>Supprimer</Text>
      </TouchableOpacity>
      <ModalDeleteUser
        toggleModalVisible={toggleModalVisible}
        modalVisible={modalVisible}
        user={userProfil}
        handleDelete={handleDelete}
      />
    </>
  );
}

const styles = StyleSheet.create({
  viewUser: { flexDirection: 'row', alignItems: 'center', marginLeft: 10, marginBottom: 5 },
  hr: {
    borderBottomWidth: 1,
    width: '100%',
    marginBottom: 25,
  },
  button: {
    backgroundColor: 'red',
    width: 150,
    padding: 15,
    borderRadius: 20,
    marginTop: 50,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
});
