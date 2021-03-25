import React, { useState } from 'react'
import { View, StyleSheet, Pressable,Screen,  TextInput, Button, Text, Modal, Image} from 'react-native'
import { AnimatedCircularProgress } from 'react-native-circular-progress'




const LearningHome = props => {
  const {navigation} = props
    return(
  
    <View style={styles.screen}>
         <Text style={styles.fizText}>FIZ</Text>
        <Text style={styles.textGet}>GET YOUR <Text style={styles.spicy}>SPICY</Text> SHOT OF CODING</Text>
            <View style={styles.learningButtonContainer}>
            <Pressable 
            onPress={() => navigation.navigate('LearningLevels')
        }>
            <Text style={styles.learningText}>[...Learning ]</Text>
             
                <View style={styles.smBubble}></View>
                </Pressable> 
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
              
                    <Text style={styles.rpText,{fontSize: 42, paddingLeft: 30 ,paddingRight: 30}}>Review</Text>
                <Text style={styles.minutes}>5 min</Text>
          
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
            
                <Text style={styles.rpText,{fontSize: 42, paddingLeft: 30 ,paddingRight: 30}}>Practice</Text>
                <Text style={styles.minutes}>5 min</Text>
          
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
    fizText: {
        fontSize: 32
        
    },
    textGet: {
       
        fontSize: 16,
        fontWeight: 'bold'
    },
    spicy:{
        color: '#EA5B1E',
        fontWeight: 'bold'
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
        //flex:1,
        flexDirection: 'row',
        width: 350,
        height: '15%',
        alignItems: 'center',
        backgroundColor: '#C4C4C4',
        marginTop:  '6%',
        marginBottom: '5%'
,       justifyContent: 'space-between',
        paddingHorizontal: 15,
        borderRadius: 10,
        opacity: 50,
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 6,
        shadowOpacity: 0.50
    },
   
    learningText:{
        position:'relative',
        flexDirection: 'row',
        fontSize: 60,
        textAlign:'center'
      
       
    },
   
    rpText: {
        flexDirection: 'row',
        position: 'relative',
        fontSize: 50,
        paddingTop: '10%',
        textAlign: 'left'

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
        right: 60,
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
        left: 150,
        bottom: 30,
        backgroundColor: 'rgba(190, 245,73, .7)',
        borderRadius: 50,
        
        
      }
})

export default LearningHome