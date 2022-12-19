import { Ionicons, Feather } from "@expo/vector-icons";
import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { COLORS } from "../../theme/colors";

type Props = {
  data: string;
};

export default function Item({ data }: Props) {
  const [isSelected, setIsSelected] = useState(false);

  return (
    <TouchableOpacity
      style={isSelected ? styles.containerSelected : styles.container}
      onPress={() => setIsSelected(!isSelected)}
    >
      <TouchableOpacity>
        {isSelected ? (
          <Ionicons name="checkmark-circle" size={20} color={COLORS.purple} />
        ) : (
          <Ionicons name="radio-button-off" size={20} color={COLORS.blue} />
        )}
      </TouchableOpacity>
      <Text style={isSelected ? styles.lineThrough : styles.text}>{data}</Text>
      <TouchableOpacity style={styles.trash}>
        <Feather name="trash-2" size={20} color={COLORS.gray300} />
      </TouchableOpacity>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    padding: 12,
    backgroundColor: COLORS.gray500,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: COLORS.gray400,
    marginBottom: 8,
  },
  containerSelected: {
    flexDirection: "row",
    alignItems: "center",
    padding: 12,
    backgroundColor: COLORS.gray500,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: COLORS.gray500,
    marginBottom: 8,
  },
  text: {
    marginHorizontal: 8,
    flexShrink: 1,
    color: COLORS.gray100,
  },
  lineThrough: {
    marginHorizontal: 8,
    flexShrink: 1,
    color: COLORS.gray300,
    textDecorationLine: "line-through",
  },
  trash: {
    marginLeft: "auto",
  },
});
