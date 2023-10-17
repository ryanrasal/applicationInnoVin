import React, { useState } from 'react';
import { LogBox } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SignIn from '../pages/SignIn';
import BottomNav from './BottomNav';

LogBox.ignoreLogs(['Non-serializable values were found in the navigation state']);

export default function Root() {
  const Stack = createStackNavigator();
  const [isLogin, setIsLogin] = useState(false);

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            borderBottomWidth: 0,
            shadowOpacity: 0,
            elevation: 0,
          },
        }}
      >
        <Stack.Group>
          {!isLogin ? (
            <Stack.Screen
              name="SignIn"
              component={SignIn}
              options={{ headerShown: false }}
              initialParams={{ isLogin, setIsLogin }}
            />
          ) : (
            <Stack.Screen name="BottomNav" component={BottomNav} options={{ headerShown: false }} />
          )}
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
