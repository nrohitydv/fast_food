import { Slot } from "expo-router";
import React from "react";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const AuthLayout = () => {
  return (
    <SafeAreaView>
      <Text>AuthLayout</Text>
      <Slot />
    </SafeAreaView>
  );
};

export default AuthLayout;
