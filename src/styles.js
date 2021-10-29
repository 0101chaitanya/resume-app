import React from 'react';
import { StyleSheet, Platform } from 'react-native';

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  heading: {
    fontSize: 30,
    textAlign: 'center',
    margin: 15,
    marginBottom: 20,
    textDecorationLine: 'underline',
    color: '#1095c5',
  },

  font: {
    fontFamily: 'ZenAntiqueSoft',
  },
  input: {
    fontFamily: 'ZenAntiqueSoft',
    padding: 7,
    height: 40,
    fontSize: 18,
    justifyContent: 'center',
    borderColor: '#8391e0',
    borderWidth: 1,
    backgroundColor: '#ffffff',
    color: '#b92b27',
    width: Platform.OS === 'web' ? '40%' : '80%',
    margin: 15,
    alignSelf: 'center',
    borderRadius: 7,
  },
});
