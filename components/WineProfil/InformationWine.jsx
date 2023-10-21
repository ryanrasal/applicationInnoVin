import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import ModalUpdateWine from './ModalWineUpdate';

export const InformationWine = ({
  wineDetails,
  toggleModalVisible,
  modalVisible,
  handleChange,
  updateDataWine,
  submitUpdateWine,
}) => {
  return (
    <View>
      {wineDetails.map((wine, index) => (
        <View key={index}>
          <View style={styles.viewWine}>
            <MaterialIcons name={wine.iconName} size={24} color="black" />
            <Text style={{ marginLeft: 5 }}>
              {wine.label}: {wine.value}
            </Text>
          </View>
          <View style={styles.hr} />
        </View>
      ))}
      <TouchableOpacity style={styles.button} onPress={toggleModalVisible}>
        <Text style={{ color: 'white', textAlign: 'center' }}>Modifier</Text>
      </TouchableOpacity>
      <ModalUpdateWine
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
  viewWine: { flexDirection: 'row', alignItems: 'center', marginLeft: 10, marginBottom: 5 },
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
