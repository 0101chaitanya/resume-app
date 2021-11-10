import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ScrollView,
  Platform,
} from 'react-native';
import { Button } from 'react-native-paper';

import uuid from 'react-native-uuid';
import { useTheme } from 'react-native-paper';

export default function ProjectComponent({
  id,
  chabi,
  title,
  description,
  keywords,
  update,
  deleteObj,
}) {
  const [project, setProject] = React.useState({
    title,
    description,
    keywords,
  });
  const { container, input, section, fab, heading, colors, font, button } =
    useTheme();

  return (
    <View style={container}>
      <Text style={{ ...section }}>Section {id}</Text>
      <TextInput
        style={input}
        allowFontScaling={true}
        autoFocus={true}
        placeholderTextColor={colors.placeholder}
        placeholder='Title of the project'
        onChangeText={(title) =>
          setProject({
            ...project,
            title,
          })
        }
        value={project.title}
      />
      <TextInput
        style={{ ...input, height: 150 }}
        allowFontScaling={true}
        placeholderTextColor={colors.placeholder}
        placeholder='Description'
        numberOfLines={4}
        multiline={true}
        onChangeText={(description) =>
          setProject({
            ...project,
            description,
          })
        }
        value={project.description}
      />
      <TextInput
        style={{ ...input, height: 60 }}
        allowFontScaling={true}
        placeholderTextColor={colors.placeholder}
        placeholder='Keywords'
        numberOfLines={2}
        multiline={true}
        placeholder='Mention keywords here and use commas'
        onChangeText={(keywords) =>
          setProject({
            ...project,
            keywords,
          })
        }
        value={project.keywords}
      />
      <Button
        style={button}
        mode='outlined'
        labelStyle={{ ...font, color: colors.text }}
        onPress={() => update({ ...project, chabi })}>
        SAVE
      </Button>
      <Button
        style={button}
        labelStyle={{ ...font, color: colors.text }}
        mode='outlined'
        onPress={() => {
          deleteObj(chabi);
        }}>
        DELETE
      </Button>
    </View>
  );
}
