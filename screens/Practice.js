import React, {useState} from 'react';
import {View, Text, StyleSheet,Button,  Image } from 'react-native';
import basicsData from './basicsData'
import Answers from "./Answers"





function Practice(props){

    const [practices, setPracticess] = useState(basicsData[0].topics[0].practices)
    const {navigation} = props
   
   
 


   



    return (
        <View style={styles.screen}>
            <Text style={styles.fizText}>FIZ</Text>
            <Text style={styles.textGet}>GET YOUR <Text style={styles.spicy}>SPICY</Text> SHOT OF CODING</Text>
            <Text style={{top: '2%' , fontSize: 40, marginBottom: '5%'}}>Practice</Text>
            
        { practices.map(practice => 
            
        < >
            <View style={styles.view}> 
                <Text style={styles.practiceQuestion}>{practice.question}</Text>
            </View>
            <View style={styles.imageView}>
                <Image key={practice.image} style={styles.imageView} source={practice.image}></Image> 
            </View>
            <View style={styles.imageView}>
                <Answers id={practice.id} practice={practice}/>
            </View>
           
        
          </> 
        
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