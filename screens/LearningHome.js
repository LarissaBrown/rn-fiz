import React, { useState } from 'react'
import { View, StyleSheet, Pressable,Screen,  TextInput, Button, Text, Modal, Image} from 'react-native'
import { AnimatedCircularProgress } from 'react-native-circular-progress'
import Header from "./Header"




const LearningHome = props => {
  const {navigation} = props
    return(
  
    <View style={styles.screen}>
            <Header navigation={navigation}/>
            <View style={styles.buttonFidgit}>
            <Button 
                title="FidgetBreak"
                onPress={() => navigation.navigate('FidgetBreak')}
            />
            </View>
            <View style={styles.learningButtonContainer}>
            <Pressable
                 onPress={() => navigation.navigate('LearningLevels')
                    }>
                <Text style={styles.learningText}> [...Learning ] </Text>
             
               
            </Pressable> 
            <View style={styles.smBubble}></View>
            </View>
      
                <Image source={require('./ifSadMeme.png')} style={styles.meme}>
                </Image> 
            <View style={styles.buttonContainer}>
            <AnimatedCircularProgress 
                style={styles.circularProgress} 
                size={40}
                width={5} 
                backgroundColor='#3d5875'
                tintColor="#00e0ff"
                fill={75}
                onAnimationComplete={() => console.log('onAnimationComplete')}/>
                <View style={styles.lgBubble}></View>
              
                    <Text style={styles.reviewText}>Review</Text>
                
          
            </View>
            <View style={styles.buttonContainer}>
            <AnimatedCircularProgress  
                style={styles.circularProgress} 
                tintColor="#00e0ff"
                size={40} 
                fill={25}
                width={5} 
                backgroundColor='#3d5875'
                onAnimationComplete={() => console.log('onAnimationComplete')}/>
            
                <Text style={styles.practiceText}>Practice</Text>
              
          
            </View>
            <View style={styles.mdBubble}></View>
           
    </View>
  
    
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center'    
    },
   
    buttonContainer: {
        //flex: 4,
        position: 'relative',
        flexDirection: 'row',
        width: 350,
        height: 60,
        alignItems: 'center',
        height: '10%',
        backgroundColor: '#C4C4C4',
        marginTop:  '5%',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
        borderRadius: 10,
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 6,
        shadowOpacity: 0.50,

    },
    learningButtonContainer: {
        position: 'relative',
        flexDirection: 'column',
        width: 350,
        height: '10%',
        backgroundColor: '#C4C4C4',
        marginTop:  '1%',
        marginBottom: '5%',
        textAlign:'center'
,       justifyContent: 'space-between',
        borderRadius: 10,
        opacity: 50,
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 6,
        shadowOpacity: 0.50
    },
   
    learningText:{
        position:'relative',
        flexDirection: 'column',
        paddingTop: '3%',
        fontSize: 50,
        textAlign: 'center',
        alignItems: 'center',
    },
   
    practiceText: {
        flexDirection: 'column',
        position: 'relative',
        fontSize: 42,
        paddingRight: 84,
        textAlign: 'center'

    },
    reviewText: {
        flexDirection: 'row',
        position: 'relative',
        fontSize: 42,
        paddingTop: '3%',
        paddingRight: 100,
        textAlign: 'center'
    },
    meme: {
        flex: 1,
        width: 350,
        maxHeight: 350,
        alignItems: "center"
    },
    circularProgress: {
        position: 'relative',
        alignItems: 'center',
        justifyContent: 'center'
        
    },
    minutes: {
        flexDirection: 'row',
        position: 'relative',
        fontSize: 20,
        top: '15%',
        paddingLeft: 10
    },
    smBubble: {
        width: 20,
        height: 20,
        backgroundColor: 'rgba(190, 245,73, .7)',
        borderRadius: 50
    
      },
      mdBubble: {
        width: 30,
        height: 30,
        right: 100,
        backgroundColor: 'rgba(190, 245,73, .7)',
        borderRadius: 50
      },
      lgBubble: {
        width:40,
        height: 40,
        left: 200,
        bottom: 30,
        backgroundColor: 'rgba(190, 245,73, .7)',
        borderRadius: 50,
        
        
      },
      buttonFidget: {
          padding: 0,

      }
})

export default LearningHome