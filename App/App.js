import { DeviceMotion } from 'expo-sensors';
import { View, StyleSheet, Text } from 'react-native';
import React, { useState, useEffect } from 'react';

const App = () => {

  const [tremorAmount, setTremorAmount] = useState({x: 0, y: 0});

  useEffect(() => {
    DeviceMotion.addListener(onDeviceMotionChange);
    return () => {
      DeviceMotion.removeListener(onDeviceMotionChange);
    };
  }, []);

  const onDeviceMotionChange = (event) => {
    const { x, y } = event.accelerationIncludingGravity;
    setTremorAmount({x: x, y: y});
  }

  return (
    <View style={styles.container}> 
      <Text>Hold the Phone in Hand to Detect Tremors</Text>
      <Text>{tremorAmount.x}</Text>
      <Text>{tremorAmount.y}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }

});

export default App;