import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, SafeAreaView, StatusBar } from 'react-native';
import { Ionicons, AntDesign, MaterialIcons } from '@expo/vector-icons';
import { router, useNavigation } from 'expo-router';

const DoctorProfileScreen = () => {
  const navigation = useNavigation();
  const dates = [
    { day: 'Thu', date: '20' },
    { day: 'Fri', date: '21' },
    { day: 'Sat', date: '22' },
    { day: 'Sun', date: '23' },
    { day: 'Mon', date: '24' },
  ];

  return (
    <SafeAreaView className="flex-1 bg-gray-100 pt-20">
      <StatusBar barStyle="dark-content" />
      
      {/* Header */}
      <View className="px-4 py-3 flex-row items-center justify-between ">
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="#333" />
        </TouchableOpacity>
        <Text className="text-lg font-semibold">Details</Text>
        <TouchableOpacity>
          <Ionicons name="ellipsis-vertical" size={24} color="#333" />
        </TouchableOpacity>
      </View>
      
      <ScrollView className="flex-1">
        {/* Doctor Profile Card */}
        <View className="bg-white m-4 rounded-xl shadow">
          <View className="p-4">
            <View className="flex-row">
              {/* Profile Image */}
           
              
              <View className="ml-4 flex-1">
                {/* Name in Arabic */}
                <Text className="text-xl font-bold">الواضح الناصفة</Text>
                
                {/* Profession */}
                <Text className="text-gray-600 my-1">Dentist</Text>
                
                {/* Hospital/Location */}
                <Text className="text-gray-500 text-sm">
                  New Jersey Hospital No 2, New Jersey close, United states
                </Text>
              </View>
            </View>
            
            {/* Stats */}
            <View className="flex-row justify-between mt-6 border-t border-gray-200 pt-4">
              <View className="items-center">
                <Text className="text-gray-500">Patient</Text>
                <Text className="font-semibold text-lg mt-1">0+</Text>
              </View>
              
              <View className="items-center">
                <Text className="text-gray-500">Experience</Text>
                <Text className="font-semibold text-lg mt-1">10Years</Text>
              </View>
              
              <View className="items-center">
                <Text className="text-gray-500">Review</Text>
                <Text className="font-semibold text-lg mt-1">0</Text>
              </View>
            </View>
          </View>
        </View>
        
        {/* Available Time */}
        <View className="bg-white m-4 rounded-xl shadow p-4">
          <View className="flex-row justify-between items-center mb-4">
            <Text className="text-lg font-semibold">Available Time</Text>
            <View className="bg-gray-300 rounded-full p-2">
              <Ionicons name="play" size={24} color="#666" />
            </View>
          </View>
          
          {/* Calendar Days */}
          <View className="flex-row justify-between my-4">
            {dates.map((item, index) => (
              <View key={index} className="items-center">
                <Text className="text-gray-500">{item.day}</Text>
                <Text className="font-semibold text-lg mt-1">{item.date}</Text>
              </View>
            ))}
          </View>
          
          {/* View All Button */}
          <TouchableOpacity className="flex-row items-center justify-center mt-2">
            <Text className="text-gray-500 mr-1">View all availability</Text>
            <AntDesign name="right" size={16} color="gray" />
          </TouchableOpacity>
        </View>
        
        {/* About Me */}
        <View className="bg-white m-4 rounded-xl shadow p-4">
          <View className="flex-row justify-between items-center mb-2">
            <Text className="text-lg font-semibold">About me</Text>
          </View>
          
          {/* About text in Arabic */}
          <View className="flex-row justify-between">
            <Text className="text-gray-600 text-right">
              الواضح يعتبر من أقوى هجن العاصفه منتج العديد من السبق
            </Text>
            <TouchableOpacity>
              <Text className="text-blue-500">More</Text>
            </TouchableOpacity>
          </View>
        </View>
        
        {/* App Info */}
      
      </ScrollView>
      
      {/* Bottom Bar */}
      <View className="bg-blue-500 p-4">
        <TouchableOpacity className="flex-row justify-between items-center" onPress={()=> router.push('/DateTimeSelectionScreen')}>
          <View />
          <View className="flex-row items-center">
            <Text className="text-white text-lg font-semibold mr-2">Book Consultation</Text>
            <View className="bg-white rounded-lg px-3 py-1">
              <Text className="text-blue-500 font-bold">$1,000</Text>
            </View>
          </View>
          <MaterialIcons name="reply" size={24} color="white" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default DoctorProfileScreen;