import React from "react"
import { View, Text, StyleSheet, Button, Alert} from "react-native"




function Answers(props){


    const {practice} = props

    const correctAlert = ()=> {
        Alert.alert(
         "You are correct!",
            "Fiz On!",
         [
             {
                text: "Return to Practice",
                onPress: ()=> console.log("Don't forget to speak your anwers out loud!"),
                style: "answer"
            }
        ]
        )
    }
    const incorrectAlert = ()=> {
        Alert.alert(
         "Incorrect.",
            "Keep Trying!",
         [
             {
                text: "Return to Practice",
                onPress: ()=> console.log("You are incorrect!"),
                style: "answer"
            }
        ]
        )
    }
    return (
        <>

    {practice.answers.map(answer =>      
                   
        <View key={answer.id} style={styles.view}>
            <Text>{answer}</Text>
            <Button  title={'check your answer'} onPress={answer === practice.correctAnswer? correctAlert : incorrectAlert}/>
            </View>
    
    )}

        </>
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


export default Answers
