import Colors from "../constants/Colors";
import { UserConfirmEmailScreen } from "../screens/Authentication/ConfirmEmailScreen";
import { UserForgotPasswordScreen } from "../screens/Authentication/ForgotPasswordScreen";
import { UserLandingScreen } from "../screens/Authentication/LandingScreen";
import UserLoginScreen from "../screens/Authentication/LoginScreen";
import { UserNewPasswordScreen } from "../screens/Authentication/NewPasswordScreen";
import { UserRegisterScreen } from "../screens/Authentication/RegisterScreen";

export const AuthNavigator = (Stack: any) => {
  return (
    <Stack.Group>
      <Stack.Screen
        name="UserLandingScreen"
        component={UserLandingScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="UserConfirmEmailScreen"
        component={UserConfirmEmailScreen}
        options={{
          headerShown: true,
          headerTitle: "",
          headerStyle: {
            backgroundColor: "black",
          },
          headerTintColor: "#ffffff",
        }}
      />

      <Stack.Screen
        name="UserLoginScreen"
        component={UserLoginScreen}
        options={{
          headerShown: true,
          headerTitle: "",
          headerStyle: {
            backgroundColor: "black",
          },
          headerTintColor: "#ffffff",
        }}
      />
      <Stack.Screen
        name="UserRegisterScreen"
        component={UserRegisterScreen}
        options={{
          headerShown: true,
          headerTitle: "",
          headerStyle: {
            backgroundColor: "black",
          },
          headerTintColor: "#ffffff",
        }}
      />

      <Stack.Screen
        name="UserForgotPasswordScreen"
        component={UserForgotPasswordScreen}
        options={{
          headerShown: true,
          headerTitle: "",
          headerStyle: {
            backgroundColor: "black",
          },
          headerTintColor: "#ffffff",
        }}
      />
      <Stack.Screen
        name="UserNewPasswordScreen"
        component={UserNewPasswordScreen}
        options={{
          headerShown: true,
          headerTitle: "",
          headerStyle: {
            backgroundColor: "black",
          },
          headerTintColor: "#ffffff",
        }}
      />
    </Stack.Group>
  );
};
