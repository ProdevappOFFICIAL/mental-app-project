// app/intro4.tsx
import { Text, View, Image, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";

export default function IntroScreen4() {
  const router = useRouter();
  
  const handleComplete = () => {
    // Set global variable to indicate intro completion
    (global as any).hasCompletedIntroGlobal = true;
    // Navigate to main tab screen
    router.replace("/(tabs)");
  };
  
  return (
    <View className="flex-1 bg-white items-center justify-center p-6">

      <Text className="text-3xl font-bold text-center mb-4">Health Tips</Text>
      <Text className="text-lg text-gray-600 text-center mb-8">
        Get personalized health tips and advice
      </Text>
      
      <View className="flex-row gap-2 mb-8">
        <View className="h-2 w-2 rounded-full bg-gray-300" />
        <View className="h-2 w-2 rounded-full bg-gray-300" />
        <View className="h-2 w-2 rounded-full bg-gray-300" />
        <View className="h-2 w-10 rounded-full bg-blue-500" />
      </View>
      
      <View className="flex-row w-full justify-between">
        <TouchableOpacity 
          className="bg-gray-200 py-4 px-8 rounded-full"
          onPress={() => router.push("/intro3")}
        >
          <Text className="font-medium text-gray-700">Back</Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          className="bg-blue-500 py-4 px-8 rounded-full"
          onPress={handleComplete}
        >
          <Text className="text-white font-bold text-lg">Get Started</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}