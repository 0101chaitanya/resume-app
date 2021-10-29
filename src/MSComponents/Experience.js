//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { FloatingAction } from 'react-native-floating-action';
import { Entypo } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

// create a component
const Experience = ({ navigation }) => {
  const pressHandler = (name) => {
    navigation.navigate(name);
  };

  return (
    <View style={styles.container}>
      <Text>Experience</Text>
      <FloatingAction
        actions={actions}
        floatingIcon={<Feather name='navigation' size={24} color='black' />}
        onPressItem={(name) => {
          pressHandler(name);
        }}
      />
    </View>
  );
};
const actions = [
  /*  {
    text: 'Go Forward',
    icon: <Entypo name='forward' size={24} color='black' />,
    name: 'Forward',
    position: 1,
  },
  */ {
    text: 'Go back',
    icon: <Entypo name='back' size={24} color='black' />,
    name: 'Personal informarmation',
    position: 1,
  },
];

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

//make this component available to the app
export default Experience;
