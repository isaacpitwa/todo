import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Todo } from "../types/Todo";
import TodoCheckButton from "./TodoCheckButton";
import { CONFIG } from "../Config";

type TodoProps = {
  todo: Todo;
};

const TodoCard = ({ todo }: TodoProps) => {
  return (
    <View style={styles.container}>
      <TodoCheckButton completed={todo.status === "completed"} />
      <Text numberOfLines={2}>{todo.task}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFF",
    shadowColor: "#ECECEC",
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 8,
    elevation: 10,
    borderRadius: 10,
    alignItems: "center",
    flexDirection:'row',
    padding: 16,
    marginVertical: 4,
    gap:16,
  },
});
export default TodoCard;
