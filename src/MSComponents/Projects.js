//import liraries
import React, { Component } from 'react';
import {
  Platform,
  View,
  Text,
  ScrollView,
  Image,
  StyleSheet,
  TextInput,
} from 'react-native';

import { Button } from 'react-native-paper';
import { FAB, useTheme } from 'react-native-paper';
import uuid from 'react-native-uuid';
import ProjectComponent from './subComponents/ProjectComponent';
const Projects = ({ navigation }) => {
  const [projects, setProjects] = React.useState([]);
  const { container, input, fab, heading, colors, font, button } = useTheme();

  const pressHandler = (name) => {
    navigation.navigate(name);
  };

  const update = ({ title, description, keywords, chabi }) => {
    setExperiences((prevProjects) =>
      prevProjects.map((exp) =>
        exp.chabi === chabi
          ? { ...exp, title, description, keywords, chabi }
          : exp
      )
    );
  };
  const deleteObj = (chabi) => {
    setProjects((prevProjects) =>
      prevProjects.filter((exp) => (exp.chabi === chabi ? false : true))
    );
  };

  //console.log(result);

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
        Projects
      </Text>
      <Button
        mode='outlined'
        style={{ ...button, marginBottom: 20 }}
        labelStyle={{ ...font, color: colors.text }}
        onPress={() =>
          setProjects((prevProjects) =>
            prevProjects.concat({
              id: prevProjects.length + 1,
              chabi: uuid.v4(),
              title: '',
              description: '',
              keywords: '',
            })
          )
        }>
        ADD PROJECT
      </Button>
      {projects.map((project) => (
        <ProjectComponent
          {...project}
          update={update}
          deleteObj={deleteObj}
          key={project.chabi}
        />
      ))}

      <FAB
        style={fab('right')}
        small
        icon='arrow-right-bold'
        //arrow-left-thick
        /* <Entypo name='forward' size={24} color='black' /> */
        onPress={() => {
          pressHandler('Welcome');
        }}
      />
      <FAB
        style={fab('left')}
        small
        icon='arrow-left-thick'
        //
        /* <Entypo name='forward' size={24} color='black' /> */
        onPress={() => {
          pressHandler('Education');
        }}
      />
    </ScrollView>
  );
};
export default Projects;
