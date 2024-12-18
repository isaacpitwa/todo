import React from 'react';
import { Dimensions, View,StyleSheet, Text } from 'react-native';
import { Button } from 'react-native-paper';
import { useNavigation,ParamListBase } from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';



const {height} = Dimensions.get('screen');
/**
 * Renders a component for an empty todo list.
 * Allows the user to add a new todo.
 */
const EmptyTodoList = () => {
    const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

    /**
     * Handles the button press event and navigates to the addTodo screen.
     */
    const handleBtnPressed = () => {
        navigation.navigate('addTodo');
    }

    return (
        <View  style={styles.container}>
            <Text style={styles.leadingText}>No Tasks Added.</Text>
            <Text style={styles.descText}>Add a task to get started.</Text>
            <Button icon="plus" mode="contained" onPress={handleBtnPressed} testID='add-button'>Add Task</Button>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        height: height-200,
        justifyContent: 'center',
        alignItems: 'center',
    },
    leadingText :{
        fontWeight:'600',
        fontSize:18,
        color:'#000',
        marginBottom:8,
    },
    descText:{
        color:'#ccc',
        fontSize:14,
        marginBottom:20,
    }
});
export default EmptyTodoList;