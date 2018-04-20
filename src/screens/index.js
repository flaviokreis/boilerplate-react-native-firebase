import { Navigation } from "react-native-navigation";

import FirstScreen from "./FirstScreen";
import SecondTabScreen from "./SecondScreen";

export function registerScreens() {
    Navigation.registerComponent("FirstScreen", () => FirstScreen);
    Navigation.registerComponent("SecondScreen", () => SecondTabScreen);
}