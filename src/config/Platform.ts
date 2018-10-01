import { Platform, Dimensions } from "react-native";

export const { width, height } = Dimensions.get("window");

export const isAndroid = Platform.OS === "android";

