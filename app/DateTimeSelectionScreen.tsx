import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';
import { Ionicons, FontAwesome, AntDesign } from '@expo/vector-icons';
import { useNavigation, useRouter } from 'expo-router';

const DateTimeSelectionScreen = () => {
  const router = useRouter()
  const navigation = useNavigation();
  const [selectedDate, setSelectedDate] = useState(19);
  const [currentMonth, setCurrentMonth] = useState("February");
  const [currentYear, setCurrentYear] = useState(2025);
  const [hasTimeSlots, setHasTimeSlots] = useState(false);

  // Calendar data
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  
  // This would normally be generated dynamically based on the month/year
  const dates = [
    [27, 28, 29, 30, 31, 1, 2],
    [3, 4, 5, 6, 7, 8, 9],
    [10, 11, 12, 13, 14, 15, 16],
    [17, 18, 19, 20, 21, 22, 23],
    [24, 25, 26, 27, 28, 1, 2]
  ];

  // This simulates checking if a date has available time slots
  useEffect(() => {
    // For demo purposes, let's say only date 20 has time slots
    setHasTimeSlots(selectedDate !== 19);
  }, [selectedDate]);

  const handlePreviousMonth = () => {
    // Logic to go to previous month would go here
    if (currentMonth === "February") {
      setCurrentMonth("January");
    }
  };

  const handleNextMonth = () => {
    // Logic to go to next month would go here
    if (currentMonth === "February") {
      setCurrentMonth("March");
    }
  };

  const handleDateSelection = (date) => {
    setSelectedDate(date);
  };

  const handleContinue = () => {
    // Navigation logic would go here
    navigation.navigate('Confirmation');
  };

  const renderCalendar = () => {
    return (
      <View className="pt-20">
        {/* Month navigation */}
        <View className="flex-row justify-between items-center mb-4">
          <TouchableOpacity onPress={handlePreviousMonth}>
            <AntDesign name="left" size={24} color="#333" />
          </TouchableOpacity>
          
          <Text className="text-lg font-medium">{currentMonth} {currentYear}</Text>
          
          <TouchableOpacity onPress={handleNextMonth}>
            <AntDesign name="right" size={24} color="#333" />
          </TouchableOpacity>
        </View>

        {/* Days of week header */}
        <View className="flex-row justify-between mb-2">
          {days.map((day, index) => (
            <View key={`day-${index}`} className="w-10 items-center">
              <Text className="text-gray-500">{day}</Text>
            </View>
          ))}
        </View>

        {/* Calendar grid */}
        {dates.map((week, weekIndex) => (
          <View key={`week-${weekIndex}`} className="flex-row justify-between mb-5">
            {week.map((date, dateIndex) => {
              const isCurrentMonth = !(
                (weekIndex === 0 && date > 20) || 
                (weekIndex === 4 && date < 10)
              );
              
              const isSelected = date === selectedDate && isCurrentMonth;
              
              return (
                <TouchableOpacity
                  key={`date-${weekIndex}-${dateIndex}`}
                  onPress={() => isCurrentMonth && handleDateSelection(date)}
                  className={`w-10 h-10 rounded-lg items-center justify-center
                    ${isSelected ? 'bg-blue-400' : 'bg-transparent'}
                    ${!isCurrentMonth ? 'opacity-40' : ''}
                  `}
                >
                  <Text 
                    className={`text-lg 
                      ${isSelected ? 'text-white font-medium' : 'text-gray-700'}
                    `}
                  >
                    {date}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>
        ))}

        {/* Play button overlay on date 20 */}
        {selectedDate === 19 && (
          <View className="absolute" style={{top: 162, left: 287}}>
           
          </View>
        )}
      </View>
    );
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      {/* Header */}
      <View className="flex-row items-center p-4 border-b border-gray-200">
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="#333" />
        </TouchableOpacity>
        <Text className="text-xl font-medium ml-4">Select Date & Time</Text>
      </View>

      <ScrollView className="flex-1 px-4">
        {/* Date Selection */}
        <Text className="text-xl font-medium mt-6 mb-2">Select Date</Text>
        {renderCalendar()}

        {/* Time Selection */}
        <Text className="text-xl font-medium mt-8 mb-6">Select Hour</Text>
        
        {/* No Available Time Slots Message */}
        <View className="items-center mt-4">
          <View className="mb-4 p-3 bg-white">
            <FontAwesome name="calendar-times-o" size={36} color="#d63031" />
          </View>
          
          <Text className="text-xl font-medium text-gray-800 mb-2">
            No Available Time Slots
          </Text>
          
          <Text className="text-gray-500 text-center px-8">
            Unfortunately, there are no available appointments for the selected date. 
            Please try selecting a different date.
          </Text>
        </View>
      </ScrollView>

      {/* Continue Button */}
      <View className="p-4">
        <TouchableOpacity 
          onPress={()=> router.push('/SelectPackageScreen')}
          className="bg-blue-500 rounded-lg py-4 items-center"
        >
          <Text className="text-white text-lg font-medium">Continue</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default DateTimeSelectionScreen;