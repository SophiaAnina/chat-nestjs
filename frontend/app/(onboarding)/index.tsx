import Password from '@/components/password';
import { Text, View } from '@/components/Themed';
import { useState } from 'react';
import { Alert, Platform, ScrollView, StatusBar, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

// The Android emulator reaches the host machine through 10.0.2.2
const API_URL =
  process.env.EXPO_PUBLIC_API_URL ?? (Platform.OS === 'android' ? 'http://10.0.2.2:3000' : 'http://localhost:3000');

export default function Signup() {
  const[name,setName]=useState("");
  const[lastName, setLastName]=useState("");
  const[email, setEmail]=useState("");
  const[password, setPassword]=useState("");
  const[repeatPassword, setRepeatPassword]=useState("");
  const[loading, setLoading]=useState(false);

  const handleSignup = async () => {
    if (!name || !lastName || !email || !password) {
      Alert.alert('Error', 'Please fill in all fields');
      return;
    }
    if (password !== repeatPassword) {
      Alert.alert('Error', 'Passwords do not match');
      return;
    }

    setLoading(true);
    try {
      const response = await fetch(`${API_URL}/user`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, lastname: lastName, email, password }),
      });

      if (!response.ok) {
        const data = await response.json().catch(() => null);
        const message = Array.isArray(data?.message) ? data.message.join('\n') : data?.message;
        throw new Error(message ?? `Signup failed (${response.status})`);
      }

      Alert.alert('Success', 'Account created');
      setName('');
      setLastName('');
      setEmail('');
      setPassword('');
      setRepeatPassword('');
    } catch (error) {
      Alert.alert('Error', error instanceof Error ? error.message : 'Could not reach the server');
    } finally {
      setLoading(false);
    }
  };
 
  return (
    <ScrollView style={styles.scrollContainer}>
      <StatusBar/>
      <View style={styles.container}>
      <Text style={styles.title}>Signup</Text>  
      
      <View style={styles.inputContainer}>
        <Text>Name</Text>
        <TextInput style={styles.input} 
        value={name} 
        onChangeText={setName} 
        textContentType="name" />
      </View>

      <View style={styles.inputContainer}>
        <Text>Lastname</Text>
        <TextInput 
        style={styles.input} 
        value={lastName} 
        onChangeText={setLastName} 
        textContentType='familyName' />
      </View>

      <View style={styles.inputContainer}>
        <Text>Email</Text>
        <TextInput 
        style={styles.input} 
        value={email} 
        onChangeText={setEmail} 
        autoCapitalize="none" 
        keyboardType="email-address" 
        textContentType='emailAddress' />
      </View>

      <View style={styles.inputContainer}>
        <Text>Password</Text>
        <Password 
        value={password} 
        onChangeText={setPassword} />
      </View>

      <View style={styles.inputContainer}>
        <Text>Repeat Password</Text>
        <Password 
        value={repeatPassword} 
        onChangeText={setRepeatPassword} />
      </View>

       <TouchableOpacity style={styles.button}  
       onPress={handleSignup} 
       disabled={loading}>
        <Text style={styles.buttonText}>Signup</Text>
      </TouchableOpacity>

      </View>
   </ScrollView>   
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    paddingTop:100,
   padding:20,  
  },
  container:{
    marginBottom:'100%'
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom:20,
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
