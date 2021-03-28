import React, {useState} from 'react'
import {View, Text, Image, Button, StyleSheet, Pressable, Animated} from 'react-native';
import basicsData from './basicsData'





const JavaScriptBasics = props =>{
    const [jsBasics, setJsBasics] = useState(basicsData[0].topics)
    const { navigation } = props
    return (
    <View style={styles.screen}>
        <Text style={styles.fizText}>FIZ</Text>
        <Text style={styles.textGet}>GET YOUR <Text style={styles.spicy}>SPICY</Text> SHOT OF CODING</Text>
        <Text style={{top: '2%' , fontSize: 40}}>JavaScript Basics</Text>
       
        { jsBasics.map(jsBasic => 
            <View key={jsBasic.title} style={styles.jsBasics}> 
                <Text style={styles.jsBasicsText}>{jsBasic.title}</Text>
                <Button style={styles.button} key={'A1B2'} title='Review' onPress={() => navigation.navigate(jsBasic.reviews[0].review)}/>
                <Button style={styles.button} key={'A2B3'} title='Practice' onPress={() => navigation.navigate(jsBasic.practices[0].practice)}/>
            </View>

        )
    }
    </View>
    
        )}

const styles = StyleSheet.create({
    screen:{
        flex: 1,
        flexDirection: 'column',
        width: '100%',
        padding: 10,
        alignItems: 'center',
        backgroundColor: 'rgba(190, 245,73, .6)' 

    },
    fizText: {
        fontSize: 24,
        fontWeight: 'bold'
    },
    textGet: {
        top: 10,
        fontSize: 16,
        fontWeight: 'bold'
    },
    spicy:{
        color: '#EA5B1E',
        fontWeight: 'bold'
      },
    jsBasics: {
        top: '8%',
        width: '100%',
        height: 60,
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: "row",
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 6,
        shadowOpacity: 0.26,
        //Android property of elevation to help make shadow properties
        elevation: 5, 
        marginTop: 10,
        backgroundColor: 'white',
        borderRadius: 10,
       
    },
    jsBasicsText: {
        
        position:'relative',
        flexDirection: 'row',
        justifyContent: 'center',
        textAlign: 'center',
        fontSize: 24,
        color: 'black'
    },
    button: {
        color: 'black',
        fontSize: 12
    }

})

export default JavaScriptBasics