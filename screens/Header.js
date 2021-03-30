import React from 'react'
import {View, Text , StyleSheet, Pressable } from 'react-native'


function Header(props){
const { navigation} = props
console.log("navigation", navigation)
    return (
        <View style={styles.header}>
          <Pressable title={'FIZ'} onPress={() => navigation.navigate('Landing')}><Text style={styles.fizText}  >FIZ</Text></Pressable>  
            <Text style={styles.textGet}>GET YOUR <Text style={styles.spicy}>SPICY</Text> SHOT OF CODE</Text>       
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        justifyContent: 'center',
        alignItems: "center"
       
    },
    fizText: {
        fontSize: 32
        
    },
    textGet: {
       
        fontSize: 16,
        fontWeight: 'bold'
    },
    spicy:{
        color: '#EA5B1E',
        fontWeight: 'bold'
      }

})


export default Header