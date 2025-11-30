import { useState } from "react";
import{Text,View,TextInput,TouchableOpacity,StyleSheet,KeyboardAvoidingView,ScrollView,Platform}from"react-native";
import{ signInWithEmailAndPassword}from 'firebase/auth'
import auth from '../service/firebaseAuth'

export default function Login({navigation}) {

    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    
    const handleRegister=()=>{
        if(!email || !password){
            alert('Please enter email and password');
            return;
        }
        signInWithEmailAndPassword(auth,email,password)
        .then((userCredential)=> {
             const user=userCredential.user;
             console.log('User registered:', user);
             navigation.navigate('DashBoard')
            //  alert('Registration successful!');
        })
        .catch((error)=> {
            console.log('Registration error:', error.message);
            alert('Error: ' + error.message);
        })
    }
    const gotoreg=()=> {
        navigation.navigate("Register")
    }


  return (
    <KeyboardAvoidingView 
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <View style={styles.header}>
          <Text style={styles.title}>MyApp</Text>
          <Text style={styles.subtitle}>Login</Text>
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
        
        <TouchableOpacity style={styles.loginButton} onPress={handleRegister}>
          <Text style={styles.loginButtonText}>LOGIN</Text>
        </TouchableOpacity>
      </View>
      
      <View style={styles.footer}>
        <Text style={styles.footerText}>Don't have an account? </Text>
        <Text style={styles.linkText} onPress={gotoreg}>Register Here</Text>
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
    backgroundColor: '#007AFF',
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
  loginButton: {
    backgroundColor: '#007AFF',
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
  },
  loginButtonText: {
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
    color: '#007AFF',
    fontSize: 14,
    fontWeight: 'bold',
  },
});