import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import ComponentsScreen from "./src/screens/ComponentsScreen";
import FlatListExp from "./src/screens/FlatListExp";

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Components: ComponentsScreen,
    FlatListScreen: FlatListExp
  },
  {
    initialRouteName: "FlatListScreen",
    defaultNavigationOptions: {
      title: "D-Wallet",
    },
  }
);

export default createAppContainer(navigator);
