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
import Button from 'react-native-pure-button';

import { FloatingAction } from 'react-native-floating-action';
import { Entypo } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { globalStyles } from '../styles';
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
    console.log(PD, image);

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

  return (
    <ScrollView style={globalStyles.container}>
      <Text style={globalStyles.heading}>Personal Info</Text>
      <TextInput
        style={globalStyles.input}
        allowFontScaling={true}
        autoFocus={true}
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
        style={globalStyles.input}
        allowFontScaling={true}
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
        style={globalStyles.input}
        allowFontScaling={true}
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
          globalStyles.input,
          {
            height: 60,
          },
        ]}
        allowFontScaling={true}
        autoComplete='postal-address'
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
        style={globalStyles.input}
        allowFontScaling={true}
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
        style={globalStyles.input}
        allowFontScaling={true}
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
        placeholder='Description'
        style={[
          globalStyles.input,
          {
            height: 60,
          },
        ]}
        allowFontScaling={true}
        multiline={true}
        numberOfLines={4}
        onChangeText={(description) =>
          setPD({
            ...PD,
            description,
          })
        }
        value={PD.description}
      />
      <Button
        style={{
          margin: 15,
          marginBottom: 100,
          padding: 10,
          alignSelf: 'center',
          backgroundColor: '#ffffff',

          borderWidth: 1,
          borderColor: '#536DFE',
          borderRadius: 5,
          width: Platform.OS === 'web' ? '40%' : '80%',
        }}
        textStyle={{
          color: '#db7d7a',

          fontSize: 18,
          textAlign: 'center',
        }}
        onPress={pickImage}>
        Upload Photo
      </Button>

      <FloatingAction
        actions={actions}
        floatingIcon={<Feather name='navigation' size={24} color='black' />}
        onPressItem={(name) => {
          pressHandler(name);
        }}
      />
    </ScrollView>
  );
};
const actions = [
  {
    text: 'Move forward',
    icon: <Entypo name='forward' size={24} color='black' />,
    name: 'Experience',
    position: 1,
  },
  {
    text: 'Go back',
    icon: <Entypo name='back' size={24} color='black' />,
    name: 'Welcome',
    position: 1,
  },
];

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
});

//make this component available to the app
export default PersonalInfo;
