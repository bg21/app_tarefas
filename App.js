import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity } from 'react-native';

import { AntDesign } from '@expo/vector-icons';
import AppLoading from 'expo-app-loading';
import { useFonts, Inter_900Black } from '@expo-google-fonts/inter';

export default function App() {
  
  const image = require('./resources/bg.jpg');

  const [tarefas, setarTarefas] = useState([
    {
      id: 1,
      tarefa: "Minha tarefa"
    },
    {
      id: 2,
      tarefa: "Minha tarefa"
    }
  ]);

  
  let [fontsLoaded] = useFonts({
    Inter_900Black,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }
      return (
        
        <View style={{flex: 1}}>
          <StatusBar hidden/>
          <ImageBackground source={image} style={styles.image}>
            <Text style={styles.texto}>
              App Tarefas
            </Text>
          </ImageBackground>
          {
              tarefas.map(function(val){
          return(<View style={styles.bodySingle}>
            
            
                <View style={{flex: 1, width: "100%"}}>
                  <Text style={{color: "#333"}}>{val.tarefa}</Text>
                </View>
              
            


            <View>
              <TouchableOpacity>
                <AntDesign name="minuscircle" size={24} color="black" />
              </TouchableOpacity>
            </View>

            </View>);
            })
              
          }
          
        </View>

      );
    }
  

    
  


const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 80,
    resizeMode: "cover",
  },
  texto: {
    textAlign: "center",
    fontSize: 30,
    color: "#333",
    fontFamily: "Inter_900Black",
    padding: 20
  },
  bodySingle: {
    marginTop: 30,
    width: '100%',
    borderBottomColor: "#333",
    borderBottomWidth: 2,
    padding: 20,
    flexDirection: "row"
  }
});
