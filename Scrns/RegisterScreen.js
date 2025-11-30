import { useState } from "react";
import{Text,View,TextInput,TouchableOpacity,StyleSheet,KeyboardAvoidingView,ScrollView,Platform}from"react-native";
import{ createUserWithEmailAndPassword}from 'firebase/auth'
import auth from '../service/firebaseAuth'

export default function RegisterScreen({navigation}) {

    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    
    const handleRegister=()=>{
        if(!email || !password){
            alert('Please enter email and password');
            return;
        }
        createUserWithEmailAndPassword(auth,email,password)
        .then((userCredential)=> {
             const user=userCredential.user;
             console.log('User registered:', user);
            navigation.navigate('Login')

        })
        .catch((error)=> {
            console.log('Registration error:', error.message);
            alert('Error: ' + error.message);
        })
    }

    const gotolog=()=>{
        navigation.navigate('Login')
    }


  return (
    <KeyboardAvoidingView 
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <View style={styles.header}>
          <Text style={styles.title}>MyApp</Text>
          <Text style={styles.subtitle}>Create Account</Text>
        </View>
        
        <View style={styles.content}>
        <TextInput 
          onChangeText={setEmail}
          placeholder="Email"
          placeholderTextColor="#999"
          style={styles.textInput}
          keyboardType="email-address"
        />
        <TextInput
          onChangeText={setPassword}
          placeholder="Password"
          placeholderTextColor="#999"
          secureTextEntry
          style={styles.textInput}
        />
        
        <TouchableOpacity style={styles.registerButton} onPress={handleRegister}>
          <Text style={styles.registerButtonText}>REGISTER</Text>
        </TouchableOpacity>
      </View>
      
      <View style={styles.footer}>
        <Text style={styles.footerText}>Already have an account? </Text>
        <Text style={styles.linkText} onPress={gotolog}>Login</Text>
      </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    backgroundColor: '#34C759',
    paddingTop: 60,
    paddingBottom: 40,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 16,
    color: 'rgba(255,255,255,0.8)',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    paddingHorizontal: 15,
    paddingVertical: 12,
    marginVertical: 10,
    backgroundColor: '#fff',
    fontSize: 14,
    color: '#333',
  },
  registerButton: {
    backgroundColor: '#34C759',
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
  },
  registerButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingBottom: 40,
    paddingHorizontal: 20,
  },
  footerText: {
    color: '#666',
    fontSize: 14,
  },
  linkText: {
    color: '#34C759',
    fontSize: 14,
    fontWeight: 'bold',
  },
});