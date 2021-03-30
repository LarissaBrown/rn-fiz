import React, {useState} from 'react';
import {View, Text, StyleSheet,Button,  Image } from 'react-native';
import basicsData from './basicsData'
import PracticeQuestions from "./PracticeQuestions"
import Header from "./Header"





function Practice(props){
   
    const [practices, setPracticess] = useState(basicsData[0].topics[0].practices)
    const {navigation, practice, jsBasic} = props
    const key = Math.floor(Math.random()*1000)
    console.log("HELLOpractices", practices)
    console.log('jsBasic',jsBasic)
    console.log('practice', practice)
    return (
        <View style={styles.screen}>
            <Header navigation={navigation}/>
            <Text style={{top: '2%' , fontSize: 30, marginBottom: '5%'}}>Practice</Text>
            
        { practices.map(practice => 
               
            
             <PracticeQuestions navigation={navigation} key={key}  practices={practices} practice={practice} question={practice.question} image={practice.image}/>  
               
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
       marginTop:  10,
       marginBottom: 10,
       width: "100%",
       height: 100

    },
    practiceTitle: {
        margin: '2%',
        flexDirection: 'row',
        justifyContent: 'center',
        textAlign: 'center',
        fontSize: 24,
        color: 'black'
    },
    answerText: {
        
        fontSize: 24
    }

})
export default Practice