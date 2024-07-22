import React,{useState} from 'react';
import { FlatList, StyleSheet, Text,View,RefreshControl } from 'react-native';
import EmptyTodoList from '../components/EmptyTodoList';
import { useQuery } from '@tanstack/react-query';
import { getTodos } from '../data/todo';
import Loader from '../components/Loader';
import Todo from '../components/Todo';


/**
 * Renders a list of todos.
 * 
 * @returns The TodoList component.
 */
const TodoList = () => {
    const [refreshing, setRefreshing] = useState(false);

    const { isLoading, isError, data, error, refetch } = useQuery({
        queryKey: [`TodoList`],
        queryFn: async () => {
            const todos = await getTodos();
            return todos;
        }
    })

    if (isLoading) {
        return <Loader />;
    }

    if (isError) {
        return <View style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            <Text style={{
                fontSize: 18,
                textAlign: 'center',
                padding: 8,
            }}>Error fetching Todos</Text>
        </View>
    }

    return (
        <FlatList 
            data={data}
            renderItem={({item}) => <Todo todo={item}/>}
            keyExtractor={(item) => item.id}
            ListEmptyComponent={<EmptyTodoList/>}
            contentContainerStyle={styles.container}
            refreshControl={
                <RefreshControl refreshing={refreshing} onRefresh={() => {
                    setRefreshing(true);
                    refetch().finally(() => { setRefreshing(false); })
                }} />
            }
        />
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal:16,
        paddingVertical:16,
    },
})
export default TodoList;