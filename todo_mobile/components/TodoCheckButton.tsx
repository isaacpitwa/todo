import React from "react";
import { View, StyleSheet, Pressable } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { markTodoAsCompleted } from "../data/todo";
import { useQueryClient } from "@tanstack/react-query";

type TodoCheckButtonProps = {
  completed: boolean;
  id: number;
};

const TodoCheckButton = ({ completed, id }: TodoCheckButtonProps) => {
  const queryClient = useQueryClient();
  const markAsCompleted = async () => {
    if (completed) {
      return;
    }
    const updateResponse = await markTodoAsCompleted(id);
    if (updateResponse) {
      console.log("Todo Updated successfully");
    }
    queryClient.invalidateQueries({ queryKey: ["TodoList"] });
  };
  return (
    <Pressable style={completed ? styles.completedStyles : styles.container} onPress={markAsCompleted}>
      {completed && <AntDesign name="check" size={14} color="#fff" />}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 20,
    height: 20,
    borderRadius: 50,
    backgroundColor: "transparent",
    borderWidth: 1,
    borderColor: "#4d0780",
  },
  completedStyles: {
    backgroundColor: "#4d0780",
    width: 20,
    height: 20,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
});
export default TodoCheckButton;
