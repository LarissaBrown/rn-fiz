import 'react-native-gesture-handler';
import React, { useRef } from 'react';
import { StyleSheet, Button, Text, View , Animated, } from 'react-native';

const Landing = (props) => {

 const {navigation, name} = props
 
 const fadeAnim2 = useRef(new Animated.Value(0)).current
 



  React.useEffect(() => {
  
    Animated.timing(
      fadeAnim2,
      {
        toValue:1,
        duration:3000,
        useNativeDriver: true
      },
    
     ).start()
     
  })
   //set a timeout so this screen unmounts at the end of the animation

  return (
    <Animated.View style={{
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        opacity: fadeAnim2,       
      }} >
  <View style={{flex: 1, backgroundColor: 'white', alignItems: 'center', justifyContent: 'center'}}>
    
    
      
        <View style={styles.smBubble}></View>
        <View style={styles.lgBubble}></View>
        <Text style={styles.fizText}>FIZ</Text>
        <Text style={styles.textGet}>GET YOUR <Text style={styles.spicy}>SPICY</Text> SHOT OF CODING</Text>
        <View style={styles.mdBubble}></View>
      
   
    <View style={styles.buttonHere}>
      <Button 
         title="HERE"
          onPress={() => navigation.navigate('LearningHome')}
      />
    </View>
  </View>

   </Animated.View>
  );
}

 
     

  const styles = StyleSheet.create({
  
    screen: {

      backgroundColor:'white'
    },
      container: {
        width: '100%',
        backgroundColor: 'purple',
        alignItems: 'center',
        justifyContent: 'center',
      },
      fizText: {
        fontSize: 80
        
      },
      smBubble: {
        width: 20,
        height: 20,
        backgroundColor: "#BEF549",
        borderRadius: 50
      },
      mdBubble: {
        width: 30,
        height: 30,
        left: 10,
        top: 10,
        backgroundColor: "#BEF549",
        borderRadius: 50
      },
      lgBubble: {
    
    width:40,
        height: 40,
        left: 90,
        backgroundColor: "#BEF549",
        borderRadius: 50
      },
      textGet: {
          fontSize: 20,
          fontWeight: 'bold'
      },
      spicy:{
        color: '#EA5B1E',
        fontWeight: 'bold'
      },
      buttonHere: {
          margin: 20
      }
    });
    
    
    export default Landing

  