import { Feather, SimpleLineIcons } from '@expo/vector-icons';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useEffect, useMemo, useRef, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { LiveCamera } from '@/components/live-camera/LiveCamera';
import { PermissionStatus, requestForegroundPermissionsAsync } from 'expo-location';
import { GooglePlacesAutocomplete, GooglePlacesAutocompleteRef } from 'react-native-google-places-autocomplete';
import 'react-native-get-random-values';
import { PostLocation } from '@/features/posts/types';

const GOOGLE_PLACES_API_KEY = process.env.EXPO_PUBLIC_GOOGLE_PLACES_API_KEY;

export const CreatePost = () => {
  const [name, setName] = useState<string | undefined>();
  const [locationData, setLocationData] = useState<PostLocation | undefined>();
  const [image, setImage] = useState<string | undefined>();

  const placesRef = useRef<GooglePlacesAutocompleteRef | null>(null);

  const isFormValid = useMemo(() => !!name && !!locationData && !!image, [name, locationData, image]);
  const canReset = useMemo(() => !!name || !!locationData || !!image, [name, locationData, image]);

  useEffect(() => {
    (async () => {
      let { status } = await requestForegroundPermissionsAsync();
      if (status !== PermissionStatus.GRANTED) {
        return;
      }
    })();
  }, []);

  const navigation = useNavigation();

  const handleSubmit = () => {
    navigation.navigate('Posts');
  };

  const handleImageChange = (uri: string) => {
    setImage(uri);
  };

  const reset = () => {
    setName(undefined);
    setLocationData(undefined);
    setImage(undefined);
    placesRef.current?.clear();
  };

  return (
    <View style={styles.view}>
      <View style={styles.content}>
        <LiveCamera onTakePhoto={handleImageChange} />

        <View style={styles.form}>
          <View style={styles.input}>
            <TextInput
              placeholderTextColor="#BDBDBD"
              placeholder="Name..."
              value={name}
              onChangeText={value => setName(value)}
            />
          </View>

          <GooglePlacesAutocomplete
            ref={placesRef}
            placeholder="Location..."
            minLength={4}
            enablePoweredByContainer={false}
            fetchDetails
            onPress={(_, details = null) => {
              if (details) {
                setLocationData({
                  address: details.formattedAddress,
                  geo: {
                    lat: details.geometry.location.lat,
                    lng: details.geometry.location.lng
                  }
                });
              }
            }}
            query={{
              key: GOOGLE_PLACES_API_KEY,
              language: 'en'
            }}
            textInputProps={{
              InputComp: TextInput,
              style: styles.inputPlaces,
              leftIcon: <SimpleLineIcons style={styles.locationIcon} name="location-pin" size={18} color="#BDBDBD" />
            }}
          />
        </View>

        <TouchableOpacity
          style={[styles.submitButton, isFormValid ? undefined : styles.submitButtonDisabled]}
          onPress={handleSubmit}
          disabled={!isFormValid}
        >
          <Text style={[styles.submitButtonText, isFormValid ? undefined : styles.submitButtonTextDisabled]}>
            Submit
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.bottomBar}>
        <TouchableOpacity
          style={[styles.navButton, canReset ? undefined : styles.navButtonDisabled]}
          onPress={reset}
          disabled={!canReset}
        >
          <Feather
            name="trash-2"
            size={18}
            style={[styles.trashIcon, canReset ? undefined : styles.trashIconDisabled]}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    backgroundColor: '#fff',
    width: '100%',
    height: '100%',
    paddingHorizontal: 16,
    paddingVertical: 32
  },
  content: {
    gap: 32,
    flex: 1
  },
  form: {
    gap: 16,
    flex: 1
  },
  input: {
    height: 50,
    width: '100%',
    borderBottomWidth: 1,
    borderBottomColor: '#E8E8E8',
    color: '#BDBDBD',
    justifyContent: 'center',
    overflow: 'visible'
  },
  inputPlaces: {
    width: '100%',
    borderBottomWidth: 1,
    borderBottomColor: '#E8E8E8',
    color: '#212121',
    justifyContent: 'center',
    overflow: 'visible'
  },
  locationInput: {
    paddingLeft: 28
  },
  locationIcon: {
    position: 'absolute'
  },
  submitButton: {
    backgroundColor: '#FF6C00',
    padding: 16,
    borderRadius: 100,
    justifyContent: 'center',
    marginBottom: 16
  },
  submitButtonDisabled: {
    backgroundColor: '#F6F6F6'
  },
  submitButtonText: {
    fontSize: 16,
    color: '#fff',
    textAlign: 'center'
  },
  submitButtonTextDisabled: {
    color: '#BDBDBD'
  },
  bottomBar: {
    alignItems: 'center'
  },
  navButton: {
    borderRadius: 20,
    width: 70,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FF6C00'
  },
  navButtonDisabled: {
    backgroundColor: '#F6F6F6'
  },
  trashIcon: {
    color: '#fff'
  },
  trashIconDisabled: {
    color: '#DADADA'
  }
});
