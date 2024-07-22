import React from 'react';
import { Dimensions, View,StyleSheet, Text } from 'react-native';
import { Button } from 'react-native-paper';

const {height} = Dimensions.get('screen');
const EmptyTodoList = () => {
    return (
        <View  style={styles.container}>
            <Text style={styles.leadingText}>No Tasks Added.</Text>
            <Text style={styles.descText}>Add a task to get started.</Text>
            <Button icon="plus" mode="contained" onPress={() => console.log('Pressed')}>Add Todo</Button>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        height: height,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    leadingText :{
        fontWeight:'600',
        fontSize:18,
        color:'#000',
    },
    descText:{
        color:'#ccc',
        fontSize:14,
        marginBottom:20,
    }
});
export default EmptyTodoList;