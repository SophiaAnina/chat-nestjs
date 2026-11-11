import Password from '@/components/password';
import { Text, View } from '@/components/Themed';
import { StyleSheet, TextInput, TouchableOpacity } from 'react-native';
export default function Login() {
  return (
    
      <View style={styles.container}>
      <Text style={styles.title}>Login</Text>  
      <View style={styles.inputContainer}>
        <Text>Email</Text>
        <TextInput style={styles.input} />
      </View>
      <Text>Password</Text>
      <Password/>
      <TouchableOpacity style={styles.button}>
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
