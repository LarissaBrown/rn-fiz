import React, {useState} from 'react';
import {View, Text, StyleSheet, Image, Pressable } from 'react-native';
import basicsData from './basicsData'
import Header from "./Header"





function Review(props){

    const [reviews, setReviews] = useState(basicsData[0].topics[0].reviews)
    const {navigation} = props

    return (
        <View style={styles.screen}>
            <Header navigation={navigation}/>
            <Text style={{top: '2%' , fontSize: 40, marginBottom: '5%'}}>Review</Text>
       
        { reviews.map(review => {
            return (
        <View key={review.title} >
            <View style={styles.view}> 
                <Text style={styles.reviewTitle}>{review.title}</Text>
            </View>
            <View style={styles.imageView}>
                <Image key={review.image} style={{width: "100%", height: 100}} source={review.image}></Image> 
            </View>
            <Pressable onPress={()=> {Linking.openURL("https://codepen.io/gaearon/pen/GjPyQr?editors=0011")}}>
            <Text style={styles.codepen}>Try it on CodePen</Text>
        </Pressable>
            <View style={styles.view}>
                <Text style={styles.explanationText}>{review.explanation}</Text>
           
            </View>
        </View>
            )
        }
        )
    }
        </View>
    )
}
const styles = StyleSheet.create({
    screen:{
        flex: 1,
        flexDirection: 'column',
        width: '100%',
        padding: 10,
        alignItems: 'center',
        backgroundColor: 'rgba(190, 245,73, .6)' 

    },
    view: {
    
        width: '100%',
        height: 'auto',
        padding: 10,
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: "column",
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
   
    imageView: {
       marginVertical: '5%'

    },
    reviewTitle: {
        margin: '2%',
        flexDirection: 'row',
        justifyContent: 'center',
        textAlign: 'center',
        fontSize: 24,
        color: 'black'
    }

})
export default Review

