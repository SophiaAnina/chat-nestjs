import Password from '@/components/password';
import { Text, View } from '@/components/Themed';
import { ScrollView, StatusBar, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
export default function Signup() {
  return (
    <ScrollView style={styles.scrollContainer}>
      <StatusBar/>
      <View style={styles.container}>
      <Text style={styles.title}>Signup</Text>  
      <View style={styles.inputContainer}>
        <Text>Name</Text>
        <TextInput style={styles.input} />
      </View>
      <View style={styles.inputContainer}>
        <Text>Lastname</Text>
        <TextInput style={styles.input} />
      </View>
      <View style={styles.inputContainer}>
        <Text>Email</Text>
        <TextInput style={styles.input} />
      </View>
      <View style={styles.inputContainer}>
        <Text>Password</Text>
        <Password/>
      </View>
      <View style={styles.inputContainer}>
        <Text>Repeat Password</Text>
        <Password/>
      </View>
       <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Login</Text>
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
