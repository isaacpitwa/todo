import React from 'react';
import { FlatList, StyleSheet, Text } from 'react-native';
import EmptyTodoList from '../components/EmptyTodoList';


const TodoList = () => {
    return (
        <FlatList 
            data={[]}
            renderItem={({item}) => <Text>Todo</Text>}
            keyExtractor={(item) => item}
            ListEmptyComponent={<EmptyTodoList/>}
        />
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
})
export default TodoList;