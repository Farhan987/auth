import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import SplashScreen from "../screens/authScreens/splashScreen";
import TabScreens from "./tab";
import PasswordRecoveryScreen from "../screens/authScreens/passwordRecoveryScreen";
import ChangePasswordScreen from "../screens/authScreens/changePasswordScreen";

const AppStackNavigator = createStackNavigator(
  {
    SplashScreen: { screen: SplashScreen },
    TabScreens: { screen: TabScreens },
    PasswordRecoveryScreen: { screen: PasswordRecoveryScreen },
    ChangePasswordScreen: { screen: ChangePasswordScreen }
  },
  {
    initialRouteName: "SplashScreen",
    headerMode: "none"
  }
);

const AppContainer = createAppContainer(AppStackNavigator);
export default AppContainer;
