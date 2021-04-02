import React from 'react'
import {View, StyleSheet,Text, Alert, Animated, TouchableHighlight} from "react-native"
import Draggable from 'react-native-draggable'
import Header from "../components/Header"
import Constants from 'expo-constants'
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer';




function FidgetBreak(props){

    const {navigation} = props
    const fidgitAlert = ()=> {
        Alert.alert(
         "Yowza!",
            "This is fun!"
        )}

return (
    <View>
        <View >
           <Header navigation={navigation}/> 
           <Text style={styles.figitText}>Fidgit a bit and then get back to coding!</Text>      
        </View>
        
        <View style={styles.breakYard}>
            <Draggable x={275} y={140} shouldReverse onShortPressRelease={()=> fidgitAlert()}>
                <View style={styles.smBubble}></View> 
            </Draggable>
            <Draggable x={50} y={50}>
                <View style={styles.mdBubble}></View>
            </Draggable>
           
            <Draggable x={200} y={200} shouldReverse onShortPressRelease={()=> fidgitAlert()}>
                <TouchableHighlight activeOpacity={0.6}
                    underlayColor="green">
                <View style={styles.smBubble}></View> 
                </TouchableHighlight>
            </Draggable>
            <Draggable x={90} y={30}>
                <View style={styles.mdBubble}></View>
            </Draggable>
            <Draggable x={20} y={90}>
              <View style={styles.lgBubble}></View>
            </Draggable>
       
        </View>
        <View style={styles.container}>
      <CountdownCircleTimer
        isPlaying
        duration={50}
        colors="#004777"
        onAnimationComplete={() => { {navigation.navigate('LearningHome')}
          return [true, 0]
        }}
      >
        {({ remainingTime, animatedColor }) => (
          <Animated.Text
            style={{ ...styles.remainingTime, color: animatedColor }}>
            {remainingTime}
        
          </Animated.Text>
        )}
      </CountdownCircleTimer>
    </View>
   
    </View>

    )

}
const styles = StyleSheet.create({
        figitText: {
            color: 'orange',
            fontWeight: 'bold',
            fontSize: 20,
            textAlign: 'center'
        },

      smBubble: {
        width: 20,
        height: 20,
        backgroundColor: "blue",
        borderRadius: 50
      },
      mdBubble: {
        width: 30,
        height: 30,
        left: 10,
        top: 10,
        backgroundColor: "white",
        borderRadius: 50
      },
      lgBubble: {
    
        width:40,
        height: 40,
        left: 90,
        backgroundColor: "red",
        borderRadius: 50
      },
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
      breakYard: {
          width:'100%',
          height: "60%",
          backgroundColor: 'black',
          marginVertical: '5%'
      }

})
export default FidgetBreak