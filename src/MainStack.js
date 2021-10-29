//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Welcome from './MSComponents/Welcome';
import PersonalInfo from './MSComponents/PersonalInfo';
import Experience from './MSComponents/Experience';
import { useNavigation } from '@react-navigation/native';

// create a component
const Stack = createNativeStackNavigator();

const MainStack = () => {
  const navigation = useNavigation();

  return (
    <Stack.Navigator
      initialRouteName='Personal informarmation'
      title='Resume creation wizard'
      screenOptions={{
        headerShown: false, //: route === 'home' ? : true
      }}>
      <Stack.Screen name='Welcome' component={Welcome} />
      <Stack.Screen name='Personal informarmation' component={PersonalInfo} />
      <Stack.Screen name='Experience' component={Experience} />
    </Stack.Navigator>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

//make this component available to the app
export default MainStack;
