import React, {useState} from 'react'
import {View, Text, Image, Button, StyleSheet, Pressable, Animated} from 'react-native';
import basicsData from './basicsData'





const Introduction = props =>{
    const [reviews, setReview] = useState(basicsData[0][0].reviews)
    const [practices, setPractice] = useState(basicsData[0][0].practices)
    const { navigation } = props
    return (
    <View style={styles.screen}>
        <Text style={styles.fizText}>FIZ</Text>
        <Text style={styles.textGet}>GET YOUR <Text style={styles.spicy}>SPICY</Text> SHOT OF CODING</Text>
        <Text style={{top: '2%' , fontSize: 40}}>Introduction</Text>
        <Text style={styles.textGet}>JavaScript Basics</Text>
       
        { basicsData[0][0].reviews.map(review => 
            <View key={review.title} style={styles.jsBasics}> 
                <Text style={styles.jsBasicsText}>{review.reviewTitle}</Text>
                <Button style={styles.button} title='Review' onPress={() => navigation.navigate("Review")}/>
                <Button style={styles.button} title='Practice' onPress={() => navigation.navigate("Practice")}/>
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

export default Introduction