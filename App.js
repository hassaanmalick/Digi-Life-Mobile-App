import React, { useState } from 'react';
import { View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import StopWatchTimer from './stopwatch';
import DigitalClockApp from './digitalClock';
import MyTodoApp from './todo';

const App = () => {
  return (
    <View>
      <MyTodoApp/>
    </View>
  );
};
function StopWatch(){
  return (
    <View>
      <StopWatchTimer/>
    </View>
  ); 
}
function DigiClock() {
  return(
   <View>
      <DigitalClockApp />
    </View> 
  );
};
const appNavigator= createBottomTabNavigator({
  Stopwatch:{
    screen:StopWatch
  },
  DigitalClock:{
    screen:DigiClock
  },
  TodoList:{
    screen:App
  }
})
export default createAppContainer(appNavigator);