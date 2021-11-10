import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ScrollView,
  Platform,
} from 'react-native';
import { FAB } from 'react-native-paper';
import { Button } from 'react-native-paper';

import { useTheme } from 'react-native-paper';

import uuid from 'react-native-uuid';
import EducationComponent from './subComponents/EducationComponent';

// create a component
const Education = ({ navigation }) => {
  const [educations, setEducations] = React.useState([]);
  const pressHandler = (name) => {
    navigation.navigate(name);
  };

  const update = ({ uniName, city, degree, subject, from, to, chabi }) => {
    setEducations((prevEducations) =>
      prevEducations.map((exp) =>
        exp.chabi === chabi
          ? { ...exp, uniName, city, degree, subject, from, to, chabi }
          : exp
      )
    );
  };
  const deleteObj = (chabi) => {
    console.log(educations, chabi);
    setEducations((prevEducations) =>
      prevEducations.filter((exp) => (exp.chabi === chabi ? false : true))
    );
  };
  const { container, input, fab, heading, colors, font, button } = useTheme();

  console.log(educations);
  return (
    <ScrollView
      contentContainerStyle={{
        flexGrow: 1,
      }}>
      <Text
        style={{
          ...font,
          color: colors.primary,
          ...heading,
        }}>
        Education Information
      </Text>

      <Button
        mode='outlined'
        style={{ ...button }}
        labelStyle={{ ...font, color: colors.text }}
        onPress={() =>
          setEducations((prevEducations) =>
            prevEducations.concat({
              id: prevEducations.length + 1,
              chabi: uuid.v4(),
              uniName: '',
              city: '',
              degree: '',
              subject: '',
              from: '',
              to: '',
            })
          )
        }>
        Add Education
      </Button>
      {educations.map((education) => (
        <EducationComponent
          {...education}
          update={update}
          deleteObj={deleteObj}
          key={education.chabi}
        />
      ))}
      <FAB
        style={fab('right')}
        small
        icon='arrow-right-bold'
        //arrow-left-thick
        /* <Entypo name='forward' size={24} color='black' /> */
        onPress={() => {
          pressHandler('Projects');
        }}
      />
      <FAB
        style={fab('left')}
        small
        icon='arrow-left-thick'
        //
        /* <Entypo name='forward' size={24} color='black' /> */
        onPress={() => {
          pressHandler('Experience');
        }}
      />
    </ScrollView>
  );
};

//make this component available to the app

export default Education;
