import { View, Text } from "react-native";
import { styles } from "./styles";
import React from "react";

export function Flight(props: { label: string; value: string; time: string }) {
  return (
    <View>
      <Text style={styles.label}>{props.label}</Text>
      <Text style={styles.value}>{props.value}</Text>
      <Text style={styles.time}>{props.time}</Text>
    </View>
  );
}
