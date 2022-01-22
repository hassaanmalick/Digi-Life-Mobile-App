import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import DigiLifeLiveClock from './Clock.js';
function DigitalClockApp() {
  return (
    <View style={stylesheet.stylingView}>
      <Text style={stylesheet.styleText}>Digi-Life (Live Watch)</Text>
      <DigiLifeLiveClock />
    </View>
  );
}
export default DigitalClockApp;

const stylesheet = StyleSheet.create({
  stylingView: {
    backgroundColor: 'blue',
    
    flex: 1,
    marginTop: 31,
  },
  styleText: {
    textAlign: "center",
    fontStyle: "Arial",
    color:'white',
    justifyContent: "center",
    fontSize: 34,
    marginTop: 31,
    fontWeight: "bold",
  },
});