import React from 'react';
import { View, Text, TouchableOpacity, Image, SafeAreaView, StatusBar, ScrollView } from 'react-native';

// Icons would typically be imported from a library like react-native-heroicons
// or you could use custom SVGs
const UserIcon = () => (
  <View className="w-6 h-6 bg-blue-500 rounded-md flex items-center justify-center">
    <Text className="text-white font-bold text-xs">👤</Text>
  </View>
);

const NotificationIcon = () => (
  <View className="w-6 h-6 bg-amber-500 rounded-md flex items-center justify-center">
    <Text className="text-white font-bold text-xs">🔔</Text>
  </View>
);

const SecurityIcon = () => (
  <View className="w-6 h-6 bg-orange-500 rounded-md flex items-center justify-center">
    <Text className="text-white font-bold text-xs">🛡️</Text>
  </View>
);

const LanguageIcon = () => (
  <View className="w-6 h-6 bg-purple-500 rounded-md flex items-center justify-center">
    <Text className="text-white font-bold text-xs">🌐</Text>
  </View>
);

const AppearanceIcon = () => (
  <View className="w-6 h-6 bg-teal-500 rounded-md flex items-center justify-center">
    <Text className="text-white font-bold text-xs">🎨</Text>
  </View>
);

const HelpIcon = () => (
  <View className="w-6 h-6 bg-blue-400 rounded-md flex items-center justify-center">
    <Text className="text-white font-bold text-xs">❓</Text>
  </View>
);

const InviteIcon = () => (
  <View className="w-6 h-6 bg-pink-500 rounded-md flex items-center justify-center">
    <Text className="text-white font-bold text-xs">👥</Text>
  </View>
);

const AboutIcon = () => (
  <View className="w-6 h-6 bg-blue-600 rounded-md flex items-center justify-center">
    <Text className="text-white font-bold text-xs">ℹ️</Text>
  </View>
);

const LogoutIcon = () => (
  <View className="w-6 h-6 bg-red-500 rounded-md flex items-center justify-center">
    <Text className="text-white font-bold text-xs">↪️</Text>
  </View>
);

const DeleteIcon = () => (
  <View className="w-6 h-6 bg-red-500 rounded-md flex items-center justify-center">
    <Text className="text-white font-bold text-xs">🗑️</Text>
  </View>
);

const PlayIcon = () => (
  <View className="w-12 h-12 bg-gray-400 bg-opacity-50 rounded-full flex items-center justify-center absolute inset-center">
    <Text className="text-white text-xl">▶️</Text>
  </View>
);

const SettingItem = ({ icon, title, value}) => (
  <TouchableOpacity className="flex-row items-center px-4 py-4 bg-white">
    {icon}
    <Text className="flex-1 ml-3 text-base text-gray-700">{title}</Text>
    {value && <Text className="mr-2 text-gray-400">{value}</Text>}
  </TouchableOpacity>
);

const Divider = () => <View className="h-px bg-gray-100" />;

const Profile = () => {
  return (
    <SafeAreaView className="flex-1 bg-gray-100 pt-20">
      <StatusBar barStyle="dark-content" />
      
      {/* Header */}
      <View className="flex-row justify-between items-center px-4 pt-2 pb-4">
        <Text className="text-2xl font-semibold">Profile Settings</Text>
        <TouchableOpacity>
          <Text className="text-2xl">···</Text>
        </TouchableOpacity>
      </View>
      
      <ScrollView className="flex-1">
        <View className="rounded-xl mx-2 overflow-hidden mb-2">
          <SettingItem icon={<UserIcon />} title="Edit Profile" />
          <Divider />
          <SettingItem icon={<NotificationIcon />} title="Notifications" />
          <Divider />
          <SettingItem icon={<SecurityIcon />} title="Security" />
          <Divider />
          <SettingItem 
            icon={<LanguageIcon />} 
            title="Language" 
            value="English" 
            showChevron={false} 
          />
          <Divider />
          <SettingItem icon={<AppearanceIcon />} title="Appearance" />
          
          {/* Video preview with play button */}
        
          <Divider />
          <SettingItem icon={<HelpIcon />} title="Help Center" />
          <Divider />
          <SettingItem icon={<InviteIcon />} title="Invite Friends" />
          <Divider />
          <SettingItem icon={<AboutIcon />} title="About HGNplus" value="1.02.35" />
          <Divider />
          <SettingItem icon={<LogoutIcon />} title="Logout" />
          <Divider />
          <SettingItem icon={<DeleteIcon />} title="Delete Account" />
        </View>
      </ScrollView>
      
      {/* Bottom Navigation */}
  
    </SafeAreaView>
  );
};

export default Profile;