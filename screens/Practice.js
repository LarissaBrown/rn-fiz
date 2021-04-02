import React, {useState} from 'react';
import {View, Text, Image, StyleSheet, ScrollView, Linking, Pressable} from 'react-native';
import basicsData from './basicsData'
import Answers from "../components/Answers"
import Header from "../components/Header"






function Practice(props){
   
    const [practices, setPracticess] = useState(basicsData[0].topics[0].practices)
    const {navigation, practice, jsBasic} = props
    const key = Math.floor(Math.random()*10000000 + 5)
    console.log("HELLOpractices", practices)
    console.log('jsBasic',jsBasic)
    console.log('practice', practice)
    
       
        return(      
            <ScrollView style={styles.container}>
        { practices.map((practice, index) => 
                <View  style={styles.innerContainer} key={key}> 
                    <Header navigation={navigation}/>
                        <Text style={{top: '2%' , fontSize: 30, marginBottom: '5%'}}>Practice</Text>
                    <View style={styles.view}> 
                        <Text style={styles.practiceQuestion}>{practice.question}</Text>
                    </View>
                    <View style={styles.imageView}>
                        <Image  style={styles.imageView} source={practice.image}></Image> 
                    </View>
                    <Pressable onPress={()=> {Linking.openURL("https://codepen.io/gaearon/pen/GjPyQr?editors=0011")}}>
                        <Text style={styles.codepen}>Try it on CodePen</Text>
                    </Pressable>
                    <View style={styles.imageView}>
                        <Answers navigation={navigation} key={key} practice={practice} practices={practices} answers={practice.answers}/>
                    </View>
                </View>
               
          
            
    )
    }
    </ScrollView>
        )       
    
}

const styles = StyleSheet.create({
    container:{
        position: 'absolute',
        flex:1,
        flexDirection: 'column',
        width: '100%',
        padding: 10,
        backgroundColor: 'rgba(190, 245,73, .6)' 

    },
    innerContainer: {
        position: 'relative',
        height: 900,
        width: '100%',
        alignItems: 'center',

   },
    view: {
        position: 'relative',
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
       position: 'relative',
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

})
export default Practice