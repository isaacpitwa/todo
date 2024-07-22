import React from "react";
import { View, StyleSheet } from "react-native";
import { FontAwesome6 } from "@expo/vector-icons";

type TodoCheckButtonProps = {
  completed: boolean;
};

const TodoCheckButton = ({ completed }: TodoCheckButtonProps) => {
  return (
    <View style={styles.container}>
      {completed && <FontAwesome6 name="check-circle" size={24} color="#fff" />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 16,
    height: 16,
    borderRadius: 50,
    backgroundColor: "transparent",
    borderWidth: 1,
    borderColor: "#4d0780",
  },
  completedStyles: {
    backgroundColor: "#4d0780",
    width: 16,
    height: 16,
    borderRadius: 50,
  },
});
export default TodoCheckButton;
