import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  SafeAreaView,
  useWindowDimensions,
} from "react-native";
import { useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Svg, Path, Rect, Circle } from "react-native-svg";
const RoleSelectionScreen = () => {
  const router = useRouter();
  const { height } = useWindowDimensions();
  return (
    <SafeAreaView className="flex-1 bg-white">
      <StatusBar style="dark" />
      <View className="flex-1 items-center justify-center px-6">
        <Text className="text-2xl font-bold text-center mb-12">
          Choose your role
        </Text>
        <TouchableOpacity
          className="w-full mb-8 active:opacity-90"
          onPress={() => router.push("/intro3")}
        >
          <View className="flex-row items-center bg-white border-2 border-gray-200 rounded-full py-4 px-6">
            <Text className="text-xl font-semibold ml-2 mr-6">DOCTOR</Text>
            <View className="flex-1" />
            <View className="w-32 h-32 mr-2">
              <DoctorIllustration />
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          className="w-full active:opacity-90"
          onPress={() => router.push("/intro3")}
        >
          <View className="flex-row items-center bg-white border-2 border-gray-200 rounded-full py-4 px-6">
            <Text className="text-xl font-semibold ml-2 mr-6">PATIENT</Text>
            <View className="flex-1" />
            <View className="w-32 h-32 mr-2">
              <PatientIllustration />
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
const DoctorIllustration = () => (
  <View className="relative">
    <View className="absolute top-2 left-4">
      <Svg width={80} height={90} viewBox="0 0 80 90">
        <Rect x={10} y={5} width={60} height={85} fill="#f5f5e6" rx={20} />
        <Circle cx={40} cy={20} r={8} fill="#4a90e2" />
        <Path d="M35 20 L15 50 L25 55 L35 30" fill="#f5f5e6" />
      </Svg>
    </View>
    <View className="absolute top-0 left-0">
      <Svg width={80} height={80} viewBox="0 0 80 80">
        <Circle cx={45} cy={15} r={12} fill="#ffccb3" />
        <Rect x={43} y={10} width={12} height={6} fill="#333" rx={2} />
        <Path d="M30 40 L42 35 L46 40 L30 45 Z" fill="#ffccb3" />
      </Svg>
    </View>
  </View>
);
const PatientIllustration = () => (
  <View className="relative">
    <View className="absolute top-2 left-0">
      <Svg width={80} height={80} viewBox="0 0 80 80">
        <Path d="M5 20 L55 20 L65 70 L15 70 Z" fill="#ffcc00" />
      </Svg>
    </View>
    <View className="absolute top-6 left-2">
      <Svg width={70} height={70} viewBox="0 0 70 70">
        <Circle cx={30} cy={15} r={10} fill="#ffccb3" />
        <Path d="M20 25 L45 30 L40 60 L15 55 Z" fill="#ff6666" />
        <Path d="M30 40 L50 40 L45 65 L25 65 Z" fill="#6666ff" />
      </Svg>
    </View>
    <View className="absolute top-0 right-0">
      <Svg width={50} height={50} viewBox="0 0 50 50">
        <Rect
          x={5}
          y={5}
          width={40}
          height={30}
          fill="#ffffff"
          stroke="#cccccc"
          strokeWidth={1}
        />
        <Rect x={5} y={30} width={40} height={5} fill="#4a90e2" />
        <Circle cx={25} cy={18} r={5} fill="#f5f5e6" />
        <Rect x={20} y={22} width={10} height={10} fill="#f5f5e6" />
      </Svg>
    </View>
  </View>
);
export default RoleSelectionScreen;
