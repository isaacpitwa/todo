import { createStackNavigator } from "@react-navigation/stack";
import {NavigationContainer} from "@react-navigation/native";
import TodoList from "./screens/TodoList";
import { Text } from "react-native";
import { Button } from "react-native-paper";

const Stack = createStackNavigator();

export const Navigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
        name="todoList" 
        component={TodoList}
        options={({ route, navigation }) => ({
            title: "",
            headerShown: true,
            headerStyle: { backgroundColor: '#FAFAFA' },
            headerLeft: () => <Text style={{
                marginLeft: 20,
                fontSize: 16,
                fontWeight: '600',
                color: '#000',
            }}>Todo App</Text>,
            headerShadowVisible: false,
            headerRight: () => <Button style={{marginRight: 20}} icon="plus" onPress={() => navigation.navigate('addTodo')}>Add Todo</Button>
        })} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
