import React, { useState } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Users from '../pages/Users';
import UserProfil from '../pages/UserProfil';

export default function BottomNav() {
  const Tab = createBottomTabNavigator();
  const [reloadUsers, setReloadUser] = useState(false);

  const toggleReloadUsers = () => {
    setReloadUser(!reloadUsers);
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
          } else if (route.name == 'Wines') {
            iconName = 'wine-glass';
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
      {/* <Tab.Screen name="Progress" options={{ headerShown: false }} component={Progress} /> */}
    </Tab.Navigator>
  );
}
