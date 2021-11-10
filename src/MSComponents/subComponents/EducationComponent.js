import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ScrollView,
  Platform,
} from 'react-native';
import uuid from 'react-native-uuid';
import { Button } from 'react-native-paper';

import { useTheme } from 'react-native-paper';
export default function EducationComponent({
  id,
  chabi,
  uniName,
  city,
  degree,
  subject,
  from,
  to,
  update,
  deleteObj,
}) {
  const [education, setEducation] = React.useState({
    uniName,
    city,
    degree,
    subject,
    from,
    to,
  });
  const { container, input, section, fab, heading, colors, font, button } =
    useTheme();

  return (
    <View style={container}>
      <Text style={{ ...section, ...font, color: colors.primary }}>
        Section {id}
      </Text>
      <TextInput
        style={input}
        placeholderTextColor={colors.placeholder}
        allowFontScaling={true}
        autoFocus={true}
        placeholder='Organization name'
        onChangeText={(uniName) =>
          setEducation({
            ...education,
            uniName,
          })
        }
        value={education.uniName}
      />
      <TextInput
        style={input}
        placeholderTextColor={colors.placeholder}
        allowFontScaling={true}
        placeholder='City'
        onChangeText={(city) =>
          setEducation({
            ...education,
            city,
          })
        }
        value={education.city}
      />
      <TextInput
        style={input}
        placeholderTextColor={colors.placeholder}
        allowFontScaling={true}
        placeholder='Degree'
        onChangeText={(degree) =>
          setEducation({
            ...education,
            degree,
          })
        }
        value={education.degree}
      />
      <TextInput
        style={input}
        placeholderTextColor={colors.placeholder}
        allowFontScaling={true}
        placeholder='Subject'
        onChangeText={(subject) =>
          setEducation({
            ...education,
            subject,
          })
        }
        value={education.subject}
      />

      <TextInput
        style={input}
        placeholderTextColor={colors.placeholder}
        allowFontScaling={true}
        placeholder='From'
        onChangeText={(from) =>
          setEducation({
            ...education,
            from,
          })
        }
        value={education.from}
      />
      <TextInput
        style={input}
        placeholderTextColor={colors.placeholder}
        allowFontScaling={true}
        placeholder='To'
        onChangeText={(to) =>
          setEducation({
            ...education,
            to,
          })
        }
        value={education.to}
      />

      <Button
        mode='outlined'
        style={{ ...button }}
        labelStyle={{ ...font, color: colors.text }}
        onPress={() => update({ ...experience, chabi })}>
        Save
      </Button>
      <Button
        mode='outlined'
        style={{ ...button }}
        labelStyle={{ ...font, color: colors.text }}
        onPress={() => {
          deleteObj(chabi);
        }}>
        Delete
      </Button>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 100,
  },
  buttonStyle: {
    margin: 10,
    padding: 10,
    alignSelf: 'center',
    backgroundColor: '#ffffff',

    borderWidth: 1,
    borderColor: '#536DFE',
    borderRadius: 5,
    width: Platform.OS === 'web' ? '30%' : '40%',
  },
});
