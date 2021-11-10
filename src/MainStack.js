//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Welcome from './MSComponents/Welcome';
import PersonalInfo from './MSComponents/PersonalInfo';
import Experience from './MSComponents/Experience';
import { useNavigation } from '@react-navigation/native';
import Education from './MSComponents/Education';
import Projects from './MSComponents/Projects';

// create a component
const Stack = createNativeStackNavigator();

const MainStack = () => {
  const navigation = useNavigation();

  return (
    <Stack.Navigator
      initialRouteName='Projects'
      title='Resume creation wizard'
      screenOptions={{
        headerShown: false, //: route === 'home' ? : true
      }}>
      <Stack.Screen name='Welcome' component={Welcome} />
      <Stack.Screen name='Personal information' component={PersonalInfo} />
      <Stack.Screen name='Experience' component={Experience} />
      <Stack.Screen name='Education' component={Education} />
      <Stack.Screen name='Projects' component={Projects} />
    </Stack.Navigator>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    /*   justifyContent: 'center',
    alignItems: 'center',
    */
  },
});

//make this component available to the app
export default MainStack;
