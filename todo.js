import React, { useState } from 'react';
import { View, StyleSheet, Text, KeyboardAvoidingView, TextInput, Platform, TouchableOpacity, Keyboard } from 'react-native';
import MyTaskApp from './tasks';


const MyTodoApp = () => {
  const[task, setTask]= useState();
  const[taskItems, setTaskItems]= useState([]);
  const handelAddTask=()=> {
    Keyboard.dismiss();
    setTaskItems([...taskItems, task])
    setTask(null);
  }
  const completeTask = (index)=>{
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy);
  }
  return (
     <View style={styles.container}>
     <View style={styles.tasksWrapper}>
    <Text style={styles.sectionTitle}>Digi-Life Todo</Text>

    <View style={styles.items}>
    {/*New Task*/}
    {
      taskItems.map((item, index)=>{
       return(
         <TouchableOpacity key={index} onPress={() => completeTask(index)}>
         <MyTaskApp  text={item}/>
         </TouchableOpacity>
       )
        
      })
    }  
    </View>
    </View>
    <KeyboardAvoidingView behavior={Platform.OS==="ios" ? "padding" : "height"} style={styles.writeTaskWrapper}>
    <TextInput style={styles.input} placeholder={"Write Digi-Life Task"}   value={task} onChangeText={text=>setTask(text)}/>
    <TouchableOpacity onPress={() => handelAddTask()}>
    <View style={styles.addWrapper}>
    <Text style={styles.addText}>+</Text>
    </View>
    </TouchableOpacity>
    </KeyboardAvoidingView>
     </View>
  );
};

export default MyTodoApp;



const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:'#E8EAED', 
  },
  tasksWrapper:{
    paddingTop:80,
    paddingHorizontal:20,
  },
  sectionTitle:{
    fontSize:24,
    fontWeight:'bold',
  },
  items:{
    marginTop:30,
  },
  writeTaskWrapper:{
    position:"absolute",
    bottom:60,
    width:"100%",
    flexDirection:"row",
    justifyContent:'space-around',
    alignItems:'center',

  },
  input:{
    paddingVertical:15,
    width:250,
    paddingHorizontal:15,
    backgroundColor:"#FFF",
    borderRadius:60,
    borderColor:"#C0C0C0",
    borderWidth:1,
  },
  addWrapper:{
    width:60,
    height:60,
    backgroundColor:"#FFF",
    borderRadius:60,
    justifyContent:"center",
    alignItems:"center",
    borderColor:"#C0C0C0",
    borderWidth:1,
  },
  addText:{

  }
});