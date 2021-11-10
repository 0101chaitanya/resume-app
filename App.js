import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, Platform, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import { createDrawerNavigator } from '@react-navigation/drawer';
import MainStack from './src/MainStack';
import About from './src/About';
import { useFonts } from 'expo-font';
import theme, { globalStyles } from './src/styles';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';

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
    <SafeAreaView style={theme.container}>
      <PaperProvider theme={theme}>
        <NavigationContainer>
          <Drawer.Navigator
            screenOptions={{
              headerStyle: {
                backgroundColor: '#65DF58',
              },
            }}>
            <Drawer.Screen name='Home' component={MainStack} />
            <Drawer.Screen name='About' component={About} />
          </Drawer.Navigator>
        </NavigationContainer>
      </PaperProvider>
    </SafeAreaView>
  );
}
