import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Todo } from "../types/Todo";
import TodoCheckButton from "./TodoCheckButton";

type TodoProps = {
  todo: Todo;
};

/**
 * Renders a Todo card component.
 *
 * @param {TodoProps} props - The props object containing the todo data.
 * @returns {JSX.Element} The rendered Todo card component.
 */
const TodoCard = ({ todo }: TodoProps) => {
    return (
        <View style={styles.container}>
            <TodoCheckButton completed={todo.status === "completed"} id={todo.id} />
            <Text 
                numberOfLines={2}
                style={{
                    fontSize: 16,
                    textDecorationLine: todo.status === "completed" ? "line-through" : "none",
                }}
            >
                {todo.task}
            </Text>
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
