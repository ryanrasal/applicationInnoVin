import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Button } from 'react-native';
import HeaderUsers from '../components/Users/HeaderUsers';
import SectionUser from '../components/Users/SectionUser';

const backendUrl = process.env.EXPO_PUBLIC_ADDRESS_BACK_END;

export default function Users({ navigation, route }) {
  const { reloadUsers } = route.params;
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch(`${backendUrl}/users/notAdmin`)
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
      })
      .catch((error) => {
        console.error('Erreur lors de la récupération des utilisateurs:', error);
      });
  }, [reloadUsers]);

  return (
    <View style={styles.view}>
      <HeaderUsers />
      {users.map((user, index) => (
        <View key={index} style={{ marginBottom: 20 }}>
          <SectionUser user={user} navigation={navigation} />
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
