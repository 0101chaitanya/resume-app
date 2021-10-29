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
import { FloatingAction } from 'react-native-floating-action';
import { Entypo } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { globalStyles } from '../styles';

// create a component
const Welcome = ({ navigation }) => {
  const pressHandler = (name) => {
    navigation.navigate(name);
  };
  console.log(Platform);
  return (
    <ScrollView style={globalStyles.container}>
      <Text style={[globalStyles.font, globalStyles.heading]}>
        Welcome to CV creation wizard
      </Text>
      <Text style={[globalStyles.font, styles.info]}>
        Throughout this wizard you will be presented with different screens that
        capture necessary information to create a well structured CV.
      </Text>
      <Text
        style={[
          globalStyles.font,
          styles.info,
          {
            marginBottom: 100,
          },
        ]}>
        Take a look at the floating button on the right-bottom of your screen .
        I helps you navigate back and forth between the pages. Happy wizarding
        :)
      </Text>
      <FloatingAction
        actions={actions}
        floatingIcon={<Feather name='navigation' size={24} color='black' />}
        onPressItem={(name) => {
          pressHandler(name);
        }}
      />
    </ScrollView>
  );
};

const actions = [
  {
    text: 'Go Forward',
    icon: <Entypo name='forward' size={24} color='black' />,
    name: 'Personal informarmation',
    position: 1,
  },
];
// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  info: {
    fontFamily: 'ZenAntiqueSoft',
    alignSelf: 'center',
    width: '70%',
    textAlign: 'center',

    fontSize: 20,
    margin: 10,
    color: '#2b2929c2',
  },
});

//make this component available to the app
export default Welcome;
