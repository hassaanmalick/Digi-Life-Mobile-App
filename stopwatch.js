import React, {useState} from 'react';
import {
  SafeAreaView,
  Text,
  StyleSheet,
  TouchableHighlight,
  View,
} from 'react-native';
import {Stopwatch, Timer} from 'react-native-stopwatch-timer';

const StopWatchTimer = () => {
  const [isStartTimer, setisStartTimer] = useState(false);
  const [durationTimer, setdurationTimer] = useState(90000);
  const [startStopwatch, setstartStopwatch] = useState(false);
  const [stopwatchReset, setstopwatchReset] = useState(false);
  const [timerReset, settimerReset] = useState(false);
  

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Text style={styles.stopwatcTitle}>
          Digi Life-Simplify your life through one Platform
        </Text>
        <View style={styles.mainStyleSection}>
          <Stopwatch
            laps
            msecs
            start={startStopwatch}
            options={options}
            reset={stopwatchReset}
            getTime={(time) => {
              console.log(time);
            }}
          />
          <TouchableHighlight
            onPress={() => {
              setstopwatchReset(false);
              setstartStopwatch(!startStopwatch);
              
            }}>
            <Text style={styles.textOfButton}>
              {!startStopwatch ? 'START' : 'STOP'}
            </Text>
          </TouchableHighlight>
          <TouchableHighlight
            onPress={() => {
            setstopwatchReset(true);
            setstartStopwatch(false);
              
            }}>
            <Text style={styles.textOfButton}>RESET</Text>
          </TouchableHighlight>
        </View>
        <View style={styles.mainStyleSection}>
          <Timer
            totalDuration={durationTimer}
            msecs
            start={isStartTimer}
            reset={timerReset}
            options={options}
            handleFinish={() => {
              alert('Function Have Been Completed');
            }}
            getTime={(time) => {
              console.log(time);
            }}
          />
          <TouchableHighlight
            onPress={() => {
                settimerReset(false);
              setisStartTimer(!isStartTimer);
             
            }}>
            <Text style={styles.textOfButton}>
              {!isStartTimer ? 'START' : 'STOP'}
            </Text>
          </TouchableHighlight>
          <TouchableHighlight
            onPress={() => {
                settimerReset(true);
              setisStartTimer(false);
              
            }}>
            <Text style={styles.textOfButton}>RESET</Text>
          </TouchableHighlight>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default StopWatchTimer;

const styles = StyleSheet.create({
  container: {
    
    alignItems: "center",
    padding: 10,
    flex: 1,
    justifyContent: "center",
    
  },
  
  mainStyleSection: {
    flex: 1,
    alignItems: "center",
    marginTop: 32,
    justifyContent: "center",
  },
  stopwatcTitle: {
    fontSize: 20,
    textAlign: "center",
    padding: 20,
    fontWeight: "bold",
  },
  textOfButton: {
    marginTop: 10,
    fontSize: 20,
  },

});

const options = {
  container: {
    backgroundColor: "blue",
    alignItems: "center",
    borderRadius: 5,
    padding: 5,
    width: 200,
    
  },
  text: {
    fontSize: 25,
    color: '#FFF',
    marginLeft: 7,
  },
};