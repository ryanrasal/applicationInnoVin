import React, { useState } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Users from '../pages/Users';
import UserProfil from '../pages/UserProfil';
import Wines from '../pages/Wines';
import { WineProfil } from '../pages/WineProfil';

export default function BottomNav() {
  const Tab = createBottomTabNavigator();
  const [reloadUsers, setReloadUser] = useState(false);
  const [reloadWines, setReloadWines] = useState(false);

  const toggleReloadUsers = () => {
    setReloadUser(!reloadUsers);
  };

  const toggleReloadWines = () => {
    setReloadWines(!reloadWines);
  };

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarStyle: {
          height: 65,
          alignItems: 'center',
          position: 'absolute',
          paddingBottom: 0,
          backgroundColor: '#fff',
          borderTopWidth: 1,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: 'bold',
          paddingBottom: 6,
          marginBottom: 5,
        },
        tabBarActiveTintColor: '#F73F3F',
        tabBarInactiveTintColor: 'black',
        headerShown: false,
        tabBarIcon: ({ color }) => {
          let iconName;

          if (route.name == 'users') {
            iconName = 'account-outline';
          } else if (route.name == 'wines') {
            iconName = 'glass-wine';
          }
          if (iconName) {
            return <MaterialCommunityIcons name={iconName} size={28} color={color} />;
          } else {
            return null;
          }
        },
      })}
    >
      <Tab.Screen
        name="users"
        options={{ headerShown: false }}
        component={Users}
        initialParams={{ reloadUsers }}
      />
      <Tab.Screen
        name="userProfil"
        component={UserProfil}
        options={{ tabBarButton: () => null }}
        initialParams={{ toggleReloadUsers }}
      />
      <Tab.Screen
        name="wines"
        options={{ headerShown: false }}
        component={Wines}
        initialParams={{ reloadWines }}
      />
      <Tab.Screen
        name="wineProfil"
        component={WineProfil}
        options={{ tabBarButton: () => null }}
        initialParams={{ toggleReloadWines }}
      />
      {/* <Tab.Screen name="Progress" options={{ headerShown: false }} component={Progress} /> */}
    </Tab.Navigator>
  );
}
