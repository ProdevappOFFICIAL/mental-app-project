import { useRouter } from "expo-router";
import { Image, Text, TouchableOpacity, View, useWindowDimensions } from "react-native";
import { StatusBar } from "expo-status-bar";

export default function Modal() {
  const router = useRouter();
  const { width, height } = useWindowDimensions();
  
  return (
    <View className="bg-white flex-1 px-4 py-6 md:p-10">
      <StatusBar style="dark" />
      
      <View className="flex-1 justify-between">
        {/* Header Text */}
        <View className="pt-4">
          <Text className="text-3xl md:text-5xl uppercase text-gray-700 text-center font-bold">
            Striving to improve
          </Text>
          <Text className="text-xl md:text-3xl uppercase text-gray-700 text-center mt-1">
            community health
          </Text>
          <Text className="text-xl md:text-3xl uppercase text-gray-700 text-center mt-1">
            care and practices
          </Text>
        </View>
        
        {/* Main Content */}
        <View className="flex-1 items-center justify-center py-4 my-2">
          <Image 
            className="w-full aspect-square md:h-72 rounded-lg"
            resizeMode="cover" 
            source={require("../assets/images/intro.jpg")} 
          />
        </View>
        
        {/* Button */}
        <View className="items-center pb-6">
          <TouchableOpacity
            onPress={() => {
              router.push("/intro2");
            }}
            className="active:opacity-80"
          >
            <View className="bg-green-600 px-6 py-3 rounded-full items-center">
              <Text className="text-white text-xl font-semibold">Get Started</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}