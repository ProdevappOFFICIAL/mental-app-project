import { vars, useColorScheme } from "nativewind";
import {
  Pressable,
  Text,
  View,
  PressableProps,
  TouchableOpacity,
  Image,
  ScrollView,
  useWindowDimensions,
  SafeAreaView,
} from "react-native";
import React from "react";
import Carousel from "@/components/Carousel";
import {
  AntDesign,
  Entypo,
  Feather,
  FontAwesome,
  FontAwesome5,
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";

const TabOneScreen = () => {
  const router = useRouter();
  const { width } = useWindowDimensions();
  
  return (
    <SafeAreaView className="flex-1 bg-gray-200/20 pt-20">
      <StatusBar style="dark" />
      
      {/* Header */}
      <View className="flex flex-row px-4 md:px-10  pb-4 md:pb-6 rounded-xl pt-2 md:pt-4 items-center justify-between">
        <TouchableOpacity onPress={() => router.push('/Login')}>
          <Image 
            className="rounded-full" 
            source={{ uri: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}}
            width={40} 
            height={40}
          />
        </TouchableOpacity>
        
        <TouchableOpacity>
          <View className="flex flex-row items-center space-x-1 md:space-x-2 px-2 md:px-4 py-1 md:py-2 bg-gray-300/20 rounded-full">
            <Entypo name="hand" size={16} color="black" />
            <Text className="text-base md:text-xl font-bold truncate max-w-32 md:max-w-none">HI, Ghost User</Text>
          </View>
        </TouchableOpacity>

        <View className="flex flex-row items-center gap-4 md:gap-8">
          <TouchableOpacity onPress={() => router.push("/Notifications")}>
            <Ionicons name="notifications-outline" size={20} color="black" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => router.push("/Favourite")}>
            <MaterialIcons name="favorite-outline" size={20} color="black" />
          </TouchableOpacity>
        </View>
      </View>
      
      {/* Main Content */}
      <ScrollView 
        className="flex-1"
        contentContainerClassName="px-4 md:px-8 pb-20 gap-4"
        showsVerticalScrollIndicator={false}
      >
        <View className="pt-4">
          <Carousel />
        </View>

        {/* Find Specialist Section */}
        <View className="flex flex-col w-full shadow-md bg-white rounded-md mt-4">
          <View className="flex flex-row items-center justify-between rounded-md px-4 md:px-6 pt-4">
            <Text className="text-xl md:text-2xl font-bold">Find Specialist</Text>
            <View className="flex flex-row items-center">
              <Text className="text-sm md:text-base text-blue-600">See all</Text>
              <Entypo name="chevron-right" size={18} color="blue" />
            </View>
          </View>
          
          {/* First row of specialists */}
          <View className="flex flex-row w-full justify-between px-2 py-4">
            <SpecialistItem 
              icon={<FontAwesome5 name="briefcase-medical" size={20} color="blue" />}
              label="General Pr."
            />
            <SpecialistItem 
              icon={<FontAwesome name="heartbeat" size={20} color="blue" />}
              label="Cardiologist"
            />
            <SpecialistItem 
              icon={<FontAwesome5 name="tooth" size={20} color="blue" />}
              label="Dentist"
            />
            <SpecialistItem 
              icon={<FontAwesome5 name="lungs" size={20} color="blue" />}
              label="Pulmonol"
            />
          </View>
          
          {/* Second row of specialists */}
          <View className="flex flex-row w-full justify-between px-2 py-4">
            <SpecialistItem 
              icon={<MaterialIcons name="coronavirus" size={20} color="blue" />}
              label="Infectiologist"
            />
            <SpecialistItem 
              icon={<Ionicons name="accessibility" size={20} color="blue" />}
              label="Pediatrics"
            />
            <SpecialistItem 
              icon={<MaterialCommunityIcons name="connection" size={20} color="blue" />}
              label="Orthopedics"
            />
            <SpecialistItem 
              icon={<Entypo name="dots-three-horizontal" size={20} color="blue" />}
              label="See more"
            />
          </View>
        </View>
        
        {/* Top Doctors Section */}
        <View className="flex flex-row items-center justify-between mt-6 px-1">
          <Text className="text-xl md:text-2xl font-bold">Top Doctors</Text>
          <View className="flex flex-row items-center">
            <Text className="text-sm md:text-base text-blue-600">See all</Text>
            <Entypo name="chevron-right" size={18} color="blue" />
          </View>
        </View>
        
        {/* Doctor Cards */}
        <DoctorCard router={router} />
        <DoctorCard router={router} />
      </ScrollView>
    </SafeAreaView>
  );
};

// Reusable components to reduce repetition
const SpecialistItem = ({ icon, label }) => (
  <View className="flex flex-col items-center justify-center">
    <TouchableOpacity className="bg-blue-400/20 rounded-full p-2 md:p-3">
      {icon}
    </TouchableOpacity>
    <Text className="text-xs md:text-sm mt-1 text-center">{label}</Text>
  </View>
);

const DoctorCard = ({ router }) => (
  <View className="flex flex-col w-full p-4 md:p-6 gap-4 bg-white rounded-md shadow-md mt-4">
    <View className="flex flex-row items-center">
      <Image 
        className="w-10 h-10 md:w-12 md:h-12 rounded-full" 
        source={{
          uri: "https://th.bing.com/th?id=OIP.AwGBn0RaiFXEpXemdj-2LQHaLG&w=204&h=306&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2"
        }}
      />
      <View className="flex flex-col ml-3">
        <Text className="text-lg md:text-xl font-bold">Mr Ghost Doctor</Text>
        <Text className="text-gray-600 text-xs">Mr Ghost Doctor</Text>
      </View>
      <View className="flex-1"/>
      <View className="flex flex-row bg-blue-300/20 rounded-md px-2 py-1 items-center">
        <AntDesign name="star" size={16} color="blue" />
        <Text className="text-base md:text-lg ml-1">0</Text>
      </View>
    </View>
    
    <View className="flex flex-col rounded-2xl bg-gray-300/20 p-4">
      <View className="flex flex-row items-center justify-between">
        <View className="flex flex-col">
          <Text className="text-base md:text-lg font-bold">Available now</Text>
          <Text className="text-blue-600 text-sm">-Consult</Text>
        </View>
        <View className="flex flex-col items-end">
          <Text className="text-base md:text-lg font-bold">$1000</Text>
          <Text className="text-gray-600 text-sm">Consulation Fee</Text>
        </View>
      </View>
      
      <TouchableOpacity 
        onPress={() => router && router.push('/BookAppoint')} 
        className="flex flex-row items-center justify-center py-3 rounded-xl w-full bg-blue-600 mt-4"
        activeOpacity={0.8}
      > 
        <Text className="text-base md:text-lg text-white mr-2">
          Book an Appointment
        </Text>
        <Entypo name="chevron-thin-right" size={16} color="white" />
      </TouchableOpacity>
    </View>
  </View>
);

export default TabOneScreen;