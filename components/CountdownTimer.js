import * as React from 'react';
import { Text, View, StyleSheet, Animated } from 'react-native';
import Constants from 'expo-constants';
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer';

export default function CountdownTimer(props) {

    const {navigation} = props
  return (
    <View style={styles.container}>
      <CountdownCircleTimer
        isPlaying
        duration={50}
        colors="#004777"
        onComplete={() => {
          return [true, 0]
        }}
      >
        {({ remainingTime, animatedColor }) => (
          <Animated.Text
            style={{ ...styles.remainingTime, color: animatedColor }}>
            {remainingTime}
            {remainingTime === 0 && navigation.navigate('LearningHome')}
          </Animated.Text>
        )}
      </CountdownCircleTimer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  remainingTime: {
    fontSize: 46,
  },
});

