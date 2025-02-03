import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View
} from 'react-native';
import { ImageUploader } from '@/components/image-picker/ImageUploader';
import { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useAuth } from '@/common/auth/auth.context';
import { doc, setDoc } from 'firebase/firestore';
import { db } from '@/config';

export const RegistrationFrom = () => {
  const [name, setName] = useState<string | undefined>();
  const [email, setEmail] = useState<string | undefined>();
  const [password, setPassword] = useState<string | undefined>();
  const [avatar, setAvatar] = useState<string | undefined>();
  const { signUp } = useAuth();

  const [showPassword, setShowPassword] = useState(false);

  const navigation = useNavigation();

  const navigateToLogin = () => navigation.navigate('Login');

  const handleLoginPress = () => navigateToLogin();

  const handleSubmit = async () => {
    if (!name || !email || !password) {
      return;
    }

    await signUp({
      email,
      name,
      password,
      avatar
    });
  };

  const toggleShowPassword = () => {
    setShowPassword(prev => !prev);
  };

  const handleImageChange = (uri: string) => setAvatar(uri);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.view}>
        <KeyboardAvoidingView
          behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
          style={styles.keyboardAvoidingView}
        >
          <ImageUploader style={styles.imagePicker} onUpload={handleImageChange} />
          <Text style={styles.title}>Sign Up</Text>
          <View style={styles.form}>
            <View style={styles.formFields}>
              <TextInput
                placeholder="Name"
                style={styles.input}
                value={name}
                onChangeText={value => setName(value)}
              ></TextInput>
              <TextInput
                placeholder="Email"
                style={styles.input}
                value={email}
                onChangeText={value => setEmail(value)}
              ></TextInput>
              <View style={styles.passwordView}>
                <TextInput
                  placeholder="Password"
                  style={styles.passwordInput}
                  secureTextEntry={!showPassword}
                  value={password}
                  onChangeText={value => setPassword(value)}
                ></TextInput>
                <Text style={styles.passwordShow} onPress={toggleShowPassword}>
                  {showPassword ? 'Hide' : 'Show'}
                </Text>
              </View>
            </View>
            <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
              <Text style={styles.submitButtonText}>Sign Up</Text>
            </TouchableOpacity>
            <Text onPress={handleLoginPress} style={styles.logInLink}>
              Already have an account? Log In
            </Text>
          </View>
        </KeyboardAvoidingView>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  view: {
    backgroundColor: '#fff',
    width: '100%',
    borderRadius: 25,
    borderBottomRightRadius: 0,
    borderBottomLeftRadius: 0,
    alignItems: 'center',
    paddingLeft: 16,
    paddingRight: 16
  },
  title: {
    fontWeight: 500,
    fontSize: 30,
    color: '#212121',
    textAlign: 'center',
    marginBottom: 32
  },
  form: {
    width: '100%'
  },
  formFields: {
    marginBottom: 44,
    gap: 16
  },
  input: {
    width: '100%',
    height: 50,
    borderWidth: 1,
    borderColor: '#E8E8E8',
    backgroundColor: '#F6F6F6',
    padding: 16,
    borderRadius: 8
  },
  passwordView: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',

    width: '100%',
    height: 50,
    borderWidth: 1,
    borderColor: '#E8E8E8',
    backgroundColor: '#F6F6F6',
    paddingLeft: 16,
    paddingRight: 16,
    borderRadius: 8
  },
  passwordInput: {
    flex: 1
  },
  passwordShow: {
    fontSize: 16,
    color: '#1B4371'
  },
  submitButton: {
    backgroundColor: '#FF6C00',
    padding: 16,
    borderRadius: 100,
    justifyContent: 'center',
    marginBottom: 16
  },
  submitButtonText: {
    fontSize: 16,
    color: '#fff',
    textAlign: 'center'
  },
  logInLink: {
    color: '#1B4371',
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 78
  },
  imagePicker: {
    top: -60
  },
  keyboardAvoidingView: {
    width: '100%',
    alignItems: 'center'
  }
});
