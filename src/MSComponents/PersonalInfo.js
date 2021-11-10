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
import { useTheme } from 'react-native-paper';

/* import Button from 'react-native-pure-button';
 */
import { Button } from 'react-native-paper';
import { FAB } from 'react-native-paper';

// create a component
import * as ImagePicker from 'expo-image-picker';

const PersonalInfo = ({ navigation }) => {
  const [PD, setPD] = React.useState({
    firstName: '',
    lastName: '',
    title: '',
    address: '',
    phone: '',
    email: '',
    description: '',
    img: {},
  });

  React.useEffect(() => {
    (async () => {
      if (Platform.OS !== 'web') {
        const { status } =
          await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
          alert('Sorry, we need camera roll permissions to make this work!');
        }
      }
    })();
  }, []);

  const pressHandler = (name) => {
    console.log(PD);

    navigation.navigate(name);
  };

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    //console.log(result);

    if (!result.cancelled) {
      setPD({ ...PD, img: { ...result } });
    }
  };
  const { container, input, fab, heading, colors, font, button } = useTheme();

  const x = useTheme();
  console.log(x);
  return (
    <ScrollView
      style={{
        ...font,
        ...container,
        backgroundColor: colors.background,
      }}>
      <Text
        style={{
          ...font,
          color: colors.primary,
          ...heading,
        }}>
        Personal Info
      </Text>
      <TextInput
        style={{ ...font, color: colors.text, ...input }}
        allowFontScaling={true}
        autoFocus={true}
        placeholderTextColor={colors.placeholder}
        placeholder='First name'
        autoComplete='name-given'
        onChangeText={(firstName) =>
          setPD({
            ...PD,
            firstName,
          })
        }
        value={PD.firstName}
      />
      <TextInput
        style={{ ...font, color: colors.text, ...input }}
        allowFontScaling={true}
        placeholderTextColor={colors.placeholder}
        placeholder='Last name'
        autoComplete='name-family'
        onChangeText={(lastName) =>
          setPD({
            ...PD,
            lastName,
          })
        }
        value={PD.lastName}
      />
      <TextInput
        style={{ ...font, color: colors.text, ...input }}
        allowFontScaling={true}
        placeholderTextColor={colors.placeholder}
        placeholder='Title'
        onChangeText={(title) =>
          setPD({
            ...PD,
            title,
          })
        }
        value={PD.title}
      />
      <TextInput
        style={[
          input,
          {
            height: 80,
          },
        ]}
        allowFontScaling={true}
        autoComplete='postal-address'
        placeholderTextColor={colors.placeholder}
        placeholder='Address'
        textContentType='addressCityAndState'
        dataDetectorTypes='address'
        importantForAutofill='yes'
        numberOfLines={4}
        multiline={true}
        onChangeText={(address) =>
          setPD({
            ...PD,
            address,
          })
        }
        value={PD.address}
      />
      <TextInput
        style={{ ...font, color: colors.text, ...input }}
        allowFontScaling={true}
        placeholderTextColor={colors.placeholder}
        placeholder='Phone number'
        autoComplete='tel'
        keyboardType='phone-pad'
        onChangeText={(phone) =>
          setPD({
            ...PD,
            phone,
          })
        }
        value={PD.phone}
      />
      <TextInput
        style={{ ...font, color: colors.text, ...input }}
        allowFontScaling={true}
        placeholderTextColor={colors.placeholder}
        placeholder='Email'
        autoComplete='email'
        keyboardType='email-address'
        onChangeText={(email) =>
          setPD({
            ...PD,
            email,
          })
        }
        value={PD.email}
      />
      <TextInput
        placeholderTextColor={colors.placeholder}
        placeholder='Description'
        style={[
          input,
          {
            height: 90,
          },
        ]}
        allowFontScaling={true}
        multiline={true}
        numberOfLines={6}
        onChangeText={(description) =>
          setPD({
            ...PD,
            description,
          })
        }
        value={PD.description}
      />
      <Button
        mode='outlined'
        style={{ ...button, marginBottom: 90 }}
        labelStyle={{ ...font, color: colors.text }}
        onPress={pickImage}>
        UPLOAD PHOTO
      </Button>

      <FAB
        style={fab('right')} //styles.fabRight
        small
        icon='arrow-right-bold'
        //arrow-left-thick
        /* <Entypo name='forward' size={24} color='black' /> */
        onPress={() => {
          pressHandler('Experience');
        }}
      />
      <FAB
        style={fab('left')}
        small
        icon='arrow-left-thick'
        //
        /* <Entypo name='forward' size={24} color='black' /> */
        onPress={() => {
          pressHandler('Welcome');
        }}
      />
    </ScrollView>
  );
};

//make this component available to the app
export default PersonalInfo;
