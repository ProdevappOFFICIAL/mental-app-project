import { AntDesign, Entypo, Ionicons, MaterialIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { Image, Text, TouchableOpacity, View } from "react-native";

export default function Notifications() {
  const router = useRouter()
  return (
    <View className="flex-1 bg-gray-200/20 pt-20">
    <View className="hidden flex-row px-10 bg-white pb-10 rounded-xl pt-6 items-center justify-between">
     
      <TouchableOpacity>
        <View className=" flex flex-row items-center space-x-2 px-6 py-2 bg-gray-300/20 rounded-full uppercase  text-gray-700 text-center">
          <TouchableOpacity>
          <Entypo name="calendar" size={24} color="black" />
          </TouchableOpacity>
          <Text className="ml-2 text-2xl font-bold">Favourite</Text>
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
    <View className="flex flex-col w-full h-full items-center  p-10 gap-4">
    <View className="flex flex-col w-full p-10 gap-4 bg-white rounded-md shadow-md">
            <View className="flex flex-row items-center justify-between">
                <Image className="w-[50px] h-[50px] rounded-full" source={
                  {
                    uri: "https://th.bing.com/th?id=OIP.AwGBn0RaiFXEpXemdj-2LQHaLG&w=204&h=306&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2"
                  }
                }/>
                <View className="flex flex-col gap-3 ml-4">
                    <Text className="text-3xl font-bold"> Mr Ghost Doctor</Text>
                    <Text className="text-gray-600 text-sm"> Mr Ghost Doctor</Text>
                </View>
                <View className="flex-1"/>
                <View className="flex flex-row bg-blue-300/20 rounded-md px-3 py-1 gap-2">
                <AntDesign name="star" size={24} color="blue" />
                <Text className="text-3xl">
                  0
                </Text>
                </View>
              
            </View>
            <View className="flex flex-col  rounded-[20px] bg-gray-300/20 p-10">
                <View className="flex flex-row items-center justify-between">
                  <View className="flex flex-col">
                  <Text className="text-3xl font-bold">Available now</Text>
                  <Text className="text-blue-600 text-xl">-Consult</Text>
                  </View>
                
                  <View className="flex flex-col">
                  <Text className="text-3xl font-bold">$1000</Text>
                  <Text className="text-gray-600 text-xl">Consulation Fee</Text>
                  </View>
            </View>
            <TouchableOpacity className="flex flex-row items-center justify-center py-4 rounded-[15px] w-full bg-blue-600 mt-5"> 
              <Text className="text-3xl text-white">
                    Book an Appointment
              </Text>
              <Entypo name="chevron-thin-right" size={24} color="white" />
            </TouchableOpacity>
            </View>
      
          </View>
      </View>
    </View>
  );
}
