import { AntDesign, Entypo, Ionicons, MaterialIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";

export default function TabTwooScreen() {
  const router = useRouter()
  return (
    <View className="flex-1 bg-gray-200/20">
    <View className="flex flex-row px-10 bg-white pb-10 rounded-xl pt-6 items-center justify-between">
     
      <TouchableOpacity>
        <View className=" flex flex-row items-center space-x-2 px-6 py-2 bg-gray-300/20 rounded-full uppercase  text-gray-700 text-center">
          <TouchableOpacity>
          <Entypo name="calendar" size={24} color="black" />
          </TouchableOpacity>
          <Text className="ml-2 text-2xl font-bold">Appointment</Text>
        </View>
      </TouchableOpacity>

      <View className="flex flex-row items-center gap-8">
        <TouchableOpacity onPress={() => router.push("/cart")}>
        <AntDesign name="search1" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => router.push("/cart")}>
        <Entypo name="dots-three-horizontal" size={24} color="black" />
        </TouchableOpacity>
      </View>
    </View>
    <View className="flex flex-col w-full h-full items-center justify-center p-10 gap-4">
      
    <Entypo name="calendar" size={70} color="black" />
        <Text className="text-3xl font-bold"> No Upcoming Appoinment</Text>
        <TouchableOpacity className="flex flex-row w-full h-[60px] items-center justify-center rounded-full px-4 py-2 bg-blue-600">
            <Text className="text-white">
                Schedule Appointment
            </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
