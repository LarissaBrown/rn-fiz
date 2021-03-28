import 'react-native-gesture-handler';
import React, { useState, useEffect, useRef } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LearningHome from './screens/LearningHome';
import LearningLevels from './screens/LearningLevels';
import Landing from './screens/Landing';
import Review from './screens/Review';
import Practice from './screens/Practice';
import HTMLBasics from './screens/HTMLBasics';
import JavaScriptBasics from './screens/JavaScriptBasics'
import { StyleSheet } from 'react-native';


const Stack = createStackNavigator()

function App() {
    return (
      <NavigationContainer style={styles.navContainer} >
          <Stack.Navigator>
              <Stack.Screen name="Landing" component={Landing} />
              <Stack.Screen name="LearningHome" component={LearningHome} />
              <Stack.Screen name="LearningLevels" component={LearningLevels} />
              <Stack.Screen name="Practice" component={Practice}/>
              <Stack.Screen name="Review" component={Review}/>
              <Stack.Screen name="JavaScript Basics" component={JavaScriptBasics}/>
              <Stack.Screen name="HTML Basics" component={HTMLBasics}/>
              <Stack.Screen name="CSS Basics" component={JavaScriptBasics}/>
              <Stack.Screen name="React Basics" component={JavaScriptBasics}/>
              <Stack.Screen name="Git Basics" component={JavaScriptBasics}/>
              <Stack.Screen name="Node Basics" component={JavaScriptBasics}/>
          </Stack.Navigator>
      </NavigationContainer>
    );
  }
     

const styles = StyleSheet.create({
  navContainer: {
    flex: 1,
   
   

  }

})
    
    
    export default App

  