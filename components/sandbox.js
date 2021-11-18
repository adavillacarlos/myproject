import React from 'react'; 
import { StyleSheet, Text, View } from 'react-native';

export default function Sandbox(){
    return (
        <View style={styles.container}> 
            <Text style={styles.boxOne}>1 </Text>
            <Text style={styles.boxTwo}>2 </Text>
            <Text style={styles.boxThree}>3 </Text>
            <Text style={styles.boxFour}>4 </Text>

        </View> 
    )
}


const styles = StyleSheet.create({
    container: {
        // flex: 1, 
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'flex-end', 
        paddingTop: 40, 
        backgroundColor: '#ddd', 
    }, 
    boxOne: {
        flex: 2, 
        backgroundColor: 'red',
        padding: 10, 
    },
    boxTwo: {
        flex: 1, 
        backgroundColor: 'yellow',
        padding: 20, 
    },
    boxThree: {
        flex: 1, 
        backgroundColor: 'blue',
        padding: 30, 
    },
    boxFour: {
        flex: 1, 
        backgroundColor: 'green',
        padding: 40, 
    }
}); 