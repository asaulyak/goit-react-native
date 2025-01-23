import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { ImagePicker } from '@/components/image-picker/ImagePicker';

export const RegistrationFrom = () => {
  return (
    <View style={styles.view}>
      <ImagePicker style={styles.imagePicker} />
      <Text style={styles.title}>Registration</Text>
      <View style={styles.form}>
        <View style={styles.formFields}>
          <TextInput placeholder="Login" keyboardType="default" style={styles.input}></TextInput>
          <TextInput placeholder="Email" style={styles.input}></TextInput>
          <View style={styles.passwordView}>
            <TextInput placeholder="Password" secureTextEntry={true} style={styles.input}></TextInput>
            <Text style={styles.passwordShow}>Show</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.submitButton}>
          <Text style={styles.submitButtonText}>Sign Up</Text>
        </TouchableOpacity>
        <Text style={styles.logInLink}>Already have an account? Log In</Text>
      </View>
    </View>
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
    alignItems: 'center'
  },
  passwordShow: {
    position: 'absolute',
    right: 16,
    top: 16,
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
  }
});
