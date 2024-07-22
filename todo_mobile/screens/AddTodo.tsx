import React from "react";
import { View, StyleSheet } from "react-native";
import { Button, TextInput } from "react-native-paper";
import { addTodo } from "../data/todo";
import { useNavigation,ParamListBase } from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import { useQueryClient } from "@tanstack/react-query";

const AddTodo = () => {
  const [task, setTask] = React.useState("");
  const [submiting, setSubmiting] = React.useState(false);
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  const queryClient = useQueryClient();
  const handleTaskSubmit = async () => {
    setSubmiting(true);
    const response = await addTodo(task);
    setSubmiting(false);
    setTask("");
    queryClient.invalidateQueries({ queryKey: ['TodoList'] });
    navigation.navigate("todoList");
  };
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter task "
        theme={{ colors: { primary: "transparent" } }}
        underlineColor="#F4f4f4"
        value={task}
        placeholderTextColor="#A4A4A4"
        onChangeText={(text) => {
          setTask(text);
        }}
        selectionColor="#4d0780"
        cursorColor="#4d0780"
        returnKeyType="done"
        autoFocus={true}
        onSubmitEditing={handleTaskSubmit}
      />
      <Button
        mode="contained"
        style={{ marginTop: 20 }}
        disabled={task.length === 0}
        onPress={handleTaskSubmit}
        loading={submiting}
      >        Add Task
      </Button>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FAFAFA",
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  input: {
    borderRadius: 8,
    backgroundColor: "#FFFFFF",
    height: 40,
    borderWidth: 0,
    shadowColor: "#ECECEC",
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 8,
    elevation: 10,
    width: "100%",
    marginTop: 14,
  },
});

export default AddTodo;
