import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Ionicons } from "@expo/vector-icons";
import { Svg, Circle, G, Path } from "react-native-svg";

const LoginScreen = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = () => {
    // Handle login logic here
    console.log("Logging in with:", email, password);
    router.push("/(tabs)");
  };

  const handleSocialLogin = (provider) => {
    console.log(`Logging in with ${provider}`);
    // Implement social login logic
  };

  const handleSignUp = () => {
    router.push("/signup");
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <StatusBar style="dark" />

      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        className="flex-1"
      >
        <View className="flex-1 justify-center px-6">
          <Text className="text-2xl font-bold text-center mb-10">LOGIN</Text>

          {/* Email Input */}
          <View className="mb-4 border border-gray-300 rounded-xl px-4 py-4 flex-row items-center">
            <Ionicons name="mail-outline" size={22} color="#666" />
            <TextInput
              className="flex-1 pl-3 text-base text-gray-800"
              placeholder="Email"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
            />
          </View>

          {/* Password Input */}
          <View className="mb-6 border border-gray-300 rounded-xl px-4 py-4 flex-row items-center">
            <Ionicons name="lock-closed-outline" size={22} color="#666" />
            <TextInput
              className="flex-1 pl-3 text-base text-gray-800"
              placeholder="Password"
              value={password}
              onChangeText={setPassword}
              secureTextEntry={!showPassword}
              autoCapitalize="none"
            />
            <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
              <Ionicons
                name={showPassword ? "eye-off-outline" : "eye-outline"}
                size={22}
                color="#666"
              />
            </TouchableOpacity>
          </View>

          {/* Login Button */}
          <TouchableOpacity
            className="bg-white border border-gray-300 rounded-xl py-3.5 px-4 mb-6"
            onPress={handleLogin}
            activeOpacity={0.8}
          >
            <Text className="text-center font-semibold text-base">LOGIN</Text>
          </TouchableOpacity>

          {/* Social Login Section */}
          <View className="items-center mb-6">
            <Text className="text-gray-500 mb-2">OR</Text>
            <Text className="text-gray-500 mb-4">Log in with</Text>

            <View className="flex-row justify-center space-x-6">
              {/* Google */}
              <TouchableOpacity
                className="bg-gray-200 rounded-full w-12 h-12 items-center justify-center"
                onPress={() => handleSocialLogin("Google")}
              >
                <GoogleIcon />
              </TouchableOpacity>

              {/* Apple */}
              <TouchableOpacity
                className="bg-gray-200 rounded-full w-12 h-12 items-center justify-center"
                onPress={() => handleSocialLogin("Apple")}
              >
                <AppleIcon />
              </TouchableOpacity>

              {/* Other Provider */}
              <TouchableOpacity
                className="bg-gray-200 rounded-full w-12 h-12 items-center justify-center"
                onPress={() => handleSocialLogin("Other")}
              >
                {/* Empty circle */}
              </TouchableOpacity>
            </View>
          </View>

          {/* Sign Up Section */}
          <View className="flex-row justify-center">
            <Text className="text-gray-600 mr-1">Don't have an account?</Text>
            <TouchableOpacity onPress={handleSignUp}>
              <Text className="text-blue-500 font-medium">Sign up</Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

// Google Icon Component
const GoogleIcon = () => (
  <Svg width={24} height={24} viewBox="0 0 24 24">
    <G fill="none">
      <Path
        d="M20.283 10.356h-8.327v3.451h4.792c-.446 2.193-2.313 3.453-4.792 3.453a5.27 5.27 0 0 1-5.279-5.28 5.27 5.27 0 0 1 5.279-5.279c1.259 0 2.397.447 3.29 1.178l2.6-2.599c-1.584-1.381-3.615-2.233-5.89-2.233a8.908 8.908 0 0 0-8.934 8.934 8.907 8.907 0 0 0 8.934 8.934c4.467 0 8.529-3.249 8.529-8.934 0-.528-.081-1.097-.202-1.625z"
        fill="#4285F4"
      />
      <Path
        d="M4.17 12.958l-.85 3.569 3.51-.153c-.158-4.534-3.902-5.289-3.902-5.289s-3.584 1.092-3.584 5.289c0 0 .695-3.416 4.026-3.416z"
        fill="#34A853"
      />
      <Path
        d="M1.953 17.947c3.901.971 5.471-2.417 5.471-2.417l-4.019-.6c-2.242.971-1.452 3.017-1.452 3.017z"
        fill="#FBBC05"
      />
      <Path
        d="M12.92 9.556V5.392s-3.345 0-5.467.971c0 0 2.448 1.235 2.448 3.332 0-.139 3.019-.139 3.019-.139z"
        fill="#EA4335"
      />
      <Path
        d="M6.724 19.2c5.849-2.777 4.015-6.442 4.015-6.442l-3.35-2.68c-4.566 2.321-2.718 9.988-2.718 9.988.554-.277 2.053-.866 2.053-.866z"
        fill="#EA4335"
      />
    </G>
  </Svg>
);

// Apple Icon Component
const AppleIcon = () => (
  <Svg width={20} height={24} viewBox="0 0 20 24">
    <Path
      d="M14.5 0C15.7 0 16.6 0.5 17.4 1.2C18.2 1.9 18.6 2.9 18.9 3.9C17.6 4.6 16.7 5.7 16.4 7.1C16.2 8.5 16.5 9.8 17.3 10.7C16.5 11.9 15.5 13.2 13.9 13.7C13.1 11.8 11.9 10.8 9.8 10.8C7.7 10.8 6.4 11.9 5.5 13.8C3.9 13.3 2.7 12 2.1 10.8C3 9.8 3.2 8.6 3.1 7.1C2.7 5.7 1.8 4.5 0.5 3.9C0.8 2.9 1.2 1.9 2 1.2C2.8 0.5 3.7 0 5 0C6.3 0 7.2 0.6 8 1.2C8.8 1.8 9.3 2.1 9.9 2.1C10.6 2.1 11.1 1.8 11.8 1.2C12.6 0.6 13.4 0 14.5 0Z"
      fill="black"
    />
    <Path
      d="M9.8 11.2C12 11.2 13.6 13.4 14.1 15.3C14.7 17.2 14.8 19.1 14.1 21C13.5 22.9 12.1 24 10.5 24C9.4 24 8.8 23.5 8 23C7.2 22.5 6.6 22.5 5.8 23C5 23.5 4.3 24 3.3 24C1.6 24 0.3 22.9 -0.4 21C-1 19.1 -0.9 17.2 -0.3 15.3C0.3 13.4 1.9 11.2 4 11.2C5.1 11.2 5.9 11.7 6.6 12.2C7.3 12.7 8 12.7 8.7 12.2C9.4 11.7 9.8 11.2 10.9 11.2H9.8Z"
      fill="black"
    />
  </Svg>
);

export default LoginScreen;
