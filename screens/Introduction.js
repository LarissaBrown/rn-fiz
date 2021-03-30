import React, {useState} from 'react'
import {View, Text, Image, Button, StyleSheet, Pressable, Animated} from 'react-native';
import basicsData from './basicsData'
import Header from './Header'





const Introduction = props =>{
    const [reviews, setReview] = useState(basicsData[0][0].reviews)
    const [practices, setPractice] = useState(basicsData[0][0].practices)
    const { navigation, jsBasic } = props
    return (
    <View style={styles.screen}>
       <Header navigation={navigation}/>
        <Text style={{top: '2%' , fontSize: 40}}>Introduction</Text>
        <Text style={styles.textGet}>JavaScript Basics</Text>
       
        { jsBasic[0].reviews.map(review => 
            <View key={review.title} style={styles.jsBasic}> 
                <Text style={styles.jsBasicText}>{review.reviewTitle}</Text>
                <Button jsBasic={jsBasic} review={review} style={styles.button} title='Review' onPress={() => navigation.navigate("Review")}/>
                <Button jsBasic={jsBasic} practice={practice} style={styles.button} title='Practice' onPress={() => navigation.navigate("Practice")}/>
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
    
    jsBasic: {
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
    jsBasicText: {
        
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