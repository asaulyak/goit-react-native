import { ImageUploader } from '@/components/image-uploader/ImageUploader';
import { Feather, SimpleLineIcons } from '@expo/vector-icons';
import { StyleSheet, View, TextInput, Text, TouchableOpacity } from 'react-native';
import { useMemo, useState } from 'react';
import { useNavigation } from '@react-navigation/native';

export const CreatePost = () => {
  const [name, setName] = useState<string | undefined>();
  const [location, setLocation] = useState<string | undefined>();

  const isFormReady = useMemo(() => {
    return name && location;
  }, [name, location]);

  const navigation = useNavigation();

  const handleSubmit = () => {
    navigation.navigate('Posts');
  };

  return (
    <View style={styles.view}>
      <View style={styles.content}>
        <ImageUploader />
        <View style={styles.form}>
          <View style={styles.input}>
            <TextInput
              placeholderTextColor="#BDBDBD"
              placeholder="Name..."
              value={name}
              onChangeText={value => setName(value)}
            />
          </View>

          <View style={styles.input}>
            <SimpleLineIcons style={styles.locationIcon} name="location-pin" size={18} color="#BDBDBD" />
            <TextInput
              style={styles.locationInput}
              placeholderTextColor="#BDBDBD"
              placeholder="Location..."
              value={location}
              onChangeText={value => setLocation(value)}
            />
          </View>
        </View>

        <TouchableOpacity
          style={[styles.submitButton, isFormReady ? undefined : styles.submitButtonDisabled]}
          onPress={handleSubmit}
          disabled={!isFormReady}
        >
          <Text style={[styles.submitButtonText, isFormReady ? undefined : styles.submitButtonTextDisabled]}>
            Submit
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.bottomBar}>
        <TouchableOpacity style={[styles.navButton, styles.navButtonDisabled]}>
          <Feather name="trash-2" size={18} style={[styles.trashIcon, styles.trashIconDisabled]} />
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
    paddingVertical: 32,
  },
  content: {
    gap: 32,
    flex: 1,
  },
  form: {
    gap: 16
  },
  input: {
    height: 50,
    width: '100%',
    borderBottomWidth: 1,
    borderBottomColor: '#E8E8E8',
    color: '#BDBDBD',
    justifyContent: 'center'
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
    alignItems: 'center',
  },
  navButton: {
    borderRadius: 20,
    width: 70,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center'
  },
  navButtonActive: {
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
