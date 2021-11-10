//import liraries
import React, { Component } from 'react';
import {
  useWindowDimensions,
  View,
  Text,
  Platform,
  ScrollView,
  Button,
  StyleSheet,
} from 'react-native';
import { FAB, useTheme } from 'react-native-paper';

// create a component
const Welcome = ({ navigation }) => {
  const { container, info, fab, heading } = useTheme();
  const x = useTheme();
  console.log(x);
  const pressHandler = (name) => {
    navigation.navigate(name);
  };
  return (
    <ScrollView style={container}>
      <Text style={heading}>Welcome to CV creation wizard</Text>
      <Text style={info}>
        Throughout this wizard you will be presented with different screens that
        capture necessary information to create a well structured CV.
      </Text>
      <Text
        style={{
          ...info,

          marginBottom: 100,
        }}>
        Take a look at the floating button on the right-bottom of your screen .
        I helps you navigate back and forth between the pages. Happy wizarding
        :)
      </Text>

      <FAB
        style={fab('right')}
        small
        icon='arrow-right-bold'
        //arrow-left-thick
        /* <Entypo name='forward' size={24} color='black' /> */
        onPress={() => {
          pressHandler('Personal information');
        }}
      />
    </ScrollView>
  );
};

// define your styles
//make this component available to the app
export default Welcome;
