import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  TextInput,
  ActivityIndicator,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import {
  AntDesign,
  Entypo,
  Feather,
  FontAwesome5,
  Ionicons,
  MaterialIcons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { LinearGradient } from 'expo-linear-gradient';

// Company theme colors
const COLORS = {
  primary: "#4361EE",
  primaryDark: "#3A56D4",
  secondary: "#48BFE3",
  accent: "#F72585",
  success: "#06D6A0",
  warning: "#FFC043",
  danger: "#EF476F",
  light: "#F8F9FA",
  dark: "#212529",
  gray: "#6C757D",
  lightGray: "#E9ECEF",
  white: "#FFFFFF",
  black: "#000000",
};

// Body Part Selection Component
const BodyPartSelector = ({ selectedPart, onSelect }) => {
  const bodyParts = [
    { id: 'head', name: 'Head & Face', icon: 'head' },
    { id: 'chest', name: 'Chest & Back', icon: 'human-male' },
    { id: 'abdomen', name: 'Abdomen', icon: 'stomach' },
    { id: 'arms', name: 'Arms & Hands', icon: 'hand' },
    { id: 'legs', name: 'Legs & Feet', icon: 'foot' },
    { id: 'skin', name: 'Skin & Hair', icon: 'face-man' },
    { id: 'general', name: 'General', icon: 'human' },
  ];

  return (
    <ScrollView 
      horizontal 
      showsHorizontalScrollIndicator={false}
      className="py-4"
    >
      {bodyParts.map((part) => (
        <TouchableOpacity
          key={part.id}
          onPress={() => onSelect(part.id)}
          className="mx-2"
        >
          <View className={`items-center justify-center w-24 h-24 rounded-2xl shadow ${
            selectedPart === part.id 
              ? 'bg-blue-500' 
              : 'bg-white'
          }`}
          style={{ 
            elevation: 2,
            shadowColor: COLORS.black,
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.1,
            shadowRadius: 4,
          }}
          >
            <MaterialCommunityIcons 
              name={part.icon} 
              size={32} 
              color={selectedPart === part.id ? COLORS.white : COLORS.primary} 
            />
            <Text className={`text-xs mt-2 font-medium ${
              selectedPart === part.id ? 'text-white' : 'text-gray-700'
            }`}>
              {part.name}
            </Text>
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

// Symptom Item Component
const SymptomItem = ({ symptom, selected, onToggle }) => {
  return (
    <TouchableOpacity
      className={`mb-3 rounded-xl overflow-hidden`}
      onPress={onToggle}
      style={{ 
        elevation: 2,
        shadowColor: COLORS.black,
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
      }}
    >
      <View className={`flex-row items-center p-4 border-l-4 ${
        selected ? 'border-l-blue-500 bg-blue-50' : 'border-l-gray-200 bg-white'
      }`}>
        <View className="flex-1">
          <Text className="font-semibold text-base text-gray-800">{symptom.name}</Text>
          {symptom.description && (
            <Text className="text-gray-500 text-sm mt-1">{symptom.description}</Text>
          )}
        </View>
        <View className={`w-6 h-6 rounded-full items-center justify-center ${
          selected ? 'bg-blue-500' : 'border border-gray-300'
        }`}>
          {selected && <Feather name="check" size={16} color="white" />}
        </View>
      </View>
    </TouchableOpacity>
  );
};

// Severity Selector Component
const SeveritySelector = ({ severity, onSelect }) => {
  const options = [
    { value: 'mild', label: 'Mild', color: COLORS.success, bg: 'bg-green-500' },
    { value: 'moderate', label: 'Moderate', color: COLORS.warning, bg: 'bg-yellow-500' },
    { value: 'severe', label: 'Severe', color: COLORS.danger, bg: 'bg-red-500' },
  ];

  return (
    <View className="flex-row justify-between mt-4 mb-6">
      {options.map((option) => (
        <TouchableOpacity
          key={option.value}
          onPress={() => onSelect(option.value)}
          className="flex-1 mx-1"
          style={{ 
            elevation: severity === option.value ? 4 : 1,
          }}
        >
          <View className={`py-3 rounded items-center ${
            severity === option.value 
              ? option.bg
              : 'bg-white border border-gray-200'
          }`}>
            <Text className={`font-medium ${
              severity === option.value ? 'text-white' : 'text-gray-700'
            }`}>
              {option.label}
            </Text>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
};

// Section Header Component
const SectionHeader = ({ title, count }) => (
  <View className="flex-row items-center justify-between mb-4">
    <Text className="font-bold text-lg text-gray-800">{title}</Text>
    {count !== undefined && (
      <View className="bg-blue-100 px-3 py-1 rounded-full">
        <Text className="text-blue-600 font-medium text-sm">{count}</Text>
      </View>
    )}
  </View>
);

export default function Symptom() {
  const router = useRouter();
  const [selectedBodyPart, setSelectedBodyPart] = useState('general');
  const [selectedSymptoms, setSelectedSymptoms] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [severity, setSeverity] = useState('moderate');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  
  // Example symptoms data (would come from API in real app)
  const symptoms = {
    head: [
      { id: 'headache', name: 'Headache', description: 'Pain in the head or upper neck' },
      { id: 'dizziness', name: 'Dizziness', description: 'Feeling faint, woozy, or unsteady' },
      { id: 'blurred_vision', name: 'Blurred Vision', description: 'Lack of sharpness of vision' },
      { id: 'ear_pain', name: 'Ear Pain', description: 'Pain in or around the ear' },
    ],
    chest: [
      { id: 'chest_pain', name: 'Chest Pain', description: 'Discomfort or pain in the chest area' },
      { id: 'shortness_breath', name: 'Shortness of Breath', description: 'Difficulty breathing or catching your breath' },
      { id: 'palpitations', name: 'Heart Palpitations', description: 'Feeling that your heart is racing or pounding' },
    ],
    abdomen: [
      { id: 'nausea', name: 'Nausea', description: 'Feeling that you might vomit' },
      { id: 'stomachache', name: 'Stomachache', description: 'Pain or discomfort in the stomach region' },
      { id: 'diarrhea', name: 'Diarrhea', description: 'Loose, watery stools' },
      { id: 'constipation', name: 'Constipation', description: 'Difficulty passing stool' },
    ],
    arms: [
      { id: 'arm_pain', name: 'Arm Pain', description: 'Pain in one or both arms' },
      { id: 'joint_pain', name: 'Joint Pain', description: 'Pain in the joints of fingers, wrist, or elbow' },
      { id: 'numbness', name: 'Numbness/Tingling', description: 'Loss of sensation or tingling in arms or hands' },
    ],
    legs: [
      { id: 'leg_pain', name: 'Leg Pain', description: 'Pain in one or both legs' },
      { id: 'swelling', name: 'Swelling', description: 'Puffy or enlarged area in legs or feet' },
      { id: 'difficulty_walking', name: 'Difficulty Walking', description: 'Trouble with normal walking motion' },
    ],
    skin: [
      { id: 'rash', name: 'Rash', description: 'Area of irritated or swollen skin' },
      { id: 'itching', name: 'Itching', description: 'Irritating sensation that causes desire to scratch' },
      { id: 'hair_loss', name: 'Hair Loss', description: 'Thinning or shedding of hair from the scalp' },
    ],
    general: [
      { id: 'fever', name: 'Fever', description: 'Elevated body temperature' },
      { id: 'fatigue', name: 'Fatigue', description: 'Feeling of tiredness or exhaustion' },
      { id: 'chills', name: 'Chills', description: 'Feeling of cold with shivering' },
      { id: 'weakness', name: 'Weakness', description: 'Lack of physical or muscle strength' },
    ],
  };
  
  const filteredSymptoms = searchQuery 
    ? Object.values(symptoms).flat().filter(s => 
        s.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : symptoms[selectedBodyPart] || [];
  
  const toggleSymptom = (symptomId) => {
    if (selectedSymptoms.includes(symptomId)) {
      setSelectedSymptoms(selectedSymptoms.filter(id => id !== symptomId));
    } else {
      setSelectedSymptoms([...selectedSymptoms, symptomId]);
    }
  };
  
  const analyzeSymptoms = () => {
    setIsAnalyzing(true);
    
    // Simulate API call with timeout
    setTimeout(() => {
      setIsAnalyzing(false);
      // Navigate to results page in a real app
      router.push("/results");
    }, 2000);
  };
  
  return (
    <SafeAreaView className="flex-1 bg-gray-50 pt-20">
      <StatusBar barStyle="dark-content" backgroundColor={COLORS.white} />
      
    
       
      
      {/* Search Bar - Elevated above content */}
      <View className="px-4 -mt-5">
        <View 
          className="flex-row items-center bg-white rounded-xl px-4 py-3 border border-gray-100"
          style={{ 
            elevation: 5,
            shadowColor: COLORS.black,
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.1,
            shadowRadius: 6,
          }}
        >
          <Feather name="search" size={20} color={COLORS.gray} />
          <TextInput
            className="flex-1 ml-3 text-base"
            placeholder="Search symptoms..."
            value={searchQuery}
            onChangeText={setSearchQuery}
            placeholderTextColor={COLORS.gray}
          />
          {searchQuery ? (
            <TouchableOpacity 
              onPress={() => setSearchQuery('')}
              className="bg-gray-100 w-6 h-6 rounded-full items-center justify-center"
            >
              <Feather name="x" size={16} color={COLORS.gray} />
            </TouchableOpacity>
          ) : null}
        </View>
      </View>
      
      <ScrollView className="flex-1 pt-4">
        {/* Body Parts Selector (only show when not searching) */}
        {!searchQuery && (
          <View className="px-4 mb-4">
            <SectionHeader title="Select Body Area" />
            <BodyPartSelector 
              selectedPart={selectedBodyPart}
              onSelect={setSelectedBodyPart}
            />
          </View>
        )}
        
        {/* Symptoms List */}
        <View className="px-4 pt-2 pb-32">
          <SectionHeader 
            title={searchQuery ? 'Search Results' : 'Available Symptoms'} 
            count={filteredSymptoms.length}
          />
          
          {filteredSymptoms.length > 0 ? (
            <>
              {filteredSymptoms.map((symptom) => (
                <SymptomItem
                  key={symptom.id}
                  symptom={symptom}
                  selected={selectedSymptoms.includes(symptom.id)}
                  onToggle={() => toggleSymptom(symptom.id)}
                />
              ))}
            </>
          ) : (
            <View 
              className="bg-white rounded-xl p-8 items-center justify-center my-4"
              style={{ 
                elevation: 1,
                shadowColor: COLORS.black,
                shadowOffset: { width: 0, height: 1 },
                shadowOpacity: 0.05,
                shadowRadius: 2,
              }}
            >
              <MaterialIcons name="search-off" size={60} color="#D1D5DB" />
              <Text className="text-gray-700 font-medium text-lg mt-4">No symptoms found</Text>
              {searchQuery && (
                <Text className="text-gray-500 text-base mt-1 text-center">
                  Try a different search term or browse by body area
                </Text>
              )}
              {!searchQuery && (
                <TouchableOpacity 
                  className="mt-4 bg-blue-100 px-4 py-2 rounded-lg"
                  onPress={() => setSelectedBodyPart('general')}
                >
                  <Text className="text-blue-600 font-medium">View General Symptoms</Text>
                </TouchableOpacity>
              )}
            </View>
          )}
          
          {selectedSymptoms.length > 0 && (
            <View 
              className="mt-8 bg-white rounded-xl p-6"
              style={{ 
                elevation: 2,
                shadowColor: COLORS.black,
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.1,
                shadowRadius: 4,
              }}
            >
              <View className="flex-row items-center mb-2">
                <MaterialIcons name="sick" size={24} color={COLORS.primary} />
                <Text className="font-bold text-lg ml-2 text-gray-800">Symptom Severity</Text>
              </View>
              <Text className="text-gray-600 text-base mb-2">
                How severe are your symptoms overall?
              </Text>
              <SeveritySelector severity={severity} onSelect={setSeverity} />
              
              <View className="bg-blue-50 p-4 rounded-lg mt-2 flex-row">
                <Ionicons name="information-circle" size={22} color={COLORS.primary} />
                <Text className="text-blue-700 ml-2 flex-1">
                  Higher severity levels may suggest more urgent medical attention.
                </Text>
              </View>
            </View>
          )}
        </View>
      </ScrollView>
      
      {/* Bottom Action Button */}
      {selectedSymptoms.length > 0 && (
        <View 
          className="absolute bottom-0 left-0 right-0 bg-white px-5 py-4 border-t border-gray-200"
          style={{
            elevation: 10,
            shadowColor: COLORS.black,
            shadowOffset: { width: 0, height: -3 },
            shadowOpacity: 0.1,
            shadowRadius: 6,
          }}
        >
          <LinearGradient
            colors={[COLORS.primary, COLORS.primaryDark]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            className="rounded-xl overflow-hidden"
          >
            <TouchableOpacity
              className="py-4 items-center"
              onPress={analyzeSymptoms}
              disabled={isAnalyzing}
            >
              {isAnalyzing ? (
                <View className="flex-row items-center">
                  <ActivityIndicator color="white" size="small" />
                  <Text className="text-white font-bold text-lg ml-2">
                    Analyzing...
                  </Text>
                </View>
              ) : (
                <View className="flex-row items-center">
                  <FontAwesome5 name="heartbeat" size={18} color="white" />
                  <Text className="text-white font-bold text-lg ml-3">
                    Analyze {selectedSymptoms.length} Symptom{selectedSymptoms.length > 1 ? 's' : ''}
                  </Text>
                </View>
              )}
            </TouchableOpacity>
          </LinearGradient>
          
          <View className="flex-row items-center justify-center mt-4">
            <Text className="text-gray-500 text-sm">
              {selectedSymptoms.length} symptom{selectedSymptoms.length > 1 ? 's' : ''} selected • {severity} severity
            </Text>
          </View>
        </View>
      )}
    </SafeAreaView>
  );
}