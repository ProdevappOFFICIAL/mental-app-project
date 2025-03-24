import React, { useState } from 'react';
import { View, Text, TouchableOpacity, SafeAreaView, StatusBar } from 'react-native';
import { Ionicons, MaterialIcons, FontAwesome } from '@expo/vector-icons';
import { useNavigation, useRouter } from 'expo-router';

const SelectPackageScreen = () => {
  const navigation = useNavigation();
  const [selectedPackage, setSelectedPackage] = useState(null);
  const router = useRouter()
  const packages = [
    {
      id: 'messaging',
      title: 'Messaging',
      description: 'Chat messages with doctor',
      price: 25,
      icon: 'chatbubble-outline'
    },
    {
      id: 'voice',
      title: 'Voice Call',
      description: 'Voice call with doctor',
      price: 30,
      icon: 'mic-outline'
    },
    {
      id: 'video',
      title: 'Video Call',
      description: 'Video call with doctor',
      price: 40,
      icon: 'videocam-outline'
    }
  ];

  const handlePackageSelection = (packageId) => {
    setSelectedPackage(packageId);
  };

  const handleNext = () => {
    if (selectedPackage) {
      // Navigate to next screen
      navigation.navigate('PaymentScreen', { selectedPackage });
    }
  };

  return (
    <SafeAreaView className="flex-1 bg-white pt-20">
      <StatusBar barStyle="dark-content" />
      
      {/* Header */}
      <View className="flex-row items-center p-4 border-b border-gray-200">
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="#333" />
        </TouchableOpacity>
        <Text className="text-xl font-medium ml-4">Select Package</Text>
      </View>
      
      {/* Main Content */}
      <View className="flex-1 bg-gray-100">
        {/* Title */}
        <Text className="text-xl font-medium p-4">Select Package</Text>
        
        {/* Package Options */}
        <View className="px-4 space-y-4">
          {packages.map((pkg) => (
            <TouchableOpacity
              key={pkg.id}
              className="bg-white rounded-xl p-4 flex-row items-center justify-between"
              onPress={() => handlePackageSelection(pkg.id)}
            >
              <View className="flex-row items-center">
                <View className="w-12 h-12 rounded-full bg-blue-100 items-center justify-center mr-4">
                  <Ionicons name={pkg.icon} size={24} color="#38bdf8" />
                </View>
                <View>
                  <Text className="text-lg font-medium">{pkg.title}</Text>
                  <Text className="text-gray-400">{pkg.description}</Text>
                </View>
              </View>
              <View className="flex-row items-center">
                <Text className="text-blue-500 text-xl font-semibold mr-3">${pkg.price}</Text>
                <View className={`w-6 h-6 rounded-full border-2 ${selectedPackage === pkg.id ? 'bg-blue-500 border-blue-500' : 'border-gray-300'}`}>
                  {selectedPackage === pkg.id && (
                    <View className="flex-1 items-center justify-center">
                      <View className="w-2 h-2 bg-white rounded-full" />
                    </View>
                  )}
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </View>

        {/* Play overlay on video call option */}
       
      </View>
      
      {/* Next Button */}
      <View className="p-4">
        <TouchableOpacity 
          onPress={()=> router.push('/(tabs)')}
          className={`rounded-lg py-4 items-center bg-blue-500` }
          
        >
          <Text className="text-white text-lg font-medium">Next</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default SelectPackageScreen;