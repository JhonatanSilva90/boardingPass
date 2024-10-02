import { StyleSheet } from "react-native";
import { colors } from "../../app/styles/colors";
import { fontFamily } from "../../app/styles/fontFamily";

export const styles = StyleSheet.create({
  label: {
    color: colors.gray[400],
    fontSize: 12,
    textTransform: "uppercase",
    fontFamily: fontFamily.regular,
    textAlign: "center",
  },
  value: {
    color: colors.black,
    fontSize: 42,
    textAlign: "center",
    fontFamily: fontFamily.bold,
    marginTop: -10,
  },
  time: {
    color: colors.gray[800],
    fontSize: 16,
    textTransform: "uppercase",
    fontFamily: fontFamily.medium,
    textAlign: "center",
    marginTop: -8,
  },
});
