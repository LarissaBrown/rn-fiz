import React, { useState } from 'react'
import {View, Text, StyleSheet, Button } from 'react-native'
import  basicsData from './basicsData'
import Header from "../components/Header"




const LearningLevels = props => {
    const {navigation} = props
    const [levels, setLevels] = useState(basicsData)
    const { topics }  = basicsData
    const key = Math.floor(Math.random()*10000000 + 6)


    return (
   
        <View style={styles.screen}>
            <Header navigation={navigation}/>
        <Text style={styles.levelsText}>[...Levels ]</Text>
           
                {levels.map((level) => 
                <View style={styles.level} key={key}>
                    
                <Button style={styles.levelTitle}title={level.title} onPress={() => navigation.navigate(level.title)}/>
                </View>
                )}
             
        </View>
   

    )
}
const styles = StyleSheet.create({
    screen: {
        flexDirection: 'column',
        flex: 1,
        width: '100%',
        padding: 10,
        alignItems: 'center',
        backgroundColor: 'rgba(190, 245,73, .6)'  
    },
    levelsText: {
       
        position:'relative',
        flexDirection: 'row',
        fontSize: 60
       
    },
    level: {
        width: '100%',
        height: '10%',
        flexDirection: "row",
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 6,
        shadowOpacity: 0.26,
        //Android property of elevation to help make shadow properties
        elevation: 5, 
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
        marginTop: 15,
    },
    levelTitle: {
        color: 'black',
        fontSize: 30,

    }
})

export default LearningLevels