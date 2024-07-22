import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import TodoList from "./screens/TodoList";
import { Text } from "react-native";
import { Button } from "react-native-paper";
import AddTodo from "./screens/AddTodo";
import HeaderLeft from "./components/HeaderLeft";

const Stack = createStackNavigator();

export const Navigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="todoList">
        <Stack.Screen
          name="todoList"
          component={TodoList}
          options={({ route, navigation }) => ({
            title: "",
            headerShown: true,
            headerStyle: { backgroundColor: "#FFF" },
            headerLeft: () => (
              <Text
                style={{
                  marginLeft: 20,
                  fontSize: 18,
                  fontWeight: "700",
                  color: "#000",
                }}
              >
                Todo App
              </Text>
            ),
            headerShadowVisible: false,
            headerRight: () => (
              <Button
                style={{ marginRight: 20 }}
                icon="plus"
                onPress={() => navigation.navigate("addTodo")}
              >
                Add Task
              </Button>
            ),
          })}
        />
        <Stack.Screen
          name="addTodo"
          component={AddTodo}
          options={({ route, navigation }) => ({
            title: "Todo App",
            headerShown: true,
            headerStyle: { backgroundColor: "#FFF" },
            headerLeft: ()=> <HeaderLeft navigation={navigation}/>,
            headerShadowVisible: false,
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
