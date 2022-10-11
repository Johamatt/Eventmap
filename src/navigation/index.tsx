/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { Fontisto } from "@expo/vector-icons";
import { MaterialIcons, Ionicons, Feather } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import { ColorSchemeName, Pressable, Touchable, View } from "react-native";

import Colors from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";

import {
  AuthStackParamList,
  RootStackParamList,
  RootTabParamList,
} from "../../types";

import SplashScreen from "../screens/SplashScreen";
import LandingLocationScreen from "../screens/User/LandingLocationScreen";

import MapScreen from "../screens/User/BottomNav/MapScreen";
import EventScreen from "../screens/User/EventScreen";
import HomeScreen from "../screens/User/BottomNav/HomeScreen";
import { UserLoginScreen } from "../screens/Authentication/userAuthentication/UserLoginScreen";
import TabTwoScreen from "../screens/User/BottomNav/TabTwoScreen";
import LandingPreferenceScreen from "../screens/User/LandingPreferenceScreen";
import { UserRegisterScreen } from "../screens/Authentication/userAuthentication/UserRegisterScreen";
import { UserConfirmEmailScreen } from "../screens/Authentication/userAuthentication/UserConfirmEmailScreen";
import { UserNewPasswordScreen } from "../screens/Authentication/userAuthentication/UserNewPasswordScreen";
import { UserForgotPasswordScreen } from "../screens/Authentication/userAuthentication/UserForgotPasswordScreen";
import { useEffect, useState } from "react";
import { Auth } from "aws-amplify";

export default function Navigation({
  colorScheme,
}: {
  colorScheme: ColorSchemeName;
}) {
  const [user, setUser] = useState<undefined | null>(undefined);

  const checkUser = async () => {
    try {
      const authUser = await Auth.currentAuthenticatedUser({
        bypassCache: true,
      });
      setUser(authUser);
    } catch (e) {
      setUser(null);
    }
  };

  useEffect(() => {
    checkUser();
  }, [setUser]);

  if (user === undefined) {
    return (
      <NavigationContainer>
        <SplashScreen />
      </NavigationContainer>
    );
  }

  return (
    <NavigationContainer
      theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}
    >
      {user ? <RootNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();

const AuthStack = createNativeStackNavigator<AuthStackParamList>();

function AuthNavigator() {
  return (
    <AuthStack.Navigator>
      {/* <AuthStack.Group screenOptions={{ headerShown: false }}>
        <AuthStack.Screen name="Splash" component={SplashScreen} />
      </AuthStack.Group> */}
      <AuthStack.Group screenOptions={{ headerShown: false }}>
        <AuthStack.Screen name="UserLoginScreen" component={UserLoginScreen} />
        <AuthStack.Screen
          name="UserRegisterScreen"
          component={UserRegisterScreen}
        />
        <AuthStack.Screen
          name="UserConfirmEmailScreen"
          component={UserConfirmEmailScreen}
        />
        <AuthStack.Screen
          name="UserNewPasswordScreen"
          component={UserNewPasswordScreen}
        />
        <AuthStack.Screen
          name="UserForgotPasswordScreen"
          component={UserForgotPasswordScreen}
        />
      </AuthStack.Group>
    </AuthStack.Navigator>
  );
}

function RootNavigator() {
  return (
    <Stack.Navigator>
      {/* <Stack.Group screenOptions={{ headerShown: false }}>
        <Stack.Screen name="UserLoginScreen" component={UserLoginScreen} />
        <Stack.Screen
          name="UserRegisterScreen"
          component={UserRegisterScreen}
        />
        <Stack.Screen
          name="UserConfirmEmailScreen"
          component={UserConfirmEmailScreen}
        />
        <Stack.Screen
          name="UserNewPasswordScreen"
          component={UserNewPasswordScreen}
        />
        <Stack.Screen
          name="UserForgotPasswordScreen"
          component={UserForgotPasswordScreen}
        />
      </Stack.Group> */}

      {/* USER STACK GROUP  */}
      <Stack.Group
        screenOptions={{
          headerShown: false, //
          headerStyle: {
            backgroundColor: Colors.light.tint,
          },
          headerTintColor: Colors.light.background,
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      >
        <Stack.Screen
          name="UserRoot"
          component={BottomTabNavigator}
          options={{
            title: "EventMap",
            headerRight: () => (
              <View>
                <Ionicons name="filter-sharp" size={24} color="black" />
              </View>
            ),
          }}
        />
        <Stack.Screen
          name="LandingLocationScreen"
          component={LandingLocationScreen}
          options={{
            title: "Landing Location",
          }}
        />

        <Stack.Screen
          name="LandingPreferenceScreen"
          component={LandingPreferenceScreen}
          options={{
            title: "Landing Preference",
          }}
        />
        <Stack.Group
          screenOptions={{ presentation: "modal", headerShown: true }}
        >
          <Stack.Screen name="EventScreen" component={EventScreen} />
        </Stack.Group>
      </Stack.Group>
      {/* USER STACK GROUP ENDS  */}

      {/* UTIL */}
      {/* <Stack.Group screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Splash" component={SplashScreen} />
      </Stack.Group> */}
      {/* UTIL ENDS*/}
    </Stack.Navigator>
  );
}

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const BottomTab = createBottomTabNavigator<RootTabParamList>();

function BottomTabNavigator() {
  return (
    <BottomTab.Navigator
      initialRouteName="Map"
      screenOptions={{
        tabBarShowLabel: false,
      }}
    >
      <BottomTab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          headerShown: false,
          title: "Home",

          tabBarIcon: ({ focused }) => {
            const color = focused ? Colors.light.tint : "black";
            return <Feather name="home" size={24} color={color} />;
          },
        }}
      />
      <BottomTab.Screen
        name="Map"
        component={MapScreen}
        options={{
          headerShown: false,
          title: "Map",
          tabBarIcon: ({ focused, color, size }) => {
            const icon = focused ? Colors.light.tint : "black";
            return <Feather name="map" size={24} color={icon} />;
          },
        }}
      />
      <BottomTab.Screen
        name="Favourites"
        component={TabTwoScreen}
        options={{
          headerShown: false,
          title: "Favourites",

          tabBarIcon: ({ focused }) => {
            const color = focused ? Colors.light.tint : "black";
            return <Feather name="heart" size={24} color={color} />;
          },
        }}
      />
      <BottomTab.Screen
        name="Profile"
        component={TabTwoScreen}
        options={{
          headerShown: false,
          title: "Profile",
          tabBarIcon: ({ focused }) => {
            const color = focused ? Colors.light.tint : "black";
            return <Feather name="user" size={24} color={color} />;
          },
        }}
      />
    </BottomTab.Navigator>
  );
}
