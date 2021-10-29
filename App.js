import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, Platform, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import { createDrawerNavigator } from '@react-navigation/drawer';
import MainStack from './src/MainStack';
import About from './src/About';
import { useFonts } from 'expo-font';
import { globalStyles } from './src/styles';

const Drawer = createDrawerNavigator();

export default function App() {
  //const route = useRoute();
  const [loaded] = useFonts({
    ZenAntiqueSoft: require('./assets/font/Nunito-Light.ttf'),
  });

  if (!loaded) {
    return null;
  }

  return (
    <SafeAreaView style={globalStyles.container}>
      <NavigationContainer>
        <Drawer.Navigator
          screenOptions={{
            headerShown: true,
            //: route === 'home' ? : true
          }}>
          <Drawer.Screen name='Home' component={MainStack} />
          <Drawer.Screen name='About' component={About} />
        </Drawer.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}
