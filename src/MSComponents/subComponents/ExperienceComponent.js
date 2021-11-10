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

export default function ExperienceComponent({
  id,
  chabi,
  position,
  company,
  city,
  from,
  to,
  update,
  deleteObj,
}) {
  const [experience, setExperience] = React.useState({
    position,
    company,
    city,
    from,
    to,
  });
  const { container, input, section, fab, heading, colors, font, button } =
    useTheme();
  console.log(section);
  return (
    <View style={container}>
      <Text style={{ ...section, ...font, color: colors.primary }}>
        Section {id}
      </Text>
      <TextInput
        style={input}
        allowFontScaling={true}
        autoFocus={true}
        placeholderTextColor={colors.placeholder}
        placeholder='Experience'
        onChangeText={(position) =>
          setExperience({
            ...experience,
            position,
          })
        }
        value={experience.position}
      />
      <TextInput
        style={input}
        allowFontScaling={true}
        placeholderTextColor={colors.placeholder}
        placeholder='Company'
        onChangeText={(company) =>
          setExperience({
            ...experience,
            company,
          })
        }
        value={experience.company}
      />
      <TextInput
        style={input}
        allowFontScaling={true}
        placeholderTextColor={colors.placeholder}
        placeholder='City'
        onChangeText={(city) =>
          setExperience({
            ...experience,
            city,
          })
        }
        value={experience.city}
      />
      <TextInput
        style={input}
        allowFontScaling={true}
        placeholderTextColor={colors.placeholder}
        placeholder='From'
        onChangeText={(from) =>
          setExperience({
            ...experience,
            from,
          })
        }
        value={experience.from}
      />
      <TextInput
        style={input}
        allowFontScaling={true}
        placeholderTextColor={colors.placeholder}
        placeholder='To'
        onChangeText={(to) =>
          setExperience({
            ...experience,
            to,
          })
        }
        value={experience.to}
      />
      <Button
        style={button}
        mode='outlined'
        labelStyle={{ ...font, color: colors.text }}
        onPress={() => update({ ...experience, chabi })}>
        SAVE
      </Button>
      <Button
        style={{ ...button, marginBottom: 70 }}
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
