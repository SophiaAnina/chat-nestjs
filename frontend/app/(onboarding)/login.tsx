import Password from '@/components/password';
import { Text, View } from '@/components/Themed';
import { useRouter } from 'expo-router';
import { useState } from 'react';

import { StyleSheet, TextInput, TouchableOpacity, Platform } from 'react-native';
const API_URL =
  process.env.EXPO_PUBLIC_API_URL ?? (Platform.OS === 'android' ? 'http://10.0.2.2:3000' : 'http://localhost:3000');

export default function Login() {
  const router = useRouter();
  const[email, setEmail]=useState("");
  const[password, setPassword]=useState("");

  
  const handleLogin = async () => {
    try {
      const response = await fetch(`${API_URL}/users/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        const data = await response.json().catch(() => null);
        const message = Array.isArray(data?.message) ? data.message.join('\n') : data?.message;
        throw new Error(message ?? `Login failed (${response.status})`);
      }
      router.replace('/(tabs)/home');
    } catch (error) {
      alert(error instanceof Error ? error.message : 'Could not reach the server');
    }
  };
  return (
    
      <View style={styles.container}>
      <Text style={styles.title}>Login</Text>  
      <View style={styles.inputContainer}>
        <Text>Email</Text>
        <TextInput style={styles.input} 
        value={email} 
        onChangeText={setEmail} 
        autoCapitalize="none" 
        keyboardType="email-address" 
        textContentType='emailAddress' />
      </View>
      <Text>Password</Text>
      <Password  
      value={password} 
      onChangeText={setPassword} />

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      </View>
   
  );
}

const styles = StyleSheet.create({

  container:{
    justifyContent:'center',
    alignContent:'center',
   padding:20,
   flex:1,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom:20,
    textAlign:'center'
  },
  inputContainer:{
    width:'100%',
    marginBottom:20,
  },
  input:{
    borderColor:'white',
    borderWidth:1,
    width:'100%',
    marginTop:10,
    color:'white'
  },
  button:{
    backgroundColor:'white',
    paddingVertical:20,
    marginTop:50,
    borderRadius:20,
  },
  buttonText:{
    color:'black',
    textAlign:'center',
    fontWeight:'bold'
  }
});
