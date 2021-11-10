import React from 'react';
import { StyleSheet, ScrollView, Platform, View, Text } from 'react-native';
import uuid from 'react-native-uuid';
import ExperienceComponent from './subComponents/ExperienceComponent';
import { FAB } from 'react-native-paper';

import { useTheme } from 'react-native-paper';

import { Button } from 'react-native-paper';
// create a component

const Experience = ({ navigation }) => {
  const [experiences, setExperiences] = React.useState([]);

  const pressHandler = (name) => {
    navigation.navigate(name);
  };

  const update = ({ position, company, city, from, to, chabi }) => {
    setExperiences((prevExperiences) =>
      prevExperiences.map((exp) =>
        exp.chabi === chabi
          ? { ...exp, position, company, city, from, to, chabi }
          : exp
      )
    );
  };
  const deleteObj = (chabi) => {
    console.log(experiences, chabi);
    setExperiences((prevExperiences) =>
      prevExperiences.filter((exp) => (exp.chabi === chabi ? false : true))
    );
  };

  console.log(experiences);
  const { container, input, fab, heading, colors, font, button } = useTheme();
  console.log(heading);
  return (
    <ScrollView
      contentContainerStyle={{
        flexGrow: 1,
      }}>
      <Text style={heading}>Experience</Text>

      <Button
        mode='outlined'
        style={{ ...button }}
        labelStyle={{ ...font, color: colors.text }}
        onPress={() =>
          setExperiences((prevExperiences) =>
            prevExperiences.concat({
              id: prevExperiences.length + 1,
              chabi: uuid.v4(),
              position: '',
              company: '',
              city: '',
              from: '',
              to: '',
            })
          )
        }>
        ADD EXPERIENCE
      </Button>
      {experiences.map((experience) => (
        <ExperienceComponent
          {...experience}
          update={update}
          deleteObj={deleteObj}
          key={experience.chabi}
        />
      ))}
      <FAB
        style={fab('right')}
        small
        icon='arrow-right-bold'
        //arrow-left-thick
        /* <Entypo name='forward' size={24} color='black' /> */
        onPress={() => {
          pressHandler('Education');
        }}
      />
      <FAB
        style={fab('left')}
        small
        icon='arrow-left-thick'
        //
        /* <Entypo name='forward' size={24} color='black' /> */
        onPress={() => {
          pressHandler('Personal information');
        }}
      />
    </ScrollView>
  );
};

export default Experience;
