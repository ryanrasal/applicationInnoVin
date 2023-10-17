import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import HeaderSignIn from '../components/SignIn/HeaderSignIn';
import SectionInputs from '../components/SignIn/SectionInputs';

const inputFields = [
  {
    icon: 'account-outline',
    placeholder: 'Email',
  },
  {
    icon: 'lock-outline',
    placeholder: 'Mot de passe',
    secureTextEntry: true,
  },
];

export default function SignIn({ route }) {
  const { isLogin, setIsLogin } = route.params;
  return (
    <View style={styles.view}>
      <HeaderSignIn />
      <>
        {inputFields.map((field, index) => (
          <View key={index} style={styles.viewContainerInputs}>
            <SectionInputs field={field} />
          </View>
        ))}
      </>
      <TouchableOpacity style={styles.button} onPress={() => setIsLogin(!isLogin)}>
        <Text style={{ color: 'white', textAlign: 'center' }}>Connexion</Text>
      </TouchableOpacity>
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
  viewContainerInputs: {
    flexDirection: 'row',
    marginHorizontal: 50,
    marginTop: 50,
    borderBottomWidth: 1,
  },
  button: {
    backgroundColor: 'black',
    width: 150,
    padding: 15,
    borderRadius: 20,
    marginTop: 50,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
});
