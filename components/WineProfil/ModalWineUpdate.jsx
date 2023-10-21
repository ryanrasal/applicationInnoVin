import React from 'react';
import { Alert, Modal, StyleSheet, Text, Pressable, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { TextInput } from 'react-native';

export default function ModalUpdateWine({
  wineDetails,
  toggleModalVisible,
  modalVisible,
  handleChange,
  updateDataWine,
  submitUpdateWine,
}) {
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
            {wineDetails.map((wine, index) => (
              <View key={index}>
                <View style={styles.viewWine}>
                  <MaterialIcons name={wine.iconName} size={24} color="black" />
                  <Text style={{ marginHorizontal: 5 }}>{wine.label}:</Text>
                  <TextInput
                    style={styles.input}
                    editable
                    placeholderTextColor={'green'}
                    placeholder={wine.value.toString()}
                    onChangeText={(text) => handleChange(wine.title, text)}
                  />
                </View>
                <View style={styles.hr} />
              </View>
            ))}
          </View>
          <View style={{ flexDirection: 'row' }}>
            <Pressable
              style={[styles.button, { backgroundColor: 'black' }]}
              onPress={toggleModalVisible}
            >
              <Text style={styles.textStyle}>Annuler</Text>
            </Pressable>
            <Pressable style={[styles.button]} onPress={submitUpdateWine}>
              <Text style={styles.textStyle}>Valider</Text>
            </Pressable>
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
  viewWine: { flexDirection: 'row', alignItems: 'center', marginBottom: 5 },
  hr: {
    marginBottom: 15,
  },
  input: {
    paddingHorizontal: 10,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
