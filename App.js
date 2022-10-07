import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {NativeBaseProvider } from "native-base";
import ImageScreen from "./components/ImageScreen";
import SignUpScreen from "./components/SignUpScreen";
import SignInScreen from "./components/SignInScreen";

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Signin">
          <Stack.Screen name="Sign in" component={SignInScreen} />
          <Stack.Screen name="Sign up" component={SignUpScreen} />
          <Stack.Screen name="Image" component={ImageScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}

export default App;
