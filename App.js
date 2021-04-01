import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';

export default function App() {
  const image = require('./resources/bg.jpg');

  return (
    <View style={{flex: 1}}>
      <ImageBackground source={image} style={styles.image}>
        <Text style={styles.texto}>Aplicativo de Tarefas</Text>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
    height: 100,
    resizeMode: "cover",
    padding: 20
  },
  texto: {
    textAlign: "center",
    fontSize: 30,
    fontWeight: 'bold',
    color: "#333"
  }
});
