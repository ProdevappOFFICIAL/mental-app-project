import {
  AntDesign,
  Entypo,
  Feather,
  FontAwesome5,
  FontAwesome6,
  Ionicons,
  MaterialIcons,
} from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { Text, TouchableOpacity, View, ScrollView } from "react-native";
import { useState } from "react";

// Health Tip Component
const HealthTip = ({ icon, title, description, color }) => {
  const [expanded, setExpanded] = useState(false);
  
  return (
    <TouchableOpacity 
      className={`w-full bg-white rounded-xl p-4 shadow-sm mb-4`}
      onPress={() => setExpanded(!expanded)}
    >
      <View className="flex-row items-center justify-between">
        <View className="flex-row items-center">
          <View className={`p-3 rounded-full ${color}`}>
            {icon}
          </View>
          <Text className="ml-3 text-lg font-semibold">{title}</Text>
        </View>
        <AntDesign name={expanded ? "caretup" : "caretdown"} size={16} color="gray" />
      </View>
      
      {expanded && (
        <View className="mt-4 pl-12">
          <Text className="text-gray-600 leading-5">{description}</Text>
        </View>
      )}
    </TouchableOpacity>
  );
};

export default function Symptom() {
  const router = useRouter();
  
  const healthTips = [
    {
      title: "Daily Movement",
      description: "Aim for at least 30 minutes of moderate activity each day. Even short walks can boost your mood and energy levels.",
      color: "bg-blue-500"
    },
    {
      title: "Stay Hydrated",
      description: "Drink at least 8 glasses of water daily. Proper hydration improves energy, skin health, and cognitive function.",
      color: "bg-cyan-500"
    },
    {
      title: "Mindful Breaks",
      description: "Take 5-minute breaks throughout your day to practice deep breathing. This reduces stress and improves focus.",
      color: "bg-purple-500"
    },
    {
      title: "Balanced Nutrition",
      description: "Include protein, healthy fats, and colorful vegetables in each meal. This provides sustained energy and essential nutrients.",
      color: "bg-green-500"
    },
    {
      title: "Quality Sleep",
      description: "Aim for 7-9 hours of quality sleep. Establish a bedtime routine and limit screen time before bed for better rest.",
      color: "bg-indigo-500"
    },
    {
      title: "Digital Detox",
      description: "Set aside phone-free time each day. Reducing screen time can improve mental health and real-world connections.",
      color: "bg-orange-500"
    },
  ];
  
  return (
    <View className="flex-1 bg-gray-200/20">
      <View className="flex flex-row px-10 bg-white pb-10 rounded-xl pt-6 items-center justify-between">
        <TouchableOpacity>
          <View className="flex flex-row items-center space-x-2 px-6 py-2 bg-gray-300/20 rounded-full uppercase text-gray-700 text-center">
            <TouchableOpacity>
              <MaterialIcons name="tips-and-updates" size={24} color="black" />
            </TouchableOpacity>
            <Text className="ml-2 text-2xl font-bold">Tips</Text>
          </View>
        </TouchableOpacity>

        <View className="flex flex-row items-center gap-8">
          <TouchableOpacity>
            <Entypo name="dots-three-horizontal" size={24} color="black" />
          </TouchableOpacity>
        </View>
      </View>
      
      <ScrollView className="flex-1 px-4 py-6">
        <View className="mb-4">
          <Text className="text-xl font-bold mb-2">Wellness Recommendations</Text>
          <Text className="text-gray-600">Tap on any tip to learn more</Text>
        </View>
        
        {healthTips.map((tip, index) => (
          <HealthTip 
            key={index}
            title={tip.title}
            description={tip.description}
          />
        ))}
        
        <View className="p-4 bg-yellow-100 rounded-xl mb-6">
          <View className="flex-row items-center mb-2">
            <AntDesign name="bulb1" size={20} color="#EAB308" />
            <Text className="ml-2 font-semibold">Daily Wellness Tip</Text>
          </View>
          <Text className="text-gray-700">Regular self-monitoring helps you stay on track with your health goals. Use the app daily to record your symptoms and progress.</Text>
        </View>
      </ScrollView>
      
      <View className="bg-white p-4 border-t border-gray-200">
        <TouchableOpacity className="bg-blue-500 rounded-full py-3 items-center">
          <Text className="text-white font-semibold text-lg">Track My Progress</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}