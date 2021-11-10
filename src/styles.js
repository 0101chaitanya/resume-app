import React from 'react';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import { Platform } from 'react-native';
const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: '#e04e14',
    accent: '#e4e719',
    text: '#1c6ba0', //'#29271f',
    placeholder: '#686761',
    background: '#f1f7f5',
    secondary: '#0c5f17',
  },
  font: {
    fontFamily: 'ZenAntiqueSoft',
    fontWeight: 'bold',
  },
  container: {
    flexGrow: 1,
  },
  get heading() {
    return {
      fontFamily: this.font.fontFamily,
      fontWeight: this.font.fontWeight,

      color: this.colors.primary,
      fontSize: 30,
      textAlign: 'center',
      margin: 15,
      marginBottom: 10,
      textDecorationLine: 'underline',
    };
  },

  get info() {
    return {
      ...this.font,
      width: '70%',
      alignSelf: 'center',
      textAlign: 'center',
      fontSize: 20,
      margin: 10,
      color: this.colors.text,
    };
  },
  get input() {
    return {
      ...this.font,
      padding: 7,
      height: 40,
      fontSize: 18,
      justifyContent: 'center',
      borderWidth: 1,
      borderColor: this.colors.secondary,
      width: Platform.OS === 'web' ? '40%' : '80%',
      margin: 10,
      alignSelf: 'center',
      borderRadius: 7,
    };
  },
  get button() {
    return {
      ...this.font,
      marginBottom: 15,

      alignSelf: 'center',
      justifyContent: 'center',
      alignItems: 'center',
      borderWidth: 2,
      borderRadius: 5,
      width: Platform.OS === 'web' ? 'auto' : 'auto',

      backgroundColor: this.colors.accent,
    };
  },
  get section() {
    return {
      fontFamily: this.font.fontFamily,
      fontWeight: this.font.fontWeight,
      color: this.colors.primary,
      fontSize: 22,
      textAlign: 'center',
      margin: 15,
      marginBottom: 10,
      textDecorationLine: 'underline',
    };
  },
  fab(dir) {
    return {
      [dir]: 16,
      position: Platform.OS === 'web' ? 'fixed' : 'absolute',
      margin: 20,

      //left: 0,
      bottom: 0,
    };
  },
};

export default theme;
