import React from 'react';
import { Alert, Modal, StyleSheet, Text, Pressable, View } from 'react-native';

export default function ModalDeleteUser({ user, toggleModalVisible, modalVisible, handleDelete }) {
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          toggleModalVisible;
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>
              Voulez-vous vraiment supprimer{' '}
              <Text style={{ fontWeight: 'bold' }}>
                {user.firstname} {user.lastname}
              </Text>{' '}
              de la base de données ?
            </Text>
            <View style={{ flexDirection: 'row' }}>
              <Pressable
                style={[styles.button, { backgroundColor: 'black' }]}
                onPress={toggleModalVisible}
              >
                <Text style={styles.textStyle}>Annuler</Text>
              </Pressable>
              <Pressable style={[styles.button]} onPress={handleDelete}>
                <Text style={styles.textStyle}>Supprimer</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    backgroundColor: 'red',
    width: 100,
    padding: 15,
    borderRadius: 20,
    marginTop: 10,
    marginHorizontal: 10,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});
