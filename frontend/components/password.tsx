import { SymbolView } from 'expo-symbols';
import { StyleSheet, TextInput, TouchableOpacity } from 'react-native';

import { View } from '@/components/Themed';
import { useState } from 'react';

export default function Password({ value, onChangeText }: { value: string; onChangeText: (text: string) => void }) {
    const [passwordVisible, setPasswordVisible]=useState(false);
  return (
  
 
        <View style={styles.passwordContainer}>
            <TextInput  style={styles.input} value={value} onChangeText={onChangeText} secureTextEntry={!passwordVisible}  />           
            <TouchableOpacity onPress={() => setPasswordVisible(!passwordVisible)}>
                <SymbolView name={{
                 ios: passwordVisible ? 'eye.slash' : 'eye',
                 android: passwordVisible ? 'visibility_off' : 'visibility',
                 web: passwordVisible ? 'visibility_off' : 'visibility',
                }}
                style={styles.icon}
                tintColor='white'
                size={28}/>                              
            </TouchableOpacity>
        </View>
  );
}

const styles = StyleSheet.create({
  container: {
   width:'100%'
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
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
    color:'white',
    tintColor:'white'
  },
  passwordContainer:{
    display:'flex',
    flexDirection:'row'
  },
  icon:{
    position:'relative',
    right:40,
    top:18,
  },
});
