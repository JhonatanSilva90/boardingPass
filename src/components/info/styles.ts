import { StyleSheet } from "react-native";
import { colors } from "../../app/styles/colors";
import { fontFamily } from "../../app/styles/fontFamily";

export const styles = StyleSheet.create({
  label: {
    color: colors.gray[400],
    fontSize: 10,
    textTransform: "uppercase",
    fontFamily: fontFamily.regular,
    textAlign: "center",
  },
  value: {
    color: colors.black,
    fontSize: 16,
    textAlign: "center",
    fontFamily: fontFamily.medium,
  },
});
