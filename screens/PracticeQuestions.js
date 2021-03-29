import React from 'react'
import { View, Text, Image, StyleSheet, Linking, Pressable} from 'react-native'
import Answers from "./Answers"



function PracticeQuestion(props){
    console.log('questionsProps', props)

    const {image, key, practice, answers, question} = props



    return (
    <> 
        <View style={styles.view}> 
            <Text style={styles.practiceQuestion}>{question}</Text>
        </View>
        <View style={styles.imageView}>
            <Image  style={styles.imageView} source={image}></Image> 
        </View>
        <Pressable onPress={()=> {Linking.openURL("https://codepen.io/gaearon/pen/GjPyQr?editors=0011")}}>
            <Text style={styles.codepen}>Try it on CodePen</Text>
        </Pressable>
        <View style={styles.imageView}>
            <Answers key={key} practice={practice} answers={answers}/>
        </View>
    </>

    )
}


styles= StyleSheet.create({

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
    },
    codepen: {
        marginTop: '5%',
        fontSize: 24
    },
    practiceQuestion: {
        fontSize: 24
    }
}
)





export default PracticeQuestion